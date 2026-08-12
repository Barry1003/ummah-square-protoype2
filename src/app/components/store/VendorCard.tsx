import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { formatNaira } from '../../lib/format';
import { getStoreAvatar, getStoreBanner, getStorePreview, getStoreProductCount } from '../../data/catalog';
import type { Store } from '../../data/types';

interface VendorCardProps {
  store: Store;
  /** The 3-up peek of real stock is the signature of the mall model — you're
   *  choosing a shop, but you can see through the window before you go in. */
  showPeek?: boolean;
  className?: string;
}

export function VendorCard({ store, showPeek = true, className = '' }: VendorCardProps) {
  const avatar = getStoreAvatar(store);
  const productCount = getStoreProductCount(store.id);
  const peek = showPeek ? getStorePreview(store.id, 3) : [];

  return (
    <Link
      to={`/store/${store.id}`}
      className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-hairline transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(17,23,37,0.08)] ${className}`}
    >
      {/* Storefront */}
      <div className="relative h-36 bg-surface-alt overflow-hidden">
        <ImageWithFallback
          src={getStoreBanner(store)}
          alt={store.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(17,23,37,0.78) 0%, rgba(17,23,37,0.05) 65%)' }}
        />

        {/* Identity sits on the banner — this is the shop sign */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5 min-w-0">
          <span className="w-10 h-10 rounded-xl overflow-hidden bg-white shrink-0 border border-white/50">
            {avatar ? (
              <ImageWithFallback src={avatar} alt="" className="w-full h-full object-cover" />
            ) : (
              <span
                className="w-full h-full bg-ink flex items-center justify-center text-white"
                style={{ fontSize: '11px', fontWeight: 700 }}
              >
                {store.initials}
              </span>
            )}
          </span>

          <span className="min-w-0">
            <span className="block text-white truncate" style={{ fontSize: '15px', fontWeight: 700 }}>
              {store.name}
            </span>
            <span className="block text-white/70 truncate" style={{ fontSize: '11px' }}>
              {store.category}
            </span>
          </span>
        </div>

        {store.topRated && (
          <span
            className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/95 text-ink uppercase"
            style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.7px' }}
          >
            Top Rated
          </span>
        )}
      </div>

      {/* Through the window — real stock from this shop */}
      {peek.length > 0 && (
        <div className="px-4 pt-3">
          {/* Grid rather than flex so a shop with one item shows one thumbnail
              at the same size, not a stretched one or a row of grey fillers. */}
          <div className="grid grid-cols-3 gap-2">
            {peek.map((image, index) => (
              <span
                key={index}
                className="aspect-square rounded-lg overflow-hidden bg-surface-alt border border-hairline block"
              >
                <ImageWithFallback src={image} alt="" className="w-full h-full object-cover" />
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="px-4 py-3 mt-auto flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 min-w-0 text-meta" style={{ fontSize: '12px' }}>
          {store.available && <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />}
          <span className="truncate">{store.location}</span>
        </span>

        <span className="shrink-0" style={{ fontSize: '13px', fontWeight: 700 }}>
          {store.startingPrice !== undefined ? (
            <span className="text-ink">
              <span className="text-meta" style={{ fontSize: '11px', fontWeight: 500 }}>
                from{' '}
              </span>
              {formatNaira(store.startingPrice)}
            </span>
          ) : (
            <span className="text-meta" style={{ fontWeight: 500, fontSize: '12px' }}>
              {productCount} {productCount === 1 ? 'product' : 'products'}
            </span>
          )}
        </span>
      </div>
    </Link>
  );
}
