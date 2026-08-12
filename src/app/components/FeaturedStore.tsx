import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatNaira } from '../lib/format';
import { STORES, getStoreAvatar, getStoreBanner, getStoreProductCount, getStoreProducts } from '../data/catalog';

/** Vendors that rotate through the spotlight — the dots below switch between them. */
const FEATURED_IDS = ['pleaznscents', 'feescrochet', 'zerostore'];

/** One responsive layout from 375px up — no separate mobile and desktop trees. */
export default function FeaturedStore() {
  const [index, setIndex] = useState(0);

  const featured = FEATURED_IDS.map(id => STORES.find(store => store.id === id)).filter(Boolean) as typeof STORES;
  const store = featured[index];
  const products = getStoreProducts(store.id).slice(0, 3);
  const avatar = getStoreAvatar(store);

  return (
    <section className="bg-surface-alt py-16 border-y border-hairline">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <span
              className="block text-meta uppercase mb-2"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.1px' }}
            >
              Featured store
            </span>
            <h2 className="text-ink" style={{ fontSize: '30px', fontWeight: 700 }}>
              In the spotlight
            </h2>
          </div>

          <Dots count={featured.length} active={index} onSelect={setIndex} />
        </div>

        <article className="rounded-2xl overflow-hidden bg-white border border-hairline grid md:grid-cols-2">
          {/* Identity */}
          <div className="relative min-h-[260px] md:min-h-[400px] flex flex-col justify-end p-6 md:p-8">
            <ImageWithFallback
              src={getStoreBanner(store)}
              alt={store.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(17,23,37,0.92) 0%, rgba(17,23,37,0.45) 60%, rgba(17,23,37,0.2) 100%)' }}
            />

            <div className="relative">
              <span className="w-14 h-14 rounded-xl overflow-hidden bg-white block mb-4 border border-white/30">
                {avatar ? (
                  <ImageWithFallback src={avatar} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span
                    className="w-full h-full bg-ink flex items-center justify-center text-white"
                    style={{ fontSize: '16px', fontWeight: 700 }}
                  >
                    {store.initials}
                  </span>
                )}
              </span>

              {store.topRated && (
                <span
                  className="block text-gold uppercase mb-1.5"
                  style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.9px' }}
                >
                  Top Rated
                </span>
              )}

              <h3 className="text-white mb-2" style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1.2 }}>
                {store.name}
              </h3>

              <p className="text-white/70 mb-4" style={{ fontSize: '13px' }}>
                {store.category} · {store.location}
              </p>

              {store.tagline && (
                <p className="text-white/85 max-w-[380px] mb-6" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                  {store.tagline}
                </p>
              )}

              <Link
                to={`/store/${store.id}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink transition-all hover:gap-3"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                Visit store
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Stock */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-baseline justify-between mb-5 gap-3">
              <h4 className="text-ink" style={{ fontSize: '15px', fontWeight: 700 }}>
                From this store
              </h4>
              <Link
                to={`/store/${store.id}`}
                className="text-brand hover:underline shrink-0"
                style={{ fontSize: '13px', fontWeight: 600 }}
              >
                All {getStoreProductCount(store.id)} products
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {products.map(product => (
                <Link key={product.id} to={`/store/${store.id}?product=${product.id}`} className="group flex flex-col">
                  <span className="aspect-square rounded-xl overflow-hidden bg-surface-alt border border-hairline mb-2.5 block">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span
                    className="text-ink line-clamp-2 mb-1 group-hover:text-brand transition-colors"
                    style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.35 }}
                  >
                    {product.name}
                  </span>
                  <span className="text-ink mt-auto" style={{ fontSize: '14px', fontWeight: 700 }}>
                    {formatNaira(product.price)}
                  </span>
                </Link>
              ))}
            </div>

            {store.startingPrice !== undefined && (
              <div className="mt-auto pt-6 border-t border-hairline flex items-center justify-between gap-3">
                <span className="text-meta" style={{ fontSize: '13px' }}>
                  Everything in store from
                </span>
                <span className="text-ink" style={{ fontSize: '18px', fontWeight: 700 }}>
                  {formatNaira(store.startingPrice)}
                </span>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

function Dots({ count, active, onSelect }: { count: number; active: number; onSelect: (index: number) => void }) {
  return (
    <div className="flex items-center gap-2 shrink-0 pb-2">
      {[...Array(count)].map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          aria-label={`Show featured store ${index + 1}`}
          aria-current={index === active}
          className={`h-1.5 rounded-full transition-all ${index === active ? 'w-6 bg-ink' : 'w-1.5 bg-hairline hover:bg-meta'}`}
        />
      ))}
    </div>
  );
}
