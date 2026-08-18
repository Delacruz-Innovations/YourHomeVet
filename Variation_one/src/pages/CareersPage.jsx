import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import CareersContent from '../components/CareersContent';
import Emergency from '../components/Emergency';

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Careers at Modern Vet – Veterinary Jobs & Opportunities Dubai"
        description="Join Dubai's premier multi-specialist veterinary group. Explore open jobs for veterinary nurses, technicians, veterinarians, and pharmacists."
        canonical="https://yourhomevet.ae/join-us"
      />
      <CareersContent />
      <Emergency />
    </div>
  );
}
