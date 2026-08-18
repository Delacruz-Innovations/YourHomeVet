import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import DentalContent from '../components/DentalContent';
import Emergency from '../components/Emergency';

export default function PetDentalCare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Pet Dental Care & Scaling Dubai – YourHomeVet"
        description="Professional dental scaling, polishing, digital dental X-rays, and extractions for pets in Dubai. Prevent periodontal disease."
        canonical="https://yourhomevet.ae/pet-dental-care"
      />
      <DentalContent />
      <Emergency />
    </div>
  );
}
