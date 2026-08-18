import React from 'react';
import SEO from './SEO';
import OurTeamContent from './OurTeamContent';
import FAQSection from './FAQSection';

export default function OurTeamPage() {
  return (
    <>
      <SEO 
        title="Meet Our Veterinary Surgeons & Specialists | YourHomeVet" 
        description="Meet the RCVS-registered veterinary surgeons, specialists, and nurses behind YourHomeVet mobile veterinary practice." 
        canonical="https://homevetsdubai.com/our-team"
      />
      <OurTeamContent />
      <FAQSection />
    </>
  );
}
