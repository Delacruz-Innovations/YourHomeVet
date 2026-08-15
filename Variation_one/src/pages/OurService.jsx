import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import OurServiceHero from '../components/ServiceHero';
import ServiceCustomizedCare from '../components/ServiceCustomizedCare';
import ServiceSteps from '../components/ServiceSteps';
import ServiceRestInMind from '../components/ServiceRestInMind';
import Emergency from '../components/Emergency';
import Faq from '../components/Faq';

export default function OurService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Our Veterinary Services – At-Home Pet Care Dubai"
        description="Expert at-home vet services in Dubai including emergency care, wellness checks, vaccinations, and end-of-life support. Book a home visit today."
        canonical="https://yourhomevet.ae/24-7-emergency-care-at-your-door"
      />
      <OurServiceHero />
      <ServiceCustomizedCare />
      <ServiceSteps />
      <ServiceRestInMind />
      <Emergency />
      <Faq />
    </div>
  );
}
