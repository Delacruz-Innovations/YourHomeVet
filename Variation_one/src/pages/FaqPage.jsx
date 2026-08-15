import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import FaqPageHero from '../components/FaqPageHero';
import FaqMap from '../components/FaqMap';
import Emergency from '../components/Emergency';

export default function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="FAQs – Home Vet Service Dubai"
        description="Answers to common questions about our at-home emergency vet service across Dubai. Learn how we work, what to expect, and how to book a visit."
        canonical="https://yourhomevet.ae/frequently-asked-questions"
      />
      <FaqPageHero />
      <FaqMap />
      <Emergency />
    </div>
  );
}
