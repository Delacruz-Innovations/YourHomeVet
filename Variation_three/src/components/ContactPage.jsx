import React from 'react';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Reviews />
      <ResourcesVideo />
    </>
  );
}
