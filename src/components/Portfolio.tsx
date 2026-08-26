import React, { useState, useMemo } from 'react';
import { BUSINESS_DATA } from '../data/business';
import { LightboxModal } from './LightboxModal';
import { Eye, ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    title: string;
    categoryLabel: string;
    image: string;
    description: string;
  } | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return BUSINESS_DATA.portfolioItems;
    }
    return BUSINESS_DATA.portfolioItems.filter((item) => {
      if (item.category === activeCategory) return true;
      // Also match by tags
      const categoryObj = BUSINESS_DATA.portfolioCategories.find((c) => c.id === activeCategory);
      if (categoryObj && item.tags.includes(categoryObj.label)) {
        return true;
      }
      return false;
    });
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A624E] font-semibold block mb-2">
            Portfolio Karya
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#231B15] font-semibold mb-4">
            Eksplorasi Proyek & Desain
          </h2>
          <p className="text-base text-[#5C4737] leading-relaxed">
            Koleksi karya desain interior dan pembuatan furniture custom dengan standar estetika serta kenyamanan tinggi.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {BUSINESS_DATA.portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`portfolio-filter-${cat.id}`}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
                    : 'bg-[#F3EFE9] text-[#5C4737] hover:bg-[#E6DFD5] hover:text-[#231B15]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-item-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#E6DFD5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#E6DFD5]">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.categoryLabel}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-[#231B15]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="p-3 bg-[#FAF8F5] rounded-full text-[#231B15] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Badge Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md rounded-full text-[11px] font-semibold text-[#3E2F24] border border-[#E6DFD5]">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#231B15] group-hover:text-[#7A624E] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#9C826B] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4737] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />

      </div>
    </section>
  );
};
