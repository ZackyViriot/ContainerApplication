import React, { useRef } from 'react';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Button } from '../shared/Button';
import { LiquidBackground } from '../shared/LiquidBackground';
import { GlassCard } from '../shared/GlassCard';
import { AnimatedText } from '../shared/AnimatedText';
import { TiltCard } from '../shared/TiltCard';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set((x - centerX) / 50);
    mouseY.set((y - centerY) / 50);
  };

  const features = [
    {
      icon: Zap,
      title: 'Same-Day Delivery',
      description: 'Fast service when you need it most',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Upfront Pricing',
      description: 'No hidden fees or surprises',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Sparkles,
      title: 'Expert Service',
      description: 'Helping you choose the right container',
      gradient: 'from-teal-500 to-green-500'
    },
  ];

  return (
    <LiquidBackground variant="hero">
      <div
        ref={ref}
        className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden min-h-screen flex items-center"
        onMouseMove={handleMouseMove}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              x: mouseXSpring,
              y: mouseYSpring,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.08)_0%,transparent_50%)]"></div>

          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

      <motion.div
        style={{ opacity, y, scale }}
        className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-24 md:py-32 lg:py-40"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-6 lg:mb-8 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200/50 shadow-sm"
          >
            <motion.div
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </motion.div>
            <span className="text-xs lg:text-sm font-medium bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              San Antonio & Boerne's Trusted Partner
            </span>
          </motion.div>

          <div className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-10 leading-[1.1] tracking-tight text-slate-900 px-4 md:px-0">
            <AnimatedText
              text="Simple, Professional"
              className="relative inline-block"
              delay={0.2}
              as="span"
            />
            <br />
            <AnimatedText
              text="Waste Management"
              className="relative inline-block bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent"
              delay={0.6}
              as="span"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl mb-10 lg:mb-16 text-slate-600 font-light leading-relaxed max-w-3xl mx-auto px-4 md:px-0"
          >
            Dumpster and concrete washout rentals with transparent pricing and same-day delivery
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-16 lg:mb-24 px-4 md:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <Button to="/quote" variant="primary" size="lg" className="relative shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30">
                Get Free Quote
                <motion.div
                  className="inline-block ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button to="/about" variant="outline" size="lg" className="border-2 hover:bg-slate-50">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TiltCard tiltIntensity={10} glareEffect={true}>
                    <GlassCard variant="default" className="group p-6 lg:p-8">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                      {/* Animated icon container */}
                      <motion.div
                        className={`relative bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.4 }
                        }}
                      >
                        <Icon className="h-7 w-7 text-white" />
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      </motion.div>

                      <h3 className="relative font-semibold mb-2 text-slate-900 text-base lg:text-lg">{feature.title}</h3>
                      <p className="relative text-sm text-slate-600 leading-relaxed">{feature.description}</p>

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </div>
                    </GlassCard>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
      </div>
    </LiquidBackground>
  );
};
