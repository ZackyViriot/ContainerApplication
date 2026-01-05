import React from 'react';
import { HeroMinimal } from '../components/home/HeroMinimal';
import { StatsSectionMinimal } from '../components/home/StatsSectionMinimal';
import { ServicesGridMinimal } from '../components/home/ServicesGridMinimal';
import { AboutSectionMinimal } from '../components/home/AboutSectionMinimal';
import { WhyChooseUsMinimal } from '../components/home/WhyChooseUsMinimal';
import { FinalCTAMinimal } from '../components/home/FinalCTAMinimal';

export const LandingPage: React.FC = () => {
  return (
    <>
      <HeroMinimal />
      <StatsSectionMinimal />
      <ServicesGridMinimal />
      <AboutSectionMinimal />
      <WhyChooseUsMinimal />
      <FinalCTAMinimal />
    </>
  );
};
