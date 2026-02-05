import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
import { businessInfo } from '../data/business';

/**
 * Contact section with form and direct contact options
 */
export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to backend
    console.log('Form submitted:', formData);
    alert('Thanks for contacting us! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-display">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us today!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral transition-all"
                  placeholder="(440) 555-0123"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral transition-all resize-none"
                  placeholder="Tell us what you'd like to know..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </AnimatedSection>

          {/* Quick Contact */}
          <AnimatedSection direction="right" className="space-y-6">
            {/* Direct Call */}
            <motion.a
              href={`tel:${businessInfo.phone}`}
              whileHover={{ scale: 1.02 }}
              className="block p-8 rounded-xl bg-gradient-to-br from-coral/10 to-rose/10 border-2 border-coral/20 hover:border-coral hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <MessageCircle className="text-coral flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">Call Us Directly</h3>
                  <p className="text-2xl font-bold text-coral mb-2">
                    {businessInfo.phone}
                  </p>
                  <p className="text-gray-600">
                    Available during business hours. We'll answer all your questions!
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${businessInfo.email}`}
              whileHover={{ scale: 1.02 }}
              className="block p-8 rounded-xl bg-gradient-to-br from-sage/10 to-green-100/10 border-2 border-sage/20 hover:border-sage hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <Send className="text-sage flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">Email Us</h3>
                  <p className="text-lg font-semibold text-sage mb-2">
                    {businessInfo.email}
                  </p>
                  <p className="text-gray-600">
                    Send us an email anytime. We'll respond within 24 hours.
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Visit In Person */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gold/10 to-yellow-100/10 border-2 border-gold/20 hover:border-gold hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">🍦</span>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">Visit Us In Person</h3>
                  <p className="text-gray-700 font-semibold mb-2">
                    {businessInfo.address}
                  </p>
                  <p className="text-gray-600 mb-3">
                    Stop by and taste the difference quality makes!
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Open:</strong> {businessInfo.hours.weekday} (Weekdays)<br />
                    <strong>Open:</strong> {businessInfo.hours.weekend} (Weekends)
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
