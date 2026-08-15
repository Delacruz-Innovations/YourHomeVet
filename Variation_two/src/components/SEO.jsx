import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'YourHomeVet';
const BASE_URL  = 'https://yourhomevet.ae'; // update when live domain is confirmed
const OG_IMAGE  = `${BASE_URL}/og-image.jpg`;

/**
 * Reusable SEO component.
 *
 * @param {string}  title       - Page-specific title (suffixed with " | YourHomeVet")
 * @param {string}  description - Meta description (≤ 160 chars recommended)
 * @param {string}  canonical   - Absolute canonical URL for this page
 * @param {string}  ogImage     - OG image URL (defaults to site-wide card)
 * @param {boolean} noIndex     - Set true to add noindex, nofollow
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = OG_IMAGE,
  noIndex = false,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} – Home Vet Care at Your Doorstep, Dubai`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Theme colour */}
      <meta name="theme-color" content="#ec558b" />

      {/* Open Graph */}
      <meta property="og:site_name"    content={SITE_NAME} />
      <meta property="og:type"         content="website" />
      <meta property="og:title"        content={fullTitle} />
      <meta property="og:description"  content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image"        content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"       content="en_AE" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}
