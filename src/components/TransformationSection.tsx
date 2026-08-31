import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, XCircle } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const comparisons = [
    {
      before: 'Second-guessing every word before speaking in a meeting, then staying silent.',
      after: 'Articulating ideas calmly, concisely, and with grounded vocal conviction.',
    },
    {
      before: 'Constantly seeking external approval to feel capable and secure in your choices.',
      after: 'Relying on an unshakeable inner anchor of self-trust and personal values.',
    },
    {
      before: 'Overanalyzing potential mistakes and procrastinating under the guise of perfectionism.',
      after: 'Taking decisive daily action and viewing feedback as data rather than self-worth attacks.',
    },
    {
      before: 'Comparing your progress to others and feeling inadequate despite your successes.',
      after: 'Running your own race with pride, clarity of purpose, and authentic focus.',
    },
    {
      before: 'Apologizing for taking up space, holding back your real opinions, and playing small.',
      after: 'Showing up fully as the person, leader, and professional you are equipped to be.',
    },
  ];

  return (
    <section id="transformation" className="w-full py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Realistic Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            FROM SELF-DOUBT TO SELF-BELIEF.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            True transformation is not about becoming someone you are not or pretending to be loud. It is about removing the internal obstacles that prevent your genuine self from emerging.
          </p>
        </div>

        {/* Contrast Table Cards */}
        <div className="space-y-4 max-w-4xl mx-auto mb-12">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center"
            >
              {/* Before state */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                    Past Pattern
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {item.before}
                  </p>
                </div>
              </div>

              {/* After state */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Empowered State
                  </span>
                  <p className="text-xs sm:text-sm text-slate-900 font-bold leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-500">
            A practical, evidence-based methodology designed for lasting personal and professional change.
          </p>
        </div>
      </div>
    </section>
  );
};
