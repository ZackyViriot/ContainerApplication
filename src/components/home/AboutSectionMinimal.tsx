import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button } from '../shared/Button';

export const AboutSectionMinimal: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div ref={ref} className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Your trusted partner for waste management
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                We specialize in providing reliable, affordable dumpster rental services for residential, commercial, and industrial projects throughout the greater San Antonio area.
              </p>
              <p>
                With two strategically located yards in Boerne and San Antonio, we offer same-day delivery and quick swap-out services to keep your project moving forward.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/about" variant="primary" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium">
                Learn More About Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="bg-slate-900 text-white rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-sm text-slate-300">Happy Customers</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-slate-900 text-white rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-sm text-slate-300">Service Locations</div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="text-4xl font-bold text-slate-900 mb-2">99%</div>
                <div className="text-sm text-slate-600">On-Time Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
