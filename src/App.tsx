import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { MenuSection } from './sections/MenuSection';
import { AboutSection } from './sections/AboutSection';
import { SpecialsSection } from './sections/SpecialsSection';
import { GallerySection } from './sections/GallerySection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { LocationSection } from './sections/LocationSection';
import { ContactSection } from './sections/ContactSection';
import { structuredData } from './data/business';
import './App.css';

/**
 * Main App component - Catona's Ice Cream website
 */
function App() {
  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Set up page metadata
    document.title = "Catona's Ice Cream - Premium Ice Cream in Painesville, Ohio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Discover Catona\'s Ice Cream in Painesville, Ohio. Handcrafted ice cream flavors made with premium ingredients since 1985.'
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <Header />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <SpecialsSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
