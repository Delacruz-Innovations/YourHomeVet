import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import EmergencyContent from '../components/EmergencyContent';
import Emergency from '../components/Emergency';

export default function EmergencyVet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="24/7 Emergency Vet Service Dubai – Immediate At-Home Response"
        description="Immediate at-home emergency veterinary care in Dubai. Our ICU-equipped mobile vets dispatch within minutes for critical pet injuries and illnesses."
        canonical="https://yourhomevet.ae/emergency-vet"
      />
      <EmergencyContent />
      <Emergency />
    </div>
  );
}
