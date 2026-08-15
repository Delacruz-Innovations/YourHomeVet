import React, { useEffect } from 'react';
import HowItWorksHero from '../components/HowItWorksHero';
import StepsTimeline from '../components/StepsTimeline';
import PricingBanner from '../components/PricingBanner';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Emergency from '../components/Emergency';

export default function HowItWorks() {
  
  // Scroll to the top when navigating to this new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <HowItWorksHero />
      <StepsTimeline />
      <PricingBanner />
      <Testimonials />
      <Faq />
      <Emergency />
    </div>
  );
}
