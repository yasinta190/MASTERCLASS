import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { AppSettings } from '../types';

interface InvestmentSectionProps {
  settings: AppSettings;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ settings }) => {
  const inclusions = [
    'Full 5-hour immersive live masterclass access',
    'Comprehensive physical workbook and reflection guide',
    'Interactive confidence-building exercises and voice drills',
    'Direct Q&A and personalized facilitation insights',
    'Coffee, tea, and executive refreshments included',
    'Access to post-masterclass growth community',
  ];

  return (
    <section id="investment" className="w-full py-16 md:py-24 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Masterclass Admission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            MASTERCLASS REGISTRATION & ACCESS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            One afternoon of focused personal and professional breakthrough. Seats are strictly limited to maintain an intimate learning atmosphere.
          </p>
        </div>

        {/* Big Investment Card */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden text-center max-w-3xl mx-auto">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8] mb-3">
            Masterclass Investment & Passes
          </p>

          <h3 className="text-2xl sm:text-4xl font-black text-white mb-2 uppercase">
            CHOOSE YOUR ADMISSION PASS
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Saturday, 26 September 2026 • 13:00 PM – 18:00 PM • Johari Rotana Hall
          </p>

          {/* Pricing Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
            {/* Early Bird Pass */}
            <div className="bg-sky-500/10 border-2 border-[#38BDF8] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#38BDF8] text-[#0F172A] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-xl">
                50% OFF • RECOMMENDED
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-1">
                Early Bird Registration
              </p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl sm:text-4xl font-black text-white">25,000</span>
                <span className="text-sm font-bold text-sky-300">TZS</span>
                <span className="text-xs line-through text-slate-500 ml-1">50,000 TZS</span>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Pre-register online before event date to lock in the special 50% discount rate and guarantee your physical workbook.
              </p>
              <div className="text-[11px] text-sky-200 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Immediate Seat Allocation</span>
              </div>
            </div>

            {/* Late / On-Site Pass */}
            <div className="bg-white/5 border border-slate-700 rounded-2xl p-6 relative">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Late / On-Site Gate
              </p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl sm:text-4xl font-black text-slate-200">50,000</span>
                <span className="text-sm font-bold text-slate-400">TZS</span>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Standard walk-in admission on the day of the event (subject to remaining hall seat availability).
              </p>
              <div className="text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                <span>On-Site Door Admission</span>
              </div>
            </div>
          </div>

          {/* Inclusions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left max-w-xl mx-auto mb-10">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="investment-reserve-cta"
              href="#register-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-black text-[#0F172A] bg-[#38BDF8] hover:bg-sky-300 shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
            >
              <span>REGISTER EARLY BIRD (25,000 TZS)</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed seat reservation upon form submission</span>
          </div>
        </div>
      </div>
    </section>
  );
};
