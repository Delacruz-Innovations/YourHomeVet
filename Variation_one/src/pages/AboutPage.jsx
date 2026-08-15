import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import AboutCTA from '../components/AboutCTA';
import AboutTeam from '../components/AboutTeam';
import AboutTestimonials from '../components/AboutTestimonials';
import AboutNewsletter from '../components/AboutNewsletter';

export default function AboutPage() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <AboutHero />
      <AboutCTA />
      <AboutTeam />
      <AboutTestimonials />
      <AboutNewsletter />
    </div>
  );
}
