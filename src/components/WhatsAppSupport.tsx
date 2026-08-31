import React from 'react';
import { MessageCircle, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { AppSettings } from '../types';
import { getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface WhatsAppSupportProps {
  settings: AppSettings;
}

export const WhatsAppSupport: React.FC<WhatsAppSupportProps> = ({ settings }) => {
  const whatsappUrl = getGeneralInquiryWhatsAppUrl(settings.whatsappNumber);

  return (
    <section className="py-12 md:py-16 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Live Support & Inquiry</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-3">
            QUESTIONS BEFORE REGISTERING?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-6">
            We're happy to help you with any questions regarding the curriculum, schedule, or payment methods.
          </p>

          {/* WhatsApp Direct Highlight Box */}
          <div className="inline-block bg-slate-50 border border-slate-200/90 rounded-2xl px-6 py-4 mb-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
              Direct Facilitator WhatsApp
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
              {settings.whatsappDisplay}
            </span>
          </div>

          <p className="text-sm text-slate-500 mb-6">
            Tap the button below to ask a question or get assistance with registration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="whatsapp-support-chat-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>

          {/* Suggested prefill info */}
          <div className="mt-6 text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-200 inline-block max-w-lg text-left">
            <p className="font-bold text-slate-700 mb-1">Suggested WhatsApp pre-filled message:</p>
            <p className="italic text-slate-600">
              "Hello, I'm interested in the Build Confidence Masterclass. I would like to know more about the registration process."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
