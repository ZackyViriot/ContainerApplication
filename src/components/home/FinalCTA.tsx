import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Section } from '../shared/Section';
import { Button } from '../shared/Button';

export const FinalCTA: React.FC = () => {
  return (
    <Section background="gradient" padding="xl">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Unsure Exactly What You Need?
        </h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Our team of experts is here to help you choose the perfect dumpster for your project. We provide upfront pricing with no hidden fees and pride ourselves on exceptional customer service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button to="/contact" variant="primary" size="lg">
            Get In Touch <Mail className="ml-2 h-5 w-5" />
          </Button>
          <Button href="tel:8302168260" variant="secondary" size="lg">
            <Phone className="mr-2 h-5 w-5" /> Call (830) 216-8260
          </Button>
        </div>

        <p className="text-slate-500 font-medium">
          Available Monday - Friday, 7:30 AM - 5:00 PM
        </p>
      </div>
    </Section>
  );
};
