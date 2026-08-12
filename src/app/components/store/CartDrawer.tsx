import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, Minus, Plus, ShieldCheck, ShoppingBag, Store as StoreIcon, X } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useCart } from '../../lib/cart';
import { formatNaira } from '../../lib/format';
import { getStore, getStoreAvatar } from '../../data/catalog';
import type { CartItem } from '../../data/types';

/**
 * One bag per vendor. Scoped to a single store when opened from inside it,
 * otherwise an overview of every bag the shopper has open — each with its own
 * subtotal and its own checkout, because each vendor is paid separately.
 */
export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    scopedStoreId,
    setScope,
    activeStoreIds,
    itemsFor,
    countFor,
    subtotalFor,
    totalCount,
    totalSubtotal,
    updateQuantity,
    removeItem,
  } = useCart();

  const scopedStore = scopedStoreId ? getStore(scopedStoreId) : undefined;
  const scopedItems = scopedStoreId ? itemsFor(scopedStoreId) : [];
  const otherStoreIds = activeStoreIds.filter(id => id !== scopedStoreId);

  // A store's bag can empty out while the drawer is still scoped to it.
  const showScoped = Boolean(scopedStore && scopedItems.length > 0);
  const isEmpty = showScoped ? false : activeStoreIds.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm"
          />

          <motion.aside
            aria-label="Shopping bag"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col border-l border-hairline"
          >
            <header className="flex items-center gap-2 px-6 py-4 border-b border-hairline">
              {showScoped && otherStoreIds.length > 0 && (
                <button
                  onClick={() => setScope(null)}
                  aria-label="Back to all bags"
                  className="p-1.5 -ml-1.5 rounded-full text-meta hover:text-ink hover:bg-surface-alt transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
              )}

              <h2 className="flex items-center gap-2 text-ink min-w-0" style={{ fontSize: '18px', fontWeight: 700 }}>
                <ShoppingBag size={19} className="shrink-0" />
                <span className="truncate">{showScoped ? `${scopedStore!.name} bag` : 'Your bags'}</span>
              </h2>

              <button
                onClick={closeCart}
                aria-label="Close bag"
                className="ml-auto p-2 -mr-2 rounded-full text-meta hover:text-ink hover:bg-surface-alt transition-colors shrink-0"
              >
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto">
              {isEmpty ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 p-6">
                  <span className="w-16 h-16 rounded-full bg-surface-alt text-meta flex items-center justify-center">
                    <ShoppingBag size={28} />
                  </span>
                  <div>
                    <p className="text-ink" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Your bag is empty
                    </p>
                    <p className="text-meta mt-1" style={{ fontSize: '14px' }}>
                      Browse the stores and add something you like.
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="mt-1 px-6 py-3 rounded-full bg-ink text-white hover:bg-brand transition-colors"
                    style={{ fontSize: '15px', fontWeight: 600 }}
                  >
                    Continue shopping
                  </button>
                </div>
              ) : showScoped ? (
                /* ── One vendor's bag ── */
                <div className="p-6">
                  <VendorLine storeId={scopedStoreId!} onNavigate={closeCart} />

                  <ul className="space-y-5 mt-5">
                    {scopedItems.map(item => (
                      <LineItem
                        key={item.product.id}
                        item={item}
                        storeId={scopedStoreId!}
                        onUpdate={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </ul>

                  {otherStoreIds.length > 0 && (
                    <button
                      onClick={() => setScope(null)}
                      className="mt-8 w-full flex items-center gap-2.5 p-4 rounded-2xl border border-hairline hover:border-ink transition-colors text-left"
                    >
                      <StoreIcon size={16} className="text-meta shrink-0" />
                      <span className="min-w-0">
                        <span className="block text-ink" style={{ fontSize: '13px', fontWeight: 600 }}>
                          {otherStoreIds.length} other {otherStoreIds.length === 1 ? 'bag' : 'bags'} open
                        </span>
                        <span className="block text-meta truncate" style={{ fontSize: '12px' }}>
                          {otherStoreIds
                            .map(id => getStore(id)?.name)
                            .filter(Boolean)
                            .join(', ')}
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              ) : (
                /* ── Every bag ── */
                <div className="p-6 space-y-4">
                  <p className="text-meta" style={{ fontSize: '13px' }}>
                    You're buying from {activeStoreIds.length}{' '}
                    {activeStoreIds.length === 1 ? 'vendor' : 'vendors'}. Each is paid and delivered separately.
                  </p>

                  {activeStoreIds.map(storeId => {
                    const store = getStore(storeId);
                    if (!store) return null;

                    return (
                      <section key={storeId} className="rounded-2xl border border-hairline overflow-hidden">
                        <div className="p-4">
                          <VendorLine storeId={storeId} onNavigate={closeCart} />

                          <ul className="space-y-4 mt-4">
                            {itemsFor(storeId).map(item => (
                              <LineItem
                                key={item.product.id}
                                item={item}
                                storeId={storeId}
                                onUpdate={updateQuantity}
                                onRemove={removeItem}
                                compact
                              />
                            ))}
                          </ul>
                        </div>

                        <div className="px-4 py-3 bg-surface-alt border-t border-hairline flex items-center justify-between gap-3">
                          <span className="text-meta" style={{ fontSize: '13px' }}>
                            {countFor(storeId)} {countFor(storeId) === 1 ? 'item' : 'items'} ·{' '}
                            <span className="text-ink" style={{ fontWeight: 700 }}>
                              {formatNaira(subtotalFor(storeId))}
                            </span>
                          </span>
                          <button
                            onClick={() => setScope(storeId)}
                            className="px-4 py-2 rounded-full bg-ink text-white hover:bg-brand transition-colors shrink-0"
                            style={{ fontSize: '13px', fontWeight: 600 }}
                          >
                            Checkout
                          </button>
                        </div>
                      </section>
                    );
                  })}
                </div>
              )}
            </div>

            {!isEmpty && (
              <footer className="border-t border-hairline p-6 bg-surface-alt">
                <div className="flex justify-between text-ink mb-1" style={{ fontSize: '17px', fontWeight: 700 }}>
                  <p>{showScoped ? 'Subtotal' : 'All bags'}</p>
                  <p>{formatNaira(showScoped ? subtotalFor(scopedStoreId!) : totalSubtotal)}</p>
                </div>
                <p className="text-meta mb-4" style={{ fontSize: '13px' }}>
                  {showScoped
                    ? `Delivery set by ${scopedStore!.name} at checkout.`
                    : `${totalCount} ${totalCount === 1 ? 'item' : 'items'} across ${activeStoreIds.length} ${
                        activeStoreIds.length === 1 ? 'vendor' : 'vendors'
                      }.`}
                </p>

                <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-success-soft">
                  <ShieldCheck size={16} className="text-success mt-0.5 shrink-0" />
                  <p className="text-success" style={{ fontSize: '12px', lineHeight: 1.5 }}>
                    Escrow is held per vendor and released only when you confirm that vendor's delivery.
                  </p>
                </div>

                {showScoped ? (
                  <button
                    className="w-full px-6 py-4 rounded-xl bg-ink text-white hover:bg-brand transition-colors"
                    style={{ fontSize: '15px', fontWeight: 700 }}
                  >
                    Checkout with {scopedStore!.name}
                  </button>
                ) : (
                  <p className="text-meta text-center" style={{ fontSize: '13px' }}>
                    Check out with each vendor above
                  </p>
                )}
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function VendorLine({ storeId, onNavigate }: { storeId: string; onNavigate: () => void }) {
  const store = getStore(storeId);
  if (!store) return null;
  const avatar = getStoreAvatar(store);

  return (
    <Link to={`/store/${store.id}`} onClick={onNavigate} className="flex items-center gap-2.5 group min-w-0">
      <span className="w-8 h-8 rounded-lg overflow-hidden bg-surface-alt border border-hairline shrink-0">
        {avatar ? (
          <ImageWithFallback src={avatar} alt="" className="w-full h-full object-cover" />
        ) : (
          <span
            className="w-full h-full bg-ink flex items-center justify-center text-white"
            style={{ fontSize: '10px', fontWeight: 700 }}
          >
            {store.initials}
          </span>
        )}
      </span>
      <span className="min-w-0">
        <span
          className="block text-ink truncate group-hover:text-brand transition-colors"
          style={{ fontSize: '14px', fontWeight: 700 }}
        >
          {store.name}
        </span>
        <span className="block text-meta truncate" style={{ fontSize: '12px' }}>
          {store.location}
        </span>
      </span>
    </Link>
  );
}

function LineItem({
  item,
  storeId,
  onUpdate,
  onRemove,
  compact = false,
}: {
  item: CartItem;
  storeId: string;
  onUpdate: (storeId: string, productId: string, delta: number) => void;
  onRemove: (storeId: string, productId: string) => void;
  compact?: boolean;
}) {
  return (
    <li className="flex gap-3">
      <span
        className={`${compact ? 'w-16 h-16' : 'w-20 h-20'} shrink-0 rounded-xl overflow-hidden bg-surface-alt border border-hairline block`}
      >
        <ImageWithFallback src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
      </span>

      <div className="flex flex-1 flex-col justify-between min-w-0">
        <div className="flex justify-between gap-3">
          <h3 className="text-ink line-clamp-2" style={{ fontSize: '14px', fontWeight: 600 }}>
            {item.product.name}
          </h3>
          <p className="text-ink whitespace-nowrap" style={{ fontSize: '14px', fontWeight: 700 }}>
            {formatNaira(item.product.price * item.quantity)}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-center rounded-full border border-hairline">
            <button
              onClick={() => onUpdate(storeId, item.product.id, -1)}
              aria-label="Decrease quantity"
              className="p-1.5 text-meta hover:text-ink transition-colors"
            >
              <Minus size={13} />
            </button>
            <span className="w-7 text-center text-ink tabular-nums" style={{ fontSize: '13px', fontWeight: 600 }}>
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdate(storeId, item.product.id, 1)}
              aria-label="Increase quantity"
              className="p-1.5 text-meta hover:text-ink transition-colors"
            >
              <Plus size={13} />
            </button>
          </div>

          <button
            onClick={() => onRemove(storeId, item.product.id)}
            className="text-meta hover:text-red-500 transition-colors"
            style={{ fontSize: '12px', fontWeight: 500 }}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
