import React from 'react';
import SEO from './SEO';
import ServiceDetailsHero from './ServiceDetailsHero';
import Service247Content from './Service247Content';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function Service247Page() {
  return (
    <>
      <SEO 
        title="24/7 Availability" 
        description="We are available 24 hours a day, 7 days a week. Book a home vet visit in Dubai anytime." 
        canonical="https://homevetsdubai.com/services/24-7-availability"
      />
      <ServiceDetailsHero title="24/7 Availability" />
      <Service247Content />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
