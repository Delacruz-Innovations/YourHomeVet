import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import AboutHero from '../components/AboutHero';
import AboutCTA from '../components/AboutCTA';
import AboutTeam from '../components/AboutTeam';
import AboutTestimonials from '../components/AboutTestimonials';
import AboutNewsletter from '../components/AboutNewsletter';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="About YourHomeVet – Our Veterinary Team in Dubai"
        description="Meet the YourHomeVet team — dedicated to bringing expert, compassionate veterinary care to Dubai homes. Learn about our mission and our registered vets."
        canonical="https://yourhomevet.ae/about"
      />
      <AboutHero />
      <AboutCTA />
      <AboutTeam />
      <AboutTestimonials />
      <AboutNewsletter />
    </div>
  );
}
