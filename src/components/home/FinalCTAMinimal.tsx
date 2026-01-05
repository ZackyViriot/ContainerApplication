import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../shared/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTAMinimal: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to get started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          Get your free quote in less than 2 minutes. No hidden fees, no surprises.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            to="/quote"
            variant="primary"
            className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2"
          >
            Get Free Quote
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
