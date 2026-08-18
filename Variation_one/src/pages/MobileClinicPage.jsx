import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import MobileClinicContent from '../components/MobileClinicContent';
import Emergency from '../components/Emergency';

export default function MobileClinicPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Mobile Vet Dubai Service – YourHomeVet Home Visits"
        description="Our fully equipped mobile veterinary unit brings specialist care directly to your doorstep in Dubai."
        canonical="https://yourhomevet.ae/mobile-clinic"
      />
      <MobileClinicContent />
      <Emergency />
    </div>
  );
}
