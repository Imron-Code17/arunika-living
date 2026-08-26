import React, { useState, useEffect } from 'react';
import { BUSINESS_DATA } from '../data/business';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E6DFD5]/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="brand-logo"
            href="#home"
            className="group flex flex-col focus:outline-hidden"
          >
            <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wide text-[#231B15] group-hover:text-[#7A624E] transition-colors">
              {BUSINESS_DATA.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A624E] font-medium -mt-1">
              Studio & Furniture
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {BUSINESS_DATA.navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-[#5C4737] hover:text-[#231B15] hover:bg-[#F3EFE9] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / WhatsApp Consultation CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="navbar-cta-whatsapp"
              href={BUSINESS_DATA.whatsapp.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#231B15] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#3E2F24] active:scale-98 transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D4C7B5]" />
              <span>Konsultasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4C7B5]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="navbar-mobile-cta"
              href={BUSINESS_DATA.whatsapp.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#231B15] text-[#FAF8F5] text-xs font-medium rounded-full"
            >
              <MessageSquare className="w-3 h-3 text-[#D4C7B5]" />
              <span>Konsultasi</span>
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#231B15] hover:bg-[#F3EFE9] rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="sm:hidden bg-[#FAF8F5] border-b border-[#E6DFD5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {BUSINESS_DATA.navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#3E2F24] hover:bg-[#F3EFE9] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E6DFD5]/80 flex flex-col gap-2">
            <a
              id="mobile-menu-full-cta"
              href={BUSINESS_DATA.whatsapp.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#231B15] text-[#FAF8F5] text-sm font-semibold rounded-xl"
            >
              <MessageSquare className="w-4 h-4 text-[#D4C7B5]" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
