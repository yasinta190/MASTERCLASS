import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Zap, Shield, BookOpen } from 'lucide-react';

export const WhyAttend: React.FC = () => {
  const reasons = [
    {
      icon: Clock,
      title: '5 Hours That Save You Years of Second-Guessing',
      text: 'Instead of spending years stuck in cycles of hesitation, overthinking, and missed career chances, spend one focused afternoon mastering the proven psychology of self-belief.',
    },
    {
      icon: Zap,
      title: 'Real-Time Facilitation Over Passive Content',
      text: 'Books and videos offer theory that is quickly forgotten. A live, facilitated immersion creates experiential breakthroughs, physical vocal anchoring, and immediate behavioral feedback.',
    },
    {
      icon: Shield,
      title: 'A Safe, Respectful, & Confidential Space',
      text: 'Held in the executive ambiance of Johari Rotana Hall with an intimate group of ambitious, growth-minded peers who are equally dedicated to self-mastery.',
    },
    {
      icon: BookOpen,
      title: 'Practical Tools You Keep for Life',
      text: 'You will receive a structured reflection workbook, decision matrices, and vocal exercises that you can apply for job interviews, board presentations, and difficult conversations.',
    },
  ];

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>High-Return Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            WHY INVEST AN AFTERNOON IN DEVELOPING CONFIDENCE?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Confidence is the single highest-leverage multiplier for your talent, knowledge, and career. Without it, competence remains hidden and opportunities pass by.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#38BDF8] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{reason.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Value Perspective Card */}
        <div className="p-8 rounded-3xl bg-[#0F172A] text-white border border-slate-800 shadow-xl shadow-slate-900/10 text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8] mb-3">
            The Long-Term Compound Effect
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Confidence is the foundation upon which every other skill produces results.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            When you trust yourself, your decisions become faster, your communication carries weight, and you no longer waste emotional energy dreading the judgment of others.
          </p>
        </div>
      </div>
    </section>
  );
};
