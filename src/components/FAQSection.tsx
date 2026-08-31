import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { AppSettings } from '../types';
import { getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface FAQSectionProps {
  settings: AppSettings;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ settings }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is included with my registration?',
      a: `Your registration includes full access to the live 5-hour transformational masterclass, interactive exercises, tea/refreshments, and the physical session workbook. Online pre-registration is required due to limited hall seating.`,
    },
    {
      q: 'Where will the masterclass take place?',
      a: `The masterclass will be held at ${settings.eventVenue} in Dar es Salaam. Detailed parking and hall entrance guidance will be sent to your WhatsApp upon registration.`,
    },
    {
      q: 'When is the masterclass held?',
      a: `It takes place on Sunday, ${settings.eventDate}, from ${settings.eventTime} (5 interactive hours).`,
    },
    {
      q: 'Who should attend this masterclass?',
      a: 'The masterclass is designed for ambitious professionals, entrepreneurs, leaders, creatives, and individuals who want to overcome self-doubt, speak up with clarity, and build unshakeable self-belief.',
    },
    {
      q: 'Do I need to be naturally extroverted or confident to attend?',
      a: 'No. The masterclass is structured to be welcoming, safe, and respectful for introverts and people who currently feel nervous in social or professional settings. You will never be put on the spot inappropriately.',
    },
    {
      q: 'How do I complete my registration?',
      a: 'Fill in the registration form on this page with your details. Once submitted, your seat is recorded and you will receive your official Registration ID and admission pass.',
    },
    {
      q: 'Can I speak with someone if I have questions before registering?',
      a: `Yes! You can contact the facilitation team directly via WhatsApp at ${settings.whatsappDisplay} or tap the WhatsApp button anytime.`,
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappInquiryUrl = getGeneralInquiryWhatsAppUrl(settings.whatsappNumber);

  return (
    <section id="faqs" className="w-full py-16 md:py-24 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-6 uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about the Build Confidence Masterclass experience.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-xs hover:border-slate-300"
              >
                <button
                  id={`faq-btn-${idx}`}
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0F172A] hover:text-sky-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-50 text-sky-700 border-sky-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                    <p>{faq.a}</p>
                    {idx === 6 && (
                      <a
                        href={whatsappInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-emerald-600 hover:text-emerald-700 underline"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat directly with the facilitator on WhatsApp
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

