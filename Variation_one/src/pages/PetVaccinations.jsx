import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import VaccinationsContent from '../components/VaccinationsContent';
import Emergency from '../components/Emergency';

export default function PetVaccinations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Pet Vaccinations Dubai – Zoetis Partnered Protection"
        description="Preventative pet vaccines partnered with Zoetis in Dubai. Rabies, DHPPi, PCH, and Municipality tags."
        canonical="https://yourhomevet.ae/pet-vaccinations"
      />
      <VaccinationsContent />
      <Emergency />
    </div>
  );
}
