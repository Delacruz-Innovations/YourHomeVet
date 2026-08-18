import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import VideosContent from '../components/VideosContent';
import Emergency from '../components/Emergency';

export default function VideosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Veterinary Videos & Presentations – YourHomeVet Dubai"
        description="Watch presentations by YourHomeVet specialist doctors, clinic overviews for Palm and Downtown Dubai, and video guides on advanced veterinary care."
        canonical="https://yourhomevet.ae/our-video"
      />
      <VideosContent />
      <Emergency />
    </div>
  );
}
