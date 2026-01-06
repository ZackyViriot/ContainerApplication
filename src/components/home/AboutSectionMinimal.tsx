import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button } from '../shared/Button';
import { ArrowRight } from 'lucide-react';

export const AboutSectionMinimal: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Green Tint Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-lime-50/50"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(132, 204, 22, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(132, 204, 22, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div ref={ref} className="relative container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Your trusted partner for{' '}
              <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                waste management
              </span>
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
              <Button
                to="/about"
                variant="primary"
                className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-lime-500/30 hover:shadow-xl transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-lime-300 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-black bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-sm font-semibold text-slate-600">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-2xl p-6 shadow-lg shadow-lime-500/20">
                <div className="text-4xl font-black mb-2">5,000+</div>
                <div className="text-sm font-semibold text-white/80">Happy Customers</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-2xl p-6 shadow-lg shadow-lime-500/20">
                <div className="text-4xl font-black mb-2">2</div>
                <div className="text-sm font-semibold text-white/80">Service Locations</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-lime-300 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-black bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent mb-2">99%</div>
                <div className="text-sm font-semibold text-slate-600">On-Time Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
