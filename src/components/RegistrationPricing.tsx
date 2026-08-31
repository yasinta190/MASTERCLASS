import React from 'react';
import { Ticket, CheckCircle, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import { AppSettings } from '../types';

interface RegistrationPricingProps {
  settings: AppSettings;
}

export const RegistrationPricing: React.FC<RegistrationPricingProps> = ({ settings }) => {
  return (
    <section className="py-12 md:py-16 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl shadow-slate-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#38BDF8] text-[#0F172A] font-black text-xs uppercase tracking-widest px-6 py-1.5 rounded-bl-xl shadow-xs">
            Official Registration
          </div>

          <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-3">
            <Ticket className="w-4 h-4" />
            <span>Your Registration</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
            SECURE YOUR PLACE • <span className="text-[#38BDF8]">EARLY BIRD: 25,000 TZS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-6">
            Early Bird admission is <strong>25,000 TZS</strong> (50% discount). Late and on-site admission on 26 September 2026 is <strong>50,000 TZS</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-sky-500/10 border border-sky-400/40 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">Early Bird Pass</span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#38BDF8] text-[#0F172A]">ONLINE SAVE 50%</span>
              </div>
              <p className="text-2xl font-black text-white">25,000 TZS</p>
              <p className="text-xs text-slate-300 mt-1">Pre-registered online before event day</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">On-Site / Late Gate</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">STANDARD</span>
              </div>
              <p className="text-2xl font-black text-slate-300">50,000 TZS</p>
              <p className="text-xs text-slate-400 mt-1">Walk-in payment on event day (26 September 2026)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-xl p-3">
              <CheckCircle className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span>5-Hour Live Masterclass</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-xl p-3">
              <CheckCircle className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span>Workbook & Frameworks</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-xl p-3">
              <CheckCircle className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span>Interactive Q&A Session</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6 text-sm text-slate-300 space-y-2">
            <p className="font-bold text-white">
              To register, complete the registration form below and provide your details.
            </p>
            <p className="text-slate-400">
              After submitting your registration, you will receive personalized instructions and direct WhatsApp confirmation regarding the next steps for securing your seat.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="#register-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-black text-[#0F172A] bg-[#38BDF8] hover:bg-sky-300 shadow-lg shadow-sky-500/20 active:scale-[0.98] transition-all text-sm sm:text-base group"
            >
              <span>Scroll to Registration Form</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
