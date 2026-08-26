import React from 'react';
import { BUSINESS_DATA } from '../data/business';
import { Sparkles, Users, Ruler, ShieldCheck, Wallet } from 'lucide-react';

export const Advantages: React.FC = () => {
  const icons = [Sparkles, Users, Ruler, ShieldCheck, Wallet];

  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-[#F3EFE9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A624E] font-semibold block mb-2">
              Keunggulan Arunika Living
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#231B15] font-semibold leading-tight">
              Mengapa Memilih Arunika Living?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C4737] max-w-md">
            Komitmen kami untuk memberikan pengalaman desain dan pembuatan furniture yang transparan, presisi, dan memuaskan.
          </p>
        </div>

        {/* Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_DATA.advantages.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            const isFullWidthOnLarge = index === 4; // 5th item can be nicely styled or span

            return (
              <div
                key={item.id}
                id={`advantage-card-${item.id}`}
                className={`p-7 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] shadow-xs hover:border-[#B8A38C] hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#9C826B] bg-[#F3EFE9] px-2.5 py-1 rounded-md border border-[#E6DFD5]">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] flex items-center justify-center text-[#7A624E]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#231B15] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5C4737] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6DFD5]/60 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9C826B]" />
                  <span className="text-[11px] uppercase tracking-widest text-[#7A624E] font-medium">
                    Standar Arunika
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
