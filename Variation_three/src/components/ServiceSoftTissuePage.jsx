import React from 'react';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceSoftTissueContent from './ServiceSoftTissueContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceSoftTissuePage() {
  return (
    <>
      <ServiceDetailsHero title="Soft Tissue Surgery" />
      <ServiceSoftTissueContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
