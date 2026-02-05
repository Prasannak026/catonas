import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { businessInfo } from '../data/business';

/**
 * About section highlighting the story and heritage
 */
export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <AnimatedSection direction="left">
            <div className="h-96 bg-gradient-to-br from-coral/30 to-rose/30 rounded-2xl flex items-center justify-center text-9xl shadow-xl hover:shadow-2xl transition-shadow">
              🍦
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div>
              <p className="text-coral font-semibold uppercase tracking-widest mb-4">
                Our Heritage
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-display">
                A Taste of Tradition
              </h2>

              <div className="space-y-4 text-gray-700 text-lg mb-8">
                <p>
                  Since {businessInfo.founded}, Catona's Ice Cream has been a beloved destination 
                  in Painesville, crafting memories one scoop at a time.
                </p>
                <p>
                  What started as a family dream has grown into a community institution, where 
                  quality ingredients and handcrafted techniques meet timeless flavors.
                </p>
                <p>
                  Every flavor tells a story. From classic vanilla to innovative seasonal creations, 
                  we're committed to using only the finest ingredients sourced locally whenever possible.
                </p>
                <p>
                  Our passion is creating moments of joy—whether it's a childhood treat, 
                  a date night destination, or your go-to spot for celebration.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <p className="text-3xl font-bold text-coral">{new Date().getFullYear() - businessInfo.founded}+</p>
                  <p className="text-gray-600 font-semibold">Years</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <p className="text-3xl font-bold text-coral">{businessInfo.reviews}+</p>
                  <p className="text-gray-600 font-semibold">Reviews</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <p className="text-3xl font-bold text-coral">{menuFlavors.length}</p>
                  <p className="text-gray-600 font-semibold">Flavors</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// Import at the bottom to avoid circular dependencies
import { menuFlavors } from '../data/business';
