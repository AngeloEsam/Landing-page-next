'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollReveal({ children, delay = 0, direction = 'up' }: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'right':
        return { opacity: 0, x: -50, y: 0 };
      case 'left':
        return { opacity: 0, x: 50, y: 0 };
      case 'down':
        return { opacity: 0, x: 0, y: -50 };
      case 'up':
      default:
        return { opacity: 0, x: 0, y: 50 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
