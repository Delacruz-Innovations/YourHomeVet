import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import HealthLibraryContent from '../components/HealthLibraryContent';
import Emergency from '../components/Emergency';

export default function PetcareAdvice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Health Library – Veterinary Petcare Advice Dubai"
        description="Explore 25+ medical conditions, canine/feline nutrition guides, body language tips, and pet care advice from expert Dubai veterinarians."
        canonical="https://yourhomevet.ae/health-library"
      />
      <HealthLibraryContent />
      <Emergency />
    </div>
  );
}
