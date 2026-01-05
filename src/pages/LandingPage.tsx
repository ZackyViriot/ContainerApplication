import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatsSection } from '../components/home/StatsSection';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Industries } from '../components/home/Industries';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCTA } from '../components/home/FinalCTA';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesGrid />
      <ProductShowcase />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <FinalCTA />
    </>
  );
};
