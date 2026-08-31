import React from 'react';
import { HelpCircle, AlertCircle, EyeOff, UserX, MessageSquareOff, CheckCircle2 } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: MessageSquareOff,
      title: 'Hesitating with Great Ideas',
      description: 'Maybe you have great ideas—but you hesitate to share them.',
    },
    {
      icon: EyeOff,
      title: 'Fear of Judgment',
      description: 'Maybe you know you are capable—but fear what people will think keeps holding you back.',
    },
    {
      icon: UserX,
      title: 'Constant Comparison',
      description: 'Maybe you constantly compare yourself to others.',
    },
    {
      icon: AlertCircle,
      title: 'Struggling to Put Yourself Forward',
      description: 'Maybe you struggle to speak confidently, make decisions, set boundaries, or put yourself forward.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Self-Reflection</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
            ARE YOU TIRED OF DOUBTING YOURSELF?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Recognizing where you hold back is the first step toward lasting personal breakthrough.
          </p>
        </div>

        {/* 4 Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-center shrink-0 text-[#38BDF8] shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Insight Highlight Card */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-2xl shadow-slate-900/20 border border-slate-800 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-block h-[2px] w-12 bg-[#38BDF8] mb-4"></div>
          <p className="text-xl sm:text-2xl font-extrabold mb-3 text-[#38BDF8]">
            The problem may not be your ability. It may be your confidence.
          </p>
          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-xl mx-auto">
            And confidence is something you can <span className="underline decoration-[#38BDF8] decoration-2 underline-offset-4 text-white font-bold">intentionally build</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
