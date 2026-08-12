import { Link } from 'react-router';
import { ArrowRight, MessageCircle, Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SERVICES } from '../data/catalog';
import type { Service } from '../data/types';

/**
 * Services are booked, not added to a bag — so these deliberately don't reuse
 * the product card. There's no price, no quantity and no cart: the action is
 * starting a conversation, and the layout leads to that.
 */
export default function Services() {
  return (
    <section className="bg-surface-alt py-16 border-y border-hairline">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <span
              className="block text-meta uppercase mb-2"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.1px' }}
            >
              Services
            </span>
            <h2 className="text-ink mb-1" style={{ fontSize: '30px', fontWeight: 700 }}>
              Need something done?
            </h2>
            <p className="text-meta" style={{ fontSize: '15px' }}>
              Photographers, editors and couriers, booked directly
            </p>
          </div>

          <button
            className="hidden sm:flex items-center gap-1 text-brand hover:underline shrink-0"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            See all <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {/* Balances the row and carries the supply-side pitch */}
          <Link
            to="/become-vendor"
            className="group flex flex-col justify-center items-start p-5 rounded-2xl border border-dashed border-hairline hover:border-ink transition-colors min-h-[240px]"
          >
            <span className="w-12 h-12 rounded-xl bg-white border border-hairline flex items-center justify-center text-meta group-hover:text-ink transition-colors mb-4">
              <Plus size={20} />
            </span>
            <h3 className="text-ink mb-1" style={{ fontSize: '16px', fontWeight: 700 }}>
              Offer a service
            </h3>
            <p className="text-meta mb-4" style={{ fontSize: '13px', lineHeight: 1.55 }}>
              List your trade and take bookings from the whole square.
            </p>
            <span
              className="flex items-center gap-1 text-brand transition-all group-hover:gap-2 mt-auto"
              style={{ fontSize: '13px', fontWeight: 600 }}
            >
              Get started <ArrowRight size={13} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-hairline p-5 min-h-[240px] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(17,23,37,0.08)]">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="w-12 h-12 rounded-xl overflow-hidden bg-surface-alt border border-hairline shrink-0 block">
          <ImageWithFallback src={service.logo} alt={service.provider} className="w-full h-full object-cover" />
        </span>

        {service.topRated && (
          <span
            className="text-gold-strong uppercase shrink-0 pt-1"
            style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.8px' }}
          >
            Top Rated
          </span>
        )}
      </div>

      <h3 className="text-ink mb-1.5 line-clamp-1" style={{ fontSize: '16px', fontWeight: 700 }}>
        {service.provider}
      </h3>

      <span
        className="self-start px-2 py-0.5 rounded bg-surface-alt text-body-text uppercase mb-3"
        style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.7px' }}
      >
        {service.category}
      </span>

      {/* The vendor's own pitch, given room to be the main line of the card */}
      <p className="text-body-text mb-4" style={{ fontSize: '14px', lineHeight: 1.6 }}>
        {service.tagline}
      </p>

      <div className="mt-auto pt-4 border-t border-hairline flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 min-w-0 text-meta" style={{ fontSize: '12px' }}>
          {service.available && <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />}
          <span className="truncate">{service.location}</span>
        </span>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            aria-label={`Message ${service.provider}`}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-hairline text-meta hover:border-ink hover:text-ink transition-colors"
          >
            <MessageCircle size={14} />
          </button>
          <button
            className="px-3.5 py-2 rounded-full bg-ink text-white hover:bg-brand transition-colors"
            style={{ fontSize: '12px', fontWeight: 600 }}
          >
            Request quote
          </button>
        </div>
      </div>
    </article>
  );
}
