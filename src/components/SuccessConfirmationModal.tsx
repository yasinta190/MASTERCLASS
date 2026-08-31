import React, { useState } from 'react';
import {
  CheckCircle2,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
  X,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  BookOpen,
  Coffee,
  Users,
} from 'lucide-react';
import { AppSettings, RegistrationFormData } from '../types';
import { generateRegistrationWhatsAppMessage, getRegistrationWhatsAppUrl } from '../utils/whatsapp';

interface SuccessConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: RegistrationFormData | null;
  settings: AppSettings;
}

export const SuccessConfirmationModal: React.FC<SuccessConfirmationModalProps> = ({
  isOpen,
  onClose,
  data,
  settings,
}) => {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);

  if (!isOpen || !data) return null;

  const regId = data.registrationId || 'BCM-2026-REG';
  const whatsappMessage = generateRegistrationWhatsAppMessage(data);
  const whatsappUrl = getRegistrationWhatsAppUrl(data, settings.whatsappNumber);

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(regId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopiedMsg(true);
      setTimeout(() => setCopiedMsg(false), 3000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      id="registration-success-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden my-auto">
        {/* Header */}
        <div className="p-6 sm:p-8 text-center bg-[#0F172A] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 shadow-lg">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seat Confirmed</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            You're Registered!
          </h2>

          <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
            Welcome, <strong>{data.fullName}</strong>. Your details have been recorded for the masterclass.
          </p>

          {/* Registration ID Badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-4 py-2 rounded-xl text-xs">
            <span className="text-slate-400 font-semibold">Registration ID:</span>
            <span className="font-mono font-black text-sky-400 text-sm tracking-wider">{regId}</span>
            <button
              onClick={handleCopyId}
              type="button"
              className="ml-1 p-1 rounded hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              title="Copy Registration ID"
            >
              {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Masterclass Event Pass Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Admission Pass</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {data.ticketTier || 'Early Bird (25,000 TZS)'}
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Build Confidence Masterclass
              </h3>
              <p className="text-xs text-slate-600">5-Hour In-Person Transformational Experience • {data.ticketTier?.includes('50,000') ? '50,000 TZS (On-Site Pass)' : '25,000 TZS (Early Bird Pass)'}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold">{settings.eventDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold">{settings.eventTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold">{settings.eventVenue}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-semibold">Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>

          {/* Attendee Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>What To Prepare For The Day</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Arrive Early</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Hall check-in opens at 12:30 PM. Please arrive 15 minutes before 13:00 PM.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <span>Workbook Included</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  All stationery, exercises, and guided notes will be provided at your desk.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Coffee className="w-4 h-4 text-sky-600" />
                  <span>Refreshments</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Coffee, tea, and refreshments will be served during the networking breaks.
                </p>
              </div>
            </div>
          </div>

          {/* Primary Action: Send WhatsApp Confirmation */}
          <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-5 text-center shadow-xs space-y-3">
            <div>
              <h4 className="text-sm font-extrabold text-emerald-950">
                Confirm on WhatsApp for Fast-Track Check-In
              </h4>
              <p className="text-xs text-emerald-800 mt-0.5">
                Send your registration pass directly to our desk on WhatsApp ({settings.whatsappDisplay}).
              </p>
            </div>

            <a
              id="confirm-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>SEND PASS TO WHATSAPP COORDINATOR</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-[11px] text-emerald-800 pt-1 px-1">
              <span>Coordinator: {settings.whatsappDisplay}</span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copiedMsg ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                <span>{copiedMsg ? 'Summary Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Saved in Masterclass Attendee Database
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

