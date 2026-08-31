import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { AppSettings } from '../types';
import { getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  settings: AppSettings;
}

export const Navbar: React.FC<NavbarProps> = ({ settings }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e?: Event) => {
      const scrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        (e?.target instanceof HTMLElement ? e.target.scrollTop : 0);
      setScrolled(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, []);

  const whatsappInquiryUrl = getGeneralInquiryWhatsAppUrl(settings.whatsappNumber);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 border-b border-slate-200'
          : 'bg-[#F8FAFC]/95 backdrop-blur-sm border-b border-slate-200/80'
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-[#0F172A] text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <span className="tracking-wide text-slate-200 uppercase">
              TRANSFORMATIONAL IN-PERSON MASTERCLASS • DEVELOP SELF-BELIEF & LEADERSHIP
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-slate-400 text-xs">
            <span>Saturday, 26 September 2026 • Johari Rotana Hall</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group text-left">
          <div className="w-9 h-9 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#0284C7] group-hover:text-white transition-all shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-black text-base tracking-tight text-[#0F172A] leading-tight">
              BUILD CONFIDENCE
            </span>
            <span className="block text-[10px] font-bold text-sky-600 tracking-widest uppercase">
              Masterclass
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs xl:text-sm font-semibold text-slate-600">
          <a href="#countdown-section" className="text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
            Countdown
          </a>
          <a href="#value" className="hover:text-[#0F172A] transition-colors">
            Value
          </a>
          <a href="#about" className="hover:text-[#0F172A] transition-colors">
            Why Attend
          </a>
          <a href="#curriculum" className="hover:text-[#0F172A] transition-colors">
            Curriculum
          </a>
          <a href="#experience" className="hover:text-[#0F172A] transition-colors">
            Experience
          </a>
          <a href="#audience" className="hover:text-[#0F172A] transition-colors">
            Who It's For
          </a>
          <a href="#details" className="hover:text-[#0F172A] transition-colors">
            Event Details
          </a>
          <a href="#faqs" className="hover:text-[#0F172A] transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct WhatsApp Inquiry Button */}
          <a
            id="nav-whatsapp-btn"
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Primary CTA */}
          <a
            id="nav-register-btn"
            href="#register-form"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0F172A] hover:bg-slate-800 shadow-md shadow-slate-900/10 active:scale-95 transition-all"
          >
            <span>Register</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-current rounded-full"></span>
              <span className="w-full h-0.5 bg-current rounded-full"></span>
              <span className="w-full h-0.5 bg-current rounded-full"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <a
            href="#countdown-section"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-1 text-sm font-bold text-sky-600 hover:text-sky-700"
          >
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>Event Countdown & Early Bird</span>
          </a>
          <a
            href="#value"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-sm font-semibold text-slate-800 hover:text-sky-600"
          >
            Core Value & Outcomes
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-sm font-semibold text-slate-800 hover:text-sky-600"
          >
            Why Attend
          </a>
          <a
            href="#curriculum"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-sm font-semibold text-slate-800 hover:text-sky-600"
          >
            Curriculum
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-sm font-semibold text-slate-800 hover:text-sky-600"
          >
            The Experience
          </a>
          <a
            href="#audience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-sm font-semibold text-slate-800 hover:text-sky-600"
          >
            Who This Masterclass Is For
          </a>
          <a
            href="#details"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-sm font-semibold text-slate-800 hover:text-sky-600"
          >
            Event Details & Venue
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-sm font-semibold text-slate-800 hover:text-sky-600"
          >
            Frequently Asked Questions
          </a>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp ({settings.whatsappDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
