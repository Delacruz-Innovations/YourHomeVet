import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PricesContent from '../components/PricesContent';
import Emergency from '../components/Emergency';

export default function PricesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Vet Costs & Transparent Prices Dubai – Modern Vet"
        description="Clear, upfront pricing for veterinary consultations, vaccinations, surgical procedures, and dental scaling in Dubai."
        canonical="https://yourhomevet.ae/prices"
      />
      <PricesContent />
      <Emergency />
    </div>
  );
}
