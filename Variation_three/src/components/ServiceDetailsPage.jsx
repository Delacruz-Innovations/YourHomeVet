import React from 'react';
import SEO from './SEO';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceDetailsContent from './ServiceDetailsContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceDetailsPage() {
  return (
    <>
      <SEO 
        title="Annual Checkups & Consultations" 
        description="Thorough at-home annual checkups and consultations for your pets in Dubai, keeping them healthy and happy." 
        canonical="https://homevetsdubai.com/services/check-ups"
      />
      <ServiceDetailsHero title="Annual Checkups" />
      <ServiceDetailsContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
