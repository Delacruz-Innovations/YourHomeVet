import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import BookingContent from '../components/BookingContent';

export default function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="Book In-Home Vet Appointment Dubai – 24/7 Mobile Veterinary Clinic"
        description="Book a licensed veterinarian for a stress-free home visit across Dubai. Routine health checks, urgent care, vaccinations, dental, and end-of-life care."
        canonical="https://yourhomevet.ae/book-an-appointment"
      />
      <BookingContent />
    </div>
  );
}
