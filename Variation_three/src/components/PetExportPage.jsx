import React from 'react';
import SEO from './SEO';
import PetExportHero from './PetExportHero';
import PetExportContent from './PetExportContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';

export default function PetExportPage() {
  return (
    <>
      <SEO 
        title="Pet Export & Travel Certificates" 
        description="Official Veterinarians (OV-certified) providing pet export health certificates and travel documentation in the comfort of your Dubai home." 
        canonical="https://homevetsdubai.com/pet-export"
      />
      <PetExportHero />
      <PetExportContent />
      <Reviews />
      <ResourcesVideo />
    </>
  );
}
