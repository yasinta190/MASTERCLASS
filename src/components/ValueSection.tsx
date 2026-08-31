import React from 'react';
import { MessageSquare, Target, Briefcase, Heart, TrendingUp, Sparkles } from 'lucide-react';

export const ValueSection: React.FC = () => {
  const valueAreas = [
    {
      icon: MessageSquare,
      title: 'Communication & Vocal Presence',
      description: 'Express your ideas clearly in meetings, interviews, and public discussions without second-guessing or apologizing for speaking up.',
    },
    {
      icon: Target,
      title: 'Decisive Action & Momentum',
      description: 'Stop waiting endlessly to "feel ready." Replace overthinking with clear frameworks that enable timely, confident choices.',
    },
    {
      icon: Briefcase,
      title: 'Career & Business Opportunities',
      description: 'Negotiate with poise, pitch your work, step into leadership roles, and claim the compensation and recognition you deserve.',
    },
    {
      icon: Heart,
      title: 'Authentic Relationships & Boundaries',
      description: 'Break chronic people-pleasing patterns. Communicate your values, say no comfortably, and build relationships based on mutual respect.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Personal Growth',
      description: 'Expand your comfort zone without debilitating fear of failure or judgment, unlocking your true potential year after year.',
    },
  ];

  return (
    <section id="value" className="w-full py-16 md:py-24 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Power of Real Confidence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            CONFIDENCE CHANGES HOW YOU SHOW UP.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Confidence is not an innate trait reserved for a lucky few. It is the practical foundation that determines how you communicate, how you navigate high-stakes moments, and how much of your capability is actually experienced by the world.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueAreas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0284C7] shadow-xs mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}

          {/* Key Insight Card */}
          <div className="p-7 rounded-3xl bg-[#0F172A] border border-slate-800 text-white flex flex-col justify-between shadow-lg shadow-slate-900/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#38BDF8] mb-3 block">
                Direct Takeaway
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Stop Diminishing Your Own Voice
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When you cultivate internal self-trust, you no longer rely on external applause to feel competent. You show up with grounded authority in every room you enter.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-[#38BDF8]">
              <span>Learn the systematic process in the masterclass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
