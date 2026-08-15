import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import HowItWorks from './components/HowItWorks';
import Advantages from './components/Advantages';
import ServicesList from './components/ServicesList';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookAppointment from './components/BookAppointment';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return (
    <div className="min-h-screen bg-[#f7faf3] font-sans selection:bg-[#ec558b] selection:text-white">
      <Header />
      
      {currentHash === '#book' ? (
        <BookAppointment />
      ) : (
        <main>
          <Hero />
          <IntroSection />
          <HowItWorks />
          <Advantages />
          <ServicesList />
          <Pricing />
          <CTA />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
