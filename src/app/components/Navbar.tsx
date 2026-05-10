import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] border-b border-white/20' : 'bg-white/70 backdrop-blur-lg border-b border-white/10'
      }`}
      style={{ height: '64px' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1B4FCC] flex items-center justify-center">
            <span className="text-white font-bold">US</span>
          </div>
          <span className="font-bold text-[#111111]" style={{ fontSize: '18px' }}>Ummah Square</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-[500px]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]" size={18} />
            <input
              type="text"
              placeholder="Search stores, products, brands..."
              className="w-full h-11 pl-11 pr-4 rounded-full border border-white/20 bg-white/60 backdrop-blur-lg focus:outline-none focus:border-[#1B4FCC] transition-colors"
              style={{ fontSize: '14px' }}
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <ShoppingCart size={22} className="text-[#444444]" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#1B4FCC] text-white rounded-full flex items-center justify-center" style={{ fontSize: '11px' }}>
              3
            </span>
          </button>
          <button className="text-[#444444] hover:text-[#1B4FCC] transition-colors" style={{ fontSize: '14px' }}>
            Sign In
          </button>
          <button className="px-5 py-2 bg-[#1B4FCC] text-white rounded-full hover:bg-[#1640b0] transition-colors" style={{ fontSize: '14px' }}>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
