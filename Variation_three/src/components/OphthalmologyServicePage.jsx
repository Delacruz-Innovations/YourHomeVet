import React from 'react';
import SEO from './SEO';
import OphthalmologyContent from './OphthalmologyContent';
import Reviews from './Reviews';
import FAQSection from './FAQSection';

export default function OphthalmologyServicePage() {
  return (
    <>
      <SEO 
        title="Pet Ophthalmology & Eye Care | YourHomeVet" 
        description="Specialist veterinary eye care, corneal ulcer repair, glaucoma screening, and dry eye treatment for dogs and cats." 
        canonical="https://homevetsdubai.com/ourservice/ophthalmology"
      />
      <OphthalmologyContent />
      <Reviews />
      <FAQSection />
    </>
  );
}
