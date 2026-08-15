import React, { useEffect } from 'react';
import PartnerHero from '../components/PartnerHero';
import PartnerBenefits from '../components/PartnerBenefits';
import PartnerContact from '../components/PartnerContact';

export default function PartnerPractice() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <PartnerHero />
      <PartnerBenefits />
      <PartnerContact />
    </div>
  );
}
