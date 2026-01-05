import React, { useRef } from 'react';
import { MapPin, MessageCircle, Target } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { Section } from '../shared/Section';

const features = [
  {
    icon: MapPin,
    title: 'Two Locations',
    description: 'We have two yards to serve you in Boerne and San Antonio, Texas, ensuring fast delivery and pickup throughout the region.',
  },
  {
    icon: MessageCircle,
    title: 'Easy Communication',
    description: "We're easy to contact and respond quickly to your needs. Our team is always ready to answer questions and provide guidance.",
  },
  {
    icon: Target,
    title: 'Attention to Detail',
    description: "We'll ensure you get the right container for your specific project, saving you time and money with expert recommendations.",
  },
];

export const WhyChooseUs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="slate" padding="xl">
      <div ref={ref} className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Experience the difference of working with a dedicated, customer-focused team
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-emerald-50 p-5 rounded-xl border border-emerald-100"
                >
                  <Icon className="h-10 w-10 text-emerald-600" />
                </motion.div>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
