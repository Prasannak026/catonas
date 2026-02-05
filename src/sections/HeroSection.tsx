import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import { businessInfo } from '../data/business';

/**
 * Hero section with eye-catching call-to-action
 */
export const HeroSection: React.FC = () => {
  const handleScroll = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-cream via-rose/20 to-coral/10 overflow-hidden flex items-center justify-center py-20"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-rose/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-coral font-semibold tracking-widest uppercase mb-4"
          >
            🍦 Since {businessInfo.founded}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-navy mb-6 font-display"
          >
            Welcome to Catona's
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            {businessInfo.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-10 max-w-xl mx-auto"
          >
            Handcrafted ice cream flavors made with the finest ingredients. 
            Where tradition meets taste in Painesville.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => {
                const tel = businessInfo.phone.replace(/\D/g, '');
                window.location.href = `tel:+1${tel}`;
              }}
            >
              📞 Call Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleScroll}
            >
              Explore Menu
            </Button>
          </motion.div>

          {/* Rating */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 text-gray-700 mb-12"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">⭐</span>
              ))}
            </div>
            <p className="text-lg font-semibold">
              {businessInfo.rating} ({businessInfo.reviews} reviews)
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={handleScroll}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto block text-coral hover:text-coral/80 transition-colors"
            aria-label="Scroll to menu"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
