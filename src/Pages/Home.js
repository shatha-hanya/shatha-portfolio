import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ExperiencesSection from '../components/ExperiencesSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperiencesSection />
      <ContactSection />
    </div>
  );
}
