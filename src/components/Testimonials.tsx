import React from 'react';
import { BUSINESS_DATA } from '../data/business';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 lg:py-28 bg-[#F3EFE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A624E] font-semibold block mb-2">
            Pengalaman Klien
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#231B15] font-semibold mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-base text-[#5C4737] leading-relaxed">
            Cerita pengalaman kolaborasi desain dan pembuatan custom furniture bersama tim Arunika Living.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BUSINESS_DATA.testimonials.map((testi) => (
            <div
              key={testi.id}
              id={`testi-card-${testi.id}`}
              className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#E6DFD5] shadow-xs flex flex-col justify-between relative hover:border-[#B8A38C] transition-colors"
            >
              <Quote className="w-10 h-10 text-[#D4C7B5]/60 mb-6" />

              <blockquote className="font-serif-luxury text-xl sm:text-2xl text-[#231B15] italic leading-relaxed mb-8">
                &ldquo;{testi.quote}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-[#E6DFD5] flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-base text-[#231B15]">
                    {testi.name}
                  </h4>
                  <span className="text-xs text-[#7A624E] uppercase tracking-wider font-medium">
                    Klien Arunika Living
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
