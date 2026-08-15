import React, { useState, useEffect } from 'react';
import SEO from './components/SEO';
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

  const isBookPage = currentHash === '#book';

  return (
    <div className="min-h-screen bg-[#f7faf3] font-sans selection:bg-[#ec558b] selection:text-white">

      {/* Per-view SEO tags */}
      {isBookPage ? (
        <SEO
          title="Book an Appointment – Home Vet Visit Dubai"
          description="Book a home vet visit in Dubai with YourHomeVet. Contact us by email or WhatsApp and our team will bring expert, stress-free care directly to your doorstep."
          canonical="https://yourhomevet.ae/#book"
        />
      ) : (
        <SEO
          title="Home Vet Care at Your Doorstep, Dubai"
          description="Personalised, stress-free home veterinary care across Dubai. Expert vets come to your door for routine consultations, vaccinations, health checks, and more."
          canonical="https://yourhomevet.ae/"
        />
      )}

      <Header />

      {isBookPage ? (
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
