import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UrgentSection from './components/UrgentSection';
import AnimalCarousel from './components/AnimalCarousel';
import ImpactSection from './components/ImpactSection';
import AnimalStories from './components/AnimalStories';
import AboutSection from './components/AboutSection';
import PixDonation from './components/PixDonation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Carregando esperança...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <UrgentSection />
      <AnimalCarousel />
      <ImpactSection />
      <AnimalStories />
      <AboutSection />
      <PixDonation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;