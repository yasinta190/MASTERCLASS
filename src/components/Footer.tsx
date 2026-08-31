import React from 'react';
import { Sparkles, MessageCircle, Lock } from 'lucide-react';
import { AppSettings } from '../types';
import { getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  settings: AppSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  const whatsappUrl = getGeneralInquiryWhatsAppUrl(settings.whatsappNumber);

  return (
    <footer className="w-full bg-[#0F172A] text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-white">BUILD CONFIDENCE MASTERCLASS</p>
              <p className="text-[11px] text-slate-400">Johari Rotana Hall • Saturday, 26 September 2026</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#value" className="hover:text-white transition-colors">
              Value
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Why Attend
            </a>
            <a href="#curriculum" className="hover:text-white transition-colors">
              Curriculum
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#audience" className="hover:text-white transition-colors">
              Audience
            </a>
            <a href="#details" className="hover:text-white transition-colors">
              Event Details
            </a>
            <a href="#faqs" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#register-form" className="text-[#38BDF8] hover:text-sky-300 font-bold transition-colors">
              Register
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-slate-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Build Confidence Masterclass. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-slate-400" /> Confidential Registration
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38BDF8] hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Coordinator: {settings.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
