import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../shared/Button';

export const HeroMinimal: React.FC = () => {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 bg-lime-400/10 rounded-full border border-lime-400/20"
        >
          <span className="text-xs font-medium text-lime-700 tracking-wide">NEW</span>
          <span className="text-xs text-slate-600">Same-day delivery available</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight"
        >
          Professional waste
          <br />
          management made simple.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Every dumpster rental, concrete washout, and pickup
          <br className="hidden md:block" />
          in one simple platform.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            to="/quote"
            variant="primary"
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-sm"
          >
            Get Free Quote
          </Button>
        </motion.div>

        {/* Quote Form Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Shadow/Base */}
            <div className="absolute inset-0 bg-slate-900/5 blur-3xl translate-y-8"></div>

            {/* Quote Form Mockup Container with 3D tilt */}
            <div
              className="relative bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden"
              style={{
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
              }}
            >
              {/* Form Header */}
              <div className="bg-slate-900 px-8 py-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Get Your Free Quote</h3>
                <p className="text-slate-300 text-sm">Takes less than 2 minutes</p>
              </div>

              {/* Form Content */}
              <div className="bg-gradient-to-br from-white to-slate-50 p-8 md:p-12">
                <div className="space-y-6">
                  {/* Step Indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">1</div>
                      <div className="w-12 h-1 bg-slate-200"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center text-sm font-semibold">2</div>
                      <div className="w-12 h-1 bg-slate-200"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center text-sm font-semibold">3</div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Step 1 of 3</span>
                  </div>

                  {/* Question */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-3 block">
                      What type of project do you have?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-white border-2 border-slate-900 rounded-lg p-4 cursor-pointer">
                        <div className="text-2xl mb-2">🏗️</div>
                        <div className="text-sm font-medium text-slate-900">Construction</div>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 cursor-pointer">
                        <div className="text-2xl mb-2">🏠</div>
                        <div className="text-sm font-medium text-slate-600">Residential</div>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 cursor-pointer">
                        <div className="text-2xl mb-2">🏢</div>
                        <div className="text-sm font-medium text-slate-600">Commercial</div>
                      </div>
                    </div>
                  </div>

                  {/* Size Selection Preview */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-3 block">
                      Select container size
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 cursor-pointer">
                        <div className="text-lg font-bold text-slate-900 mb-1">10 Yard</div>
                        <div className="text-xs text-slate-500">Small projects</div>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 cursor-pointer">
                        <div className="text-lg font-bold text-slate-900 mb-1">20 Yard</div>
                        <div className="text-xs text-slate-500">Medium projects</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <div className="bg-slate-900 text-white text-center py-3 px-6 rounded-lg font-medium cursor-pointer">
                      Continue →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
