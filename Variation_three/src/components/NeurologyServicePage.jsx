import React from 'react';
import SEO from './SEO';
import NeurologyContent from './NeurologyContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function NeurologyServicePage() {
  return (
    <>
      <SEO 
        title="Veterinary Neurology & Brain Care | YourHomeVet" 
        description="Specialist veterinary neurology consultations, seizure management, IVDD treatment, and MRI coordination for dogs and cats." 
        canonical="https://homevetsdubai.com/ourservice/neurology"
      />
      <NeurologyContent />
      <Reviews />
      <FAQSection />
    </>
  );
}
