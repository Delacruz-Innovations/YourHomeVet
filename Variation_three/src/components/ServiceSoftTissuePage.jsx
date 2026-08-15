import React from 'react';
import SEO from './SEO';
import ServiceDetailsHero from './ServiceDetailsHero';
import ServiceSoftTissueContent from './ServiceSoftTissueContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import ContactBanner from './ContactBanner';

export default function ServiceSoftTissuePage() {
  return (
    <>
      <SEO 
        title="Soft Tissue Pet Surgery" 
        description="Professional soft tissue surgeries for pets in Dubai, ensuring a safe and comfortable recovery." 
        canonical="https://homevetsdubai.com/services/soft-tissue-surgery"
      />
      <ServiceDetailsHero title="Soft Tissue Surgery" />
      <ServiceSoftTissueContent />
      <Reviews />
      <ResourcesVideo />
      <ContactBanner />
    </>
  );
}
