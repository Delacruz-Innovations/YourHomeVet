import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import EndOfLifeHero from '../components/EndOfLifeHero';
import EndOfLifeIntro from '../components/EndOfLifeIntro';
import EndOfLifeSteps from '../components/EndOfLifeSteps';
import EndOfLifeTestimonials from '../components/EndOfLifeTestimonials';
import EndOfLifeSupport from '../components/EndOfLifeSupport';
import Emergency from '../components/Emergency';

export default function EndOfLife() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="In-Home Pet Euthanasia Dubai"
        description="Compassionate, peaceful end-of-life care for your pet in the comfort of your Dubai home. A gentle goodbye with a registered vet by your side."
        canonical="https://yourhomevet.ae/in-home-pet-euthanasia"
      />
      <EndOfLifeHero />
      <EndOfLifeIntro />
      <EndOfLifeSteps />
      <EndOfLifeTestimonials />
      <EndOfLifeSupport />
      <Emergency />
    </div>
  );
}
