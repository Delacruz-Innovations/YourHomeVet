import React from 'react';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceDewormingContent from './ServiceDewormingContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceDewormingPage() {
  return (
    <>
      <ServiceDetailsHero title="Deworming" />
      <ServiceDewormingContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
