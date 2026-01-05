import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const GlassCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    addHoverListeners();

    // Re-run when DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  // Only show on desktop devices
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) return null;

  return (
    <>
      {/* Main glass cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-white/80 backdrop-blur-sm bg-white/10"
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderWidth: isHovering ? 3 : 2,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-white mix-blend-difference ml-[17px] mt-[17px]"
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Glass ripple effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-[9998] mix-blend-screen"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-400/40 backdrop-blur-xl border border-white/30 -ml-5 -mt-5" />
        </motion.div>
      )}
    </>
  );
};
