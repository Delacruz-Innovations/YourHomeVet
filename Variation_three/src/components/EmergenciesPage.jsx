import React from 'react';
import SEO from './SEO';
import EmergencyContent from './EmergencyContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function EmergenciesPage() {
  return (
    <>
      <SEO 
        title="24/7 Emergency Pet Care & Rapid Dispatch | YourHomeVet" 
        description="24/7 emergency veterinary care across London. Immediate mobile response, ICU stabilization, and emergency surgical capabilities." 
        canonical="https://homevetsdubai.com/ourservice/emergency"
      />
      <EmergencyContent />
      <Reviews />
      <FAQSection />
    </>
  );
}
