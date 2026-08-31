import React from 'react';
import { AlertCircle, HelpCircle, Eye, RefreshCw, Scale, VolumeX, ShieldAlert } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: HelpCircle,
      title: 'Persistent Self-Doubt',
      text: 'You have the qualifications, experience, and knowledge, yet an underlying voice constantly questions whether you are truly good enough.',
    },
    {
      icon: AlertCircle,
      title: 'Chronic Hesitation',
      text: 'Waiting indefinitely for the "perfect timing" or for fear to completely vanish before launching a project, asking for a promotion, or taking a bold step.',
    },
    {
      icon: Eye,
      title: 'Fear of Judgment & Scrutiny',
      text: 'Worrying excessively about what colleagues, family, or strangers will say, causing you to play small and edit yourself to fit in.',
    },
    {
      icon: RefreshCw,
      title: 'Exhausting Overthinking',
      text: 'Replaying past conversations for days and over-analyzing future scenarios until mental fatigue prevents you from taking decisive action.',
    },
    {
      icon: Scale,
      title: 'Unhealthy Comparison',
      text: 'Measuring your behind-the-scenes struggles against everyone else’s curated highlights, leading to imposter syndrome and feelings of inadequacy.',
    },
    {
      icon: VolumeX,
      title: 'Difficulty Speaking Up',
      text: 'Staying quiet during important meetings, allowing others to voice the exact ideas you had, and regretting your silence afterwards.',
    },
    {
      icon: ShieldAlert,
      title: 'Lack of Trust in Your Own Decisions',
      text: 'Seeking validation and approval from everyone around you before committing to even minor personal or professional decisions.',
    },
  ];

  return (
    <section id="problem" className="w-full py-16 md:py-24 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-200">
            <span>The Invisible Roadblock</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            MAYBE THE PROBLEM ISN'T YOUR ABILITY.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            You don't lack intelligence, work ethic, or ambition. The real bottleneck is the silent pattern of self-doubt and hesitation that prevents your full capability from being seen and valued.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-xs">
                    <Icon className="w-6 h-6 text-slate-800" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.text}</p>
                </div>
              </div>
            );
          })}

          {/* Core Realization Block */}
          <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 text-white flex flex-col justify-between md:col-span-2 lg:col-span-2 shadow-lg">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8] mb-3">
                The Breakthrough
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Self-doubt is not an identity—it is simply an unexamined psychological reflex.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                During the masterclass, you will deconstruct where these behavioral reflexes originated and learn how to replace them with grounded self-trust and vocal presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
