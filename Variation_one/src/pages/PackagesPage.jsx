import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PackagesContent from '../components/PackagesContent';
import Emergency from '../components/Emergency';

export default function PackagesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Pet Health Packages & Vaccination Bundles Dubai – YourHomeVet"
        description="Explore bundled pet health packages in Dubai. Primary protection, annual booster packages, and smile dental care packages for dogs and cats."
        canonical="https://yourhomevet.ae/packages"
      />
      <PackagesContent />
      <Emergency />
    </div>
  );
}
