import React from 'react';
import SEO from './SEO';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceAmbulanceContent from './ServiceAmbulanceContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceAmbulancePage() {
  return (
    <>
      <SEO 
        title="Pet Ambulance Service" 
        description="Safe, fast, and fully equipped pet ambulance services in Dubai for medical transport and emergencies." 
        canonical="https://homevetsdubai.com/services/ambulance"
      />
      <ServiceDetailsHero title="Ambulance" />
      <ServiceAmbulanceContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
