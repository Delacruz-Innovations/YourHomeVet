import React, { useEffect } from 'react';
import EndOfLifeHero from '../components/EndOfLifeHero';
import EndOfLifeIntro from '../components/EndOfLifeIntro';
import EndOfLifeSteps from '../components/EndOfLifeSteps';
import EndOfLifeTestimonials from '../components/EndOfLifeTestimonials';
import EndOfLifeSupport from '../components/EndOfLifeSupport';
import Emergency from '../components/Emergency';

export default function EndOfLife() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <EndOfLifeHero />
      <EndOfLifeIntro />
      <EndOfLifeSteps />
      <EndOfLifeTestimonials />
      <EndOfLifeSupport />
      <Emergency />
    </div>
  );
}
