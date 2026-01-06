import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../shared/Button';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HeroMinimal: React.FC = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Simple Green Tint Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 via-white/80 to-emerald-50/60"></div>

      {/* Graph Paper / Checkered Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(132, 204, 22, 0.1) 1.5px, transparent 1.5px),
          linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1.5px, transparent 1.5px),
          linear-gradient(rgba(132, 204, 22, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(132, 204, 22, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
        backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px'
      }}></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full shadow-lg shadow-lime-400/20"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white tracking-wide">SAME-DAY DELIVERY AVAILABLE</span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 leading-[1.05] tracking-tight"
        >
          Waste Management,
          <br />
          <span className="bg-gradient-to-r from-lime-600 to-lime-500 bg-clip-text text-transparent">
            Simplified
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Dumpster rentals, concrete washouts, and pickups—all in one platform.
          <br />
          <span className="text-lime-600">No hassle. No hidden fees. No waiting.</span>
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-slate-600"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-lime-600" />
            <span className="font-medium">Instant Quotes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-lime-600" />
            <span className="font-medium">Expert Service</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-lime-600" />
            <span className="font-medium">Two Locations</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            to="/quote"
            variant="primary"
            size="lg"
            className="group bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl shadow-lime-500/30 hover:shadow-2xl hover:shadow-lime-500/40 transition-all duration-500"
          >
            Get Free Quote
            <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            to="/contact"
            variant="ghost"
            size="lg"
            className="px-10 py-5 rounded-xl font-bold text-lg text-slate-700 hover:bg-slate-100 transition-all duration-300 border-2 border-slate-200 hover:border-slate-300"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
