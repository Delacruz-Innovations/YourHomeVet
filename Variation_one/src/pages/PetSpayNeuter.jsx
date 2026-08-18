import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import SpayNeuterContent from '../components/SpayNeuterContent';
import Emergency from '../components/Emergency';

export default function PetSpayNeuter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Spay & Neuter Packages Dubai – Modern Vet Surgery"
        description="Compassionate, safe spay and neuter surgical packages for dogs and cats in Dubai."
        canonical="https://yourhomevet.ae/spay-neuter"
      />
      <SpayNeuterContent />
      <Emergency />
    </div>
  );
}
