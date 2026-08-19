import React from 'react';
import SEO from './SEO';
import AboutUsContent from './AboutUsContent';
import OurTeamContent from './OurTeamContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function AboutUsPage() {
  return (
    <>
      <SEO 
        title="About Us | Independent Mobile Veterinary Care | YourHomeVet" 
        description="Learn about YourHomeVet - London's premier independent mobile veterinary practice offering 24/7 home visits, consultations, and emergency dispatch." 
        canonical="https://homevetsdubai.com/about"
      />
      <AboutUsContent />
      <OurTeamContent />
      <Reviews />
      <FAQSection />
    </>
  );
}
