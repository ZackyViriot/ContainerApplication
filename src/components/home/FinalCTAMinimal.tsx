import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../shared/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTAMinimal: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-900/30 via-transparent to-emerald-900/30"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(132, 204, 22, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(132, 204, 22, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative container mx-auto px-6 md:px-8 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
        >
          Ready to{' '}
          <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
            get started?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          Get your free quote in less than 2 minutes. No hidden fees, no surprises.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            to="/quote"
            variant="primary"
            className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl shadow-lime-500/30 hover:shadow-2xl hover:shadow-lime-500/40 transition-all duration-300 inline-flex items-center gap-2"
          >
            Get Free Quote
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
