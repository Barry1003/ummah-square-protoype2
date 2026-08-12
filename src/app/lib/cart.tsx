import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '../data/types';

/**
 * Carts are per vendor, not one basket for the whole marketplace.
 *
 * Each store fulfils, ships and is paid separately, and escrow releases per
 * vendor when *that* vendor's delivery is confirmed — so a single combined
 * basket would have no valid checkout. Inside a store you see that store's
 * bag; from the marketplace you see every bag you have open.
 */

interface CartContextValue {
  /** storeId → that vendor's basket. */
  carts: Record<string, CartItem[]>;
  /** Stores with something in the bag. */
  activeStoreIds: string[];

  /** The store the shopper is currently browsing, if any. */
  currentStoreId: string | null;
  setCurrentStore: (storeId: string | null) => void;

  itemsFor: (storeId: string) => CartItem[];
  countFor: (storeId: string) => number;
  subtotalFor: (storeId: string) => number;

  /** Across every vendor — used on marketplace pages. */
  totalCount: number;
  totalSubtotal: number;

  isOpen: boolean;
  /** The drawer shows one vendor's bag, or all of them when null. */
  scopedStoreId: string | null;
  openCart: (storeId?: string | null) => void;
  closeCart: () => void;
  setScope: (storeId: string | null) => void;

  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (storeId: string, productId: string, delta: number) => void;
  removeItem: (storeId: string, productId: string) => void;
  clearStore: (storeId: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carts, setCarts] = useState<Record<string, CartItem[]>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [scopedStoreId, setScopedStoreId] = useState<string | null>(null);
  const [currentStoreId, setCurrentStoreId] = useState<string | null>(null);

  const addItem = useCallback((product: Product, quantity = 1) => {
    const storeId = product.storeId;

    setCarts(prev => {
      const basket = prev[storeId] ?? [];
      const existing = basket.find(item => item.product.id === product.id);

      const next = existing
        ? basket.map(item =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
          )
        : [...basket, { product, quantity }];

      return { ...prev, [storeId]: next };
    });

    // Adding from inside a shop opens that shop's bag, not the whole marketplace.
    setScopedStoreId(storeId);
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((storeId: string, productId: string, delta: number) => {
    setCarts(prev => {
      const basket = (prev[storeId] ?? [])
        .map(item =>
          item.product.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
        )
        .filter(item => item.quantity > 0);

      const next = { ...prev };
      if (basket.length === 0) delete next[storeId];
      else next[storeId] = basket;
      return next;
    });
  }, []);

  const removeItem = useCallback((storeId: string, productId: string) => {
    setCarts(prev => {
      const basket = (prev[storeId] ?? []).filter(item => item.product.id !== productId);
      const next = { ...prev };
      if (basket.length === 0) delete next[storeId];
      else next[storeId] = basket;
      return next;
    });
  }, []);

  const clearStore = useCallback((storeId: string) => {
    setCarts(prev => {
      const next = { ...prev };
      delete next[storeId];
      return next;
    });
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemsFor = (storeId: string) => carts[storeId] ?? [];
    const countFor = (storeId: string) => itemsFor(storeId).reduce((sum, item) => sum + item.quantity, 0);
    const subtotalFor = (storeId: string) =>
      itemsFor(storeId).reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const activeStoreIds = Object.keys(carts);

    return {
      carts,
      activeStoreIds,
      currentStoreId,
      setCurrentStore: setCurrentStoreId,
      itemsFor,
      countFor,
      subtotalFor,
      totalCount: activeStoreIds.reduce((sum, storeId) => sum + countFor(storeId), 0),
      totalSubtotal: activeStoreIds.reduce((sum, storeId) => sum + subtotalFor(storeId), 0),
      isOpen,
      scopedStoreId,
      openCart: (storeId: string | null = null) => {
        setScopedStoreId(storeId);
        setIsOpen(true);
      },
      closeCart: () => setIsOpen(false),
      setScope: setScopedStoreId,
      addItem,
      updateQuantity,
      removeItem,
      clearStore,
    };
  }, [carts, isOpen, scopedStoreId, currentStoreId, addItem, updateQuantity, removeItem, clearStore]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside a CartProvider');
  return context;
}
