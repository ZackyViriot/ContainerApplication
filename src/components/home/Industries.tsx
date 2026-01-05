import React from 'react';
import { Building2, Home, Users, Wrench, HardHat, Trees, Recycle } from 'lucide-react';
import { Section } from '../shared/Section';

const industries = [
  { icon: Building2, name: 'Commercial Construction' },
  { icon: Home, name: 'Residential Construction' },
  { icon: Users, name: 'Multi-Family Construction' },
  { icon: Wrench, name: 'Demolition and Remodelers' },
  { icon: HardHat, name: 'Concrete Contractors' },
  { icon: Trees, name: 'Home, Ranch, and Land Owners' },
  { icon: Recycle, name: 'Junk Removal' },
];

export const Industries: React.FC = () => {
  return (
    <Section background="slate" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Industries We Serve
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Trusted by professionals across multiple sectors
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <div
              key={industry.name}
              className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{industry.name}</h3>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
