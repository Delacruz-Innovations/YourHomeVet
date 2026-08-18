import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import EndOfLifeHero from '../components/EndOfLifeHero';
import EndOfLifeIntro from '../components/EndOfLifeIntro';
import EndOfLifeSteps from '../components/EndOfLifeSteps';
import EndOfLifeSupport from '../components/EndOfLifeSupport';
import Emergency from '../components/Emergency';

export default function EndOfLife() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Compassionate In-Home Pet Euthanasia Dubai"
        description="Peaceful, dignified, and gentle pet euthanasia services in the comfort of your home. Say goodbye in a peaceful environment."
        canonical="https://yourhomevet.ae/in-home-pet-euthanasia"
      />
      <EndOfLifeHero />
      <EndOfLifeIntro />
      <EndOfLifeSteps />
      <EndOfLifeSupport />
      <Emergency />
    </div>
  );
}
