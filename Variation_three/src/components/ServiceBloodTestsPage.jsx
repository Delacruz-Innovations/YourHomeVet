import React from 'react';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceBloodTestsContent from './ServiceBloodTestsContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceBloodTestsPage() {
  return (
    <>
      <ServiceDetailsHero title="Blood Tests" />
      <ServiceBloodTestsContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
