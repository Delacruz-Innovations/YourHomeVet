import React from 'react';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceVaccinationContent from './ServiceVaccinationContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceVaccinationPage() {
  return (
    <>
      <ServiceDetailsHero title="Vaccination" />
      <ServiceVaccinationContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
