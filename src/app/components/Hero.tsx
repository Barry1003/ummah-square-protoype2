import { Search, CheckCircle, Shield, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden" style={{ height: '520px', backgroundColor: '#EEF3FF' }}>
      {/* Islamic geometric pattern background */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231B4FCC' fill-rule='evenodd'%3E%3Cpath d='M40 0l20 20-20 20-20-20L40 0zm0 40l20 20-20 20-20-20 20-20zM0 40l20 20-20 20V40zm80 0v40l-20-20 20-20zM0 0l20 20L0 40V0zm80 0v40L60 20 80 0z' opacity='0.15'/%3E%3Cpath d='M20 20h20v20H20V20zm40 0h20v20H60V20zM20 60h20v20H20V60zm40 0h20v20H60V60z' opacity='0.1'/%3E%3Ccircle cx='40' cy='40' r='3' opacity='0.2'/%3E%3Ccircle cx='20' cy='20' r='2' opacity='0.15'/%3E%3Ccircle cx='60' cy='20' r='2' opacity='0.15'/%3E%3Ccircle cx='20' cy='60' r='2' opacity='0.15'/%3E%3Ccircle cx='60' cy='60' r='2' opacity='0.15'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 h-full items-center">
          {/* Left Column - Text and Search */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-[#1B4FCC] tracking-wider" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px' }}>
                NIGERIA'S MUSLIM MARKETPLACE
              </div>
              <h1 className="leading-tight">
                <span className="block text-[#111111]" style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1' }}>
                  Shop Local.
                </span>
                <span className="block text-[#D4A017]" style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1' }}>
                  Shop Halal.
                </span>
              </h1>
              <p className="text-[#444444] max-w-[500px]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Discover verified Muslim-owned stores across Nigeria — from fashion to food to services.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-[600px]">
              <div className="flex items-center bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(27,79,204,0.15)]" style={{ height: '56px' }}>
                <Search className="absolute left-5 text-[#888888]" size={20} />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-1 pl-14 pr-4 bg-transparent focus:outline-none text-[#111111]"
                  style={{ fontSize: '15px' }}
                />
                <div className="flex items-center gap-2 px-3">
                  <button className="px-4 py-1.5 rounded-full bg-[#F8F8F6] text-[#444444] hover:bg-[#1B4FCC] hover:text-white transition-colors" style={{ fontSize: '13px' }}>
                    Products
                  </button>
                  <button className="px-4 py-1.5 rounded-full text-[#444444] hover:bg-[#F8F8F6] transition-colors" style={{ fontSize: '13px' }}>
                    Services
                  </button>
                </div>
                <button className="mr-1 px-6 h-12 bg-[#1B4FCC] text-white rounded-full hover:bg-[#1640b0] transition-colors" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Search
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-6 text-[#444444]" style={{ fontSize: '13px' }}>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-[#1A7A4A]" />
                <span>Verified Vendors</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={16} className="text-[#1B4FCC]" />
                <span>Escrow Protected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-[#D4A017]" />
                <span>Local First</span>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Store Card Preview */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500"
              style={{
                width: '320px',
                boxShadow: '0 25px 50px rgba(27, 79, 204, 0.25), 0 10px 20px rgba(27, 79, 204, 0.15), 0 5px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Store Banner with real image */}
              <div className="relative h-28 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=800"
                  alt="Store Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                {/* Store Logo - proper circular image placeholder */}
                <div className="absolute -bottom-8 left-4">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#D4A017] to-[#b8860b] flex items-center justify-center">
                      <span className="text-white" style={{ fontSize: '20px', fontWeight: '700' }}>AB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Store Info */}
              <div className="pt-10 px-4 pb-3 space-y-3">
                <div>
                  <h3 className="text-[#111111] mb-0.5" style={{ fontSize: '17px', fontWeight: '600' }}>Aisha's Boutique</h3>
                  <p className="text-[#888888]" style={{ fontSize: '12px' }}>Premium Modest Fashion</p>
                </div>

                {/* 3-Thumbnail Product Strip */}
                <div className="flex gap-1.5 border-t border-gray-100 pt-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1668028554854-245f8ccae15b?w=200"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1668028563825-f3b7138db3de?w=200"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?w=200"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
