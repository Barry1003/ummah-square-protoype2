import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatNaira } from '../lib/format';
import { getStocked, getStoreAvatar, getStoreBanner, getStorePreview, getStoreProductCount } from '../data/catalog';
import type { Store } from '../data/types';

/**
 * The mall floor, as a bento grid — one anchor storefront, two portraits and a
 * row of compact shops. Deliberately not another uniform card grid: browsing a
 * mall means shops of different prominence, and that hierarchy is the point.
 *
 * One responsive tree. The bento spans simply drop away below `md`, rather than
 * switching to a duplicated mobile layout.
 */
export default function TrendingStores() {
  // Keep the marketplace's own ordering, but the anchor slot needs a shop with
  // enough stock to fill its 3-up peek — otherwise the hero card looks empty.
  const stores = getStocked().slice(0, 6);
  const anchor = stores.find(store => getStoreProductCount(store.id) >= 3) ?? stores[0];
  const rest = stores.filter(store => store.id !== anchor.id);

  return (
    <section className="bg-surface-alt py-16 border-y border-hairline">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-ink mb-1" style={{ fontSize: '30px', fontWeight: 700 }}>
              Trending stores
            </h2>
            <p className="text-meta" style={{ fontSize: '15px' }}>
              The most visited shops this week
            </p>
          </div>
          <button
            className="flex items-center gap-1 text-brand hover:underline shrink-0"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            View all <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:auto-rows-[200px]">
          {/* Anchor store — spans two columns and two rows on desktop */}
          <Link
            to={`/store/${anchor.id}`}
            className="group relative rounded-2xl overflow-hidden sm:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0"
          >
            <ImageWithFallback
              src={getStoreBanner(anchor)}
              alt={anchor.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(17,23,37,0.92) 0%, rgba(17,23,37,0.3) 55%, rgba(17,23,37,0.08) 100%)',
              }}
            />

            <span
              className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white text-ink uppercase"
              style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.8px' }}
            >
              #1 Trending
            </span>

            {/* Peek at the shelves */}
            <div className="absolute top-4 right-4 flex gap-2">
              {getStorePreview(anchor.id, 3).map((image, index) => (
                <span
                  key={index}
                  className="w-14 h-14 rounded-xl overflow-hidden block border-2 border-white/50"
                >
                  <ImageWithFallback src={image} alt="" className="w-full h-full object-cover" />
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Avatar store={anchor} size={48} />
                  <div className="min-w-0">
                    <h3 className="text-white truncate mb-1" style={{ fontSize: '22px', fontWeight: 700 }}>
                      {anchor.name}
                    </h3>
                    <p className="text-white/70 truncate" style={{ fontSize: '13px' }}>
                      {anchor.category} · {getStoreProductCount(anchor.id)}{' '}
                      {getStoreProductCount(anchor.id) === 1 ? 'product' : 'products'}
                      {anchor.startingPrice !== undefined && ` · from ${formatNaira(anchor.startingPrice)}`}
                    </p>
                  </div>
                </div>

                <span
                  className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-ink shrink-0 transition-all group-hover:gap-2.5"
                  style={{ fontSize: '13px', fontWeight: 700 }}
                >
                  Visit store <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>

          {/* Portrait shops */}
          {rest.slice(0, 2).map(store => (
            <Link
              key={store.id}
              to={`/store/${store.id}`}
              className="group relative rounded-2xl overflow-hidden min-h-[200px]"
            >
              <ImageWithFallback
                src={getStoreBanner(store)}
                alt={store.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(17,23,37,0.92) 0%, rgba(17,23,37,0.12) 70%)' }}
              />

              {store.topRated && (
                <span
                  className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/95 text-ink uppercase"
                  style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.7px' }}
                >
                  Top Rated
                </span>
              )}

              <span className="absolute top-3 right-3 w-12 h-12 rounded-xl overflow-hidden block border-2 border-white/50">
                <ImageWithFallback
                  src={getStorePreview(store.id, 1)[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="flex items-center gap-2 mb-2.5 min-w-0">
                  <Avatar store={store} size={32} />
                  <div className="min-w-0">
                    <p className="text-white truncate" style={{ fontSize: '14px', fontWeight: 700 }}>
                      {store.name}
                    </p>
                    <p className="text-white/65 truncate" style={{ fontSize: '11px' }}>
                      {store.category} · {getStoreProductCount(store.id)}{' '}
                      {getStoreProductCount(store.id) === 1 ? 'product' : 'products'}
                    </p>
                  </div>
                </div>
                <span
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-white text-ink"
                  style={{ fontSize: '12px', fontWeight: 700 }}
                >
                  Visit store <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}

          {/* Compact shops */}
          {rest.slice(2, 5).map(store => (
            <Link
              key={store.id}
              to={`/store/${store.id}`}
              className="group flex flex-col p-4 rounded-2xl bg-white border border-hairline transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(17,23,37,0.08)]"
            >
              <span className="flex items-center gap-2.5 mb-3 min-w-0">
                <Avatar store={store} size={36} bordered={false} />
                <span className="min-w-0">
                  <span className="block text-ink truncate" style={{ fontSize: '14px', fontWeight: 700 }}>
                    {store.name}
                  </span>
                  <span className="block text-meta truncate" style={{ fontSize: '11px' }}>
                    {store.category}
                  </span>
                </span>
              </span>

              {/* The peek is the visual here — a banner strip this narrow just
                  crops the vendor's artwork into an unreadable sliver. */}
              <span className="grid grid-cols-3 gap-2">
                {getStorePreview(store.id, 3).map((image, index) => (
                  <span
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-surface-alt border border-hairline block"
                  >
                    <ImageWithFallback
                      src={image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                ))}
              </span>

              <span className="mt-auto pt-3 flex items-center justify-between gap-2">
                <span className="text-meta truncate" style={{ fontSize: '11px' }}>
                  {getStoreProductCount(store.id)}{' '}
                  {getStoreProductCount(store.id) === 1 ? 'product' : 'products'}
                </span>
                <span
                  className="flex items-center gap-1 text-brand shrink-0 transition-all group-hover:gap-1.5"
                  style={{ fontSize: '12px', fontWeight: 700 }}
                >
                  Visit <ArrowRight size={12} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Avatar({ store, size, bordered = true }: { store: Store; size: number; bordered?: boolean }) {
  const avatar = getStoreAvatar(store);

  return (
    <span
      className="rounded-xl overflow-hidden bg-white shrink-0 block"
      style={{ width: size, height: size, border: bordered ? '2px solid rgba(255,255,255,0.55)' : undefined }}
    >
      {avatar ? (
        <ImageWithFallback src={avatar} alt="" className="w-full h-full object-cover" />
      ) : (
        <span
          className="w-full h-full bg-ink flex items-center justify-center text-white"
          style={{ fontSize: size * 0.32, fontWeight: 700 }}
        >
          {store.initials}
        </span>
      )}
    </span>
  );
}
