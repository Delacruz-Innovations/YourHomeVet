import React, { useEffect } from 'react';
import ServiceHero from '../components/ServiceHero';
import ServiceCustomizedCare from '../components/ServiceCustomizedCare';
import ServiceSteps from '../components/ServiceSteps';
import ServiceRestInMind from '../components/ServiceRestInMind';
import Emergency from '../components/Emergency';
import Faq from '../components/Faq';

export default function OurService() {
  
  // Scroll to the top when navigating to this new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <ServiceHero />
      <ServiceCustomizedCare />
      <ServiceSteps />
      <ServiceRestInMind />
      
      {/* Shared Bottom Components */}
      <Emergency />
      <Faq />
    </div>
  );
}
