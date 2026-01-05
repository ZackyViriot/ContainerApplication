import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'subtle';
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
}) => {
  const variants = {
    default: 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]',
    strong: 'bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]',
    subtle: 'bg-white/50 backdrop-blur-lg border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]',
  };

  const hoverAnimation = hover ? {
    whileHover: {
      y: -8,
      scale: 1.02,
      boxShadow: '0 20px 60px 0 rgba(31, 38, 135, 0.25)',
      transition: { duration: 0.3, ease: 'easeOut' as const }
    }
  } : {};

  return (
    <motion.div
      className={`relative ${variants[variant]} rounded-2xl overflow-hidden ${className}`}
      {...hoverAnimation}
    >
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      {/* Border gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/20 to-transparent opacity-30 pointer-events-none" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
