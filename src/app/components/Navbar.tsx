import { Search, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '../lib/cart';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount, openCart } = useCart();

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
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] border-b border-white/20'
          : 'bg-white/70 backdrop-blur-lg border-b border-white/10'
      }`}
      style={{ height: '64px' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="shrink-0" aria-label="Ummah Square home">
          <Logo size={32} hideWordmarkOnMobile />
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-[500px] hidden sm:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-meta" size={18} />
            <input
              type="text"
              placeholder="Search stores, products, brands..."
              aria-label="Search the marketplace"
              className="w-full h-11 pl-11 pr-4 rounded-full border border-white/20 bg-white/60 backdrop-blur-lg focus:outline-none focus:border-brand transition-colors"
              style={{ fontSize: '14px' }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={openCart}
            aria-label={`Open cart${itemCount ? ` (${itemCount} items)` : ''}`}
            className="relative p-2 hover:bg-surface-alt rounded-lg transition-colors"
          >
            <ShoppingCart size={22} className="text-body-text" />
            {itemCount > 0 && (
              <span
                className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-brand text-white rounded-full flex items-center justify-center"
                style={{ fontSize: '11px', fontWeight: 600 }}
              >
                {itemCount}
              </span>
            )}
          </button>
          <button className="text-body-text hover:text-brand transition-colors hidden sm:block" style={{ fontSize: '14px' }}>
            Sign In
          </button>
          <button
            className="px-5 py-2 bg-brand text-white rounded-full hover:bg-brand-strong transition-colors"
            style={{ fontSize: '14px' }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
