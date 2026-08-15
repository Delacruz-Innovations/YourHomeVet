import React from 'react';
import SEO from './SEO';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with YourHomeVet for mobile veterinary services across Dubai. Schedule a home visit or request more information." 
        canonical="https://homevetsdubai.com/contact"
      />
      <ContactHero />
      <ContactForm />
      <Reviews />
      <ResourcesVideo />
    </>
  );
}
