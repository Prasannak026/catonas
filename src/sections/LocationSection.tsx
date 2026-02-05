import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { businessInfo } from '../data/business';

/**
 * Location & Hours section with embedded map
 */
export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-br from-cream/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-display">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop by and experience Catona's magic in person.
          </p>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <AnimatedSection direction="left">
            <div className="h-96 bg-gray-300 rounded-xl overflow-hidden shadow-xl relative">
              {/* Placeholder for Google Maps - in production, integrate actual Google Maps API */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                <div className="text-center">
                  <p className="text-6xl mb-4">📍</p>
                  <p className="text-gray-700 font-semibold">
                    {businessInfo.address}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Click to open in Google Maps
                  </p>
                </div>
              </div>

              {/* Link to Google Maps */}
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(businessInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 cursor-pointer"
                aria-label="Open location in Google Maps"
              />
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection direction="right">
            <div className="space-y-8">
              {/* Address */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MapPin className="text-coral flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">Location</h3>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    {businessInfo.address}
                    <br />
                    {businessInfo.location}
                  </address>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(businessInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral hover:text-coral/80 font-semibold text-sm mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Clock className="text-coral flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">Hours</h3>
                  <div className="space-y-1 text-gray-700">
                    <p><strong>Weekdays:</strong> {businessInfo.hours.weekday}</p>
                    <p><strong>Weekends:</strong> {businessInfo.hours.weekend}</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.a
                href={`tel:${businessInfo.phone}`}
                whileHover={{ x: 10 }}
                className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors block"
              >
                <Phone className="text-coral flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">Phone</h3>
                  <p className="text-gray-700 text-lg font-semibold">
                    {businessInfo.phone}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Click to call
                  </p>
                </div>
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
