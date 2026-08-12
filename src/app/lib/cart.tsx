import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '../data/types';

/**
 * Cart state lives above the router so it survives navigation between the
 * marketplace homepage and individual store pages — a shopper can fill a
 * basket across several vendors in one session.
 */

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (lineId: string, delta: number) => void;
  removeItem: (lineId: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

/** One line per product. */
const lineIdFor = (item: Pick<CartItem, 'product'>) => item.product.id;

export const cartLineId = lineIdFor;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product, quantity = 1) => {
    const incoming: CartItem = { product, quantity };

    setItems(prev => {
      const existing = prev.find(item => lineIdFor(item) === lineIdFor(incoming));
      if (existing) {
        return prev.map(item =>
          lineIdFor(item) === lineIdFor(incoming)
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, incoming];
    });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((lineId: string, delta: number) => {
    setItems(prev =>
      prev
        .map(item =>
          lineIdFor(item) === lineId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
        )
        .filter(item => item.quantity > 0),
    );
  }, []);

  const removeItem = useCallback((lineId: string) => {
    setItems(prev => prev.filter(item => lineIdFor(item) !== lineId));
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      updateQuantity,
      removeItem,
      clear: () => setItems([]),
    }),
    [items, isOpen, addItem, updateQuantity, removeItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside a CartProvider');
  return context;
}
