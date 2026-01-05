import React from 'react';
import { Section } from '../shared/Section';
import { ContainerCard } from '../shared/ContainerCard';
import { containers } from '../../data/containers';

const featuredContainers = containers.filter((c) =>
  ['15-yard', '30-yard', '40-yard', '7-yard-washout', '9-yard-breakout'].includes(c.id)
);

export const ProductShowcase: React.FC = () => {
  return (
    <Section background="gradient" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Featured Dumpster Sizes
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Choose from our most popular container options
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredContainers.map((container) => (
          <ContainerCard key={container.id} container={container} />
        ))}
      </div>
    </Section>
  );
};
