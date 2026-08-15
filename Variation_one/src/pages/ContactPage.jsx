import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <ContactForm />
    </div>
  );
}
