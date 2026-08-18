import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import NeurologyContent from '../components/NeurologyContent';
import Emergency from '../components/Emergency';

export default function VeterinaryNeurology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Veterinary Neurology & Neurosurgery Dubai – YourHomeVet"
        description="Specialist neurology care for pets in Dubai. Advanced MRI/CT diagnostics, seizure management, and spinal neurosurgery."
        canonical="https://yourhomevet.ae/veterinary-neurology"
      />
      <NeurologyContent />
      <Emergency />
    </div>
  );
}
