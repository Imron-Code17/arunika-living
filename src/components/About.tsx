import React from 'react';
import { IMAGES } from '../data/images';
import { BUSINESS_DATA } from '../data/business';
import { Calendar, Compass, Layers, Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-[#F3EFE9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A624E] font-semibold block mb-2">
            Tentang Kami
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#231B15] font-semibold leading-tight">
            Menciptakan Ruang yang Menyatu dengan Keseharian Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with architectural border */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E6DFD5] bg-[#FAF8F5] aspect-4/5">
              <img
                id="about-studio-image"
                src={IMAGES.about}
                alt="Arunika Living studio interior and craftsmanship details"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle decorative architectural offset border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#D4C7B5] rounded-2xl -z-0 pointer-events-none" />
          </div>

          {/* Right Column: Business Description & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Business Description */}
            <p className="text-lg sm:text-xl text-[#3E2F24] leading-relaxed mb-6 font-normal">
              {BUSINESS_DATA.description}
            </p>

            {/* Customer Message / Philosophy Card */}
            <div className="my-6 p-6 sm:p-7 bg-[#FAF8F5] rounded-xl border border-[#E6DFD5] shadow-xs relative">
              <Quote className="w-8 h-8 text-[#D4C7B5] absolute top-4 right-4 opacity-50" />
              <p className="font-serif-luxury text-xl sm:text-2xl text-[#231B15] italic leading-snug mb-3">
                &ldquo;{BUSINESS_DATA.philosophy}&rdquo;
              </p>
              <span className="text-xs uppercase tracking-widest text-[#7A624E] font-semibold block">
                Filosofi Arunika Living
              </span>
            </div>

            {/* Three Authentic Highlight Badges (strictly Since 2021, Interior Design, Custom Furniture) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]/90">
                <div className="w-8 h-8 rounded-lg bg-[#F3EFE9] flex items-center justify-center text-[#7A624E] mb-2.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-base text-[#231B15]">Since 2021</h4>
                <p className="text-xs text-[#5C4737] mt-1 leading-normal">
                  Berdiri & melayani kebutuhan interior hunian serta ruang usaha.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]/90">
                <div className="w-8 h-8 rounded-lg bg-[#F3EFE9] flex items-center justify-center text-[#7A624E] mb-2.5">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-base text-[#231B15]">Interior Design</h4>
                <p className="text-xs text-[#5C4737] mt-1 leading-normal">
                  Perencanaan tata ruang fungsional, ergonomis, dan estetis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]/90">
                <div className="w-8 h-8 rounded-lg bg-[#F3EFE9] flex items-center justify-center text-[#7A624E] mb-2.5">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-base text-[#231B15]">Custom Furniture</h4>
                <p className="text-xs text-[#5C4737] mt-1 leading-normal">
                  Fabrikasi mebel custom presisi sesuai ukuran dan fungsi ruang.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
