import React from 'react';
import SEO from './SEO';
import PartnersContent from './PartnersContent';
import FAQSection from './FAQSection';

export default function PartnersPage() {
  return (
    <>
      <SEO 
        title="Our Trusted Pet Partners | YourHomeVet" 
        description="Discover YourHomeVet's trusted network of pet relocation specialists, dog trainers, boarding resorts, and pet sitters." 
        canonical="https://homevetsdubai.com/partners"
      />
      <PartnersContent />
      <FAQSection />
    </>
  );
}
