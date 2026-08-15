import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import EmergencyVetHero from '../components/EmergencyVetHero';
import EmergencyVetBlocks from '../components/EmergencyVetBlocks';
import Testimonials from '../components/Testimonials';
import EmergencyVetMap from '../components/EmergencyVetMap';
import Emergency from '../components/Emergency';

export default function EmergencyVet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="Emergency Vet Dubai – Home Visit 24/7"
        description="Need an emergency vet in Dubai? We come to your home 24/7. No waiting rooms — speak directly to a registered vet and get expert pet care at your door."
        canonical="https://yourhomevet.ae/emergency-vet"
      />
      <EmergencyVetHero />
      <EmergencyVetBlocks />
      <Testimonials />
      <EmergencyVetMap />
      <Emergency />
    </div>
  );
}
