import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PartnersContent from '../components/PartnersContent';
import Emergency from '../components/Emergency';

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="YourHomeVet Partners – Dubai Pet Care & Relocation Partners"
        description="Our trusted partners in Dubai for international pet relocation, professional dog training, online mental health, pet sitting, eco sanitization, pet taxi, and 5-star pet hotel boarding."
        canonical="https://yourhomevet.ae/partners"
      />
      <PartnersContent />
      <Emergency />
    </div>
  );
}
