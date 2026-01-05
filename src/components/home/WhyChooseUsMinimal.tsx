import React, { useRef } from 'react';
import { MapPin, MessageCircle, Target } from 'lucide-react';
import { motion, useInView } from 'motion/react';

const features = [
  {
    icon: MapPin,
    title: 'Two Locations',
    description: 'Yards in Boerne and San Antonio ensure fast delivery and pickup throughout the region.',
  },
  {
    icon: MessageCircle,
    title: 'Easy Communication',
    description: "We respond quickly to your needs and are always ready to answer questions.",
  },
  {
    icon: Target,
    title: 'Expert Guidance',
    description: "We'll help you choose the right container, saving you time and money.",
  },
];

export const WhyChooseUsMinimal: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div ref={ref} className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Why choose us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Experience the difference of working with a dedicated team
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 mb-4">
                  <Icon className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
