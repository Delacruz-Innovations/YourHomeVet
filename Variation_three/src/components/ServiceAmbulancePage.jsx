import React from 'react';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceAmbulanceContent from './ServiceAmbulanceContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceAmbulancePage() {
  return (
    <>
      <ServiceDetailsHero title="Pet Ambulance" />
      <ServiceAmbulanceContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
