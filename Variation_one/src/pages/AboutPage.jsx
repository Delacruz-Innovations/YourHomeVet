import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import AboutUsContent from '../components/AboutUsContent';
import AboutTeam from '../components/AboutTeam';
import Emergency from '../components/Emergency';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="About Us – Modern Vet Dubai 30+ Years Legacy"
        description="Learn about Modern Vet's 30+ year history in Dubai since 1995, our integrated medical model, state-of-the-art diagnostic CT imaging, and compassionate veterinary team."
        canonical="https://yourhomevet.ae/about"
      />
      <AboutUsContent />
      <AboutTeam />
      <Emergency />
    </div>
  );
}
