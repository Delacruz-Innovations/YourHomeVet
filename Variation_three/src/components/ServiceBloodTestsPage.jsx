import React from 'react';
import SEO from './SEO';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceBloodTestsContent from './ServiceBloodTestsContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceBloodTestsPage() {
  return (
    <>
      <SEO 
        title="At-Home Blood Tests for Pets" 
        description="Comprehensive at-home blood tests and diagnostics for your pets in Dubai. Quick and stress-free." 
        canonical="https://homevetsdubai.com/services/blood-tests"
      />
      <ServiceDetailsHero title="Blood Tests" />
      <ServiceBloodTestsContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
