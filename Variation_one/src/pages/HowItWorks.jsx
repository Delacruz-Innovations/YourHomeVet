import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import HowItWorksHero from '../components/HowItWorksHero';
import StepsTimeline from '../components/StepsTimeline';
import PricingBanner from '../components/PricingBanner';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Emergency from '../components/Emergency';

export default function HowItWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="How It Works – Home Vet Visits Dubai"
        description="Three simple steps to get a vet to your home in Dubai. Call us, we advise you, then a Registered Veterinary Surgeon comes to your door — all without leaving your house."
        canonical="https://yourhomevet.ae/pet-emergency-how-it-works"
      />
      <HowItWorksHero />
      <StepsTimeline />
      <PricingBanner />
      <Testimonials />
      <Faq />
      <Emergency />
    </div>
  );
}
