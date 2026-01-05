import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '../shared/Section';
import { Button } from '../shared/Button';

export const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="slate" padding="xl">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Your Trusted Partner for Dumpster Rentals in San Antonio & Boerne
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
            <p>
              We specialize in providing reliable, affordable dumpster rental services for residential, commercial, and industrial projects throughout the greater San Antonio area.
            </p>
            <p>
              With two strategically located yards in Boerne and San Antonio, we offer same-day delivery and quick swap-out services to keep your project moving forward without delays.
            </p>
            <p>
              Whether you're tackling a small home cleanout or managing a large construction site, our team is here to help you choose the right container size and ensure proper waste disposal.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Button to="/about" variant="primary" size="lg">
              More About Us
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="space-y-6">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop"
              alt="Construction site"
              className="rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-full h-56 lg:h-64 object-cover border-2 border-slate-200/80"
            />
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-6 lg:p-8 rounded-2xl shadow-[0_4px_12px_rgba(99,102,241,0.15)] border-2 border-emerald-500/20"
            >
              <div className="text-5xl lg:text-6xl font-bold mb-2">15+</div>
              <div className="text-xs lg:text-sm font-medium opacity-90">Years of Experience</div>
            </motion.div>
          </div>
          <div className="space-y-6 mt-12 lg:mt-16">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-teal-600 to-green-600 text-white p-6 lg:p-8 rounded-2xl shadow-[0_4px_12px_rgba(139,92,246,0.15)] border-2 border-teal-500/20"
            >
              <div className="text-5xl lg:text-6xl font-bold mb-2">2</div>
              <div className="text-xs lg:text-sm font-medium opacity-90">Service Locations</div>
            </motion.div>
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop"
              alt="Dumpster rental"
              className="rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-full h-56 lg:h-64 object-cover border-2 border-slate-200/80"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
