import React, { useRef } from 'react';
import { Trash2, Droplet, Hammer, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { Section } from '../shared/Section';
import { Button } from '../shared/Button';
import { BentoGrid, BentoCard } from '../shared/BentoGrid';
import { TiltCard } from '../shared/TiltCard';
import { GlassCard } from '../shared/GlassCard';

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
          className="inline-block mb-6 px-5 py-2.5 bg-emerald-50 rounded-full border border-emerald-100"
        >
          <span className="text-sm font-medium text-emerald-700 tracking-wide">Our Services</span>
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

      <BentoGrid className="max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          const gradients = [
            'from-blue-500 to-cyan-500',
            'from-teal-500 to-green-500',
            'from-orange-500 to-pink-500'
          ];
          const spans: Array<'medium' | 'large' | 'medium'> = ['medium', 'large', 'medium'];
          const gradient = gradients[index];
          const span = spans[index];

          return (
            <BentoCard key={service.title} span={span}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <TiltCard tiltIntensity={8} className="h-full">
                  <GlassCard variant="default" className="group h-full p-6 lg:p-8 flex flex-col justify-between">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                    <div>
                      {/* Animated icon container */}
                      <div className="flex justify-center mb-4">
                        <motion.div
                          className={`relative bg-gradient-to-br ${gradient} p-4 rounded-xl shadow-lg`}
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.4 }
                          }}
                        >
                          <Icon className="h-7 w-7 text-white relative z-10" />
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        </motion.div>
                      </div>

                      <h3 className="relative text-lg lg:text-xl font-semibold text-slate-900 mb-2 text-center">{service.title}</h3>
                      <p className="relative text-slate-600 mb-4 leading-relaxed text-sm text-center">{service.description}</p>
                    </div>

                    <div className="relative flex justify-center">
                      <Button to={service.link} variant="ghost" className="group-hover:text-emerald-600 font-medium text-sm">
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
                  </GlassCard>
                </TiltCard>
              </motion.div>
            </BentoCard>
          );
        })}
      </BentoGrid>
    </Section>
  );
};
