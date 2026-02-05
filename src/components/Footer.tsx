import React from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from 'lucide-react';
import { businessInfo } from '../data/business';

/**
 * Footer component with contact info and social links
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🍦 Catona's</h3>
            <p className="text-gray-300">
              Crafting delicious memories one scoop at a time since {businessInfo.founded}.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-coral transition-colors">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-coral transition-colors">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <address className="not-italic">
                  {businessInfo.address}
                  <br />
                  {businessInfo.location}
                </address>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <div>
                  <p><strong>Weekdays:</strong> {businessInfo.hours.weekday}</p>
                  <p><strong>Weekends:</strong> {businessInfo.hours.weekend}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Catona's Ice Cream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
