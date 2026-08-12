import { Search } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PRODUCTS, SERVICES, STORES, getStocked, getStoreAvatar, getStoreBanner, getStoreProducts } from '../data/catalog';

/** Islamic geometric tile, tinted with the logo indigo. Texture, not decoration. */
const PATTERN =
  "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374CA0' fill-rule='evenodd'%3E%3Cpath d='M40 0l20 20-20 20-20-20L40 0zm0 40l20 20-20 20-20-20 20-20zM0 40l20 20-20 20V40zm80 0v40l-20-20 20-20zM0 0l20 20L0 40V0zm80 0v40L60 20 80 0z' opacity='0.15'/%3E%3Cpath d='M20 20h20v20H20V20zm40 0h20v20H60V20zM20 60h20v20H20V60zm40 0h20v20H60V60z' opacity='0.1'/%3E%3Ccircle cx='40' cy='40' r='3' opacity='0.2'/%3E%3Ccircle cx='20' cy='20' r='2' opacity='0.15'/%3E%3Ccircle cx='60' cy='20' r='2' opacity='0.15'/%3E%3Ccircle cx='20' cy='60' r='2' opacity='0.15'/%3E%3Ccircle cx='60' cy='60' r='2' opacity='0.15'/%3E%3C/g%3E%3C/svg%3E\")";

export default function Hero() {
  // The hero card is a real storefront, and it needs enough stock to fill the
  // 3-up strip or it renders with empty slots.
  const previewStore = getStocked().find(store => getStoreProducts(store.id).length >= 3) ?? getStocked()[0];
  const previewAvatar = getStoreAvatar(previewStore);
  const previewProducts = getStoreProducts(previewStore.id).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-brand-soft border-b border-hairline">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: PATTERN }} />

      <div className="relative max-w-[1280px] mx-auto px-6 py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-16 items-center">
          {/* The pitch */}
          <div>
            <span
              className="block text-brand uppercase mb-4"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px' }}
            >
              Nigeria's Muslim marketplace
            </span>

            <h1 className="mb-5 leading-[1.06]">
              <span className="block text-ink" style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', fontWeight: 700 }}>
                Shop Local.
              </span>
              <span className="block text-gold" style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', fontWeight: 700 }}>
                Shop Halal.
              </span>
            </h1>

            <p className="text-body-text max-w-[480px] mb-7" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Discover verified Muslim-owned stores across Nigeria — from fashion to food to services.
            </p>

            {/* Search */}
            <div
              className="flex items-center bg-white rounded-full border border-hairline max-w-[560px] mb-6"
              style={{ height: '56px' }}
            >
              <Search className="ml-5 text-meta shrink-0" size={19} />
              <input
                type="text"
                placeholder="Search stores, products or services"
                aria-label="Search the marketplace"
                className="flex-1 min-w-0 px-3 bg-transparent focus:outline-none text-ink"
                style={{ fontSize: '15px' }}
              />
              <button
                className="mr-1.5 px-6 h-11 rounded-full bg-ink text-white hover:bg-brand transition-colors shrink-0"
                style={{ fontSize: '14px', fontWeight: 600 }}
              >
                Search
              </button>
            </div>

            {/* Marketplace at a glance — counted from the catalogue */}
            <div className="flex items-center gap-8">
              <Stat value={STORES.length} label="vendors" />
              <Stat value={PRODUCTS.length} label="products" />
              <Stat value={SERVICES.length} label="services" />
            </div>
          </div>

          {/* A real storefront */}
          <Link
            to={`/store/${previewStore.id}`}
            className="group block bg-white rounded-2xl overflow-hidden border border-hairline mx-auto w-full max-w-[380px] lg:max-w-none transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(17,23,37,0.1)]"
          >
            <div className="relative h-32 bg-surface-alt overflow-hidden">
              <ImageWithFallback
                src={getStoreBanner(previewStore)}
                alt={previewStore.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="px-4 pb-4 -mt-7 relative">
              <span className="w-14 h-14 rounded-xl overflow-hidden bg-white block border border-hairline shadow-sm mb-3">
                {previewAvatar ? (
                  <ImageWithFallback src={previewAvatar} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span
                    className="w-full h-full bg-ink flex items-center justify-center text-white"
                    style={{ fontSize: '15px', fontWeight: 700 }}
                  >
                    {previewStore.initials}
                  </span>
                )}
              </span>

              <h2 className="text-ink truncate" style={{ fontSize: '16px', fontWeight: 700 }}>
                {previewStore.name}
              </h2>
              <p className="text-meta truncate mb-3" style={{ fontSize: '13px' }}>
                {previewStore.category} · {previewStore.location}
              </p>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-hairline">
                {previewProducts.map(product => (
                  <span key={product.id} className="aspect-square rounded-lg overflow-hidden bg-surface-alt block">
                    <ImageWithFallback src={product.image} alt="" className="w-full h-full object-cover" />
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <span className="block">
      <span className="block text-ink leading-none mb-1" style={{ fontSize: '24px', fontWeight: 700 }}>
        {value}
      </span>
      <span className="block text-meta" style={{ fontSize: '13px' }}>
        {label}
      </span>
    </span>
  );
}
