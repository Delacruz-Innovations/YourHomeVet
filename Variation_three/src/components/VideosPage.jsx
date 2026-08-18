import React from 'react';
import SEO from './SEO';
import VideosContent from './VideosContent';
import FAQSection from './FAQSection';

export default function VideosPage() {
  return (
    <>
      <SEO 
        title="Veterinary Videos & Specialist Presentations | YourHomeVet" 
        description="Watch video presentations and specialist medical insights from the YourHomeVet veterinary team." 
        canonical="https://homevetsdubai.com/our-video"
      />
      <VideosContent />
      <FAQSection />
    </>
  );
}
