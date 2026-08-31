import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Sparkles, Lock, ArrowRight, Loader2, MessageCircle, RefreshCw } from 'lucide-react';
import { AppSettings, RegistrationFormData } from '../types';
import { submitRegistration } from '../utils/registrationService';
import { getGeneralInquiryWhatsAppUrl, DEFAULT_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface RegistrationFormProps {
  settings: AppSettings;
  onSuccess: (data: RegistrationFormData) => void;
}

const REFERRAL_OPTIONS = [
  'WhatsApp',
  'Instagram',
  'Facebook',
  'TikTok',
  'Friend / Colleague',
  'Other',
];

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  settings,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    ticketTier: 'Early Bird (25,000 TZS)',
    biggestChallenge: '',
    interestReason: '',
    expectations: '',
    confidenceAreas: '',
    referralSource: 'WhatsApp',
    facilitatorNote: '',
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your WhatsApp / phone number.';
    }
    if (!formData.biggestChallenge.trim()) {
      newErrors.biggestChallenge = 'Please share your primary confidence challenge.';
    }
    if (!formData.interestReason.trim()) {
      newErrors.interestReason = 'Please tell us why you want to join the masterclass.';
    }
    if (!formData.expectations.trim()) {
      newErrors.expectations = 'Please share your expectations from this masterclass.';
    }
    if (!formData.confidenceAreas.trim()) {
      newErrors.confidenceAreas = 'Please mention what you would like to become more confident about.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submittedSuccessfully) {
      return; // Prevent duplicate submissions
    }

    if (!validate()) {
      const firstErrorEl = document.querySelector('.form-error-input');
      if (firstErrorEl) {
        firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setLoading(true);
    setSubmissionError(null);

    // Save lead to Google Apps Script before payment
    const result = await submitRegistration(formData);

    setLoading(false);

    if (result.success && result.data) {
      setSubmittedSuccessfully(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#38BDF8', '#0284C7', '#10B981', '#0F172A'],
        });
      } catch {
        // Confetti non-critical
      }

      onSuccess(result.data);
    } else {
      // DO NOT pretend registration was successful
      setSubmissionError(
        result.message || "We couldn't complete your registration. Please try again or contact us on WhatsApp."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submissionError) {
      setSubmissionError(null);
    }
  };

  const whatsappSupportUrl = getGeneralInquiryWhatsAppUrl(settings.whatsappNumber);

  return (
    <section id="register-form" className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Masterclass Registration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-3">
            Reserve Your Seat
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Fill in your details below to register for the <strong>Build Confidence Masterclass</strong> on <strong>Saturday, 26 September 2026</strong> at Johari Rotana Hall.
          </p>
        </div>

        {/* Error Alert Box (if save fails) */}
        {submissionError && (
          <div
            id="registration-error-banner"
            className="mb-8 p-5 bg-rose-50 border-2 border-rose-300 rounded-2xl text-rose-900 shadow-sm animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <h3 className="text-sm font-bold text-rose-900">
                  Registration Could Not Be Completed
                </h3>
                <p className="text-xs text-rose-800 leading-relaxed">
                  {submissionError}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={whatsappSupportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contact Us on WhatsApp ({DEFAULT_WHATSAPP_DISPLAY})</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmissionError(null)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold text-rose-800 bg-rose-100 hover:bg-rose-200 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl shadow-slate-200/50 space-y-6"
        >
          {/* Admission Tier Selector */}
          <div className="space-y-3 pb-4 border-b border-slate-100">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Select Admission Pass
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Early Bird Pass */}
              <label
                className={`relative flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  formData.ticketTier === 'Early Bird (25,000 TZS)'
                    ? 'border-sky-500 bg-sky-50/70 shadow-xs ring-1 ring-sky-400'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ticketTier"
                      value="Early Bird (25,000 TZS)"
                      checked={formData.ticketTier === 'Early Bird (25,000 TZS)'}
                      onChange={handleChange}
                      disabled={loading || submittedSuccessfully}
                      className="text-sky-600 focus:ring-sky-500 h-4 w-4"
                    />
                    <span className="font-bold text-sm text-slate-900">Early Bird Pass</span>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-sky-600 text-white">
                    SAVE 50%
                  </span>
                </div>
                <div className="pl-6">
                  <span className="text-xl font-black text-sky-800">25,000 TZS</span>
                  <span className="text-xs text-slate-400 line-through ml-2">50,000 TZS</span>
                  <p className="text-[11px] text-slate-500 mt-1">Pre-registered online before event day</p>
                </div>
              </label>

              {/* On-Site Gate Pass */}
              <label
                className={`relative flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  formData.ticketTier === 'On-Site (50,000 TZS)'
                    ? 'border-sky-500 bg-sky-50/70 shadow-xs ring-1 ring-sky-400'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ticketTier"
                      value="On-Site (50,000 TZS)"
                      checked={formData.ticketTier === 'On-Site (50,000 TZS)'}
                      onChange={handleChange}
                      disabled={loading || submittedSuccessfully}
                      className="text-sky-600 focus:ring-sky-500 h-4 w-4"
                    />
                    <span className="font-bold text-sm text-slate-900">Late / On-Site</span>
                  </div>
                </div>
                <div className="pl-6">
                  <span className="text-xl font-black text-slate-800">50,000 TZS</span>
                  <p className="text-[11px] text-slate-500 mt-1">Standard walk-in admission on event day</p>
                </div>
              </label>
            </div>
          </div>

          {/* Section 1: Personal & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <div className="h-[2px] w-5 bg-[#38BDF8]"></div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                1. Personal & Contact Details
              </h3>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                disabled={loading || submittedSuccessfully}
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Amani Mwamba"
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-300 form-error-input'
                    : 'border-slate-200 focus:ring-sky-400 focus:border-sky-400 focus:bg-white'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                disabled={loading || submittedSuccessfully}
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. amani@example.com"
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                  errors.email
                    ? 'border-red-400 focus:ring-red-300 form-error-input'
                    : 'border-slate-200 focus:ring-sky-400 focus:border-sky-400 focus:bg-white'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                </p>
              )}
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Phone Number / WhatsApp <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                disabled={loading || submittedSuccessfully}
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +255 7XX XXX XXX"
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                  errors.phone
                    ? 'border-red-400 focus:ring-red-300 form-error-input'
                    : 'border-slate-200 focus:ring-sky-400 focus:border-sky-400 focus:bg-white'
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                </p>
              )}
              <p className="text-[11px] text-slate-400 mt-1">
                We will send your registration confirmation and masterclass access details to this WhatsApp number.
              </p>
            </div>
          </div>

          {/* Section 2: Goals & Challenges */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <div className="h-[2px] w-5 bg-[#38BDF8]"></div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                2. Goals & Reflection
              </h3>
            </div>

            {/* Primary Confidence Challenge */}
            <div>
              <label htmlFor="biggestChallenge" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Primary Confidence Challenge <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="biggestChallenge"
                name="biggestChallenge"
                rows={3}
                disabled={loading || submittedSuccessfully}
                value={formData.biggestChallenge}
                onChange={handleChange}
                placeholder="e.g. Hesitating in meetings, fear of speaking in front of leadership, self-doubt, second-guessing decisions..."
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                  errors.biggestChallenge
                    ? 'border-red-400 focus:ring-red-300 form-error-input'
                    : 'border-slate-200 focus:ring-sky-400 focus:border-sky-400 focus:bg-white'
                }`}
              />
              {errors.biggestChallenge && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.biggestChallenge}
                </p>
              )}
            </div>

            {/* Why They Want To Join */}
            <div>
              <label htmlFor="interestReason" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Why Do You Want To Join The Masterclass? <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="interestReason"
                name="interestReason"
                rows={3}
                disabled={loading || submittedSuccessfully}
                value={formData.interestReason}
                onChange={handleChange}
                placeholder="Share what prompted you to register and what shift you want to experience in your life or career..."
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                  errors.interestReason
                    ? 'border-red-400 focus:ring-red-300 form-error-input'
                    : 'border-slate-200 focus:ring-sky-400 focus:border-sky-400 focus:bg-white'
                }`}
              />
              {errors.interestReason && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.interestReason}
                </p>
              )}
            </div>

            {/* Expectations */}
            <div>
              <label htmlFor="expectations" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Expectations from this Masterclass <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="expectations"
                name="expectations"
                rows={3}
                disabled={loading || submittedSuccessfully}
                value={formData.expectations}
                onChange={handleChange}
                placeholder="What specific outcome or breakthrough would make this 5-hour experience deeply worthwhile?"
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                  errors.expectations
                    ? 'border-red-400 focus:ring-red-300 form-error-input'
                    : 'border-slate-200 focus:ring-sky-400 focus:border-sky-400 focus:bg-white'
                }`}
              />
              {errors.expectations && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.expectations}
                </p>
              )}
            </div>

            {/* What They Want To Become More Confident About */}
            <div>
              <label htmlFor="confidenceAreas" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                What Would You Like To Become More Confident About? <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="confidenceAreas"
                name="confidenceAreas"
                rows={3}
                disabled={loading || submittedSuccessfully}
                value={formData.confidenceAreas}
                onChange={handleChange}
                placeholder="e.g. Public speaking, executive presence, negotiating salary, standing up for myself, commanding authority..."
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                  errors.confidenceAreas
                    ? 'border-red-400 focus:ring-red-300 form-error-input'
                    : 'border-slate-200 focus:ring-sky-400 focus:border-sky-400 focus:bg-white'
                }`}
              />
              {errors.confidenceAreas && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.confidenceAreas}
                </p>
              )}
            </div>
          </div>

          {/* Section 3: Context & Additional Message */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <div className="h-[2px] w-5 bg-[#38BDF8]"></div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                3. Additional Information
              </h3>
            </div>

            {/* How They Heard About The Masterclass */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                How Did You Hear About The Masterclass?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {REFERRAL_OPTIONS.map((item) => (
                  <label
                    key={item}
                    className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      formData.referralSource === item
                        ? 'border-sky-500 bg-sky-50 text-sky-900 ring-1 ring-sky-400'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="referralSource"
                      disabled={loading || submittedSuccessfully}
                      value={item}
                      checked={formData.referralSource === item}
                      onChange={handleChange}
                      className="text-sky-600 focus:ring-sky-500 h-4 w-4"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="facilitatorNote" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Additional Message or Question for the Facilitator (Optional)
              </label>
              <textarea
                id="facilitatorNote"
                name="facilitatorNote"
                rows={2}
                disabled={loading || submittedSuccessfully}
                value={formData.facilitatorNote}
                onChange={handleChange}
                placeholder="Any personal note, situation, or question you would like the team to know..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all disabled:opacity-60"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-slate-100">
            <button
              id="submit-registration-btn"
              type="submit"
              disabled={loading || submittedSuccessfully}
              className={`w-full py-4 px-6 rounded-xl font-black text-base sm:text-lg text-white shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                submittedSuccessfully
                  ? 'bg-emerald-600 cursor-default'
                  : 'bg-[#0F172A] hover:bg-slate-800 active:scale-[0.99] shadow-slate-900/20 disabled:opacity-75 disabled:cursor-not-allowed'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-[#38BDF8]" />
                  <span>SAVING REGISTRATION...</span>
                </>
              ) : submittedSuccessfully ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span>REGISTRATION COMPLETED & SAVED</span>
                </>
              ) : (
                <>
                  <span>CONFIRM REGISTRATION</span>
                  <ArrowRight className="w-5 h-5 text-[#38BDF8]" />
                </>
              )}
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-slate-400" /> Details saved directly to masterclass registry.
              </span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Seat Reservation Confirmed
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
