import React from 'react';
import ServiceDetailsHero from './ServiceDetailsHero';
import Service247Content from './Service247Content';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function Service247Page() {
  return (
    <>
      <ServiceDetailsHero title="24/7 Availability" />
      <Service247Content />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
