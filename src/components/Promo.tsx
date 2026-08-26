import React from 'react';
import { BUSINESS_DATA } from '../data/business';
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

export const Promo: React.FC = () => {
  const promoWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    "Halo Arunika Living, saya ingin mengklaim penawaran Gratis Konsultasi Desain untuk pemesanan furniture custom."
  )}`;

  return (
    <section id="promo" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-[#231B15] text-[#FAF8F5] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-[#3E2F24]">
          
          {/* Subtle Warm Atmospheric Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#7A624E]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#9C826B]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Promo Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3E2F24] border border-[#5C4737] text-[#D4C7B5] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D4C7B5]" />
              <span>{BUSINESS_DATA.promo.badge}</span>
            </div>

            {/* Title */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FAF8F5] mb-4">
              {BUSINESS_DATA.promo.title}
            </h2>

            {/* Description strictly from data */}
            <p className="text-base sm:text-lg text-[#D4C7B5] leading-relaxed mb-8 max-w-xl">
              {BUSINESS_DATA.promo.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="promo-cta-whatsapp"
                href={promoWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#FAF8F5] text-[#231B15] text-sm font-semibold rounded-xl hover:bg-[#F3EFE9] active:scale-98 transition-all shadow-lg group"
              >
                <MessageSquare className="w-4 h-4 text-[#7A624E]" />
                <span>{BUSINESS_DATA.promo.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#231B15] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
