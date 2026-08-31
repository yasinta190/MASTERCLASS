import React from 'react';
import { BookOpen, Users, Sparkles, Target, Award, CheckCircle2, MessageCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experienceElements = [
    {
      icon: BookOpen,
      title: 'Expert Guided Facilitation',
      description: 'Structured framework presentations blending cognitive psychology, behavioral science, and real-world communication leadership.',
    },
    {
      icon: Target,
      title: 'Guided Deep Reflection',
      description: 'Dedicated introspection windows to diagnose your individual imposter patterns and pinpoint where self-doubt began.',
    },
    {
      icon: Users,
      title: 'Interactive Live Moments',
      description: 'Facilitated partner dialogues and small group discussions that normalize shared struggles and build genuine camaraderie.',
    },
    {
      icon: Sparkles,
      title: 'Confidence-Building Exercises',
      description: 'Step-by-step vocal posture, eye contact drills, and assertive communication simulations in a safe, judgment-free room.',
    },
    {
      icon: Award,
      title: 'High-Impact Practical Insights',
      description: 'Proven tactics you can immediately apply the next morning in your boardroom, client pitches, or personal relationships.',
    },
    {
      icon: CheckCircle2,
      title: 'Action-Oriented Takeaways',
      description: 'A physical take-home workbook and action blueprint so your masterclass breakthroughs continue compounding indefinitely.',
    },
  ];

  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-[#38BDF8] text-xs font-bold uppercase tracking-[0.18em] mb-4 border border-slate-800 shadow-xs">
            <span>Beyond A Traditional Lecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            THE MASTERCLASS EXPERIENCE
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            This is not a passive seminar where you sit quietly and listen to a keynote. It is an immersive, highly engaging 5-hour developmental laboratory designed for real behavioral transformation.
          </p>
        </div>

        {/* 6 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experienceElements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Setting Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F172A] text-white border border-slate-800 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3">
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>Dedicated Developmental Environment</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            An Intimate, World-Class Setting for Real Growth
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every detail of the masterclass environment has been curated to make you feel respected, safe, energized, and completely focused on your personal breakthrough.
          </p>
        </div>
      </div>
    </section>
  );
};
