import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import GalleryContent from '../components/GalleryContent';
import Emergency from '../components/Emergency';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Photo Gallery – Modern Vet Hospital Facilities & Care Dubai"
        description="Browse photo gallery of Modern Vet's 24/7 hospital, surgical suites, CT imaging, ICU, mobile clinic, and happy pet patients across Dubai."
        canonical="https://yourhomevet.ae/gallery"
      />
      <GalleryContent />
      <Emergency />
    </div>
  );
}
