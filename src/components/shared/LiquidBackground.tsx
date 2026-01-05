import React from 'react';
import { motion } from 'motion/react';

interface LiquidBackgroundProps {
  variant?: 'default' | 'hero' | 'subtle';
  children?: React.ReactNode;
}

export const LiquidBackground: React.FC<LiquidBackgroundProps> = ({
  variant = 'default',
  children
}) => {
  const variants = {
    default: {
      blob1: 'top-0 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-green-400/30',
      blob2: 'top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-teal-400/30 via-emerald-400/20 to-cyan-400/30',
      blob3: 'bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-green-400/25 via-emerald-400/15 to-teal-400/25',
      blob4: '-bottom-40 -right-20 w-96 h-96 bg-gradient-to-tl from-cyan-400/30 via-teal-400/20 to-emerald-400/30',
    },
    hero: {
      blob1: 'top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/40 via-teal-500/30 to-green-500/40',
      blob2: 'top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-500/40 via-emerald-500/30 to-cyan-500/40',
      blob3: 'bottom-0 left-40 w-[450px] h-[450px] bg-gradient-to-tr from-green-500/35 via-emerald-500/25 to-teal-500/35',
      blob4: 'bottom-0 right-20 w-[550px] h-[550px] bg-gradient-to-tl from-cyan-500/40 via-teal-500/30 to-emerald-500/40',
    },
    subtle: {
      blob1: 'top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-300/20 via-teal-300/10 to-green-300/20',
      blob2: 'top-20 right-0 w-56 h-56 bg-gradient-to-bl from-teal-300/20 via-emerald-300/10 to-cyan-300/20',
      blob3: 'bottom-0 left-20 w-48 h-48 bg-gradient-to-tr from-green-300/15 via-emerald-300/10 to-teal-300/15',
      blob4: 'bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-300/20 via-teal-300/10 to-emerald-300/20',
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Liquid blob animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 - Top left */}
        <motion.div
          className={`absolute ${currentVariant.blob1} rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-3xl`}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
            borderRadius: [
              '40% 60% 70% 30% / 60% 30% 70% 40%',
              '60% 40% 30% 70% / 40% 70% 30% 60%',
              '40% 60% 70% 30% / 60% 30% 70% 40%'
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Blob 2 - Top right */}
        <motion.div
          className={`absolute ${currentVariant.blob2} rounded-[60%_40%_30%_70%/40%_70%_30%_60%] blur-3xl`}
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
            borderRadius: [
              '60% 40% 30% 70% / 40% 70% 30% 60%',
              '30% 70% 60% 40% / 70% 40% 60% 30%',
              '60% 40% 30% 70% / 40% 70% 30% 60%'
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Blob 3 - Bottom left */}
        <motion.div
          className={`absolute ${currentVariant.blob3} rounded-[30%_70%_40%_60%/70%_60%_40%_30%] blur-3xl`}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 120, 0],
            borderRadius: [
              '30% 70% 40% 60% / 70% 60% 40% 30%',
              '70% 30% 60% 40% / 30% 40% 60% 70%',
              '30% 70% 40% 60% / 70% 60% 40% 30%'
            ],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Blob 4 - Bottom right */}
        <motion.div
          className={`absolute ${currentVariant.blob4} rounded-[70%_30%_60%_40%/30%_40%_60%_70%] blur-3xl`}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.25, 1],
            rotate: [0, -120, 0],
            borderRadius: [
              '70% 30% 60% 40% / 30% 40% 60% 70%',
              '40% 60% 30% 70% / 60% 70% 30% 40%',
              '70% 30% 60% 40% / 30% 40% 60% 70%'
            ],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      {/* Content */}
      {children}
    </div>
  );
};
