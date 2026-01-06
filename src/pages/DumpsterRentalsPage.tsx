import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Recycle, HardHat, Wrench, ArrowRight, Phone, Truck, Package, CheckCircle } from 'lucide-react';
import { Button } from '../components/shared/Button';

const rentalTypes = [
  {
    icon: HardHat,
    title: 'Construction Dumpster Rental',
    description: 'Perfect for new construction, renovations, and remodeling projects. Handle all types of construction debris including wood, drywall, roofing materials, and more.',
    uses: ['New construction', 'Major renovations', 'Roofing projects', 'Demolition work'],
  },
  {
    icon: Home,
    title: 'Residential Dumpster Rental',
    description: 'Ideal for home cleanouts, garage organization, and residential projects. From spring cleaning to estate cleanouts, we have the right size for your needs.',
    uses: ['Home cleanouts', 'Garage organization', 'Estate sales', 'Moving/downsizing'],
  },
  {
    icon: Building2,
    title: 'Roll-Off Dumpster Rental',
    description: 'Our roll-off dumpsters are delivered on specialized trucks and can be placed conveniently on your property. Available in multiple sizes for any project scope.',
    uses: ['Commercial projects', 'Large renovations', 'Long-term rentals', 'Industrial use'],
  },
  {
    icon: Recycle,
    title: 'Recycling Dumpster Rental',
    description: 'Dedicated containers for recyclable materials. Help the environment while keeping your project organized and compliant with local regulations.',
    uses: ['Metal recycling', 'Wood recycling', 'Cardboard/paper', 'Construction materials'],
  },
  {
    icon: Wrench,
    title: 'Specialty Dumpster Rental',
    description: 'Including concrete washouts and breakout containers designed for specific materials. Perfect for concrete contractors and specialized construction needs.',
    uses: ['Concrete washout', 'Concrete disposal', 'Heavy materials', 'Specialty waste'],
  },
];

const processSteps = [
  {
    icon: Phone,
    number: '01',
    title: 'Get Your Quote',
    description: 'Tell us about your project and we\'ll recommend the perfect container size. Get instant pricing online or call us.',
    accent: 'from-lime-400 to-lime-500',
  },
  {
    icon: Truck,
    number: '02',
    title: 'We Deliver',
    description: 'Choose your date and we\'ll drop off the dumpster right where you need it. Same-day delivery available.',
    accent: 'from-lime-500 to-emerald-500',
  },
  {
    icon: Package,
    number: '03',
    title: 'Fill It Up',
    description: 'Take your time loading - standard rental includes 7 days. No rushing, work at your own pace.',
    accent: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'We Haul Away',
    description: 'When you\'re done, give us a call and we\'ll pick it up. It\'s that simple.',
    accent: 'from-emerald-600 to-teal-600',
  },
];

export const DumpsterRentalsPage: React.FC = () => {
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
              Rental Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600"
          >
            Professional waste management solutions for residential, commercial, and industrial projects
          </motion.p>
        </div>
      </section>

      {/* Custom Flowing Process Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>

        {/* Decorative flowing line */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.15 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0,400 Q300,100 600,400 T1200,400"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="200"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full text-white text-sm font-bold mb-6">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Renting Made{' '}
              <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                Simple
              </span>
            </h2>
          </motion.div>

          {/* Flowing Process Steps */}
          <div className="relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-lime-300 via-emerald-400 to-teal-400 origin-left rounded-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`relative ${isEven ? 'lg:mt-0' : 'lg:mt-24'}`}
                  >
                    {/* Card */}
                    <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
                      {/* Gradient accent top */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.accent}`} />

                      {/* Floating number */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 flex items-center justify-center">
                        <span className={`text-7xl font-black bg-gradient-to-br ${step.accent} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity`}>
                          {step.number}
                        </span>
                      </div>

                      {/* Icon with animated background */}
                      <div className="relative mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>

                      {/* Bottom connector dot for desktop */}
                      <div className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.accent} shadow-lg border-4 border-white`} />
                      </div>
                    </div>

                    {/* Arrow connector for mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="flex lg:hidden justify-center my-4">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center"
                        >
                          <ArrowRight className="w-4 h-4 text-white rotate-90" />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA under process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-16"
          >
            <Button
              to="/quote"
              variant="primary"
              className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-lime-500/30 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Quote
              <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Rental Types - Redesigned */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/20 via-transparent to-emerald-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-lime-400 text-sm font-bold mb-6">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Types of{' '}
              <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                Dumpster Rentals
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-lime-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-3">{type.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{type.description}</p>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {type.uses.slice(0, 3).map((use, useIndex) => (
                        <span
                          key={useIndex}
                          className="text-xs px-2 py-1 bg-lime-500/20 text-lime-300 rounded-full"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental Terms - Cleaner Design */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Good to{' '}
              <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                Know
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Rental Period', content: 'Standard rental includes 7 days. Need more time? Additional days are just $15/day.', icon: '7' },
              { title: 'Weight Limits', content: 'Each container has a weight limit. We\'ll help you estimate to avoid surprises.', icon: 'lb' },
              { title: 'Prohibited Items', content: 'No hazardous materials, chemicals, paint, tires, or batteries. Contact us with questions.', icon: '!' },
              { title: 'Placement', content: 'We\'ll work with you to find the perfect spot. Permits may be needed for street placement.', icon: '📍' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-lime-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-100 to-emerald-100 rounded-xl flex items-center justify-center text-xl font-black text-lime-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-emerald-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-3xl mx-auto text-center px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-white/90 mb-10"
          >
            Get an instant quote and schedule your delivery today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              to="/quote"
              variant="primary"
              className="group bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="tel:8302168260"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              (830) 216-8260
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
