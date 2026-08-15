import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PartnerHero from '../components/PartnerHero';
import PartnerBenefits from '../components/PartnerBenefits';
import PartnerContact from '../components/PartnerContact';

export default function PartnerPractice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="Partner Practice Programme"
        description="Are you a veterinary practice in Dubai looking to extend your care beyond the clinic? Partner with YourHomeVet to offer at-home vet services to your clients."
        canonical="https://yourhomevet.ae/partner-practice"
        noIndex={true}
      />
      <PartnerHero />
      <PartnerBenefits />
      <PartnerContact />
    </div>
  );
}
