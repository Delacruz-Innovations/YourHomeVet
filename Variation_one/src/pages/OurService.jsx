import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import AllServicesContent from '../components/AllServicesContent';
import Emergency from '../components/Emergency';

export default function OurService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Our Services – 24/7 At-Home & Specialist Vet Care Dubai"
        description="Explore 25+ veterinary services delivered by Modern Vet across 6+ Dubai locations. Emergency, dental, neurology, ophthalmology, vaccinations, and mobile clinic."
        canonical="https://yourhomevet.ae/24-7-emergency-care-at-your-door"
      />
      <AllServicesContent />
      <Emergency />
    </div>
  );
}
