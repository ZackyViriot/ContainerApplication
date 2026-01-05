import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface GradientMeshProps {
  variant?: 'default' | 'vibrant' | 'subtle';
}

export const GradientMesh: React.FC<GradientMeshProps> = ({ variant = 'default' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.8, 0.5, 0.7, 0.4]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 0.8, 0.5, 0.7]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.7, 0.6, 0.8, 0.5]);

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const variants = {
    default: {
      colors: [
        'rgba(16, 185, 129, 0.4)',  // emerald
        'rgba(20, 184, 166, 0.4)',  // teal
        'rgba(5, 150, 105, 0.4)',   // emerald-600
      ],
    },
    vibrant: {
      colors: [
        'rgba(59, 130, 246, 0.5)',  // blue
        'rgba(139, 92, 246, 0.5)',  // purple
        'rgba(236, 72, 153, 0.5)',  // pink
      ],
    },
    subtle: {
      colors: [
        'rgba(148, 163, 184, 0.2)', // slate
        'rgba(203, 213, 225, 0.2)', // slate-300
        'rgba(226, 232, 240, 0.2)', // slate-200
      ],
    },
  };

  const currentVariant = variants[variant];

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: opacity1, y: y1 }}
      >
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[70%] h-[70%] rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${currentVariant.colors[0]} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: opacity2, y: y2 }}
      >
        <motion.div
          className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${currentVariant.colors[1]} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: opacity3, y: y3 }}
      >
        <motion.div
          className="absolute bottom-[-5%] left-[30%] w-[65%] h-[65%] rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${currentVariant.colors[2]} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, -60, 90, 0],
            y: [0, 60, -40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </motion.div>

      {/* Noise texture overlay for added depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
