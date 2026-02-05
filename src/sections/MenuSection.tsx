import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { AnimatedSection } from '../components/AnimatedSection';
import { menuFlavors } from '../data/business';

/**
 * Menu/Flavors section with filterable grid
 */
export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(menuFlavors.map(f => f.category)));
  const filteredFlavors = selectedCategory
    ? menuFlavors.filter(f => f.category === selectedCategory)
    : menuFlavors;

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
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-display">
            Our Flavors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of handcrafted ice cream flavors, 
            each made with premium ingredients and passion.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12 delay-100">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-coral text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Flavors
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-coral text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Flavors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredFlavors.map(flavor => (
            <motion.div key={flavor.id} variants={itemVariants}>
              <Card hoverable>
                {/* Flavor Color Preview */}
                <div className={`h-32 bg-gradient-to-br ${flavor.color} flex items-center justify-center text-6xl`}>
                  {flavor.icon}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <p className="text-sm font-semibold text-coral uppercase tracking-wider">
                      {flavor.category}
                    </p>
                    <h3 className="text-2xl font-bold text-navy mt-1">
                      {flavor.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {flavor.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
