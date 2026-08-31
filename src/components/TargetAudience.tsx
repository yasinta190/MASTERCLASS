import React from 'react';
import { Gem, CheckCircle2, ArrowRight } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const criteria = [
    'You want to stop constantly second-guessing your opinions and decisions',
    'You want to express yourself comfortably and authoritatively in meetings and public settings',
    'You want to overcome the paralyzing fear of judgment and criticism',
    'You want to build deep, resilient self-belief that does not require external validation',
    'You want to become comfortable speaking up and advocating for yourself',
    'You want to take decisive action instead of getting stuck in overthinking loops',
    'You want to develop genuine confidence across your career, business, and personal relationships',
    'You want to connect with high-caliber, growth-oriented individuals in a respectful room',
  ];

  return (
    <section id="audience" className="w-full py-16 md:py-24 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200">
            <Gem className="w-3.5 h-3.5 text-sky-600" />
            <span>Target Audience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            WHO THIS MASTERCLASS IS FOR
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are an ambitious executive, entrepreneur, emerging leader, or someone working on personal self-mastery, this masterclass was built for you.
          </p>
        </div>

        {/* Bullet checklist grid */}
        <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-6 bg-[#38BDF8]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              This masterclass is for you if:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {criteria.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 transition-colors shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance Callout */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl border border-slate-800">
          <p className="text-xl sm:text-2xl font-black text-[#38BDF8] mb-3">
            You don't have to be naturally confident to attend.
          </p>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            That is exactly why this masterclass exists—to help you build self-belief, step-by-step, in a warm, welcoming, and empowering environment.
          </p>
        </div>
      </div>
    </section>
  );
};

