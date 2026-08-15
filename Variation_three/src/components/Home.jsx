import React from 'react';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Services from './Services';
import Steps from './Steps';
import Reviews from './Reviews';
import ContactSection from './ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Steps />
      <Reviews />
      <ContactSection />
    </>
  );
}
