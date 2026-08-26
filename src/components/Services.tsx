import React from 'react';
import { BUSINESS_DATA } from '../data/business';
import { MessageSquare, Check, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A624E] font-semibold block mb-2">
            Layanan Kami
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#231B15] font-semibold mb-4">
            Solusi Desain & Fabrikasi Furniture
          </h2>
          <p className="text-base sm:text-lg text-[#5C4737] leading-relaxed">
            Menghadirkan harmoni visual dan kenyamanan fungsional melalui dua layanan utama kami.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {BUSINESS_DATA.services.map((service) => {
            const waInquiryUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
              `Halo Arunika Living, saya ingin berkonsultasi mengenai layanan ${service.title}.`
            )}`;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group flex flex-col bg-[#FDFBF7] rounded-2xl border border-[#E6DFD5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-[#E6DFD5]">
                  <img
                    src={service.image}
                    alt={`${service.title} oleh Arunika Living`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3.5 py-1 bg-[#FAF8F5]/90 backdrop-blur-md rounded-full text-xs font-semibold text-[#231B15] border border-[#E6DFD5]">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#231B15]">
                        {service.title}
                      </h3>
                      <span className="text-sm sm:text-base font-bold text-[#7A624E] bg-[#F3EFE9] px-3 py-1 rounded-md border border-[#E6DFD5]">
                        {service.startingPrice}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#5C4737] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-4 border-t border-[#E6DFD5]/80 mb-8">
                      {service.features.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#F3EFE9] text-[#7A624E] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#3E2F24] leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Button */}
                  <a
                    id={`service-cta-${service.id}`}
                    href={waInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#231B15] text-[#FAF8F5] text-sm font-medium rounded-xl hover:bg-[#3E2F24] active:scale-98 transition-all group/btn"
                  >
                    <MessageSquare className="w-4 h-4 text-[#D4C7B5]" />
                    <span>Konsultasi {service.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4C7B5] group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
