import React from 'react';
import SEO from './SEO';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceDewormingContent from './ServiceDewormingContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceDewormingPage() {
  return (
    <>
      <SEO 
        title="Pet Deworming & Parasite Control" 
        description="Protect your pets with our expert home-visit deworming and parasite control services in Dubai." 
        canonical="https://homevetsdubai.com/services/deworming"
      />
      <ServiceDetailsHero title="Deworming" />
      <ServiceDewormingContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
