import { Link } from 'react-router';
import { Baby, BookOpen, Home, Laptop, Palette, Shirt, Sparkles, UtensilsCrossed, Wrench } from 'lucide-react';
import { CATEGORIES, getCategoryProductCount, getTopStoreInCategory } from '../data/catalog';

/** Icons for the marketplace's own category taxonomy. */
const ICONS: Record<string, typeof Shirt> = {
  'Food & Beverages': UtensilsCrossed,
  'Fashion & Apparel': Shirt,
  'Beauty & Personal Care': Sparkles,
  'Electronics & Gadgets': Laptop,
  'Home & Living': Home,
  'Arts, Crafts & Gifts': Palette,
  'Baby & Kids': Baby,
};

const PILL =
  'flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-colors bg-white border border-hairline text-body-text hover:border-ink hover:text-ink';

export default function CategoryPills() {
  return (
    <section
      className="py-6 border-b bg-white"
      style={{ borderColor: 'var(--hairline)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h3 className="mb-4 text-body-text" style={{ fontSize: '14px', fontWeight: 500 }}>
          Browse by category
        </h3>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIES.map(category => {
            const Icon = ICONS[category] ?? Sparkles;
            const store = getTopStoreInCategory(category);
            const count = getCategoryProductCount(category);

            return (
              <Link
                key={category}
                to={store ? `/store/${store.id}` : '/'}
                className={PILL}
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                <Icon size={16} strokeWidth={1.8} />
                <span>{category}</span>
                {count > 0 && (
                  <span className="opacity-60" style={{ fontSize: '11px' }}>
                    {count}
                  </span>
                )}
              </Link>
            );
          })}

          <Link to="/" className={PILL} style={{ fontSize: '13px', fontWeight: 500 }}>
            <Wrench size={16} strokeWidth={1.8} />
            <span>Services</span>
          </Link>
          <Link to="/" className={PILL} style={{ fontSize: '13px', fontWeight: 500 }}>
            <BookOpen size={16} strokeWidth={1.8} />
            <span>Ebooks</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
