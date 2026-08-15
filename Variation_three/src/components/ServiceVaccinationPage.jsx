import React from 'react';
import SEO from './SEO';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceVaccinationContent from './ServiceVaccinationContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceVaccinationPage() {
  return (
    <>
      <SEO 
        title="Pet Vaccinations at Home" 
        description="Keep your pet safe and healthy with our convenient at-home vaccination services in Dubai." 
        canonical="https://homevetsdubai.com/services/vaccination"
      />
      <ServiceDetailsHero title="Vaccination" />
      <ServiceVaccinationContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
