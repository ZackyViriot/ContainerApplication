import React, { useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../shared/Button';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const features = [
    { title: 'Same-Day Delivery', description: 'Fast service when you need it most' },
    { title: 'Upfront Pricing', description: 'No hidden fees or surprises' },
    { title: 'Expert Service', description: 'Helping you choose the right container' },
  ];

  return (
    <div ref={ref} className="relative bg-white text-slate-900 overflow-hidden min-h-screen flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>

      <motion.div
        style={{ opacity, y }}
        className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-24 md:py-32 lg:py-40"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-6 lg:mb-8 px-4 lg:px-5 py-2 lg:py-2.5 bg-indigo-50 rounded-full border border-indigo-100"
          >
            <span className="text-xs lg:text-sm font-medium text-indigo-700">San Antonio & Boerne's Trusted Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-10 leading-[1.15] tracking-tight text-slate-900 px-4 md:px-0"
          >
            Simple, Professional
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Waste Management
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl mb-10 lg:mb-16 text-slate-600 font-light leading-relaxed max-w-3xl mx-auto px-4 md:px-0"
          >
            Dumpster and concrete washout rentals with transparent pricing and same-day delivery
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-16 lg:mb-24 px-4 md:px-0"
          >
            <Button to="/quote" variant="primary" size="lg">
              Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button to="/about" variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                className="group bg-white rounded-2xl p-6 lg:p-8 border-2 border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-indigo-500 to-violet-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-105 transition-transform duration-200">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900 text-base lg:text-lg">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
