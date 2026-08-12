import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { MapPin, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ProductCard } from '../components/store/ProductCard';
import { ProductDetailsModal } from '../components/store/ProductDetailsModal';
import { StoreHero } from '../components/store/StoreHero';
import { VendorCard } from '../components/store/VendorCard';
import { useCart } from '../lib/cart';
import { formatNaira } from '../lib/format';
import {
  getProduct,
  getStocked,
  getStore,
  getStoreCategories,
  getStoreProducts,
} from '../data/catalog';
import type { Product } from '../data/types';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';

const SORT_LABELS: Record<SortOption, string> = {
  featured: 'Featured',
  'price-asc': 'Price: low to high',
  'price-desc': 'Price: high to low',
  newest: 'Newest',
};

export default function StorePage() {
  const { storeId = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const store = getStore(storeId);
  const { addItem } = useCart();

  const [activeCategory, setActiveCategory] = useState('All Products');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveCategory('All Products');
    setQuery('');
    setSort('featured');
  }, [storeId]);

  // /store/:storeId?product=<id> — opening a product from the marketplace
  // walks you into the store with that item already open.
  useEffect(() => {
    const requested = searchParams.get('product');
    if (!requested) return;
    const product = getProduct(requested);
    if (product?.storeId === storeId) setSelectedProduct(product);
  }, [searchParams, storeId]);

  const closeProduct = () => {
    setSelectedProduct(null);
    if (searchParams.has('product')) {
      const next = new URLSearchParams(searchParams);
      next.delete('product');
      setSearchParams(next, { replace: true });
    }
  };

  const products = useMemo(() => getStoreProducts(storeId), [storeId]);
  const categories = useMemo(() => getStoreCategories(storeId), [storeId]);

  const countFor = (category: string) =>
    category === 'All Products' ? products.length : products.filter(p => p.category === category).length;

  const visibleProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    const filtered = products.filter(product => {
      const matchesCategory = activeCategory === 'All Products' || product.category === activeCategory;
      const matchesQuery =
        !search || product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search);
      return matchesCategory && matchesQuery;
    });

    const sorted = [...filtered];
    switch (sort) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'newest':
        return sorted.sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
      default:
        return sorted.sort((a, b) => Number(Boolean(b.isBestSeller)) - Number(Boolean(a.isBestSeller)));
    }
  }, [products, activeCategory, query, sort]);

  if (!store) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-3">
          <h1 className="text-ink" style={{ fontSize: '26px', fontWeight: 700 }}>
            We couldn’t find that store
          </h1>
          <p className="text-meta" style={{ fontSize: '15px' }}>
            It may have closed, or the link may be wrong.
          </p>
          <Link
            to="/"
            className="mt-2 px-6 py-3 rounded-full bg-ink text-white hover:bg-brand transition-colors"
            style={{ fontSize: '15px', fontWeight: 600 }}
          >
            Back to the marketplace
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const priceRange = products.length
    ? [Math.min(...products.map(p => p.price)), Math.max(...products.map(p => p.price))]
    : null;

  const otherStores = getStocked()
    .filter(other => other.id !== store.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <StoreHero store={store} productCount={products.length} />

      <main className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[210px_1fr] gap-8 lg:gap-12">
          {/* Shop sidebar. min-w-0 so the horizontally-scrolling category row on
              narrow screens can't stretch the grid column past the viewport. */}
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <h2
              className="text-ink uppercase mb-3"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.9px' }}
            >
              Categories
            </h2>
            <ul className="flex lg:flex-col gap-1 overflow-x-auto scrollbar-hide lg:overflow-visible -mx-1 px-1 lg:mx-0 lg:px-0">
              {categories.map(category => {
                const isActive = category === activeCategory;
                return (
                  <li key={category} className="shrink-0 lg:shrink">
                    <button
                      onClick={() => setActiveCategory(category)}
                      aria-current={isActive}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        isActive ? 'bg-surface-alt text-ink' : 'text-body-text hover:bg-surface-alt'
                      }`}
                      style={{ fontSize: '14px', fontWeight: isActive ? 600 : 400 }}
                    >
                      {category}
                      <span className="text-meta" style={{ fontSize: '12px' }}>
                        {countFor(category)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {priceRange && (
              <div className="hidden lg:block mt-8 pt-6 border-t border-hairline">
                <h2
                  className="text-ink uppercase mb-2"
                  style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.9px' }}
                >
                  Price range
                </h2>
                <p className="text-body-text" style={{ fontSize: '14px' }}>
                  {formatNaira(priceRange[0])} – {formatNaira(priceRange[1])}
                </p>
              </div>
            )}

            <div className="hidden lg:block mt-8 pt-6 border-t border-hairline">
              <h2
                className="text-ink uppercase mb-3"
                style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.9px' }}
              >
                Buying here
              </h2>
              <dl className="space-y-3 text-body-text" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                <div>
                  <dt className="text-ink" style={{ fontWeight: 600 }}>
                    Escrow
                  </dt>
                  <dd className="text-meta">Held until you confirm delivery</dd>
                </div>
                <div>
                  <dt className="text-ink" style={{ fontWeight: 600 }}>
                    Delivery
                  </dt>
                  <dd className="text-meta">Arranged with the vendor at checkout</dd>
                </div>
                <div>
                  <dt className="text-ink" style={{ fontWeight: 600 }}>
                    Returns
                  </dt>
                  <dd className="text-meta">Marketplace refund &amp; returns policy</dd>
                </div>
              </dl>
            </div>
          </aside>

          {/* Shelf */}
          <div className="min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-hairline">
              <p className="text-meta" style={{ fontSize: '14px' }}>
                <span className="text-ink" style={{ fontWeight: 600 }}>
                  {visibleProducts.length}
                </span>{' '}
                {visibleProducts.length === 1 ? 'product' : 'products'}
                {activeCategory !== 'All Products' && ` in ${activeCategory}`}
              </p>

              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-[200px]">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-meta" />
                  <input
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search this store"
                    aria-label={`Search products in ${store.name}`}
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-hairline focus:outline-none focus:border-brand transition-colors"
                    style={{ fontSize: '13px' }}
                  />
                </div>

                <select
                  value={sort}
                  onChange={event => setSort(event.target.value as SortOption)}
                  aria-label="Sort products"
                  className="h-10 px-3 rounded-lg border border-hairline text-body-text focus:outline-none focus:border-brand cursor-pointer"
                  style={{ fontSize: '13px' }}
                >
                  {(Object.keys(SORT_LABELS) as SortOption[]).map(option => (
                    <option key={option} value={option}>
                      {SORT_LABELS[option]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Column count tracks the available width, which drops at `lg`
                when the sidebar appears — hence 4 cols at md but 3 at lg. */}
            {visibleProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                {visibleProducts.map(product => (
                  <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} onAddToCart={addItem} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-ink mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                  {products.length === 0 ? 'This vendor is still stocking up' : 'No products match'}
                </p>
                <p className="text-meta mb-5" style={{ fontSize: '14px' }}>
                  {products.length === 0
                    ? 'Follow the store to hear when products go live.'
                    : 'Try another category, or clear your search.'}
                </p>
                {products.length > 0 && (
                  <button
                    onClick={() => {
                      setActiveCategory('All Products');
                      setQuery('');
                    }}
                    className="px-5 py-2.5 rounded-full bg-ink text-white hover:bg-brand transition-colors"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}

            {/* About */}
            {(store.about || store.address) && (
              <section className="mt-16 pt-10 border-t border-hairline">
                <h2 className="text-ink mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                  About {store.name}
                </h2>
                {store.about && (
                  <p className="text-body-text max-w-[640px] mb-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                    {store.about}
                  </p>
                )}
                {store.address && (
                  <p className="flex items-start gap-2 text-meta" style={{ fontSize: '14px' }}>
                    <MapPin size={15} className="mt-0.5 shrink-0" />
                    {store.address}
                  </p>
                )}
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Back into the marketplace */}
      <section className="bg-surface-alt py-14 border-t border-hairline">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-ink mb-6" style={{ fontSize: '20px', fontWeight: 700 }}>
            More stores in the square
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {otherStores.map(other => (
              <VendorCard key={other.id} store={other} />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ProductDetailsModal
        product={selectedProduct}
        store={store}
        isOpen={Boolean(selectedProduct)}
        onClose={closeProduct}
        onAddToCart={addItem}
      />
    </div>
  );
}
