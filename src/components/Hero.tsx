import React from 'react';
import { IMAGES } from '../data/images';
import { BUSINESS_DATA } from '../data/business';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#FAF8F5] overflow-hidden"
    >
      {/* Subtle architectural ambient background decorative shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F3EFE9] rounded-full blur-3xl opacity-60 pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E6DFD5]/40 rounded-full blur-3xl opacity-50 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#E6DFD5] text-[#7A624E] text-xs font-semibold tracking-wide uppercase w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#9C826B]" />
              <span>{BUSINESS_DATA.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl xl:text-6xl text-[#231B15] font-semibold leading-[1.15] tracking-tight mb-6">
              {BUSINESS_DATA.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#5C4737] leading-relaxed max-w-xl mb-8 font-normal">
              {BUSINESS_DATA.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <a
                id="hero-cta-whatsapp"
                href={BUSINESS_DATA.whatsapp.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#231B15] text-[#FAF8F5] text-sm font-medium tracking-wide rounded-xl hover:bg-[#3E2F24] active:scale-98 transition-all shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-[#D4C7B5] group-hover:scale-110 transition-transform" />
                <span>{BUSINESS_DATA.hero.primaryCta}</span>
              </a>

              <a
                id="hero-cta-portfolio"
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F3EFE9] text-[#231B15] border border-[#E6DFD5] text-sm font-medium tracking-wide rounded-xl hover:bg-[#E6DFD5] active:scale-98 transition-all group"
              >
                <span>{BUSINESS_DATA.hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#7A624E] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Micro-Highlight Footer */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E6DFD5]/80 max-w-lg">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#7A624E] font-medium">Layanan</span>
                <span className="block text-sm font-semibold text-[#231B15] mt-0.5">Interior & Furniture</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#7A624E] font-medium">Wilayah</span>
                <span className="block text-sm font-semibold text-[#231B15] mt-0.5">Jabodetabek</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#7A624E] font-medium">Pengalaman</span>
                <span className="block text-sm font-semibold text-[#231B15] mt-0.5">Sejak 2021</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E6DFD5] bg-[#E6DFD5] aspect-4/5 sm:aspect-3/4 lg:aspect-4/5">
                <img
                  id="hero-main-image"
                  src={IMAGES.hero}
                  alt="Modern warm luxury interior design by Arunika Living"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231B15]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-[#FAF8F5]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#E6DFD5] shadow-xl max-w-[240px] sm:max-w-[280px]">
                <p className="font-serif-luxury text-lg sm:text-xl text-[#231B15] italic font-medium leading-snug">
                  &ldquo;Fungsional, nyaman, dan sesuai karakter.&rdquo;
                </p>
                <p className="text-[11px] uppercase tracking-widest text-[#7A624E] font-semibold mt-2">
                  Arunika Living Studio
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
