import { Star, Shield, CheckCircle, ArrowRight, Flame, MapPin, Wrench, UtensilsCrossed, Laptop, Sparkles, PartyPopper, Moon, Heart, MessageCircle, Zap, Plus } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryPills from './components/CategoryPills';
import FeaturedStore from './components/FeaturedStore';
import TrendingStores from './components/TrendingStores';
import Footer from './components/Footer';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategoryPills />
      <FeaturedStore />

      {/* NEW ARRIVALS */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
  <div className="flex items-end justify-between mb-8">
    <div>
      <h2 className="text-[#111111] mb-1" style={{ fontSize: '32px', fontWeight: '700' }}>
        New Arrivals
      </h2>
      <p className="text-[#888888]" style={{ fontSize: '15px' }}>
        Fresh from our vendors
      </p>
    </div>
    <button className="text-[#1B4FCC] hover:underline flex items-center gap-1" style={{ fontSize: '14px', fontWeight: '600' }}>
      View All <ArrowRight size={16} />
    </button>
  </div>

  <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
    {[
      { name: 'Premium Hijab', store: "Aisha's Boutique", price: '₦12,500', img: 'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=400', logoGradient: 'from-purple-500 to-pink-500', rating: 4.9, reviews: 87, verified: true, location: 'Lagos', distance: '2.3 km', category: 'Fashion' },
      { name: 'Modest Dress', store: 'ModestWear', price: '₦28,000', img: 'https://images.unsplash.com/photo-1668028563825-f3b7138db3de?w=400', logoGradient: 'from-indigo-500 to-purple-500', rating: 4.8, reviews: 124, verified: true, location: 'Abuja', distance: '1.8 km', category: 'Fashion' },
      { name: 'Islamic Wall Art', store: 'HomeDecor Plus', price: '₦8,500', img: 'https://images.unsplash.com/photo-1540200049848-d9813ea0e120?w=400', logoGradient: 'from-emerald-500 to-teal-500', rating: 4.7, reviews: 56, verified: false, location: 'Kano', distance: '4.5 km', category: 'Home & Living' },
      { name: 'Prayer Beads', store: 'Modest Accessories', price: '₦3,200', img: 'https://images.unsplash.com/photo-1658910452951-68bd93e558ca?w=400', logoGradient: 'from-amber-500 to-yellow-400', rating: 5.0, reviews: 43, verified: true, location: 'Ibadan', distance: '3.2 km', category: 'Accessories' },
      { name: 'Halal Spices Set', store: 'SpiceHub', price: '₦5,000', img: 'https://images.unsplash.com/photo-1760297516529-94efc9e5bc2e?w=400', logoGradient: 'from-orange-500 to-red-500', rating: 4.6, reviews: 92, verified: true, location: 'Lagos', distance: '1.5 km', category: 'Food & Groceries' },
      { name: 'Abaya Collection', store: "Aisha's Boutique", price: '₦35,000', img: 'https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?w=400', logoGradient: 'from-purple-500 to-pink-500', rating: 4.9, reviews: 87, verified: true, location: 'Lagos', distance: '2.3 km', category: 'Fashion' },
    ].map((product, index) => (
      <div
        key={index}
        className="flex-shrink-0 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{
          width: '220px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(27,79,204,0.15)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)'}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
          <ImageWithFallback
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
          />

          {/* Location pill — glass */}
          <div
            className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-1 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: '10px',
              fontWeight: '600',
              color: 'white',
            }}
          >
            <MapPin size={9} />
            <span>{product.location} · {product.distance}</span>
          </div>

          {/* Heart button — glass */}
          <button
            className="absolute top-2.5 right-2.5 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
            }}
          >
            <Heart size={13} className="text-white" />
          </button>

          {/* NEW badge — glass */}
          <div
            className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(27,79,204,0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              fontSize: '10px',
              fontWeight: '700',
              color: 'white',
              letterSpacing: '0.5px',
            }}
          >
            NEW
          </div>

          {/* Category tag — glass */}
          <div
            className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '9px',
              fontWeight: '600',
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '0.3px',
            }}
          >
            {product.category}
          </div>
        </div>

        {/* Card Body — solid white */}
        <div className="p-3 space-y-2">
          {/* Product Name */}
          <h4 className="text-[#111111] line-clamp-2" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.4' }}>
            {product.name}
          </h4>

          {/* Vendor + Verified */}
          <div className="flex items-center gap-1.5">
            <div className={`w-5 h-5 bg-gradient-to-br ${product.logoGradient} rounded-full flex-shrink-0`}></div>
            <button className="text-[#1B4FCC] hover:underline truncate flex-1 text-left" style={{ fontSize: '12px', fontWeight: '500' }}>
              {product.store}
            </button>
            {product.verified && (
              <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-[#1A7A4A]/10 rounded flex-shrink-0" style={{ fontSize: '10px', fontWeight: '600', color: '#1A7A4A' }}>
                <CheckCircle size={9} />
                <span>Verified</span>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-[#888888]" style={{ fontSize: '11px' }}>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-[#D4A017] text-[#D4A017]' : 'text-gray-300'} />
              ))}
            </div>
            <span>{product.rating} · {product.reviews} reviews</span>
          </div>

          {/* Price + Chat */}
          <div className="flex items-center justify-between pt-0.5">
            <p className="text-[#1B4FCC]" style={{ fontSize: '16px', fontWeight: '700' }}>
              {product.price}
            </p>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(27,79,204,0.06)',
                border: '1px solid rgba(27,79,204,0.15)',
              }}
            >
              <MessageCircle size={14} className="text-[#1B4FCC]" />
            </button>
          </div>

          {/* View Product */}
          <button
            className="w-full py-2 text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #1B4FCC 0%, #2563EB 100%)',
              fontSize: '13px',
              fontWeight: '600',
              boxShadow: '0 2px 8px rgba(27,79,204,0.3)',
            }}
          >
            View Product
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
      </section>

      <TrendingStores />

      {/* BEST SELLERS */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-[#111111] mb-1 flex items-center gap-2" style={{ fontSize: '32px', fontWeight: '700' }}>
                Best Sellers
                <Flame size={28} className="text-[#D4A017]" />
              </h2>
              <p className="text-[#888888]" style={{ fontSize: '15px' }}>
                What everyone's buying
              </p>
            </div>
            <button className="text-[#1B4FCC] hover:underline flex items-center gap-1" style={{ fontSize: '14px', fontWeight: '600' }}>
              SEE ALL <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {[
              { name: 'Professional Laptop Pro', store: "Aisha's Boutique", price: '₦299,999', img: 'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=600', rating: 4.9, reviews: 128, logo: 'https://ui-avatars.com/api/?name=AB&background=a855f7&color=fff&size=32' },
              { name: 'Gaming Console & Controllers', store: 'ModestWear', price: '₦149,999', img: 'https://images.unsplash.com/photo-1668028563825-f3b7138db3de?w=600', rating: 4.8, reviews: 89, logo: 'https://ui-avatars.com/api/?name=MW&background=6366f1&color=fff&size=32' },
              { name: 'Wireless Earbuds Pro', store: 'Halal Spice Hub', price: '₦45,000', img: 'https://images.unsplash.com/photo-1760297516529-94efc9e5bc2e?w=600', rating: 4.7, reviews: 256, logo: 'https://ui-avatars.com/api/?name=HS&background=f97316&color=fff&size=32' },
              { name: 'Professional Camera', store: 'Modest Accessories', price: '₦189,000', img: 'https://images.unsplash.com/photo-1658910452951-68bd93e558ca?w=600', rating: 5.0, reviews: 67, logo: 'https://ui-avatars.com/api/?name=MA&background=f59e0b&color=fff&size=32' },
              { name: 'Premium Hijab Set', store: "Aisha's Boutique", price: '₦22,000', img: 'https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?w=600', rating: 4.9, reviews: 143, logo: 'https://ui-avatars.com/api/?name=AB&background=a855f7&color=fff&size=32' },
              { name: 'Islamic Art Collection', store: 'Home Essentials', price: '₦12,500', img: 'https://images.unsplash.com/photo-1540200049848-d9813ea0e120?w=600', rating: 4.6, reviews: 92, logo: 'https://ui-avatars.com/api/?name=HE&background=10b981&color=fff&size=32' },
            ].map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/20 transition-all duration-300"
                style={{ width: '320px' }}
              >
                <div className="flex h-32">
                  {/* Product Image */}
                  <div className="relative w-32 h-32 bg-gray-100 flex-shrink-0">
                    <ImageWithFallback
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Heart Icon */}
                    <button className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                      <Heart size={14} className="text-gray-600" />
                    </button>
                    {/* HOT Badge */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#D4A017] text-white rounded" style={{ fontSize: '9px', fontWeight: '700' }}>
                      HOT
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 p-3 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[#111111] line-clamp-2 mb-1" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.3' }}>
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={11}
                              className={i < Math.floor(product.rating) ? 'fill-[#D4A017] text-[#D4A017]' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="text-[#111111]" style={{ fontSize: '11px', fontWeight: '600' }}>
                          {product.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ImageWithFallback
                          src={product.logo}
                          alt={product.store}
                          className="w-4 h-4 rounded-full flex-shrink-0"
                        />
                        <button className="text-[#888888] hover:text-[#1B4FCC] transition-colors text-left" style={{ fontSize: '11px' }}>
                          {product.store}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[#1B4FCC]" style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1' }}>
                          {product.price}
                        </p>
                      </div>
                      <button className="w-8 h-8 bg-[#1B4FCC] rounded-full flex items-center justify-center hover:bg-[#1640b0] transition-colors shadow-sm">
                        <Plus size={16} className="text-white" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEAR YOU */}
      <section className="bg-[#EEF3FF] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-[#111111] mb-1" style={{ fontSize: '32px', fontWeight: '700' }}>
                Near You
              </h2>
              <p className="text-[#888888]" style={{ fontSize: '15px' }}>
                Stores in your area
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-white/60 backdrop-blur-lg border border-white/20 rounded-full shadow-sm flex items-center gap-2">
                <MapPin size={14} className="text-[#1B4FCC]" />
                <span className="text-[#111111]" style={{ fontSize: '14px', fontWeight: '500' }}>Lagos, NG</span>
              </div>
              <button className="text-[#1B4FCC] hover:underline" style={{ fontSize: '13px' }}>
                Edit
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Aisha's Boutique",
                distance: '2.3km',
                category: 'Fashion',
                banner: 'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=800',
                logo: 'AB',
                logoGradient: 'from-purple-500 to-pink-500',
                products: [
                  'https://images.unsplash.com/photo-1668028563825-f3b7138db3de?w=200',
                  'https://images.unsplash.com/photo-1673908869716-abb13b862661?w=200',
                  'https://images.unsplash.com/photo-1771646752406-00f7054fa1b1?w=200',
                ]
              },
              {
                name: 'Halal Spice Hub',
                distance: '1.8km',
                category: 'Food',
                banner: 'https://images.unsplash.com/photo-1760297516529-94efc9e5bc2e?w=800',
                logo: 'HS',
                logoGradient: 'from-orange-500 to-red-500',
                products: [
                  'https://images.unsplash.com/photo-1762882807447-3534bff2c831?w=200',
                  'https://images.unsplash.com/photo-1556327018-5463d38c8ba0?w=200',
                  'https://images.unsplash.com/photo-1549665332-82009840ecf0?w=200',
                ]
              },
              {
                name: 'Islamic Books Corner',
                distance: '3.5km',
                category: 'Books',
                banner: 'https://images.unsplash.com/photo-1592277258026-46ddfd932df3?w=800',
                logo: 'IB',
                logoGradient: 'from-blue-600 to-cyan-500',
                products: [
                  'https://images.unsplash.com/photo-1554788625-51d9860bdb28?w=200',
                  'https://images.unsplash.com/photo-1652958947171-8e1c1bdcdf79?w=200',
                  'https://images.unsplash.com/photo-1592278423578-4b83c89859ac?w=200',
                ]
              },
              {
                name: 'Home Essentials',
                distance: '4.2km',
                category: 'Home',
                banner: 'https://images.unsplash.com/photo-1583100913832-74dd790b6a9a?w=800',
                logo: 'HE',
                logoGradient: 'from-emerald-500 to-teal-500',
                products: [
                  'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=200',
                  'https://images.unsplash.com/photo-1681557010005-568e1a279054?w=200',
                  'https://images.unsplash.com/photo-1657524497244-a58edfcec6eb?w=200',
                ]
              },
              {
                name: 'Modest Accessories',
                distance: '2.9km',
                category: 'Accessories',
                banner: 'https://images.unsplash.com/photo-1658910452951-68bd93e558ca?w=800',
                logo: 'MA',
                logoGradient: 'from-amber-500 to-yellow-400',
                products: [
                  'https://images.unsplash.com/photo-1658910453009-edc8774f1133?w=200',
                  'https://images.unsplash.com/photo-1601057836821-05feaedbac1c?w=200',
                  'https://images.unsplash.com/photo-1724896728449-fae038f93e59?w=200',
                ]
              },
              {
                name: "Fatima's Kitchen",
                distance: '1.5km',
                category: 'Food',
                banner: 'https://images.unsplash.com/photo-1762882807447-3534bff2c831?w=800',
                logo: 'FK',
                logoGradient: 'from-rose-500 to-pink-500',
                products: [
                  'https://images.unsplash.com/photo-1760297516529-94efc9e5bc2e?w=200',
                  'https://images.unsplash.com/photo-1556327018-5463d38c8ba0?w=200',
                  'https://images.unsplash.com/photo-1549665332-82009840ecf0?w=200',
                ]
              },
            ].map((store, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-36">
                  <ImageWithFallback
                    src={store.banner}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 right-2 px-3 py-1 bg-white rounded-full flex items-center gap-1.5 shadow-md">
                    <MapPin size={12} className="text-[#1B4FCC]" />
                    <span className="text-[#111111]" style={{ fontSize: '12px', fontWeight: '600' }}>{store.distance} away</span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className={`w-10 h-10 bg-gradient-to-br ${store.logoGradient} rounded-full flex items-center justify-center border-2 border-white shadow-lg`}>
                      <span className="text-white" style={{ fontSize: '12px', fontWeight: '700' }}>
                        {store.logo}
                      </span>
                    </div>
                    <span className="text-white" style={{ fontSize: '15px', fontWeight: '600', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
                      {store.name}
                    </span>
                  </div>
                </div>

                {/* 3-Thumbnail Product Strip */}
                <div className="px-4 py-3 border-t border-gray-100">
                  <div className="flex gap-2">
                    {store.products.map((product, pIndex) => (
                      <div key={pIndex} className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={product}
                          alt={`Product ${pIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-4 pb-4 flex items-center justify-between">
                  <span className="text-[#888888]" style={{ fontSize: '13px' }}>{store.category}</span>
                  <button className="text-[#1B4FCC] hover:underline" style={{ fontSize: '13px', fontWeight: '600' }}>
                    Visit Store →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY EDITORIAL BLOCKS */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
  <div className="flex items-end justify-between mb-8">
    <div>
      <h2 className="text-[#111111] mb-1" style={{ fontSize: '32px', fontWeight: '700' }}>
        Shop by Category
      </h2>
      <p className="text-[#888888]" style={{ fontSize: '15px' }}>
        Find exactly what you're looking for
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* Left — Large block */}
    <div
      className="relative rounded-2xl overflow-hidden group cursor-pointer md:col-span-1"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '280px',
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-300 group-hover:opacity-90"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.05) 100%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
        <span
          className="inline-block px-2.5 py-1 rounded-full mb-1"
          style={{
            fontSize: '11px',
            fontWeight: '600',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          48 products
        </span>
        <h3 style={{ fontSize: '24px', fontWeight: '700' }}>Fashion & Clothing</h3>
        <button
          className="flex items-center gap-2 text-white transition-all duration-200 group-hover:gap-3"
          style={{ fontSize: '13px', fontWeight: '600' }}
        >
          Shop Now →
        </button>
      </div>
    </div>

    {/* Middle — Two stacked small blocks */}
    <div className="md:col-span-1 flex flex-col gap-4">
      {/* Food */}
      <div
        className="relative rounded-2xl overflow-hidden group cursor-pointer"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1760297516529-94efc9e5bc2e?w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '200px',
        }}
      >
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.1) 70%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-1">
          <span
            className="inline-block px-2 py-0.5 rounded-full mb-0.5"
            style={{
              fontSize: '10px',
              fontWeight: '600',
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            34 products
          </span>
          <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Food & Groceries</h3>
          <button
            className="text-white/80 hover:text-white transition-colors"
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            Shop Now →
          </button>
        </div>
      </div>

      {/* Books */}
      <div
        className="relative rounded-2xl overflow-hidden group cursor-pointer"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '200px',
        }}
      >
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.1) 70%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-1">
          <span
            className="inline-block px-2 py-0.5 rounded-full mb-0.5"
            style={{
              fontSize: '10px',
              fontWeight: '600',
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            21 products
          </span>
          <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Books & Media</h3>
          <button
            className="text-white/80 hover:text-white transition-colors"
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            Shop Now →
          </button>
        </div>
      </div>
    </div>

    {/* Right — Large block */}
    <div
      className="relative rounded-2xl overflow-hidden group cursor-pointer md:col-span-1"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1583100913832-74dd790b6a9a?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '280px',
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-300 group-hover:opacity-90"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.05) 100%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
        <span
          className="inline-block px-2.5 py-1 rounded-full mb-1"
          style={{
            fontSize: '11px',
            fontWeight: '600',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          15 products
        </span>
        <h3 style={{ fontSize: '24px', fontWeight: '700' }}>Home & Living</h3>
        <button
          className="flex items-center gap-2 text-white transition-all duration-200 group-hover:gap-3"
          style={{ fontSize: '13px', fontWeight: '600' }}
        >
          Shop Now →
        </button>
      </div>
    </div>

  </div>
</div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F8F8F6] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-[#111111] mb-1" style={{ fontSize: '32px', fontWeight: '700' }}>
              Need a Service?
            </h2>
            <p className="text-[#888888]" style={{ fontSize: '15px' }}>
              Professional services from trusted providers
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {[
              {
                title: 'Professional House Cleaning Service',
                provider: 'Ahmed Repairs',
                image: 'https://images.unsplash.com/photo-1657524497244-a58edfcec6eb?w=800',
                providerImage: 'https://ui-avatars.com/api/?name=Ahmed+Repairs&background=1B4FCC&color=fff&size=80',
                rating: 4.8,
                reviews: 124,
                distance: '1.2 km',
                price: '₦2,500',
                priceUnit: '/HR',
                available: true,
                verified: true
              },
              {
                title: 'Premium Halal Catering Services',
                provider: 'Fatima\'s Kitchen',
                image: 'https://images.unsplash.com/photo-1762882807447-3534bff2c831?w=800',
                providerImage: 'https://ui-avatars.com/api/?name=Fatima+Kitchen&background=D4A017&color=fff&size=80',
                rating: 5.0,
                reviews: 89,
                distance: '2.5 km',
                price: '₦15,000',
                priceUnit: '/EVENT',
                available: true,
                verified: true
              },
              {
                title: 'IT Support & Computer Repair',
                provider: 'Tech Solutions',
                image: 'https://images.unsplash.com/photo-1717295248230-93ea71f48f92?w=800',
                providerImage: 'https://ui-avatars.com/api/?name=Tech+Solutions&background=6366f1&color=fff&size=80',
                rating: 4.5,
                reviews: 67,
                distance: '3.8 km',
                price: '₦3,000',
                priceUnit: '/HR',
                available: false,
                verified: true
              },
              {
                title: 'Plumbing & Home Maintenance',
                provider: 'Al-Amin Services',
                image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
                providerImage: 'https://ui-avatars.com/api/?name=Al+Amin&background=10b981&color=fff&size=80',
                rating: 4.9,
                reviews: 156,
                distance: '1.8 km',
                price: '₦2,000',
                priceUnit: '/HR',
                available: true,
                verified: true
              },
              {
                title: 'Event Planning & Decoration',
                provider: 'Halal Events Co',
                image: 'https://images.unsplash.com/photo-1540200049848-d9813ea0e120?w=800',
                providerImage: 'https://ui-avatars.com/api/?name=Halal+Events&background=ec4899&color=fff&size=80',
                rating: 4.7,
                reviews: 92,
                distance: '4.2 km',
                price: '₦25,000',
                priceUnit: '/EVENT',
                available: true,
                verified: false
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 transition-all cursor-pointer"
                style={{ width: '300px' }}
              >
                {/* Service Image */}
                <div className="relative h-48">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Available Badge */}
                  {service.available && (
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#1A7A4A] rounded-full flex items-center gap-1.5 shadow-lg">
                      <Zap size={12} className="text-white fill-white" />
                      <span className="text-white" style={{ fontSize: '11px', fontWeight: '600' }}>Available Now</span>
                    </div>
                  )}

                  {/* Provider Avatar */}
                  <div className="absolute -bottom-6 left-4">
                    <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                      <ImageWithFallback
                        src={service.providerImage}
                        alt={service.provider}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="pt-8 px-4 pb-4 space-y-3">
                  <div>
                    <h4 className="text-[#111111] mb-1 line-clamp-2" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.4' }}>
                      {service.title}
                    </h4>
                    <p className="text-[#888888]" style={{ fontSize: '13px' }}>
                      by {service.provider}
                    </p>
                  </div>

                  {/* Rating & Distance */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-[#D4A017] text-[#D4A017]" />
                      <span className="text-[#111111]" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {service.rating}
                      </span>
                      <span className="text-[#888888]" style={{ fontSize: '13px' }}>
                        ({service.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#888888]" style={{ fontSize: '13px' }}>
                      <MapPin size={12} />
                      <span>{service.distance}</span>
                    </div>
                  </div>

                  {/* Price & Verified */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#111111]" style={{ fontSize: '20px', fontWeight: '700' }}>
                        {service.price}
                      </span>
                      <span className="text-[#888888]" style={{ fontSize: '13px' }}>
                        {service.priceUnit}
                      </span>
                    </div>
                    {service.verified && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-[#1A7A4A]/10 rounded" style={{ fontSize: '11px', fontWeight: '600', color: '#1A7A4A' }}>
                        <CheckCircle size={12} />
                        <span>VERIFIED</span>
                      </div>
                    )}
                  </div>

                  {/* View Details Button & Chat */}
                  <div className="flex items-center gap-2">
                    <button className="flex-1 px-4 py-3 bg-[#1B4FCC] text-white rounded-xl hover:bg-[#1640b0] transition-colors flex items-center justify-center gap-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M2 6H14" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M5 1V3M11 1V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      View Details
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-xl hover:border-[#1B4FCC] hover:bg-[#1B4FCC]/5 transition-colors">
                      <MessageCircle size={20} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white/60 backdrop-blur-xl py-12 border-t border-b border-white/20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-[#1B4FCC]/10 rounded-full flex items-center justify-center">
                <Shield className="text-[#1B4FCC]" size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[#111111] mb-1" style={{ fontSize: '16px', fontWeight: '600' }}>
                  Escrow Protection
                </h4>
                <p className="text-[#888888]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  Your money is safe until delivery is confirmed
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-[#1B4FCC]/10 rounded-full flex items-center justify-center">
                <CheckCircle className="text-[#1B4FCC]" size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[#111111] mb-1" style={{ fontSize: '16px', fontWeight: '600' }}>
                  Verified Vendors
                </h4>
                <p className="text-[#888888]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  Every store is reviewed and approved by our team
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-[#D4A017]/10 rounded-full flex items-center justify-center">
                <Moon size={24} className="text-[#D4A017]" strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[#111111] mb-1" style={{ fontSize: '16px', fontWeight: '600' }}>
                  Halal Certified
                </h4>
                <p className="text-[#888888]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  Committed to ethical, halal commerce
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
