import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical }) {
  const siteTitle = title ? `${title} | YourHomeVet` : "YourHomeVet – Dubai's Premier 24/7 Home Veterinary Service";
  const metaDescription = description || "Compassionate 24/7 home veterinary care across Greater Dubai. Senior registered veterinary surgeons brought to your doorstep.";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
