import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function FeaturedStore() {
  const products = [
    { name: 'Elegant Hijab Set', price: '₦15,000', image: 'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=400' },
    { name: 'Modest Abaya', price: '₦25,000', image: 'https://images.unsplash.com/photo-1668028563825-f3b7138db3de?w=400' },
    { name: 'Premium Khimar', price: '₦18,000', image: 'https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?w=400' },
  ];

  return (
    <section className="bg-[#1B4FCC] py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Desktop Label - Hidden on Mobile */}
        <div className="hidden lg:block text-[#D4A017] mb-6 tracking-wider" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px' }}>
          FEATURED STORE
        </div>

        {/* Mobile Layout - Shows only on screens < 1024px */}
        <div className="lg:hidden mx-auto" style={{ maxWidth: '375px' }}>
         <div className="mx-4 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.25)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}>
            {/* Banner with overlay label */}
            <div className="relative h-40">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=800"
                alt="Store Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-3 left-3 text-[#D4A017] tracking-wider" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                FEATURED STORE
              </div>
              {/* Store Avatar - Overlapping */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <span className="text-white" style={{ fontSize: '20px', fontWeight: '700' }}>AB</span>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="pt-10 px-4 pb-5 space-y-4">
              <div className="text-center">
                <h2 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: '700' }}>Aisha's Boutique</h2>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="inline-block px-3 py-1 bg-[#D4A017] rounded-full text-white" style={{ fontSize: '11px', fontWeight: '600' }}>
                    Fashion & Clothing
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-[#D4A017] text-[#D4A017]" />
                      ))}
                    </div>
                    <span className="text-[#888888]" style={{ fontSize: '11px' }}>(248)</span>
                  </div>
                </div>
                <p className="text-white/70 italic max-w-[280px] mx-auto truncate" style={{ fontSize: '13px' }}>
                  Premium modest fashion for the modern Muslim woman
                </p>
              </div>

              {/* Horizontal Scroll Product Thumbnails */}
              <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
                {products.map((product, index) => (
                  <div key={index} className="flex-shrink-0" style={{ width: '100px' }}>
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-white truncate" style={{ fontSize: '12px', fontWeight: '600' }}>{product.name}</h4>
                    <p className="text-[#D4A017]" style={{ fontSize: '13px', fontWeight: '700' }}>{product.price}</p>
                  </div>
                ))}
              </div>

              {/* Visit Store Button */}
              <button className="w-full h-12 bg-white text-[#1B4FCC] rounded-full hover:bg-[#1640b0] transition-colors" style={{ fontSize: '15px', fontWeight: '600' }}>
                Visit Store →
              </button>
            </div>
          </div>

          {/* Pagination Dots - Mobile */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Desktop Layout - Shows only on screens >= 1024px */}
        <div className="hidden lg:block">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">
              {/* Left - Store Identity */}
              <div
                className="relative p-8 flex flex-col justify-center items-center text-center space-y-4"
                style={{
                  backgroundImage: 'linear-gradient(rgba(13, 27, 62, 0.85), rgba(13, 27, 62, 0.85)), url(https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <span className="text-white" style={{ fontSize: '32px', fontWeight: '700' }}>AB</span>
                </div>
                <div>
                  <h2 className="text-white mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>Aisha's Boutique</h2>
                  <div className="inline-block px-4 py-1.5 bg-[#D4A017] rounded-full text-white mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                    Fashion & Clothing
                  </div>
                  <p className="text-white/90 italic max-w-[280px] mx-auto" style={{ fontSize: '14px' }}>
                    "Premium modest fashion for the modern Muslim woman"
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#D4A017] text-[#D4A017]" />
                    ))}
                  </div>
                  <span className="text-white/80" style={{ fontSize: '13px' }}>(248 reviews)</span>
                </div>
                <button className="px-8 py-3 bg-white text-[#1B4FCC] rounded-full hover:bg-gray-100 transition-colors" style={{ fontSize: '15px', fontWeight: '600' }}>
                  Visit Store →
                </button>
              </div>

              {/* Right - Product Preview */}
              <div className="bg-white/5 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {products.map((product, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="aspect-square bg-gray-100">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 space-y-1">
                        <h4 className="text-[#111111]" style={{ fontSize: '14px', fontWeight: '600' }}>{product.name}</h4>
                        <p className="text-[#1B4FCC]" style={{ fontSize: '16px', fontWeight: '700' }}>{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-white/60 text-center" style={{ fontSize: '13px' }}>
                  12 products available
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots - Desktop */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
