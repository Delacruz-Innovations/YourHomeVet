import React from 'react';
import SEO from './SEO';
import SpayNeuterContent from './SpayNeuterContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function SpayNeuterServicePage() {
  return (
    <>
      <SEO 
        title="Pet Spay & Neuter Surgery | YourHomeVet" 
        description="Safe, routine, and laparoscopic keyhole spay & neuter surgery for dogs and cats with custom pain management." 
        canonical="https://homevetsdubai.com/ourservice/spay-neuter"
      />
      <SpayNeuterContent />
      <Reviews />
      <FAQSection />
    </>
  );
}
