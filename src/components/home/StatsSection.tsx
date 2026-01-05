import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Users, Star, Award } from 'lucide-react';
import { TiltCard } from '../shared/TiltCard';
import { GlassCard } from '../shared/GlassCard';

const stats = [
  {
    icon: Users,
    value: '5,000+',
    label: 'Happy Customers',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Star,
    value: '15+',
    label: 'Years Experience',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    value: '99%',
    label: 'On-Time Delivery',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Award,
    value: '2',
    label: 'Service Locations',
    gradient: 'from-teal-500 to-green-500',
  },
];

export const StatsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>

      <div ref={ref} className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative"
              >
                <TiltCard tiltIntensity={12} glareEffect={true}>
                  <GlassCard variant="strong" className="p-6 lg:p-8">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                    {/* Icon */}
                    <motion.div
                      className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-sm`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    </motion.div>

                    {/* Value */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="relative text-3xl lg:text-4xl font-bold text-slate-900 mb-1"
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label */}
                    <p className="relative text-sm text-slate-600 font-medium">
                      {stat.label}
                    </p>

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>
                  </GlassCard>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
