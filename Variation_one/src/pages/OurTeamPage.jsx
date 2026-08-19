import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import OurTeamContent from '../components/OurTeamContent';
import Emergency from '../components/Emergency';

export default function OurTeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Meet Our Veterinary Surgeons & Specialists – YourHomeVet Dubai"
        description="Meet the RCVS and MOCCAE certified veterinary surgeons, internal medicine specialists, veterinary neurologists, and nurses providing 24/7 home visits in Dubai."
        canonical="https://yourhomevet.ae/our-team"
      />
      <OurTeamContent />
      <Emergency />
    </div>
  );
}
