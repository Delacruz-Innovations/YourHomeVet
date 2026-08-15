import React, { useEffect } from 'react';
import InsuranceHero from '../components/InsuranceHero';
import InsuranceSteps from '../components/InsuranceSteps';
import InsuranceMap from '../components/InsuranceMap';
import InsuranceQuestions from '../components/InsuranceQuestions';

export default function InsuranceClaim() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <InsuranceHero />
      <InsuranceSteps />
      <InsuranceMap />
      <InsuranceQuestions />
    </div>
  );
}
