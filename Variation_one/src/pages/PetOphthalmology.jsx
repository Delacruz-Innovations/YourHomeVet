import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import OphthalmologyContent from '../components/OphthalmologyContent';
import Emergency from '../components/Emergency';

export default function PetOphthalmology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Veterinary Ophthalmology Dubai – Eye Care & Diagnostics"
        description="Specialist pet eye diagnostic examinations, cataract treatment, glaucoma management, and corneal repair in Dubai."
        canonical="https://yourhomevet.ae/pet-ophthalmology"
      />
      <OphthalmologyContent />
      <Emergency />
    </div>
  );
}
