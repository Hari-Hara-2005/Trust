import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import AboutSection from './components/AboutSection';
import WingsShowcase from './components/WingsShowcase';
import TransparencySection from './components/TransparencySection';
import TimelineSection from './components/TimelineSection';
import FAQSection from './components/FAQSection';
import ContactFooter from './components/ContactFooter';

import FoodAlertModal from './components/FoodAlertModal';
import BloodRequestModal from './components/BloodRequestModal';
import VolunteerFormModal from './components/VolunteerFormModal';
import SupportModal from './components/SupportModal';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'ta'
  const [activeWingId, setActiveWingId] = useState('kalvi');

  // Modals state
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false);
  const [isBloodModalOpen, setIsBloodModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const handleSelectWing = (wingId) => {
    setActiveWingId(wingId);
    const element = document.getElementById('wings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] flex flex-col font-sans selection:bg-[#ea580c] selection:text-white">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenFoodModal={() => setIsFoodModalOpen(true)}
        onOpenBloodModal={() => setIsBloodModalOpen(true)}
        onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero with Trust Logo & Core Ethos */}
        <Hero
          lang={lang}
          onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
          onOpenSupportModal={() => setIsSupportModalOpen(true)}
          onSelectWing={handleSelectWing}
        />

        {/* Impact Numbers */}
        <StatsCounter
          lang={lang}
          onSelectWing={handleSelectWing}
        />

        {/* About Sevai Kalanjiyam & Philosophy */}
        <AboutSection
          lang={lang}
          onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
        />

        {/* The 5 Specialized Wings */}
        <WingsShowcase
          lang={lang}
          activeWingId={activeWingId}
          setActiveWingId={setActiveWingId}
          onOpenFoodModal={() => setIsFoodModalOpen(true)}
          onOpenBloodModal={() => setIsBloodModalOpen(true)}
          onOpenSupportModal={() => setIsSupportModalOpen(true)}
          onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
        />

        {/* Radical Transparency & Zero Overhead Guarantee */}
        <TransparencySection
          lang={lang}
          onOpenSupportModal={() => setIsSupportModalOpen(true)}
        />

        {/* 15 Years Grassroots Milestones */}
        <TimelineSection
          lang={lang}
        />

        {/* FAQs */}
        <FAQSection
          lang={lang}
          onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
          onOpenSupportModal={() => setIsSupportModalOpen(true)}
        />
      </main>

      {/* Contact & Footer */}
      <ContactFooter
        lang={lang}
        onSelectWing={handleSelectWing}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
      />

      {/* Interactive Modals */}
      <FoodAlertModal
        isOpen={isFoodModalOpen}
        onClose={() => setIsFoodModalOpen(false)}
        lang={lang}
      />

      <BloodRequestModal
        isOpen={isBloodModalOpen}
        onClose={() => setIsBloodModalOpen(false)}
        lang={lang}
      />

      <VolunteerFormModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
        lang={lang}
      />

      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}

