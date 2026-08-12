import { AnimatePresence, motion } from 'motion/react';
import { Minus, Plus, ShieldCheck, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { cartLineId, useCart } from '../../lib/cart';
import { formatNaira } from '../../lib/format';
import { getStore, getStoreAvatar } from '../../data/catalog';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();

  // Items are grouped by vendor — a basket can span several stores in the mall.
  const vendors = Array.from(new Set(items.map(item => item.product.storeId)));

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
            aria-label="Shopping cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col border-l border-hairline"
          >
            <header className="flex items-center justify-between px-6 py-4 border-b border-hairline">
              <h2 className="flex items-center gap-2 text-ink" style={{ fontSize: '20px', fontWeight: 700 }}>
                <ShoppingBag size={20} />
                Your Cart
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="p-2 -mr-2 rounded-full text-meta hover:text-ink hover:bg-surface-alt transition-colors"
              >
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <span className="w-16 h-16 rounded-full bg-surface-alt text-meta flex items-center justify-center">
                    <ShoppingBag size={30} />
                  </span>
                  <div>
                    <p className="text-ink" style={{ fontSize: '18px', fontWeight: 600 }}>
                      Your cart is empty
                    </p>
                    <p className="text-meta mt-1" style={{ fontSize: '14px' }}>
                      Browse the stores and add something you like.
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="mt-2 px-6 py-3 rounded-full bg-ink text-white hover:bg-brand transition-colors"
                    style={{ fontSize: '15px', fontWeight: 600 }}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {vendors.map(storeId => {
                    const store = getStore(storeId);
                    const vendorItems = items.filter(item => item.product.storeId === storeId);

                    return (
                      <section key={storeId}>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-6 h-6 rounded-full overflow-hidden bg-surface-alt shrink-0">
                            {store && getStoreAvatar(store) ? (
                              <ImageWithFallback src={getStoreAvatar(store)!} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <span
                                className="w-full h-full bg-ink flex items-center justify-center text-white"
                                style={{ fontSize: '9px', fontWeight: 700 }}
                              >
                                {store?.initials}
                              </span>
                            )}
                          </span>
                          <Link
                            to={`/store/${storeId}`}
                            onClick={closeCart}
                            className="text-brand hover:underline"
                            style={{ fontSize: '13px', fontWeight: 600 }}
                          >
                            {store?.name}
                          </Link>
                        </div>

                        <ul className="space-y-5">
                          {vendorItems.map(item => {
                            const lineId = cartLineId(item);
                            return (
                              <li key={lineId} className="flex gap-4">
                                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-surface-alt border border-hairline">
                                  <ImageWithFallback
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex flex-1 flex-col justify-between min-w-0">
                                  <div>
                                    <div className="flex justify-between gap-3 text-ink" style={{ fontSize: '15px', fontWeight: 600 }}>
                                      <h3 className="line-clamp-2">{item.product.name}</h3>
                                      <p className="whitespace-nowrap">
                                        {formatNaira(item.product.price * item.quantity)}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-meta" style={{ fontSize: '12px' }}>
                                      {[item.color, item.size].filter(Boolean).join(' · ') || item.product.category}
                                    </p>
                                  </div>

                                  <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center rounded-full border border-hairline bg-surface-alt">
                                      <button
                                        onClick={() => updateQuantity(lineId, -1)}
                                        aria-label="Decrease quantity"
                                        className="p-1.5 text-meta hover:text-brand transition-colors"
                                      >
                                        <Minus size={14} />
                                      </button>
                                      <span className="w-8 text-center text-ink" style={{ fontSize: '14px', fontWeight: 600 }}>
                                        {item.quantity}
                                      </span>
                                      <button
                                        onClick={() => updateQuantity(lineId, 1)}
                                        aria-label="Increase quantity"
                                        className="p-1.5 text-meta hover:text-brand transition-colors"
                                      >
                                        <Plus size={14} />
                                      </button>
                                    </div>
                                    <button
                                      onClick={() => removeItem(lineId)}
                                      className="text-red-500 hover:text-red-600 transition-colors"
                                      style={{ fontSize: '13px', fontWeight: 600 }}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </section>
                    );
                  })}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-hairline p-6 bg-surface-alt">
                <div className="flex justify-between text-ink mb-1" style={{ fontSize: '18px', fontWeight: 700 }}>
                  <p>Subtotal</p>
                  <p>{formatNaira(subtotal)}</p>
                </div>
                <p className="text-meta mb-4" style={{ fontSize: '13px' }}>
                  Delivery is calculated per vendor at checkout.
                </p>

                <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-success-soft">
                  <ShieldCheck size={16} className="text-success mt-0.5 shrink-0" />
                  <p className="text-success" style={{ fontSize: '12px', lineHeight: 1.5 }}>
                    Your money stays in escrow until you confirm every item has arrived.
                  </p>
                </div>

                <button
                  className="w-full px-6 py-4 rounded-xl bg-ink text-white transition-colors hover:bg-brand"
                  style={{ fontSize: '16px', fontWeight: 700 }}
                >
                  Checkout with Escrow
                </button>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
