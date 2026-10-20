import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { HostSection } from './components/HostSection.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { SystemElementsSection } from './components/SystemElementsSection.tsx';
import { BreakdownSection } from './components/BreakdownSection.tsx';
import { ParticipantsVideoSection } from './components/ParticipantsVideoSection.tsx';
import { AudienceSection } from './components/AudienceSection.tsx';
import { ProgramAndOutcomes } from './components/ProgramAndOutcomes.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ApplicationFormSection } from './components/ApplicationFormSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AnimatedGridLines } from './components/AnimatedGridLines.tsx';

export default function App() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('participant_single');

  const scrollToApplication = (pkgId?: string) => {
    if (pkgId) {
      setSelectedPackageId(pkgId);
    }
    const el = document.getElementById('application');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0A192F] text-[#0A192F] selection:bg-[#E06D2B] selection:text-white overflow-x-hidden relative">
      
      {/* 0. Floating Pill Top Navigation */}
      <Header onApplyClick={() => scrollToApplication()} />

      <main className="w-full space-y-0">
        
        {/* Первый экран: HIGH-TICKET GROWTH BREAKFAST DUBAI (Full-width background, menu-width content) */}
        <Hero
          onApplyParticipant={() => scrollToApplication('participant_single')}
          onApplyBreakdown={scrollToPricing}
        />

        {/* Блок 1: Три главные проблемы аудитории и содержание работы (Full-width background, menu-width content) */}
        <ProblemSection onLearnMoreClick={scrollToPricing} />

        {/* Блок 2: От отдельных заявок — к системе продаж с высоким чеком */}
        <SystemElementsSection />

        {/* Блок: Как проходит персональный разбор */}
        <BreakdownSection
          onApplyBreakdown={() => scrollToApplication('breakdown_single')}
        />

        {/* Блок: За одним столом — люди, принимающие решения */}
        <ParticipantsVideoSection />

        {/* Блок: Для кого эта встреча */}
        <AudienceSection />

        {/* Блок 3: Кто проводит: Алина Лисиная, Blue White и доказательство экспертизы (Full-width background, menu-width content) */}
        <HostSection />

        {/* Блок 6: Краткая программа, дата и площадка + результаты (Full-width background, menu-width content) */}
        <ProgramAndOutcomes onSelectPricing={scrollToPricing} />

        {/* Блок 8.1: Два тарифа + скидка 20% для двоих (Full-width background, menu-width content) */}
        <PricingSection onSelectPackage={(pkgId) => scrollToApplication(pkgId)} />

        {/* Блок 8.2: Финальный акцентный призыв (Full-width background, menu-width content) */}
        <FinalCtaSection onApplyClick={() => scrollToApplication()} />

        {/* Блок 8.3: Частые вопросы / FAQ (Full-width background, menu-width content) */}
        <FaqSection />

        {/* Блок 8.4: Короткая интерактивная заявка (Full-width background, menu-width content) */}
        <ApplicationFormSection
          selectedPackageId={selectedPackageId}
          onPackageChange={(pkgId) => setSelectedPackageId(pkgId)}
        />
      </main>

      {/* Footer: Full-width dark footer with menu-aligned content */}
      <Footer />
    </div>
  );
}
