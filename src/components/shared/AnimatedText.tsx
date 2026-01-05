import React from 'react';
import { motion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'word' | 'char';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  type = 'word',
  as: Component = 'p',
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'word' ? 0.08 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (type === 'word') {
    return (
      <Component className={className}>
        <motion.span
          style={{ display: 'inline-block', overflow: 'hidden' }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Component>
    );
  }

  // Character-by-character
  return (
    <Component className={className}>
      <motion.span
        style={{ display: 'inline-block' }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split('').map((char, index) => (
          <motion.span
            variants={child}
            style={{ display: 'inline-block' }}
            key={index}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};
