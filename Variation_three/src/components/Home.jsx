import React from 'react';
import SEO from './SEO';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Services from './Services';
import Steps from './Steps';
import CarePlans from './CarePlans';
import Reviews from './Reviews';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';

export default function Home() {
  const handleOpenBooking = () => {
    window.dispatchEvent(new Event('openBookingModal'));
  };

  return (
    <>
      <SEO 
        title="Home Veterinary Services | Stress-Free Mobile Vet" 
        description="Compassionate 24/7 home veterinary care. Independent premium mobile vets delivering stress-free care to your pet at home." 
        canonical="https://homevetsdubai.com/"
      />
      <Hero />
      <WhyUs />
      <Services />
      <Steps />
      <CarePlans onOpenEmergencyModal={handleOpenBooking} />
      <Reviews />
      <FAQSection />
      <ContactSection />
    </>
  );
}
