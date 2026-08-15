import React from 'react';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceDetailsContent from './ServiceDetailsContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceDetailsPage() {
  return (
    <>
      <ServiceDetailsHero title="Annual Checkups" />
      <ServiceDetailsContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
