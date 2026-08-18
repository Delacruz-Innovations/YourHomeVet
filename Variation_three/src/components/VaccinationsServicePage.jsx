import React from 'react';
import SEO from './SEO';
import VaccinationsContent from './VaccinationsContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function VaccinationsServicePage() {
  return (
    <>
      <SEO 
        title="Pet Vaccinations & Boosters At Home | YourHomeVet" 
        description="Comprehensive in-home core and lifestyle vaccinations for dogs and cats with official passport updates and Zoetis vaccines." 
        canonical="https://homevetsdubai.com/ourservice/vaccinations"
      />
      <VaccinationsContent />
      <Reviews />
      <FAQSection />
    </>
  );
}
