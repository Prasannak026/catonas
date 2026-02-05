import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { gallery } from '../data/business';

/**
 * Gallery section with responsive image grid
 */
export const GallerySection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-cream/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-display">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through Catona's sweet creations and memorable moments.
          </p>
        </AnimatedSection>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gallery.map(item => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            >
              {/* Placeholder Image */}
              <div className="h-64 bg-gradient-to-br from-rose/20 to-coral/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                🍦
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex flex-col justify-end p-6"
              >
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
