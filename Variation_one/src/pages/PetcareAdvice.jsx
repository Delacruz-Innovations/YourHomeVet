import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PetcareHero from '../components/PetcareHero';
import PetcareGrid from '../components/PetcareGrid';

export default function PetcareAdvice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="Petcare Advice & Vet Tips"
        description="Expert pet health advice from our Dubai vets — covering nutrition, emergency care, preventative treatments, and more. Keep your pet happy and healthy."
        canonical="https://yourhomevet.ae/petcare-advice"
      />
      <PetcareHero />
      <PetcareGrid />
    </div>
  );
}
