import React, { useRef } from 'react';
import { Trash2, Droplet, Hammer, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Section } from '../shared/Section';
import { Button } from '../shared/Button';

const services = [
  {
    icon: Trash2,
    title: 'Dumpster Rentals',
    description: 'From 10 to 40-yard dumpsters, we have the perfect size for your residential, commercial, or construction project. Flexible rental periods and competitive pricing.',
    link: '/dumpster-rentals',
  },
  {
    icon: Droplet,
    title: 'Concrete Washouts',
    description: '7-yard concrete washout containers for environmentally compliant concrete disposal. Essential for construction sites and concrete contractors.',
    link: '/concrete-washouts',
  },
  {
    icon: Hammer,
    title: 'Concrete Breakout Containers',
    description: '9-yard containers designed specifically for heavy concrete, asphalt, and masonry disposal. Built to handle the toughest demolition projects.',
    link: '/concrete-breakout',
  },
];

export const ServicesGrid: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="white" padding="xl">
      <div ref={ref} className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mb-6 px-5 py-2.5 bg-indigo-50 rounded-full border border-indigo-100"
        >
          <span className="text-sm font-medium text-indigo-700 tracking-wide">Our Services</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
        >
          Comprehensive Waste Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Professional waste management tailored to your project needs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          const gradients = [
            'from-blue-500 to-cyan-500',
            'from-violet-500 to-purple-500',
            'from-orange-500 to-pink-500'
          ];
          const gradient = gradients[index];

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
              }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border-2 border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-slate-300 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Animated icon container */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className={`relative bg-gradient-to-br ${gradient} p-5 rounded-xl shadow-lg`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  <Icon className="h-8 w-8 text-white relative z-10" />
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </motion.div>
              </div>

              <h3 className="relative text-xl lg:text-2xl font-semibold text-slate-900 mb-3 text-center">{service.title}</h3>
              <p className="relative text-slate-600 mb-6 leading-relaxed text-sm lg:text-base text-center">{service.description}</p>

              <div className="relative flex justify-center">
                <Button to={service.link} variant="ghost" className="group-hover:text-indigo-600 font-medium text-sm">
                  Learn More
                  <motion.div
                    className="inline-block ml-2"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4 inline" />
                  </motion.div>
                </Button>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
