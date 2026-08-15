import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="Contact Us"
        description="Get in touch with YourHomeVet by phone, email, or WhatsApp. Our team is available 24/7 for pet emergencies and home vet visits across Dubai."
        canonical="https://yourhomevet.ae/contact"
      />
      <ContactForm />
    </div>
  );
}
