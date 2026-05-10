import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3E]/95 backdrop-blur-xl text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#1B4FCC] flex items-center justify-center">
                <span className="text-white font-bold" style={{ fontSize: '16px' }}>US</span>
              </div>
              <span className="font-bold" style={{ fontSize: '18px' }}>Ummah Square</span>
            </div>
            <p className="text-white/70" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Nigeria's premier marketplace for verified Muslim-owned businesses.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 - Marketplace */}
          <div>
            <h4 className="mb-4" style={{ fontSize: '16px', fontWeight: '600' }}>Marketplace</h4>
            <ul className="space-y-3">
              {['Home', 'Discover Stores', 'All Vendors', 'My Orders', 'Track Order'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="mb-4" style={{ fontSize: '16px', fontWeight: '600' }}>Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Contact', 'Help Center'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Become a Vendor CTA */}
          <div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 space-y-4">
              <h4 style={{ fontSize: '16px', fontWeight: '600' }}>Become a Vendor</h4>
              <p className="text-white/70" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                Join hundreds of verified Muslim-owned businesses on our platform.
              </p>
              <button className="w-full px-6 py-3 bg-[#1B4FCC] hover:bg-[#1640b0] text-white rounded-full transition-colors" style={{ fontSize: '14px', fontWeight: '600' }}>
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60" style={{ fontSize: '13px' }}>
            <p>&copy; 2026 Ummah Square. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
