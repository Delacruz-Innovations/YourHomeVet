import React, { useEffect } from 'react';
import AreasCoveredMap from '../components/AreasCoveredMap';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

export default function AreasCovered() {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col py-12">
      <AreasCoveredMap />
      
      {/* The "How it works" section matching the screenshot */}
      <div className="pt-12 lg:pt-24 lg:pt-16 lg:pt-32 pb-16">
        <About />
      </div>

      <Testimonials />
    </div>
  );
}
