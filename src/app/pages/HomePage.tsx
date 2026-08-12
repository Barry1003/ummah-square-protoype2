import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { ArrowRight, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryPills from '../components/CategoryPills';
import FeaturedStore from '../components/FeaturedStore';
import TrendingStores from '../components/TrendingStores';
import Sponsors from '../components/Sponsors';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProductCard } from '../components/store/ProductCard';
import { VendorCard } from '../components/store/VendorCard';
import { useCart } from '../lib/cart';
import {
  CATEGORIES,
  getBestSellers,
  getCategoryProductCount,
  getNewArrivals,
  getStocked,
  getStore,
  getStoreAvatar,
  getStoreBanner,
  getTopStoreInCategory,
} from '../data/catalog';
import type { Product } from '../data/types';

export default function HomePage() {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const newArrivals = getNewArrivals(8);
  const bestSellers = getBestSellers(8);
  const vendors = getStocked();

  /** From the marketplace, opening a product means walking into its store. */
  const openInStore = (product: Product) => navigate(`/store/${product.storeId}?product=${product.id}`);

  const productRail = (products: Product[]) =>
    products.map(product => {
      const store = getStore(product.storeId);
      return (
        <div key={product.id} className="flex-shrink-0" style={{ width: '230px' }}>
          <ProductCard
            product={product}
            onOpen={openInStore}
            onAddToCart={addItem}
            storeName={store?.name}
            storeLogo={store ? getStoreAvatar(store) : undefined}
          />
        </div>
      );
    });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategoryPills />

      {/* POPULAR VENDORS */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="Popular vendors" subtitle="Muslim-owned shops your neighbours are buying from" action="View all" />
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {vendors.slice(0, 9).map(store => (
              <div key={store.id} className="flex-shrink-0" style={{ width: '260px' }}>
                <VendorCard store={store} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedStore />

      {/* NEW ARRIVALS */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="New arrivals" subtitle="Fresh from our vendors" action="View all" />
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">{productRail(newArrivals)}</div>
        </div>
      </section>

      <Sponsors />

      <TrendingStores />

      {/* BEST SELLERS */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="Best sellers" subtitle="What everyone's buying" action="View all" />
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">{productRail(bestSellers)}</div>
        </div>
      </section>

      {/* NEAR YOU */}
      <section className="bg-surface-alt py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-ink mb-1" style={{ fontSize: '30px', fontWeight: 700 }}>
                Near you
              </h2>
              <p className="text-meta" style={{ fontSize: '15px' }}>
                Stores in your area
              </p>
            </div>
            <span className="flex items-center gap-2 shrink-0">
              <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-hairline text-ink" style={{ fontSize: '13px', fontWeight: 500 }}>
                <MapPin size={13} className="text-meta" />
                Lagos, NG
              </span>
              <button className="text-brand hover:underline" style={{ fontSize: '13px', fontWeight: 600 }}>
                Change
              </button>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vendors.slice(0, 8).map(store => (
              <VendorCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader title="Shop by category" subtitle="Find exactly what you're looking for" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {CATEGORIES.slice(0, 4).map(category => (
              <CategoryBlock key={category} category={category} />
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* TRUST BAR */}
      <section className="bg-white py-14 border-t border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            ['Escrow protection', 'Your money is held safely until delivery is confirmed'],
            ['Verified vendors', 'Every store is reviewed and approved by our team'],
            ['Halal commerce', 'Committed to ethical trade across the marketplace'],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="text-ink mb-1.5" style={{ fontSize: '16px', fontWeight: 700 }}>
                {title}
              </h3>
              <p className="text-meta" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SectionHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: string }) {
  return (
    <div className="flex items-end justify-between mb-8 gap-4">
      <div>
        <h2 className="text-ink mb-1" style={{ fontSize: '30px', fontWeight: 700 }}>
          {title}
        </h2>
        <p className="text-meta" style={{ fontSize: '15px' }}>
          {subtitle}
        </p>
      </div>
      {action && (
        <button
          className="flex items-center gap-1 text-brand hover:underline shrink-0"
          style={{ fontSize: '14px', fontWeight: 600 }}
        >
          {action} <ArrowRight size={15} />
        </button>
      )}
    </div>
  );
}

function CategoryBlock({ category }: { category: string }) {
  const navigate = useNavigate();
  const count = getCategoryProductCount(category);
  const topStore = getTopStoreInCategory(category);
  const image = topStore ? getStoreBanner(topStore) : '';

  return (
    <div
      onClick={() => topStore && navigate(`/store/${topStore.id}`)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-surface-alt aspect-[4/5] sm:aspect-[4/3]"
    >
      {image && (
        <ImageWithFallback
          src={image}
          alt={category}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(17,23,37,0.86) 0%, rgba(17,23,37,0.1) 70%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white mb-0.5" style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1.3 }}>
          {category}
        </h3>
        <p className="text-white/70" style={{ fontSize: '13px' }}>
          {count} {count === 1 ? 'product' : 'products'}
        </p>
      </div>
    </div>
  );
}
