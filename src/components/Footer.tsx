import React from 'react';
import { BUSINESS_DATA } from '../data/business';
import {
  Instagram,
  Facebook,
  Video,
  Youtube,
  ShoppingBag,
  ArrowUp,
  MessageSquare
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'tiktok':
        return <Video className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'marketplace':
        return <ShoppingBag className="w-4 h-4" />;
      default:
        return <ShoppingBag className="w-4 h-4" />;
    }
  };

  return (
    <footer id="main-footer" className="bg-[#231B15] text-[#FAF8F5] pt-16 pb-12 border-t border-[#3E2F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#3E2F24]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif-luxury text-3xl font-semibold tracking-wide text-[#FAF8F5]">
                {BUSINESS_DATA.name}
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-[#D4C7B5] font-medium mt-1">
                {BUSINESS_DATA.category} • Since {BUSINESS_DATA.foundedYear}
              </span>
            </div>

            <p className="text-sm text-[#D4C7B5] leading-relaxed max-w-md">
              {BUSINESS_DATA.description}
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#9C826B] font-semibold block mb-3">
                Media Sosial & Marketplace
              </span>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_DATA.socialMedia.map((social) => (
                  <a
                    key={social.name}
                    id={`footer-social-${social.name.toLowerCase()}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3E2F24] hover:bg-[#5C4737] text-[#FAF8F5] text-xs font-medium transition-colors"
                  >
                    {getSocialIcon(social.name)}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#9C826B] font-semibold block mb-2">
              Navigasi Halaman
            </span>
            <ul className="space-y-2 text-sm text-[#D4C7B5]">
              {BUSINESS_DATA.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#FAF8F5] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#9C826B] font-semibold block mb-2">
              Kontak & Studio
            </span>
            <div className="text-sm text-[#D4C7B5] space-y-2">
              <p>
                <strong className="text-[#FAF8F5] font-medium">Alamat:</strong> {BUSINESS_DATA.address}
              </p>
              <p>
                <strong className="text-[#FAF8F5] font-medium">Layanan:</strong> {BUSINESS_DATA.serviceArea}
              </p>
              <p>
                <strong className="text-[#FAF8F5] font-medium">WhatsApp:</strong> {BUSINESS_DATA.phone}
              </p>
              <p>
                <strong className="text-[#FAF8F5] font-medium">Email:</strong> {BUSINESS_DATA.email}
              </p>
            </div>

            <div className="pt-2">
              <a
                id="footer-cta-whatsapp"
                href={BUSINESS_DATA.whatsapp.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] text-[#231B15] text-xs font-semibold rounded-lg hover:bg-[#F3EFE9] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#7A624E]" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9C826B]">
          <p>© {new Date().getFullYear()} {BUSINESS_DATA.name}. All rights reserved.</p>

          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#D4C7B5] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
