import React from 'react';
import { Sprout, Check, Sparkles } from 'lucide-react';

export const Transformation: React.FC = () => {
  const outcomes = [
    'More aware of what has been holding your confidence back',
    'More comfortable expressing yourself',
    'More willing to take action',
    'More aware of your strengths',
    'Better equipped to handle self-doubt',
    'Motivated to stop shrinking yourself',
    'Ready to approach opportunities with greater self-belief',
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sprout className="w-3.5 h-3.5 text-sky-600" />
            <span>The Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
            IMAGINE LEAVING THE ROOM FEELING...
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            This masterclass isn't just about information—it's about how you feel and show up the very next day.
          </p>
        </div>

        {/* Transformation list */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 mb-12 space-y-4">
          {outcomes.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
              <div className="w-7 h-7 rounded-full bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Closing philosophical anchor */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl font-medium text-slate-500 mb-2">
            Confidence isn't about becoming someone else.
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
            It's about becoming more secure in <span className="text-[#0284C7]">who you already are.</span>
          </h3>
        </div>
      </div>
    </section>
  );
};
