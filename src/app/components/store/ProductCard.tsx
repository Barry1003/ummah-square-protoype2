import { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { formatNaira } from '../../lib/format';
import type { Product } from '../../data/types';

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  /** Shown on the marketplace homepage where the vendor isn't obvious. */
  storeName?: string;
  storeLogo?: string;
}

/**
 * Deliberately restrained: one status badge, a muted category chip, and a
 * single accent. Stacking coloured glass pills over the image is what makes a
 * catalogue look generated rather than merchandised.
 */
export function ProductCard({ product, onOpen, onAddToCart, storeName, storeLogo }: ProductCardProps) {
  const [saved, setSaved] = useState(false);
  const badge = product.isNew ? 'NEW' : product.isBestSeller ? 'BESTSELLER' : null;

  return (
    <div
      onClick={() => onOpen(product)}
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-hairline cursor-pointer transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(17,23,37,0.08)]"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-alt">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <button
          onClick={event => {
            event.stopPropagation();
            setSaved(value => !value);
          }}
          aria-label={saved ? 'Remove from saved items' : 'Save item'}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow-sm transition-transform duration-200 hover:scale-105"
        >
          <Heart size={15} className={saved ? 'fill-red-500 text-red-500' : 'text-body-text'} />
        </button>

        {badge && (
          <span
            className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-ink text-white"
            style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.6px' }}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">
        <span
          className="self-start px-2 py-0.5 rounded bg-surface-alt text-body-text uppercase mb-2.5"
          style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.7px' }}
        >
          {product.category}
        </span>

        <h3 className="text-ink line-clamp-2 mb-1" style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
          {product.name}
        </h3>

        {storeName && (
          <div className="flex items-center gap-1.5 min-w-0 mb-3">
            {storeLogo && (
              <ImageWithFallback src={storeLogo} alt="" className="w-4 h-4 rounded-full object-cover shrink-0" />
            )}
            <span className="text-meta truncate" style={{ fontSize: '12px' }}>
              {storeName}
            </span>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <p className="text-ink leading-none" style={{ fontSize: '17px', fontWeight: 700 }}>
            {formatNaira(product.price)}
          </p>
          <button
            onClick={event => {
              event.stopPropagation();
              onAddToCart(product);
            }}
            aria-label={`Add ${product.name} to cart`}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand shrink-0"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
