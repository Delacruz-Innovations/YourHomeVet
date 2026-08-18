import React from 'react';
import SEO from './SEO';
import HealthLibraryContent from './HealthLibraryContent';
import FAQSection from './FAQSection';

export default function HealthLibraryPage() {
  return (
    <>
      <SEO 
        title="Pet Health Library & Care Advice | YourHomeVet" 
        description="Comprehensive pet health library featuring articles on canine allergies, feline cataracts, senior dog care, and nutrition." 
        canonical="https://homevetsdubai.com/health-library"
      />
      <HealthLibraryContent />
      <FAQSection />
    </>
  );
}
