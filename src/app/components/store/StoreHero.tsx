import { useState } from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { getStoreAvatar, getStoreBanner } from '../../data/catalog';
import type { Store } from '../../data/types';

interface StoreHeroProps {
  store: Store;
  productCount: number;
}

/**
 * A storefront header: banner, then the identity on a clean white bar beneath
 * it. Setting the name and every badge over the image made the vendor's own
 * artwork unreadable and the type inconsistent from store to store.
 */
export function StoreHero({ store, productCount }: StoreHeroProps) {
  const [following, setFollowing] = useState(false);
  const banner = getStoreBanner(store);
  const avatar = getStoreAvatar(store);

  return (
    <header>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-hairline">
        <nav
          aria-label="Breadcrumb"
          className="max-w-[1280px] mx-auto px-6 py-3 flex items-center gap-1.5 text-meta"
          style={{ fontSize: '13px' }}
        >
          <Link to="/" className="hover:text-brand transition-colors">
            Marketplace
          </Link>
          <ChevronRight size={13} className="shrink-0" />
          <span className="truncate">{store.category}</span>
          <ChevronRight size={13} className="shrink-0" />
          <span className="text-ink truncate" style={{ fontWeight: 600 }}>
            {store.name}
          </span>
        </nav>
      </div>

      {/* Banner */}
      <div className="relative h-40 md:h-56 bg-surface-alt overflow-hidden">
        {banner && <ImageWithFallback src={banner} alt={`${store.name} banner`} className="w-full h-full object-cover" />}
      </div>

      {/* Identity bar */}
      <div className="bg-white border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4 pb-5">
            <span className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-white block border-4 border-white shadow-sm shrink-0 -mt-10 md:-mt-12">
              {avatar ? (
                <ImageWithFallback src={avatar} alt="" className="w-full h-full object-cover" />
              ) : (
                <span
                  className="w-full h-full bg-ink flex items-center justify-center text-white"
                  style={{ fontSize: '22px', fontWeight: 700 }}
                >
                  {store.initials}
                </span>
              )}
            </span>

            <div className="flex-1 min-w-0 md:pb-1">
              {store.topRated && (
                <span
                  className="block text-gold-strong uppercase mb-1"
                  style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.8px' }}
                >
                  Top Rated
                </span>
              )}

              <h1 className="text-ink mb-1" style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1.2 }}>
                {store.name}
              </h1>

              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-meta" style={{ fontSize: '13px' }}>
                <span>{store.category}</span>
                <span aria-hidden>·</span>
                <span className="flex items-center gap-1.5">
                  {store.available && <span className="w-1.5 h-1.5 rounded-full bg-success" />}
                  {store.location}
                </span>
                <span aria-hidden>·</span>
                <span>
                  {productCount} {productCount === 1 ? 'product' : 'products'}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 md:pb-1">
              <button
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-hairline text-ink hover:border-brand hover:text-brand transition-colors"
                style={{ fontSize: '14px', fontWeight: 600 }}
              >
                <MessageCircle size={15} />
                Message
              </button>
              <button
                onClick={() => setFollowing(value => !value)}
                aria-pressed={following}
                className={`px-5 py-2.5 rounded-full transition-colors ${
                  following ? 'bg-surface-alt text-ink border border-hairline' : 'bg-ink text-white hover:bg-brand'
                }`}
                style={{ fontSize: '14px', fontWeight: 600 }}
              >
                {following ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>

          {store.tagline && (
            <p className="text-body-text max-w-[700px] pb-5" style={{ fontSize: '15px', lineHeight: 1.6 }}>
              {store.tagline}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
