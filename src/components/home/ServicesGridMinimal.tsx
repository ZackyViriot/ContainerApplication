import React, { useRef } from 'react';
import { Trash2, Droplet, Hammer, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { Section } from '../shared/Section';
import { Button } from '../shared/Button';

const services = [
  {
    icon: Trash2,
    title: 'Dumpster Rentals',
    description: 'From 10 to 40-yard dumpsters, we have the perfect size for your residential, commercial, or construction project.',
    link: '/dumpster-rentals',
  },
  {
    icon: Droplet,
    title: 'Concrete Washouts',
    description: '7-yard concrete washout containers for environmentally compliant concrete disposal on construction sites.',
    link: '/concrete-washouts',
  },
  {
    icon: Hammer,
    title: 'Concrete Breakout',
    description: '9-yard containers designed specifically for heavy concrete, asphalt, and masonry disposal projects.',
    link: '/concrete-breakout',
  },
];

export const ServicesGridMinimal: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="white" padding="xl">
      <div ref={ref} className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Professional waste management tailored to your project needs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Icon className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <Button
                to={service.link}
                variant="ghost"
                className="text-slate-900 group-hover:text-slate-900 font-medium inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
