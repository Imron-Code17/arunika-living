import React, { useState } from 'react';
import { BUSINESS_DATA } from '../data/business';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
    >
      {/* Small Dismissible Greeting Tooltip */}
      {showTooltip && (
        <div
          id="floating-whatsapp-tooltip"
          className="bg-[#FAF8F5] text-[#231B15] text-xs font-medium py-2 px-3.5 rounded-xl shadow-xl border border-[#E6DFD5] flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[220px]"
        >
          <span>Butuh bantuan / konsultasi desain? Chat kami via WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#7A624E] hover:text-[#231B15] p-0.5 rounded-sm focus:outline-hidden"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-button"
        href={BUSINESS_DATA.whatsapp.fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-hidden"
        aria-label="Konsultasi langsung melalui WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white relative z-10" />
      </a>
    </div>
  );
};
