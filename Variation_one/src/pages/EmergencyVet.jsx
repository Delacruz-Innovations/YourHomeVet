import React, { useEffect } from 'react';
import EmergencyVetHero from '../components/EmergencyVetHero';
import EmergencyVetBlocks from '../components/EmergencyVetBlocks';
import Testimonials from '../components/Testimonials';
import EmergencyVetMap from '../components/EmergencyVetMap';
import Emergency from '../components/Emergency';

export default function EmergencyVet() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <EmergencyVetHero />
      <EmergencyVetBlocks />
      <Testimonials />
      <EmergencyVetMap />
      <Emergency />
    </div>
  );
}
