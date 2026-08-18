import React from 'react';
import SEO from './SEO';
import CareersContent from './CareersContent';
import FAQSection from './FAQSection';

export default function CareersPage() {
  return (
    <>
      <SEO 
        title="Veterinary Careers & Job Vacancies | YourHomeVet" 
        description="Join the YourHomeVet team! Explore rewarding veterinary surgeon, nurse, and care coordinator opportunities in mobile veterinary medicine." 
        canonical="https://homevetsdubai.com/join-us"
      />
      <CareersContent />
      <FAQSection />
    </>
  );
}
