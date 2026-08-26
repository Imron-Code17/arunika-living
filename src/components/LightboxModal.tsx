import React, { useEffect } from 'react';
import { X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface LightboxModalProps {
  item: {
    id: string;
    title: string;
    categoryLabel: string;
    image: string;
    description: string;
  } | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const consultationUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo Arunika Living, saya tertarik dengan portofolio "${item.title}" (${item.categoryLabel}). Bisa dibantu konsultasi untuk konsep serupa?`
  )}`;

  return (
    <div
      id="portfolio-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#14100C]/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="portfolio-lightbox-content"
        className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl border border-[#E6DFD5] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-lightbox-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-[#231B15] rounded-full shadow-md transition-all focus:outline-hidden"
          aria-label="Tutup preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Area */}
        <div className="relative w-full bg-[#14100C] aspect-16/10 sm:aspect-16/9 overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF8F5] border-t border-[#E6DFD5]">
          <div>
            <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#7A624E] mb-1">
              {item.categoryLabel}
            </span>
            <h3 className="font-serif-luxury text-2xl font-semibold text-[#231B15]">
              {item.title}
            </h3>
            <p className="text-sm text-[#5C4737] mt-1 max-w-xl">
              {item.description}
            </p>
          </div>

          <a
            id="lightbox-cta-whatsapp"
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#231B15] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#3E2F24] active:scale-98 transition-all shrink-0 shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-[#D4C7B5]" />
            <span>Konsultasi Konsep Ini</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4C7B5]" />
          </a>
        </div>
      </div>
    </div>
  );
};
