import React from 'react';
import { ArrowDown, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { AppSettings } from '../types';

interface HeroProps {
  settings: AppSettings;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero" className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F8FAFC]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/50 via-[#F8FAFC]/80 to-[#F8FAFC] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Focus Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-[#38BDF8] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xs border border-slate-800">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Transformational In-Person Masterclass</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.14] mb-6 max-w-4xl mx-auto uppercase">
          BUILD THE CONFIDENCE TO <span className="text-[#0284C7]">SPEAK, ACT, DECIDE,</span> AND SHOW UP AS THE PERSON YOU WANT TO BECOME.
        </h1>

        {/* Supporting Narrative Copy */}
        <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
          A transformative developmental masterclass designed to help you strengthen your self-belief, dismantle the patterns behind self-doubt, communicate with genuine authority, and take decisive action in your life and career.
        </p>

        {/* Value Pillars Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>Inner Authority</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Stop seeking external validation and build resilient self-trust from within.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>Vocal & Physical Presence</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Express your ideas in high-stakes meetings without apologizing or holding back.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>Decisive Execution</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Overcome chronic hesitation and take bold, timely actions toward your goals.
            </p>
          </div>
        </div>

        {/* Explore Masterclass Value Action */}
        <div className="flex items-center justify-center mb-10">
          <a
            id="hero-explore-cta"
            href="#value"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#0F172A] hover:bg-slate-800 shadow-md shadow-slate-900/10 active:scale-95 transition-all group"
          >
            <span>Explore The Masterclass Value & Curriculum</span>
            <ArrowDown className="w-4 h-4 text-[#38BDF8] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>100% Practical & Experiential</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-sky-600" />
            <span>Small Group & Safe Environment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Guided Drills & Lifelong Workbook</span>
          </div>
        </div>
      </div>
    </section>
  );
};



