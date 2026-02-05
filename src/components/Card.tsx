import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

/**
 * Reusable Card component with optional hover animation
 */
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = true 
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -8 } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${hoverable ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};
