import React, { useEffect } from 'react';
import FaqPageHero from '../components/FaqPageHero';
import FaqMap from '../components/FaqMap';
import Emergency from '../components/Emergency';

export default function FaqPage() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <FaqPageHero />
      <FaqMap />
      <Emergency />
    </div>
  );
}
