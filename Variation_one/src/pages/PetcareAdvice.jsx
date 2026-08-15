import React, { useEffect } from 'react';
import PetcareHero from '../components/PetcareHero';
import PetcareGrid from '../components/PetcareGrid';

export default function PetcareAdvice() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <PetcareHero />
      <PetcareGrid />
    </div>
  );
}
