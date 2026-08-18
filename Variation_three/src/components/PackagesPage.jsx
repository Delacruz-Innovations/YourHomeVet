import React from 'react';
import SEO from './SEO';
import PackagesContent from './PackagesContent';
import FAQSection from './FAQSection';

export default function PackagesPage() {
  return (
    <>
      <SEO 
        title="Veterinary Care Packages & Transparent Pricing | YourHomeVet" 
        description="Explore bundled pet healthcare packages for annual vaccinations, dental care, kitten/puppy care, and spay/neuter surgery." 
        canonical="https://homevetsdubai.com/packages"
      />
      <PackagesContent />
      <FAQSection />
    </>
  );
}
