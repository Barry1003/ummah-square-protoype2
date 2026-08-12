import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Check,
  Heart,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Star,
  ThumbsUp,
  Truck,
  X,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { discountLabel, formatNaira } from '../../lib/format';
import { getStoreAvatar } from '../../data/catalog';
import { getProductRating, getProductReviews, getRatingBreakdown } from '../../data/reviews';
import type { Product, Store } from '../../data/types';

interface ProductDetailsModalProps {
  product: Product | null;
  store: Store;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

type Tab = 'description' | 'details' | 'reviews';

export function ProductDetailsModal({ product, store, isOpen, onClose, onAddToCart }: ProductDetailsModalProps) {
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState<Tab>('description');

  useEffect(() => {
    if (!product) return;
    setActiveImage(product.image);
    setQuantity(1);
    setTab('description');
  }, [product]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!product) return null;

  const images = [product.image, ...(product.gallery ?? [])];
  const avatar = getStoreAvatar(store);
  const reviews = getProductReviews(product.id);
  const rating = getProductRating(product.id);
  const breakdown = getRatingBreakdown(product.id);
  const discount = discountLabel(product.price, product.originalPrice);
  const lowStock = typeof product.stock === 'number' && product.stock <= 10;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-full md:w-[980px] md:max-h-[90vh] bg-white md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close product details"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-meta hover:text-ink transition-colors shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Gallery */}
            <div className="w-full md:w-[44%] shrink-0 flex flex-col bg-surface-alt border-r border-hairline">
              <div className="relative flex-1 min-h-[280px] md:min-h-0">
                <ImageWithFallback
                  src={activeImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {product.isNew && <Tag>NEW</Tag>}
                  {product.isBestSeller && <Tag>BESTSELLER</Tag>}
                  {discount && <Tag tone="sale">{discount}</Tag>}
                </div>
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide bg-white shrink-0 border-t border-hairline">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(image)}
                      aria-label={`View image ${index + 1}`}
                      className={`w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === image ? 'border-ink' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detail */}
            <div className="w-full md:w-[56%] flex flex-col overflow-y-auto">
              <div className="p-6 md:p-8">
                {/* Vendor */}
                <div className="flex items-center gap-2.5 mb-5 pb-5 border-b border-hairline">
                  {avatar ? (
                    <ImageWithFallback src={avatar} alt="" className="w-10 h-10 rounded-full object-cover shrink-0" />
                  ) : (
                    <span
                      className="w-10 h-10 rounded-full bg-ink flex items-center justify-center text-white shrink-0"
                      style={{ fontSize: '12px', fontWeight: 700 }}
                    >
                      {store.initials}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="text-ink truncate" style={{ fontSize: '14px', fontWeight: 700 }}>
                      {store.name}
                    </p>
                    <span className="flex items-center gap-1 text-meta" style={{ fontSize: '12px' }}>
                      <MapPin size={11} />
                      {store.location}
                    </span>
                  </div>
                  {store.available && (
                    <span
                      className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-soft text-success shrink-0"
                      style={{ fontSize: '11px', fontWeight: 600 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-success" />
                      Available
                    </span>
                  )}
                </div>

                <span
                  className="inline-block px-2 py-0.5 rounded bg-surface-alt text-body-text uppercase mb-3"
                  style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.7px' }}
                >
                  {product.category}
                </span>

                <h2 className="text-ink leading-snug mb-2" style={{ fontSize: '24px', fontWeight: 700 }}>
                  {product.name}
                </h2>

                {/* Rating summary */}
                {rating !== null ? (
                  <button onClick={() => setTab('reviews')} className="flex items-center gap-2 mb-4 group">
                    <Stars value={rating} size={15} />
                    <span className="text-ink" style={{ fontSize: '14px', fontWeight: 700 }}>
                      {rating.toFixed(1)}
                    </span>
                    <span className="text-brand group-hover:underline" style={{ fontSize: '13px' }}>
                      {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
                    </span>
                  </button>
                ) : (
                  <p className="text-meta mb-4" style={{ fontSize: '13px' }}>
                    No reviews yet
                  </p>
                )}

                {/* Price */}
                <div className="flex items-end gap-3 mb-1">
                  <p className="text-ink leading-none" style={{ fontSize: '30px', fontWeight: 700 }}>
                    {formatNaira(product.price)}
                  </p>
                  {product.originalPrice && (
                    <p className="text-meta line-through mb-0.5" style={{ fontSize: '16px' }}>
                      {formatNaira(product.originalPrice)}
                    </p>
                  )}
                </div>
                <p className="text-meta mb-5" style={{ fontSize: '12px' }}>
                  Price set by {store.name}
                </p>

                {lowStock && (
                  <p className="text-gold-strong mb-5" style={{ fontSize: '13px', fontWeight: 600 }}>
                    Only {product.stock} left
                  </p>
                )}

                {/* Quantity + add */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center rounded-full border border-hairline shrink-0">
                    <button
                      onClick={() => setQuantity(value => Math.max(1, value - 1))}
                      aria-label="Decrease quantity"
                      disabled={quantity <= 1}
                      className="p-2.5 text-meta hover:text-ink transition-colors disabled:opacity-40"
                    >
                      <Minus size={14} />
                    </button>
                    <span
                      className="w-9 text-center text-ink tabular-nums"
                      aria-live="polite"
                      style={{ fontSize: '14px', fontWeight: 700 }}
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(value => value + 1)}
                      aria-label="Increase quantity"
                      className="p-2.5 text-meta hover:text-ink transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, quantity);
                      onClose();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-ink text-white transition-colors hover:bg-brand"
                    style={{ fontSize: '15px', fontWeight: 700 }}
                  >
                    <ShoppingBag size={17} />
                    Add to cart · {formatNaira(product.price * quantity)}
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <IconButton label="Save item">
                    <Heart size={17} />
                  </IconButton>
                  <IconButton label={`Message ${store.name}`}>
                    <MessageCircle size={17} />
                  </IconButton>
                  <IconButton label="Share">
                    <Share2 size={17} />
                  </IconButton>
                </div>

                {/* Fulfilment */}
                <div className="grid sm:grid-cols-3 gap-3">
                  <Promise icon={<ShieldCheck size={16} />} title="Escrow" body="Held until you confirm" highlight />
                  <Promise icon={<Truck size={16} />} title="Delivery" body="Arranged at checkout" />
                  <Promise icon={<RotateCcw size={16} />} title="Returns" body="Marketplace policy" />
                </div>
              </div>

              {/* Tabs */}
              <div className="px-6 md:px-8 border-b border-hairline">
                <div className="flex gap-6">
                  {(
                    [
                      ['description', 'Description'],
                      ['details', 'Details'],
                      ['reviews', `Reviews${reviews.length ? ` (${reviews.length})` : ''}`],
                    ] as [Tab, string][]
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setTab(key)}
                      className={`relative pb-3 pt-1 whitespace-nowrap transition-colors ${
                        tab === key ? 'text-ink' : 'text-meta hover:text-body-text'
                      }`}
                      style={{ fontSize: '14px', fontWeight: 600 }}
                    >
                      {label}
                      {tab === key && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8">
                {tab === 'description' && (
                  <div className="space-y-4">
                    <p className="text-body-text" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                      {product.description ??
                        `${product.name} from ${store.name}. Message the vendor for detail on materials, sizing or custom orders.`}
                    </p>
                    {product.highlights && product.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {product.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-body-text" style={{ fontSize: '14px' }}>
                            <Check size={15} className="text-success mt-0.5 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {tab === 'details' && (
                  <dl className="divide-y divide-hairline">
                    <Row term="Sold by" detail={store.name} />
                    <Row term="Category" detail={product.category} />
                    <Row term="Ships from" detail={store.address ?? store.location} />
                    {product.stock !== undefined && <Row term="In stock" detail={`${product.stock} units`} />}
                    {product.specifications &&
                      Object.entries(product.specifications).map(([key, value]) => (
                        <Row key={key} term={key} detail={value} />
                      ))}
                  </dl>
                )}

                {tab === 'reviews' &&
                  (reviews.length > 0 ? (
                    <div className="space-y-6">
                      {/* Summary */}
                      <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-hairline">
                        <div className="text-center sm:text-left shrink-0">
                          <p className="text-ink leading-none mb-2" style={{ fontSize: '40px', fontWeight: 700 }}>
                            {rating?.toFixed(1)}
                          </p>
                          <Stars value={rating ?? 0} size={15} />
                          <p className="text-meta mt-1.5" style={{ fontSize: '12px' }}>
                            {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
                          </p>
                        </div>

                        <div className="flex-1 space-y-1.5 min-w-0">
                          {breakdown.map(({ stars, count }) => (
                            <div key={stars} className="flex items-center gap-2">
                              <span className="text-meta w-3 tabular-nums" style={{ fontSize: '12px' }}>
                                {stars}
                              </span>
                              <Star size={11} className="fill-gold text-gold shrink-0" />
                              <span className="flex-1 h-1.5 rounded-full bg-surface-alt overflow-hidden">
                                <span
                                  className="block h-full rounded-full bg-gold"
                                  style={{ width: `${reviews.length ? (count / reviews.length) * 100 : 0}%` }}
                                />
                              </span>
                              <span className="text-meta w-4 text-right tabular-nums" style={{ fontSize: '12px' }}>
                                {count}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* List */}
                      <ul className="space-y-6">
                        {reviews.map(review => (
                          <li key={review.id} className="pb-6 border-b border-hairline last:border-0 last:pb-0">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className="w-9 h-9 rounded-full bg-surface-alt text-body-text flex items-center justify-center shrink-0"
                                style={{ fontSize: '12px', fontWeight: 700 }}
                              >
                                {review.initials}
                              </span>
                              <div className="min-w-0">
                                <p className="text-ink truncate" style={{ fontSize: '14px', fontWeight: 600 }}>
                                  {review.author}
                                </p>
                                {review.verifiedPurchase && (
                                  <span
                                    className="flex items-center gap-1 text-success"
                                    style={{ fontSize: '11px', fontWeight: 600 }}
                                  >
                                    <Check size={11} />
                                    Verified purchase
                                  </span>
                                )}
                              </div>
                              <span className="ml-auto text-meta shrink-0" style={{ fontSize: '12px' }}>
                                {review.date}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                              <Stars value={review.rating} size={13} />
                              {review.title && (
                                <span className="text-ink" style={{ fontSize: '14px', fontWeight: 600 }}>
                                  {review.title}
                                </span>
                              )}
                            </div>

                            <p className="text-body-text mb-2.5" style={{ fontSize: '14px', lineHeight: 1.65 }}>
                              {review.body}
                            </p>

                            {review.helpful !== undefined && (
                              <button
                                className="flex items-center gap-1.5 text-meta hover:text-ink transition-colors"
                                style={{ fontSize: '12px' }}
                              >
                                <ThumbsUp size={13} />
                                Helpful ({review.helpful})
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="py-10 text-center">
                      <Stars value={0} size={18} className="justify-center mb-3" />
                      <p className="text-ink mb-1" style={{ fontSize: '15px', fontWeight: 600 }}>
                        No reviews yet
                      </p>
                      <p className="text-meta mb-5" style={{ fontSize: '14px' }}>
                        Be the first to review this product after you buy it.
                      </p>
                      <button
                        className="px-5 py-2.5 rounded-full border border-hairline text-ink hover:border-ink transition-colors"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        Write a review
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Stars({ value, size = 14, className = '' }: { value: number; size?: number; className?: string }) {
  return (
    <span className={`flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={size}
          className={index < Math.round(value) ? 'fill-gold text-gold' : 'text-hairline fill-hairline'}
        />
      ))}
    </span>
  );
}

function Tag({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'sale' }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-md ${tone === 'sale' ? 'bg-success text-white' : 'bg-ink text-white'}`}
      style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.6px' }}
    >
      {children}
    </span>
  );
}

function IconButton({ children, label }: { children: ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center rounded-full border border-hairline text-body-text hover:border-ink hover:text-ink transition-colors"
    >
      {children}
    </button>
  );
}

function Promise({
  icon,
  title,
  body,
  highlight = false,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
          highlight ? 'bg-success-soft text-success' : 'bg-surface-alt text-body-text'
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-ink" style={{ fontSize: '13px', fontWeight: 600 }}>
          {title}
        </span>
        <span className="block text-meta" style={{ fontSize: '12px', lineHeight: 1.4 }}>
          {body}
        </span>
      </span>
    </div>
  );
}

function Row({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="flex gap-4 py-2.5">
      <dt className="w-1/3 text-meta shrink-0" style={{ fontSize: '13px' }}>
        {term}
      </dt>
      <dd className="flex-1 text-ink" style={{ fontSize: '13px', fontWeight: 500 }}>
        {detail}
      </dd>
    </div>
  );
}
