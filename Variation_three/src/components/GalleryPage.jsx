import React from 'react';
import SEO from './SEO';
import GalleryContent from './GalleryContent';
import FAQSection from './FAQSection';

export default function GalleryPage() {
  return (
    <>
      <SEO 
        title="Photo Gallery | YourHomeVet Facilities & Mobile Units" 
        description="Explore photos of YourHomeVet mobile veterinary units, surgical suites, diagnostic labs, and happy patient visits." 
        canonical="https://homevetsdubai.com/gallery"
      />
      <GalleryContent />
      <FAQSection />
    </>
  );
}
