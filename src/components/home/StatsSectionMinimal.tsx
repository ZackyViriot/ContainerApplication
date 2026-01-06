import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Users, Star, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '5,000+',
    label: 'Happy Customers',
  },
  {
    icon: Star,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: TrendingUp,
    value: '99%',
    label: 'On-Time Delivery',
  },
  {
    icon: Award,
    value: '2',
    label: 'Service Locations',
  },
];

export const StatsSectionMinimal: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-900/20 via-transparent to-emerald-900/20"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(132, 204, 22, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(132, 204, 22, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div ref={ref} className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-slate-300 font-medium">
            Numbers that speak for themselves
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-gradient-to-br from-lime-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-lime-400/30 hover:scale-105 transition-all duration-300 ease-out"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-emerald-500 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-all duration-300 ease-out">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Value */}
                <div className="relative text-5xl lg:text-6xl font-black bg-gradient-to-br from-lime-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>

                {/* Label */}
                <p className="relative text-sm lg:text-base text-white/90 font-bold">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
