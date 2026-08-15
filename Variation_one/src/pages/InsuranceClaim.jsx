import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import InsuranceHero from '../components/InsuranceHero';
import InsuranceSteps from '../components/InsuranceSteps';
import InsuranceMap from '../components/InsuranceMap';
import InsuranceQuestions from '../components/InsuranceQuestions';

export default function InsuranceClaim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="Pet Insurance Claims – Vet Assistance Dubai"
        description="We help you navigate your pet insurance claim in Dubai. Get expert veterinary documentation and dedicated support from the YourHomeVet team."
        canonical="https://yourhomevet.ae/insurance-claims"
      />
      <InsuranceHero />
      <InsuranceSteps />
      <InsuranceMap />
      <InsuranceQuestions />
    </div>
  );
}
