import React, { useRef } from 'react';
import { MapPin, MessageCircle, Target, Zap, Clock, Shield } from 'lucide-react';
import { motion, useInView } from 'motion/react';

const features = [
  {
    icon: MapPin,
    title: 'Two Strategic Locations',
    description: 'Yards in Boerne and San Antonio ensure lightning-fast delivery and pickup throughout the entire region.',
  },
  {
    icon: Zap,
    title: 'Instant Response',
    description: "Lightning-fast communication and support. We're always ready to answer your questions and solve problems.",
  },
  {
    icon: Target,
    title: 'Expert Guidance',
    description: "Our specialists help you choose the perfect container size and service, saving you time and money.",
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: "Need it now? We offer same-day delivery and pickup to keep your project moving forward.",
  },
  {
    icon: Shield,
    title: 'Fully Licensed',
    description: "Fully insured and compliant with all environmental regulations for your peace of mind.",
  },
  {
    icon: MessageCircle,
    title: 'Transparent Pricing',
    description: "No hidden fees, no surprises. Just honest, upfront pricing you can trust.",
  },
];

export const WhyChooseUsMinimal: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Green Tint Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 via-white to-emerald-50/50"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(132, 204, 22, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(132, 204, 22, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div ref={ref} className="relative container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full"
          >
            <span className="text-sm font-bold text-white tracking-wide">WHY CHOOSE US</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Built Different,
            <br />
            <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Delivering Better
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600 max-w-3xl mx-auto font-medium"
          >
            We're not just another waste management company—we're your trusted partner in getting the job done right.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-lime-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Background Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-lime-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                {/* Large Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-all duration-300 ease-out">
                    <Icon className="h-10 w-10 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
