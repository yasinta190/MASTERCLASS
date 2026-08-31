import React from 'react';
import { Compass, Shield, MessageSquare, Eye, Zap, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const learningModules = [
    {
      number: '01',
      icon: Compass,
      title: 'Understanding Self-Doubt',
      summary: 'Deconstruct why your brain triggers hesitation, identify your specific impostor patterns, and learn how to disarm negative self-talk before it sabotages your momentum.',
      bullets: [
        'The evolutionary psychology of fear and hesitation',
        'Recognizing your personal self-doubt triggers',
        'Rewiring the internal critic into constructive awareness',
      ],
    },
    {
      number: '02',
      icon: Shield,
      title: 'Building Inner Strength',
      summary: 'Anchor your self-worth in core principles and self-respect rather than temporary external praise or fleeting validation from others.',
      bullets: [
        'Constructing an unshakeable internal reference point',
        'Emotional resilience when things do not go as planned',
        'Navigating vulnerability without losing authority',
      ],
    },
    {
      number: '03',
      icon: MessageSquare,
      title: 'Confident Communication',
      summary: 'Master the non-verbal and vocal mechanics that convey presence, clarity, and authority in high-stakes conversations and presentations.',
      bullets: [
        'Eliminating apologetic filler words and shrinking postures',
        'Projecting vocal clarity, steady tone, and cadence',
        'Speaking up assertively in high-level executive settings',
      ],
    },
    {
      number: '04',
      icon: Eye,
      title: 'Handling Fear of Judgment',
      summary: 'Dismantle social anxiety, toxic comparison, and the exhausting burden of chronic people-pleasing so you can act authentically.',
      bullets: [
        'Neutralizing the fear of criticism and awkwardness',
        'Setting firm, respectful professional and personal boundaries',
        'Detaching your self-esteem from other people’s opinions',
      ],
    },
    {
      number: '05',
      icon: Zap,
      title: 'Taking Action',
      summary: 'Break through perfectionism and analysis paralysis with rapid decision-making models and high-momentum action protocols.',
      bullets: [
        'The 5-second execution rule for overcoming hesitation',
        'Transforming anxiety into focused action energy',
        'Building daily micro-courage habits that compound',
      ],
    },
    {
      number: '06',
      icon: Brain,
      title: 'Developing a Confident Mindset',
      summary: 'Consolidate your self-identity, integrate daily confidence practices, and build a lasting cognitive framework that keeps you growing.',
      bullets: [
        'Designing a personalized daily confidence ritual',
        'Embracing constructive feedback without defensiveness',
        'Sustaining long-term self-belief across career shifts',
      ],
    },
  ];

  return (
    <section id="curriculum" className="w-full py-16 md:py-24 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200">
            <span>Comprehensive 6-Pillar Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            WHAT YOU'LL LEARN
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Six high-impact learning modules structured to systematically replace self-doubt with decisive conviction, vocal presence, and daily self-belief.
          </p>
        </div>

        {/* 6 Premium Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {learningModules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#38BDF8] shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-400 font-mono">
                      MODULE {module.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{module.summary}</p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/70">
                    {module.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curriculum Synthesis Footnote */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
            Each pillar is paired with practical exercises, guided introspection prompts, and communication simulations designed for immediate real-world application.
          </p>
        </div>
      </div>
    </section>
  );
};
