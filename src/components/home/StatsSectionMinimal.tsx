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
    <section className="relative py-20 bg-white border-y border-slate-100">
      <div ref={ref} className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-center"
              >
                <Icon className="w-8 h-8 text-slate-400 mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-600 font-medium">
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
