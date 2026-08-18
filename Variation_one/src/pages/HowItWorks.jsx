import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import HowItWorksHero from '../components/HowItWorksHero';
import StepsTimeline from '../components/StepsTimeline';
import Emergency from '../components/Emergency';

export default function HowItWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="How It Works – 24/7 At-Home Vet Process"
        description="Learn how our at-home mobile vet service works in Dubai. Call our emergency line, get dispatched within minutes, and receive professional medical care at home."
        canonical="https://yourhomevet.ae/pet-emergency-how-it-works"
      />
      <HowItWorksHero />
      <StepsTimeline />
      <Emergency />
    </div>
  );
}
