import React from 'react';
import { MapPin, Calendar, Clock, Banknote, AlertCircle, Building2, CheckCircle2 } from 'lucide-react';
import { AppSettings } from '../types';

interface EventDetailsProps {
  settings: AppSettings;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ settings }) => {
  return (
    <section id="details" className="w-full py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Event Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            EVENT DETAILS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Mark your calendar and prepare for an immersive 5-hour transformational experience in Dar es Salaam.
          </p>
        </div>

        {/* Big Details Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Date */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-sky-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</span>
              <p className="text-base sm:text-lg font-bold text-slate-900 mt-1">26 SEPTEMBER 2026</p>
              <p className="text-xs text-slate-500 mt-1">Saturday Afternoon Immersion</p>
            </div>

            {/* Venue */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-sky-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Venue</span>
              <p className="text-base sm:text-lg font-bold text-slate-900 mt-1">{settings.eventVenue}</p>
              <p className="text-xs text-slate-500 mt-1">Dar es Salaam, Tanzania</p>
            </div>

            {/* Time */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-sky-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</span>
              <p className="text-base sm:text-lg font-bold text-slate-900 mt-1">{settings.eventTime}</p>
              <p className="text-xs text-slate-500 mt-1">5 Interactive Hours</p>
            </div>

            {/* Admission */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 text-white shadow-md shadow-slate-900/15">
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8] text-[#0F172A] flex items-center justify-center mb-3 font-bold">
                <Banknote className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pricing</span>
              <div className="mt-1">
                <p className="text-lg font-black text-[#38BDF8]">25,000 TZS <span className="text-xs font-normal text-slate-300">(Early Bird)</span></p>
                <p className="text-xs text-slate-400 mt-0.5">50,000 TZS On-Site / Late</p>
              </div>
            </div>
          </div>

          {/* Limited Seats Notice */}
          <div className="bg-[#0F172A] text-slate-200 border border-slate-800 rounded-2xl p-5 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#38BDF8] shrink-0" />
            <p className="text-sm font-semibold text-slate-200">
              <span className="text-[#38BDF8] font-bold">Limited seating capacity</span> to ensure intimate interaction, personalized exercises, and direct feedback for every participant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

