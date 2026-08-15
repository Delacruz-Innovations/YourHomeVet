import React from 'react';
import SEO from './SEO';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceOrthopedicContent from './ServiceOrthopedicContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceOrthopedicPage() {
  return (
    <>
      <SEO 
        title="Orthopedic Pet Surgery" 
        description="Expert veterinary orthopedic surgeries performed with care and precision in Dubai." 
        canonical="https://homevetsdubai.com/services/orthopedic-surgery"
      />
      <ServiceDetailsHero title="Orthopedic Surgery" />
      <ServiceOrthopedicContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
