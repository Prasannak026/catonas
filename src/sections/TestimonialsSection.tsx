import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { StarRating } from '../components/StarRating';
import { AnimatedSection } from '../components/AnimatedSection';
import { testimonials } from '../data/business';

/**
 * Testimonials section with customer reviews
 */
export const TestimonialsSection: React.FC = () => {
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-display">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who have made Catona's their favorite ice cream destination.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map(testimonial => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card>
                <div className="p-8">
                  {/* Stars */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} size={20} />
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <p className="font-bold text-navy">
                    {testimonial.name}
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
