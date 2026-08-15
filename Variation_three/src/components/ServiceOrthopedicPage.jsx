import React from 'react';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceOrthopedicContent from './ServiceOrthopedicContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceOrthopedicPage() {
  return (
    <>
      <ServiceDetailsHero title="Orthopedic Surgery" />
      <ServiceOrthopedicContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
