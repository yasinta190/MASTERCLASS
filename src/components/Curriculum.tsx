import React from 'react';
import { Target, Brain, Shield, Smile, MessageSquare, Zap, Flame } from 'lucide-react';

export const Curriculum: React.FC = () => {
  const modules = [
    {
      number: '01',
      icon: Brain,
      title: 'Understanding Self-Doubt',
      description: 'Recognize the thoughts, fears, and patterns that can weaken your confidence.',
      takeaway: 'Identify and dismantle internal triggers before they sabotage your momentum.',
    },
    {
      number: '02',
      icon: Shield,
      title: 'Building Inner Confidence',
      description: "Learn how to develop confidence from within instead of depending entirely on other people's approval.",
      takeaway: 'Establish an unshakeable internal standard and self-approval anchor.',
    },
    {
      number: '03',
      icon: Smile,
      title: 'Becoming More Comfortable With Yourself',
      description: 'Develop a healthier relationship with your own abilities, decisions, voice, and identity.',
      takeaway: 'Quiet the inner critic and embrace your authentic strengths.',
    },
    {
      number: '04',
      icon: MessageSquare,
      title: 'Speaking & Expressing Yourself With Confidence',
      description: 'Learn practical ways to communicate your ideas and opinions more confidently.',
      takeaway: 'Articulate your thoughts clearly in meetings, discussions, and public settings.',
    },
    {
      number: '05',
      icon: Zap,
      title: 'Taking Action Despite Fear',
      description: 'Understand how to stop waiting until you feel "ready" and start taking meaningful action.',
      takeaway: 'Break chronic procrastination, perfectionism, and paralysis by analysis.',
    },
    {
      number: '06',
      icon: Flame,
      title: 'Creating a Confident Mindset',
      description: 'Develop habits and thought patterns that support confidence in your personal and professional life.',
      takeaway: 'Build lasting daily rituals for sustained self-belief and continuous elevation.',
    },
  ];

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5 text-sky-600" />
            <span>Mastery Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
            WHAT YOU'LL LEARN
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            During the masterclass, you'll explore practical strategies across six core pillars:
          </p>
        </div>

        {/* 6 Core Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#0284C7] group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 font-mono">
                      Module {mod.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  <span>{mod.takeaway}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick bottom callout */}
        <div className="text-center">
          <a
            href="#register-form"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 underline underline-offset-4"
          >
            Ready to master these six pillars? Register your seat today →
          </a>
        </div>
      </div>
    </section>
  );
};
