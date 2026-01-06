import React, { useRef } from 'react';
import { Trash2, Droplet, Hammer, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { Button } from '../shared/Button';

const services = [
  {
    icon: Trash2,
    title: 'Dumpster Rentals',
    description: 'From 10 to 40-yard dumpsters, we have the perfect size for your residential, commercial, or construction project.',
    link: '/dumpster-rentals',
    gradient: 'from-lime-500 to-emerald-500',
    bgGradient: 'from-lime-50 to-emerald-50',
    iconBg: 'bg-gradient-to-br from-lime-500 to-emerald-500',
  },
  {
    icon: Droplet,
    title: 'Concrete Washouts',
    description: '7-yard concrete washout containers for environmentally compliant concrete disposal on construction sites.',
    link: '/concrete-washouts',
    gradient: 'from-lime-500 to-emerald-500',
    bgGradient: 'from-lime-50 to-emerald-50',
    iconBg: 'bg-gradient-to-br from-lime-500 to-emerald-500',
  },
  {
    icon: Hammer,
    title: 'Concrete Breakout',
    description: '9-yard containers designed specifically for heavy concrete, asphalt, and masonry disposal projects.',
    link: '/concrete-breakout',
    gradient: 'from-lime-500 to-emerald-500',
    bgGradient: 'from-lime-50 to-emerald-50',
    iconBg: 'bg-gradient-to-br from-lime-500 to-emerald-500',
  },
];

export const ServicesGridMinimal: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Green Tint Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white to-lime-50/40"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(132, 204, 22, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(132, 204, 22, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div ref={ref} className="relative container mx-auto px-6 md:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mb-4 px-4 py-2 bg-slate-100 rounded-full"
        >
          <span className="text-sm font-bold text-slate-700 tracking-wide">OUR SERVICES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Everything You Need,
          <br />
          <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
            All In One Place
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-slate-600 max-w-3xl mx-auto font-medium"
        >
          Professional waste management solutions designed for every type of project
        </motion.p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 md:px-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 border-2 border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`}></div>

              {/* Massive Icon */}
              <div className="relative mb-8">
                <div className={`inline-flex items-center justify-center w-28 h-28 rounded-2xl ${service.iconBg} shadow-xl group-hover:scale-110 transition-all duration-300 ease-out`}>
                  <Icon className="h-14 w-14 text-white" strokeWidth={2.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-700 mb-8 leading-relaxed font-medium text-base">
                {service.description}
              </p>

              {/* CTA Button */}
              <Button
                to={service.link}
                variant="ghost"
                className={`group/btn font-bold inline-flex items-center gap-2 text-slate-900 hover:gap-3 transition-all`}
              >
                Learn More
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
