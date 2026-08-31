import React from 'react';
import { Flame, ArrowRight, MessageCircle, MapPin, Calendar, Clock } from 'lucide-react';
import { AppSettings } from '../types';
import { getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface FinalCTAProps {
  settings: AppSettings;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ settings }) => {
  const whatsappInquiryUrl = getGeneralInquiryWhatsAppUrl(settings.whatsappNumber);

  return (
    <section id="cta" className="w-full py-20 md:py-28 bg-[#0F172A] text-white scroll-mt-20">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Flame Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6">
          <Flame className="w-4 h-4 text-[#38BDF8]" />
          <span>The Decisive Moment</span>
        </div>

        {/* Powerful Section Title */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight uppercase">
          DON'T LET SELF-DOUBT MAKE YOUR DECISIONS FOR YOU.
        </h2>

        {/* Resonant Copy */}
        <div className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg space-y-3 mb-10 font-normal leading-relaxed">
          <p>Every time you silence your voice in a room where you belong...</p>
          <p>Every time you postpone an opportunity waiting to "feel completely ready"...</p>
          <p className="text-[#38BDF8] font-bold">
            You reinforce the habit of letting fear dictate your future.
          </p>
        </div>

        {/* Masterclass Final Summary Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-6 max-w-2xl mx-auto shadow-2xl">
          <span className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase block mb-3">
            SATURDAY, 26 SEPTEMBER 2026 • JOHARI ROTANA HALL
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            YOUR CONFIDENCE CAN CHANGE THE WAY YOU SHOW UP IN LIFE.
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
            Invest 5 hours into your self-belief, voice, and internal authority. Early Bird Pass: <strong>25,000 TZS</strong> (Save 50%) • On-Site: <strong>50,000 TZS</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 mb-8 border-y border-slate-800 py-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#38BDF8]" /> Johari Rotana Hall
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#38BDF8]" /> 26 September 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#38BDF8]" /> 13:00 – 18:00
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="final-register-btn"
              href="#register-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-black text-[#0F172A] bg-[#38BDF8] hover:bg-sky-300 shadow-lg shadow-sky-500/25 active:scale-95 transition-all group"
            >
              <span>REGISTER EARLY BIRD (25,000 TZS)</span>
              <ArrowRight className="w-5 h-5 text-[#0F172A] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              id="final-whatsapp-btn"
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            Direct Facilitator Support: <strong className="text-white">{settings.whatsappDisplay}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

