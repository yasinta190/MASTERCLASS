import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { AppSettings } from '../types';
import { getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface FloatingCTAProps {
  settings: AppSettings;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ settings }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 900);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = getGeneralInquiryWhatsAppUrl(settings.whatsappNumber);

  return (
    <>
      {/* Floating Bottom Action Bar */}
      <div
        className={`fixed bottom-0 inset-x-0 z-30 p-3 sm:p-4 transition-all duration-300 pointer-events-none ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto bg-[#1A1915]/95 backdrop-blur-md text-white rounded-2xl p-3 sm:px-6 sm:py-3.5 shadow-2xl border border-white/10 flex items-center justify-between gap-3 pointer-events-auto">
          <div className="hidden sm:block">
            <p className="font-bold text-sm text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span>BUILD CONFIDENCE MASTERCLASS</span>
            </p>
            <p className="text-xs text-slate-400">
              {settings.eventVenue} • {settings.eventDate} ({settings.eventTime})
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#38BDF8]">
            <span className="text-slate-300 text-xs hidden xs:inline">Admission:</span>
            <span>Confirmed</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/30 flex items-center gap-1.5 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            <a
              id="floating-bar-register-btn"
              href="#register-form"
              className="px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-black text-[#0F172A] bg-[#38BDF8] hover:bg-sky-300 shadow-md shadow-sky-500/20 active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Circular WhatsApp Button (Bottom Right) */}
      <a
        id="floating-whatsapp-bubble"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group border-2 border-white/80"
        title={`Chat on WhatsApp (${settings.whatsappDisplay})`}
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-stone-900 text-white text-xs font-bold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with Facilitator
        </span>
      </a>
    </>
  );
};
