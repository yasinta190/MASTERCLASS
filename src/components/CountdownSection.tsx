import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { AppSettings } from '../types';

interface CountdownSectionProps {
  settings: AppSettings;
  targetDateStr?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  totalHours: number;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ settings }) => {
  // Target: September 26, 2026, 13:00 East Africa Time (+03:00)
  const targetDate = new Date('2026-09-26T13:00:00+03:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true, totalHours: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const totalHours = Math.floor(difference / (1000 * 60 * 60));

    return { days, hours, minutes, seconds, isExpired: false, totalHours };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const padZero = (num: number) => String(num).padStart(2, '0');

  return (
    <section
      id="countdown-section"
      className="relative w-full py-12 sm:py-16 bg-[#0B1120] text-white border-y border-slate-800 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Heading & Context */}
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-[#38BDF8] text-xs font-black uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>Registration Countdown • Saturday, 26 Sept 2026</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase leading-tight text-white mb-3">
              COUNTDOWN TO THE <span className="text-[#38BDF8]">MASTERCLASS</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              Reserve your seat today to secure the <strong>Early Bird Pass at 25,000 TZS</strong> before on-site admission shifts to <strong>50,000 TZS</strong> at the gate.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-[#38BDF8]" />
                <span>26 September 2026 (13:00 – 18:00)</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Johari Rotana Hall</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Counter Cards */}
          <div className="w-full lg:w-auto flex flex-col items-center">
            {timeLeft.isExpired ? (
              <div className="bg-sky-950/80 border border-sky-500/40 rounded-3xl p-8 text-center max-w-md">
                <Sparkles className="w-8 h-8 text-[#38BDF8] mx-auto mb-2" />
                <h3 className="text-xl font-black text-white uppercase">Masterclass is Underway!</h3>
                <p className="text-xs text-slate-300 mt-2">
                  The Build Confidence Masterclass is currently taking place at Johari Rotana Hall.
                </p>
              </div>
            ) : (
              <div className="space-y-4 w-full max-w-md sm:max-w-lg">
                <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
                  {/* Days */}
                  <div className="flex flex-col items-center justify-center bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-5 shadow-lg shadow-black/40 relative overflow-hidden group hover:border-sky-500/50 transition-colors">
                    <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#38BDF8] font-mono tracking-tight tabular-nums">
                      {padZero(timeLeft.days)}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                      Days
                    </span>
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-60" />
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center justify-center bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-5 shadow-lg shadow-black/40 relative overflow-hidden group hover:border-sky-500/50 transition-colors">
                    <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
                      {padZero(timeLeft.hours)}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                      Hours
                    </span>
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-60" />
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center justify-center bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-5 shadow-lg shadow-black/40 relative overflow-hidden group hover:border-sky-500/50 transition-colors">
                    <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
                      {padZero(timeLeft.minutes)}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                      Mins
                    </span>
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-60" />
                  </div>

                  {/* Seconds */}
                  <div className="flex flex-col items-center justify-center bg-slate-900/90 border border-sky-500/30 rounded-2xl p-3 sm:p-5 shadow-lg shadow-sky-500/10 relative overflow-hidden group hover:border-sky-400 transition-colors">
                    <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#38BDF8] font-mono tracking-tight tabular-nums animate-pulse">
                      {padZero(timeLeft.seconds)}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-300 mt-1">
                      Secs
                    </span>
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                  </div>
                </div>

                {/* Call to action below countdown cards */}
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-between bg-slate-900/60 border border-slate-800/80 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>Early Bird Discount Active: <strong>25,000 TZS</strong></span>
                  </div>
                  <a
                    href="#register-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#38BDF8] hover:bg-sky-300 text-[#0F172A] text-xs font-black uppercase tracking-wider shadow-sm transition-all active:scale-95 shrink-0"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
