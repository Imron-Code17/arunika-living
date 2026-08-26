import React, { useState } from 'react';
import { BUSINESS_DATA } from '../data/business';
import {
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Compass,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A624E] font-semibold block mb-2">
            Hubungi Kami
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#231B15] font-semibold mb-4 leading-tight">
            Mari Diskusikan Ruang Impian Anda
          </h2>
          <p className="text-base text-[#5C4737] leading-relaxed">
            Tim kami siap membantu menjawab pertanyaan seputar rencana desain interior dan pembuatan custom furniture Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & Service Area */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main WhatsApp Card */}
            <div className="bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-[#E6DFD5] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-[#B8A38C] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#231B15] text-[#FAF8F5] flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6 text-[#D4C7B5]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7A624E] font-semibold block">
                    WhatsApp Utama
                  </span>
                  <p className="text-lg sm:text-xl font-bold text-[#231B15] mt-0.5">
                    {BUSINESS_DATA.phone}
                  </p>
                  <p className="text-xs text-[#5C4737] mt-1">
                    Respon cepat untuk jadwal konsultasi & diskusi desain.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleCopy(BUSINESS_DATA.phone, 'phone')}
                  className="p-3 bg-[#F3EFE9] hover:bg-[#E6DFD5] text-[#231B15] rounded-xl transition-colors shrink-0 cursor-pointer"
                  title="Salin nomor WhatsApp"
                  aria-label="Salin nomor WhatsApp"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#7A624E]" />
                  )}
                </button>

                <a
                  id="contact-wa-btn"
                  href={BUSINESS_DATA.whatsapp.fullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#231B15] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#3E2F24] active:scale-98 transition-all"
                >
                  <span>Chat Sekarang</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4C7B5]" />
                </a>
              </div>
            </div>

            {/* Email & Address Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Email Card */}
              <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#E6DFD5] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] text-[#7A624E] flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#7A624E] font-semibold block">
                    Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_DATA.email}`}
                    className="text-base font-semibold text-[#231B15] hover:text-[#7A624E] transition-colors break-all mt-1 block"
                  >
                    {BUSINESS_DATA.email}
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E6DFD5]/60 flex items-center justify-between">
                  <span className="text-xs text-[#5C4737]">Klik untuk salin</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(BUSINESS_DATA.email, 'email')}
                    className="text-xs text-[#7A624E] hover:text-[#231B15] flex items-center gap-1 font-medium cursor-pointer"
                  >
                    {copiedItem === 'email' ? 'Tersalin' : 'Salin Email'}
                    {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Studio Address Card */}
              <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#E6DFD5] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] text-[#7A624E] flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#7A624E] font-semibold block">
                    Alamat Studio
                  </span>
                  <p className="text-sm font-semibold text-[#231B15] mt-1 leading-relaxed">
                    {BUSINESS_DATA.address}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E6DFD5]/60">
                  <a
                    id="contact-maps-link"
                    href={BUSINESS_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#231B15] hover:text-[#7A624E] transition-colors"
                  >
                    <span>Buka di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Service Area Card */}
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#E6DFD5]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#F3EFE9] text-[#7A624E] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7A624E]">
                    Area Layanan
                  </h4>
                  <p className="text-sm font-semibold text-[#231B15]">
                    {BUSINESS_DATA.serviceArea}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#5C4737] leading-relaxed">
                Kami melayani survei lokasi, pengukuran langsung, konsultasi tatap muka, dan instalasi mebel di area Jabodetabek.
              </p>
            </div>

          </div>

          {/* Right Column: Operating Hours & Quick Map Reference */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operating Hours Table */}
            <div className="bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-[#E6DFD5] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] text-[#7A624E] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl font-semibold text-[#231B15]">
                    Jam Operasional
                  </h3>
                  <span className="text-xs text-[#7A624E] font-medium">
                    Waktu Pelayanan Studio
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[#E6DFD5]/80 text-sm">
                {BUSINESS_DATA.operatingHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="py-2.5 flex items-center justify-between"
                  >
                    <span className="font-medium text-[#231B15]">
                      {schedule.day}
                    </span>
                    <span
                      className={`font-semibold ${
                        schedule.isOpen ? 'text-[#5C4737]' : 'text-red-700 font-medium'
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6DFD5] text-xs text-[#7A624E] bg-[#F3EFE9]/60 p-3 rounded-xl leading-relaxed">
                * Untuk kunjungan studio di luar jam operasional, silakan membuat janji temu terlebih dahulu via WhatsApp.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
