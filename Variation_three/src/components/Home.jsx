import React from 'react';
import SEO from './SEO';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Services from './Services';
import Steps from './Steps';
import Reviews from './Reviews';
import ContactSection from './ContactSection';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home Veterinary Services" 
        description="Compassionate 24/7 home veterinary care across Greater Dubai. Independent premium mobile vets delivering stress-free care to your pet at home." 
        canonical="https://homevetsdubai.com/"
      />
      <Hero />
      <WhyUs />
      <Services />
      <Steps />
      <Reviews />
      <ContactSection />
    </>
  );
}
