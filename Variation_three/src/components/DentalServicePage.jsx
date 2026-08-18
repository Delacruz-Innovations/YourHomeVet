import React from 'react';
import SEO from './SEO';
import DentalContent from './DentalContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function DentalServicePage() {
  return (
    <>
      <SEO 
        title="Pet Dental Care & Cleaning | YourHomeVet" 
        description="Comprehensive in-home pet dental care, scaling, polishing, dental X-rays, extractions, and oral surgery for dogs and cats." 
        canonical="https://homevetsdubai.com/ourservice/dental"
      />
      <DentalContent />
      <Reviews />
      <FAQSection />
    </>
  );
}
