import { Shirt, UtensilsCrossed, Wrench, Sparkles, BookOpen, Home, Heart, LayoutGrid } from 'lucide-react';

export default function CategoryPills() {
  const categories = [
    { icon: Shirt, label: 'Fashion' },
    { icon: UtensilsCrossed, label: 'Food & Groceries' },
    { icon: Wrench, label: 'Services' },
    { icon: Sparkles, label: 'Accessories' },
    { icon: BookOpen, label: 'Books & Media' },
    { icon: Home, label: 'Home & Living' },
    { icon: Heart, label: 'Health & Wellness' },
    { icon: LayoutGrid, label: 'All Categories' },
  ];

  return (
    <section
      className="py-6"
      style={{
        background: 'linear-gradient(135deg, #EEF3FF 0%, #E8EEFF 100%)',
        borderBottom: '1px solid rgba(27,79,204,0.08)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h3
          className="mb-4"
          style={{ fontSize: '14px', fontWeight: '500', color: '#444444' }}
        >
          Browse by category
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-200"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(27, 79, 204, 0.15)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 8px rgba(27,79,204,0.08)',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#1B4FCC',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(27,79,204,0.12)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 16px rgba(27,79,204,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 8px rgba(27,79,204,0.08)';
                }}
              >
                <IconComponent
                  size={16}
                  strokeWidth={1.8}
                  style={{ color: '#1B4FCC' }}
                />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}