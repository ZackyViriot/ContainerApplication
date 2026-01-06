import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ContainerCard } from '../components/shared/ContainerCard';
import { containers } from '../data/containers';
import { Button } from '../components/shared/Button';

export const DumpsterSizesPage: React.FC = () => {
  const standardContainers = containers.filter((c) => !c.size.includes('washout') && !c.size.includes('breakout'));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 via-white to-emerald-50/60"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Dumpster{' '}
            <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Sizes & Pricing
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600"
          >
            Choose from our wide range of dumpster sizes to match your project needs
          </motion.p>
        </div>
      </section>

      {/* Size Comparison */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center"
          >
            Find Your Perfect Size
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {standardContainers.map((container, index) => (
              <motion.div
                key={container.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <ContainerCard container={container} />
              </motion.div>
            ))}
          </div>

          {/* Size Selection Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-8 border-2 border-lime-200"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">
              Not Sure Which Size You Need?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-black text-slate-900 mb-4">Choose a 10-15 Yard if you have:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Small bathroom or kitchen remodel</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Garage or basement cleanout</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Small deck or shed removal</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Estate or attic cleanout</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-black text-slate-900 mb-4">Choose a 20-30 Yard if you have:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Roof replacement or major renovation</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Large deck or patio removal</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Multi-room remodel</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Whole house cleanout</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-black text-slate-900 mb-4">Choose a 40 Yard if you have:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Commercial construction project</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Large demolition job</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> New home construction</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-2">•</span> Major commercial renovation</li>
                </ul>
              </div>

              <div className="flex items-center justify-center bg-white rounded-xl p-6 border border-slate-200">
                <div className="text-center">
                  <p className="text-slate-600 mb-4">Still not sure?</p>
                  <Button
                    to="/contact"
                    variant="secondary"
                    className="border-2 border-lime-500 text-lime-600 hover:bg-lime-50 px-6 py-3 rounded-xl font-bold transition-all duration-300"
                  >
                    Talk to an Expert
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-lime-50/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center"
          >
            Transparent Pricing
          </motion.h2>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-slate-600 text-center mb-8"
            >
              Our pricing includes delivery, pickup, and 7 days of rental. Additional days are just
              $15/day. We also offer competitive disposal fees based on your material type.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-8 border-2 border-slate-200"
            >
              <h3 className="font-black text-slate-900 mb-4">What's Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600"><span className="text-lime-500 font-bold mr-3">✓</span> Delivery to your location</li>
                <li className="flex items-center text-slate-600"><span className="text-lime-500 font-bold mr-3">✓</span> 7 days of rental time</li>
                <li className="flex items-center text-slate-600"><span className="text-lime-500 font-bold mr-3">✓</span> Pickup when you're done</li>
                <li className="flex items-center text-slate-600"><span className="text-lime-500 font-bold mr-3">✓</span> Responsible disposal</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-8 border-2 border-lime-200"
            >
              <h3 className="font-black text-slate-900 mb-4">Additional Fees May Apply:</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600"><span className="text-lime-500 mr-3">•</span> Extended rental beyond 7 days: $15/day</li>
                <li className="flex items-center text-slate-600"><span className="text-lime-500 mr-3">•</span> Disposal fees vary by material type</li>
                <li className="flex items-center text-slate-600"><span className="text-lime-500 mr-3">•</span> Delivery fees vary by zone</li>
                <li className="flex items-center text-slate-600"><span className="text-lime-500 mr-3">•</span> Overage fees for exceeding weight limits</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-12"
          >
            <Button
              to="/quote"
              variant="primary"
              className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-lime-500/30 hover:shadow-2xl transition-all duration-300"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
