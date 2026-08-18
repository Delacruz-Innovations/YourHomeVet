import React from 'react';
import SEO from './SEO';
import AllServicesContent from './AllServicesContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function ServicesListPage() {
  return (
    <>
      <SEO 
        title="All Veterinary Services | YourHomeVet" 
        description="Comprehensive in-home veterinary services across London. Routine wellness exams, vaccinations, surgeries, diagnostics, and 24/7 rapid emergency care." 
        canonical="https://homevetsdubai.com/services"
      />
      <AllServicesContent />
      <Reviews />
      <FAQSection />
    </>
  );
}

