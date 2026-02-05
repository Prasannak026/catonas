import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { AnimatedSection } from '../components/AnimatedSection';
import { seasonalSpecials } from '../data/business';

/**
 * Seasonal specials section
 */
export const SpecialsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="specials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-display">
            Seasonal Specials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our limited-edition flavors that celebrate each season with unique, 
            delicious twists.
          </p>
        </AnimatedSection>

        {/* Specials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {seasonalSpecials.map(special => (
            <motion.div key={special.id} variants={itemVariants}>
              <Card>
                <div className="p-8">
                  {/* Season Badge */}
                  <div className="inline-block mb-4">
                    <p className="text-sm font-bold text-white bg-coral px-4 py-1 rounded-full">
                      {special.season}
                    </p>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {special.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {special.description}
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Available until {special.endDate}
                    </p>
                    <p className="font-semibold text-coral">
                      {special.flavor}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
