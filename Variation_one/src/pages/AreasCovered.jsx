import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import AreasCoveredMap from '../components/AreasCoveredMap';
import About from '../components/About';

export default function AreasCovered() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col py-12">
      <SEO
        title="Emergency Vet Near Me – Dubai Areas Covered"
        description="YourHomeVet covers all Dubai areas including Jumeirah, Downtown Dubai, Dubai Marina, Al Barsha, Business Bay, Mirdif, and more. Book a home vet visit today."
        canonical="https://yourhomevet.ae/emergency-vet-near-me"
      />
      <AreasCoveredMap />

      {/* The "How it works" section */}
      <div className="pt-12 lg:pt-24 lg:pt-16 lg:pt-32 pb-16">
        <About />
      </div>
    </div>
  );
}
