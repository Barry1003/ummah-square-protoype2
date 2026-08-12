import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatNaira } from '../lib/format';
import { SPONSORS, getProduct, getStore, getStoreAvatar, getStoreBanner, getStoreProductCount } from '../data/catalog';
import type { Store } from '../data/types';

/**
 * Sponsored placements. Every slot promotes a real vendor already trading here,
 * so each is labelled and links into that vendor's store.
 *
 * Kept on white with the same card language as the rest of the page — a
 * separate dark treatment with its own chrome made this read as an advert for
 * the design rather than for the vendors.
 */
export default function Sponsors() {
  const headline = SPONSORS.find(sponsor => sponsor.tier === 'headline');
  const partners = SPONSORS.filter(sponsor => sponsor.tier === 'partner').slice(0, 4);

  const headlineStore = headline ? getStore(headline.storeId) : undefined;
  const headlineProduct = headline?.featuredProductId ? getProduct(headline.featuredProductId) : undefined;

  return (
    <section className="bg-white py-16 border-t border-hairline">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <span
              className="block text-meta uppercase mb-2"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.1px' }}
            >
              Sponsored
            </span>
            <h2 className="text-ink" style={{ fontSize: '32px', fontWeight: 700 }}>
              Featured this week
            </h2>
          </div>

          <Link
            to="/become-vendor"
            className="hidden sm:flex items-center gap-1 text-brand hover:underline shrink-0"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            Advertise with us <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5">
          {/* Headline placement */}
          {headlineStore && (
            <Link
              to={`/store/${headlineStore.id}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-hairline bg-white transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(17,23,37,0.08)]"
            >
              <div className="relative h-56 md:h-72 bg-surface-alt overflow-hidden">
                <ImageWithFallback
                  src={getStoreBanner(headlineStore)}
                  alt={headlineStore.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/90 text-meta uppercase"
                  style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.6px' }}
                >
                  Ad
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-11 h-11 rounded-xl overflow-hidden bg-white border border-hairline shrink-0">
                    <ImageWithFallback
                      src={getStoreAvatar(headlineStore) ?? ''}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-ink truncate" style={{ fontSize: '18px', fontWeight: 700 }}>
                      {headlineStore.name}
                    </h3>
                    <p className="text-meta truncate" style={{ fontSize: '13px' }}>
                      {headlineStore.category} · {getStoreProductCount(headlineStore.id)} products
                    </p>
                  </div>
                </div>

                <p className="text-body-text mb-4" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                  {headline?.blurb}
                </p>

                <div className="mt-auto pt-4 border-t border-hairline flex items-center justify-between gap-3">
                  {headlineProduct && (
                    <span className="flex items-center gap-2.5 min-w-0">
                      <ImageWithFallback
                        src={headlineProduct.image}
                        alt=""
                        className="w-10 h-10 rounded-lg object-cover shrink-0 bg-surface-alt"
                      />
                      <span className="min-w-0">
                        <span className="block text-ink truncate" style={{ fontSize: '13px', fontWeight: 600 }}>
                          {headlineProduct.name}
                        </span>
                        <span className="block text-meta" style={{ fontSize: '12px' }}>
                          {formatNaira(headlineProduct.price)}
                        </span>
                      </span>
                    </span>
                  )}

                  <span
                    className="flex items-center gap-1 text-brand shrink-0 transition-all group-hover:gap-2"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    Visit store <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Partner list */}
          <div className="flex flex-col gap-3">
            {partners.map(sponsor => {
              const store = getStore(sponsor.storeId);
              if (!store) return null;
              return <PartnerRow key={sponsor.id} store={store} blurb={sponsor.blurb} />;
            })}

            <Link
              to="/become-vendor"
              className="group flex items-center gap-3 p-4 rounded-2xl border border-dashed border-hairline hover:border-brand transition-colors mt-auto"
            >
              <div className="min-w-0">
                <p className="text-ink" style={{ fontSize: '14px', fontWeight: 700 }}>
                  Your store here
                </p>
                <p className="text-meta" style={{ fontSize: '13px' }}>
                  Sponsor a slot and reach the whole square
                </p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-meta group-hover:text-brand transition-colors shrink-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerRow({ store, blurb }: { store: Store; blurb: string }) {
  const avatar = getStoreAvatar(store);

  return (
    <Link
      to={`/store/${store.id}`}
      className="group flex items-center gap-3 p-4 rounded-2xl border border-hairline bg-white transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(17,23,37,0.07)]"
    >
      <span className="w-11 h-11 rounded-xl overflow-hidden bg-surface-alt border border-hairline shrink-0">
        {avatar ? (
          <ImageWithFallback src={avatar} alt="" className="w-full h-full object-cover" />
        ) : (
          <span
            className="w-full h-full bg-ink flex items-center justify-center text-white"
            style={{ fontSize: '12px', fontWeight: 700 }}
          >
            {store.initials}
          </span>
        )}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-ink truncate" style={{ fontSize: '14px', fontWeight: 700 }}>
          {store.name}
        </span>
        <span className="block text-meta truncate" style={{ fontSize: '13px' }}>
          {blurb}
        </span>
      </span>

      <ArrowRight size={16} className="text-meta group-hover:text-brand transition-colors shrink-0" />
    </Link>
  );
}
