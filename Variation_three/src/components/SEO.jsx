import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, type = "website" }) {
  const siteTitle = title ? `${title} | YourHomeVet` : "YourHomeVet – Dubai's Premier 24/7 Home Veterinary Service";
  const metaDescription = description || "Compassionate 24/7 home veterinary care across Greater Dubai. Senior registered veterinary surgeons brought to your doorstep.";

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "YourHomeVet",
    "image": "https://homevetsdubai.com/logo.png",
    "description": metaDescription,
    "telephone": "02081234567",
    "email": "info@homevetsdubai.ae",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
