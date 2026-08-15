import React from 'react';
import PetExportHero from './PetExportHero';
import PetExportContent from './PetExportContent';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';

export default function PetExportPage() {
  return (
    <>
      <PetExportHero />
      <PetExportContent />
      <Reviews />
      <ResourcesVideo />
    </>
  );
}
