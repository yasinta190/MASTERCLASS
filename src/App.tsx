/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppSettings, RegistrationFormData } from './types';
import { getStoredSettings } from './utils/storage';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountdownSection } from './components/CountdownSection';
import { ValueSection } from './components/ValueSection';
import { WhyAttend } from './components/WhyAttend';
import { ProblemSection } from './components/ProblemSection';
import { TransformationSection } from './components/TransformationSection';
import { CurriculumSection } from './components/CurriculumSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TargetAudience } from './components/TargetAudience';
import { EventDetails } from './components/EventDetails';
import { InvestmentSection } from './components/InvestmentSection';
import { RegistrationForm } from './components/RegistrationForm';
import { WhatsAppSupport } from './components/WhatsAppSupport';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { SuccessConfirmationModal } from './components/SuccessConfirmationModal';

export default function App() {
  const [settings] = useState<AppSettings>(() => getStoredSettings());
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<RegistrationFormData | null>(null);

  const handleRegistrationSuccess = (data: RegistrationFormData) => {
    setLastSubmission(data);
    setIsSuccessModalOpen(true);
  };

  return (
    <div
      id="landing-page-root"
      className="w-full min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-sky-500 selection:text-white"
    >
      {/* Fixed Navigation Bar */}
      <Navbar settings={settings} />

      {/* Main Long-Scrolling Document Flow */}
      <main className="w-full flex-1 flex flex-col">
        {/* 1. HERO SECTION */}
        <Hero settings={settings} />

        {/* COUNTDOWN TIMER SECTION */}
        <CountdownSection settings={settings} />

        {/* 2. CORE VALUE & OUTCOMES */}
        <ValueSection />

        {/* 3. WHY ATTEND */}
        <WhyAttend />

        {/* 4. THE REAL PROBLEM */}
        <ProblemSection />

        {/* 5. THE TRANSFORMATION (Before & After) */}
        <TransformationSection />

        {/* 6. WHAT YOU'LL LEARN (Curriculum) */}
        <CurriculumSection />

        {/* 7. THE MASTERCLASS EXPERIENCE */}
        <ExperienceSection />

        {/* 8. WHO THIS MASTERCLASS IS FOR */}
        <TargetAudience />

        {/* 9. EVENT DETAILS (Venue, Schedule, Map) */}
        <EventDetails settings={settings} />

        {/* 10. INVESTMENT & REGISTRATION OVERVIEW */}
        <InvestmentSection settings={settings} />

        {/* 11. REGISTRATION FORM (Detailed Submission Form) */}
        <RegistrationForm
          settings={settings}
          onSuccess={handleRegistrationSuccess}
        />

        {/* SUPPORT / INQUIRIES */}
        <WhatsAppSupport settings={settings} />

        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        <FAQSection settings={settings} />

        {/* 13. FINAL CALL TO ACTION */}
        <FinalCTA settings={settings} />
      </main>

      {/* 14. FOOTER (Always at the very end) */}
      <Footer settings={settings} />

      {/* Floating Action Controls */}
      <FloatingCTA settings={settings} />

      {/* Registration Success & Payment Instructions Modal */}
      <SuccessConfirmationModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        data={lastSubmission}
        settings={settings}
      />
    </div>
  );
}
