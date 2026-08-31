import React from 'react';
import { Sparkles, HeartHandshake, Compass, Users, CheckCircle, ArrowRight, ShieldCheck, Zap, Target } from 'lucide-react';

export const Introducing: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: '1. Root-Cause Self-Awareness',
      subtitle: 'Deconstruct the Triggers',
      text: 'Uncover the psychological roots of hesitation, comparison, and fear of judgment so you can dismantle them at the source rather than just masking symptoms.',
    },
    {
      icon: HeartHandshake,
      title: '2. Unshakeable Inner Anchor',
      subtitle: 'Build Authentic Self-Trust',
      text: 'Transition from reliance on external validation to an unwavering internal foundation of self-worth that remains steady under social and professional pressure.',
    },
    {
      icon: Zap,
      title: '3. Decisive Action & Vocal Presence',
      subtitle: 'Command Any Room',
      text: 'Master concrete communication patterns, body language cues, and rapid decision frameworks to express your convictions without apologetic shrinking.',
    },
    {
      icon: Users,
      title: '4. High-Caliber Interactive Practice',
      subtitle: 'Safe, Confidential Space',
      text: 'Engage in live experiential exercises and guided reflections with like-minded growth seekers at Johari Rotana Hall.',
    },
  ];

  return (
    <section id="overview" className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-[#38BDF8] text-xs font-bold uppercase tracking-[0.18em] mb-4 border border-slate-800 shadow-xs">
            <div className="h-[2px] w-4 bg-[#38BDF8]"></div>
            <span>High-Impact Immersion</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6">
            THE ARCHITECTURE OF TRUE CONFIDENCE
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Most people wait to "feel ready" before speaking up or pursuing high-stakes goals. This 5-hour masterclass replaces hesitation with a proven psychological system for decisive action.
          </p>
        </div>

        {/* Highlight Callout Box */}
        <div className="bg-[#0F172A] text-white border border-slate-800 rounded-3xl p-8 sm:p-12 mb-14 text-center max-w-4xl mx-auto shadow-2xl shadow-slate-900/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-[#38BDF8] mb-3">
            Core Philosophy
          </p>
          <p className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4">
            This isn't superficial hype or temporary motivation.
          </p>
          <p className="text-xl sm:text-2xl font-bold text-[#38BDF8]">
            It is a permanent upgrade to your internal operating system.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#38BDF8] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Masterclass Tangible Inclusions */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 text-sky-600">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900">
                Full-Day Experience at Johari Rotana Hall • Sunday, 23 August 2026
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Includes physical workbook, self-assessment matrices, facilitated breakout exercises, and direct Q&A.
              </p>
            </div>
          </div>
          <a
            href="#register-form"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0F172A] hover:bg-slate-800 shrink-0 transition-colors"
          >
            <span>Claim Your Seat</span>
            <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
          </a>
        </div>
      </div>
    </section>
  );
};
