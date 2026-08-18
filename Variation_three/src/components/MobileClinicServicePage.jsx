import React from 'react';
import SEO from './SEO';
import MobileClinicContent from './MobileClinicContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function MobileClinicServicePage() {
  return (
    <>
      <SEO 
        title="Mobile Veterinary Clinic & Pet Ambulance | YourHomeVet" 
        description="Full-service mobile veterinary clinic and ambulance dispatch delivering clinical diagnostics, check-ups, and transport to your doorstep." 
        canonical="https://homevetsdubai.com/ourservice/mobile-clinic"
      />
      <MobileClinicContent />
      <Reviews />
      <FAQSection />
    </>
  );
}
