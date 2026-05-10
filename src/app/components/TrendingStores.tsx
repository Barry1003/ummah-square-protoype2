import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flame, ArrowRight, Star } from 'lucide-react';

export default function TrendingStores() {
  const stores = [
    {
      name: "Aisha's Boutique",
      category: 'Fashion',
      banner: 'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=800',
      logo: 'AB',
      logoGradient: 'from-purple-500 to-pink-500',
      rating: 4.9,
      productCount: 48,
      products: [
        'https://images.unsplash.com/photo-1668028563825-f3b7138db3de?w=200',
        'https://images.unsplash.com/photo-1673908869716-abb13b862661?w=200',
        'https://images.unsplash.com/photo-1771646752406-00f7054fa1b1?w=200',
      ],
    },
    {
      name: 'Halal Spice Hub',
      category: 'Food & Groceries',
      banner: 'https://images.unsplash.com/photo-1760297516529-94efc9e5bc2e?w=800',
      logo: 'HS',
      logoGradient: 'from-orange-500 to-red-500',
      rating: 4.7,
      productCount: 34,
      products: [
        'https://images.unsplash.com/photo-1762882807447-3534bff2c831?w=200',
        'https://images.unsplash.com/photo-1556327018-5463d38c8ba0?w=200',
        'https://images.unsplash.com/photo-1549665332-82009840ecf0?w=200',
      ],
    },
    {
      name: 'Islamic Books Corner',
      category: 'Books & Media',
      banner: 'https://images.unsplash.com/photo-1592277258026-46ddfd932df3?w=800',
      logo: 'IB',
      logoGradient: 'from-blue-600 to-cyan-500',
      rating: 4.8,
      productCount: 92,
      products: [
        'https://images.unsplash.com/photo-1554788625-51d9860bdb28?w=200',
        'https://images.unsplash.com/photo-1652958947171-8e1c1bdcdf79?w=200',
        'https://images.unsplash.com/photo-1592278423578-4b83c89859ac?w=200',
      ],
    },
    {
      name: 'Modest Accessories',
      category: 'Accessories',
      banner: 'https://images.unsplash.com/photo-1658910452951-68bd93e558ca?w=800',
      logo: 'MA',
      logoGradient: 'from-amber-500 to-yellow-400',
      rating: 4.6,
      productCount: 27,
      products: [
        'https://images.unsplash.com/photo-1658910453009-edc8774f1133?w=200',
        'https://images.unsplash.com/photo-1601057836821-05feaedbac1c?w=200',
        'https://images.unsplash.com/photo-1724896728449-fae038f93e59?w=200',
      ],
    },
    {
      name: 'Home Essentials',
      category: 'Home & Living',
      banner: 'https://images.unsplash.com/photo-1583100913832-74dd790b6a9a?w=800',
      logo: 'HE',
      logoGradient: 'from-emerald-500 to-teal-500',
      rating: 4.5,
      productCount: 61,
      products: [
        'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=200',
        'https://images.unsplash.com/photo-1681557010005-568e1a279054?w=200',
        'https://images.unsplash.com/photo-1657524497244-a58edfcec6eb?w=200',
      ],
    },
    {
      name: "Fatima's Kitchen",
      category: 'Food',
      banner: 'https://images.unsplash.com/photo-1762882807447-3534bff2c831?w=800',
      logo: 'FK',
      logoGradient: 'from-rose-500 to-pink-500',
      rating: 4.9,
      productCount: 19,
      products: [
        'https://images.unsplash.com/photo-1760297516529-94efc9e5bc2e?w=200',
        'https://images.unsplash.com/photo-1556327018-5463d38c8ba0?w=200',
        'https://images.unsplash.com/photo-1549665332-82009840ecf0?w=200',
      ],
    },
    {
      name: 'Tech & Gadgets',
      category: 'Electronics',
      banner: 'https://images.unsplash.com/photo-1717295248230-93ea71f48f92?w=800',
      logo: 'TG',
      logoGradient: 'from-slate-600 to-gray-700',
      rating: 4.4,
      productCount: 55,
      products: [
        'https://images.unsplash.com/photo-1717295248494-937c3a5655b1?w=200',
        'https://images.unsplash.com/photo-1717295248521-4c1f2b6bcd6e?w=200',
        'https://images.unsplash.com/photo-1717295248302-543d5a49091f?w=200',
      ],
    },
    {
      name: 'Beauty & Care',
      category: 'Health & Wellness',
      banner: 'https://images.unsplash.com/photo-1668028563825-f3b7138db3de?w=800',
      logo: 'BC',
      logoGradient: 'from-fuchsia-500 to-purple-500',
      rating: 4.7,
      productCount: 38,
      products: [
        'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=200',
        'https://images.unsplash.com/photo-1673908869716-abb13b862661?w=200',
        'https://images.unsplash.com/photo-1658910452951-68bd93e558ca?w=200',
      ],
    },
    {
      name: 'Kids World',
      category: 'Children',
      banner: 'https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?w=800',
      logo: 'KW',
      logoGradient: 'from-sky-400 to-blue-500',
      rating: 4.6,
      productCount: 43,
      products: [
        'https://images.unsplash.com/photo-1771646752406-00f7054fa1b1?w=200',
        'https://images.unsplash.com/photo-1673908869716-abb13b862661?w=200',
        'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=200',
      ],
    },
  ];

  return (
    <section className="bg-[#F8F8F6] py-16">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-[#111111] mb-1" style={{ fontSize: '32px', fontWeight: '700' }}>
              Trending Stores
            </h2>
            <p className="text-[#888888]" style={{ fontSize: '15px' }}>
              The most visited stores this week
            </p>
          </div>
          <button
            className="text-[#1B4FCC] hover:underline flex items-center gap-1"
            style={{ fontSize: '14px', fontWeight: '600' }}
          >
            View All <ArrowRight size={16} />
          </button>
        </div>

        {/* ─── DESKTOP — Bento Grid ─── */}
        <div className="hidden md:grid grid-cols-3 gap-4">

          {/* Card 1 — Large hero, spans 2 cols and 2 rows */}
          <div
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ minHeight: '420px', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
          >
            <ImageWithFallback
              src={stores[0].banner}
              alt={stores[0].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.05) 100%)' }}
            />

            {/* #1 Trending badge */}
            <div
              className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(212,160,23,0.18)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(212,160,23,0.4)',
              }}
            >
              <Flame size={13} style={{ color: '#D4A017' }} />
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#D4A017' }}>#1 Trending</span>
            </div>

            {/* Product thumbnails — top right floating */}
            <div className="absolute top-4 right-4 flex gap-2">
              {stores[0].products.map((product, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-xl overflow-hidden"
                  style={{
                    border: '2px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  }}
                >
                  <ImageWithFallback src={product} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Bottom store info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stores[0].logoGradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    style={{ border: '2px solid rgba(255,255,255,0.3)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                  >
                    <span className="text-white" style={{ fontSize: '14px', fontWeight: '700' }}>{stores[0].logo}</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-1" style={{ fontSize: '22px', fontWeight: '700' }}>{stores[0].name}</h3>
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2 py-0.5 rounded-full text-white"
                        style={{
                          fontSize: '11px',
                          fontWeight: '600',
                          background: 'rgba(255,255,255,0.18)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                        }}
                      >
                        {stores[0].category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star size={11} className="fill-[#D4A017] text-[#D4A017]" />
                        <span className="text-white/80" style={{ fontSize: '12px' }}>
                          {stores[0].rating} · {stores[0].productCount} products
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="px-5 py-2.5 rounded-xl text-[#1B4FCC] flex-shrink-0 transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    fontSize: '13px',
                    fontWeight: '700',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  Visit Store →
                </button>
              </div>
            </div>
          </div>

          {/* Cards 2 & 3 — Medium portrait, right column */}
          {stores.slice(1, 3).map((store, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ minHeight: '200px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
            >
              <ImageWithFallback
                src={store.banner}
                alt={store.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 60%)' }}
              />

              {/* Trending badge */}
              <div
                className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full"
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <Flame size={11} style={{ color: '#D4A017' }} />
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#D4A017' }}>Trending</span>
              </div>

              {/* One product peek */}
              <div
                className="absolute top-3 right-3 w-12 h-12 rounded-xl overflow-hidden"
                style={{ border: '2px solid rgba(255,255,255,0.3)' }}
              >
                <ImageWithFallback src={store.products[0]} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${store.logoGradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                    style={{ border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <span className="text-white" style={{ fontSize: '10px', fontWeight: '700' }}>{store.logo}</span>
                  </div>
                  <div>
                    <p className="text-white" style={{ fontSize: '13px', fontWeight: '600' }}>{store.name}</p>
                    <p className="text-white/60" style={{ fontSize: '10px' }}>{store.category} · {store.productCount} products</p>
                  </div>
                </div>
                <button
                  className="w-full py-1.5 rounded-lg text-white transition-all duration-200"
                  style={{
                    background: 'rgba(27,79,204,0.8)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  Visit Store →
                </button>
              </div>
            </div>
          ))}

          {/* Cards 4, 5, 6 — Compact horizontal, bottom row */}
          {stores.slice(3, 6).map((store, index) => (
            <div
              key={index}
              className="flex rounded-2xl overflow-hidden cursor-pointer group"
              style={{ height: '110px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
            >
              {/* Left — banner thumbnail */}
              <div className="relative flex-shrink-0" style={{ width: '110px' }}>
                <ImageWithFallback
                  src={store.banner}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
                <div
                  className={`absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br ${store.logoGradient} rounded-xl flex items-center justify-center`}
                  style={{ border: '1px solid rgba(255,255,255,0.4)' }}
                >
                  <span className="text-white" style={{ fontSize: '10px', fontWeight: '700' }}>{store.logo}</span>
                </div>
              </div>

              {/* Right — store info */}
              <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <p className="text-[#111111]" style={{ fontSize: '13px', fontWeight: '700', lineHeight: '1.3' }}>
                      {store.name}
                    </p>
                    <Flame size={11} style={{ color: '#D4A017' }} className="flex-shrink-0 mt-0.5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="px-1.5 py-0.5 rounded-md"
                      style={{ fontSize: '10px', fontWeight: '600', color: '#1B4FCC', background: '#EEF3FF' }}
                    >
                      {store.category}
                    </span>
                    <div className="flex items-center gap-0.5">
                      <Star size={9} className="fill-[#D4A017] text-[#D4A017]" />
                      <span style={{ fontSize: '10px', color: '#888888' }}>{store.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {store.products.slice(0, 2).map((product, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100">
                        <ImageWithFallback src={product} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <button className="text-[#1B4FCC]" style={{ fontSize: '11px', fontWeight: '700' }}>
                    Visit →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── MOBILE — Vertical Stack ─── */}
        <div className="md:hidden flex flex-col gap-3">
          {stores.slice(0, 4).map((store, index) => (
            <div
              key={index}
              className="flex rounded-2xl overflow-hidden cursor-pointer"
              style={{ height: '100px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
            >
              {/* Left — banner */}
              <div className="relative flex-shrink-0" style={{ width: '100px' }}>
                <ImageWithFallback
                  src={store.banner}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.22)' }} />
                <div
                  className={`absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br ${store.logoGradient} rounded-xl flex items-center justify-center`}
                  style={{ border: '1px solid rgba(255,255,255,0.4)' }}
                >
                  <span className="text-white" style={{ fontSize: '10px', fontWeight: '700' }}>{store.logo}</span>
                </div>
                {index === 0 && (
                  <div
                    className="absolute top-2 left-2 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      fontSize: '9px',
                      fontWeight: '700',
                      color: '#D4A017',
                    }}
                  >
                    <Flame size={9} style={{ color: '#D4A017' }} />
                    <span>#1</span>
                  </div>
                )}
              </div>

              {/* Right — info */}
              <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[#111111]" style={{ fontSize: '14px', fontWeight: '700' }}>{store.name}</p>
                    <div className="flex items-center gap-0.5">
                      <Star size={10} className="fill-[#D4A017] text-[#D4A017]" />
                      <span style={{ fontSize: '11px', color: '#888888' }}>{store.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="px-1.5 py-0.5 rounded-md"
                      style={{ fontSize: '10px', fontWeight: '600', color: '#1B4FCC', background: '#EEF3FF' }}
                    >
                      {store.category}
                    </span>
                    <span style={{ fontSize: '10px', color: '#888888' }}>{store.productCount} products</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {store.products.slice(0, 2).map((product, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100">
                        <ImageWithFallback src={product} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <button
                    className="px-3 py-1.5 rounded-lg text-white"
                    style={{
                      background: 'linear-gradient(135deg, #1B4FCC, #2563EB)',
                      fontSize: '11px',
                      fontWeight: '700',
                      boxShadow: '0 2px 8px rgba(27,79,204,0.3)',
                    }}
                  >
                    Visit →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}