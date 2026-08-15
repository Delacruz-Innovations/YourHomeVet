import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import ArticleHero from '../components/ArticleHero';
import ArticleContent from '../components/ArticleContent';
import ArticleRelated from '../components/ArticleRelated';

// Static article metadata map — extend as articles are added
const ARTICLE_META = {
  'diabetes-in-dogs': {
    title: 'Diabetes in Dogs – Symptoms, Treatment & Care',
    description: `Learn how to recognise the signs of diabetes in dogs, how it is treated, and how YourHomeVet can support your pet's ongoing care at home in Dubai.`,
  },
};

export default function ArticleDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const meta = ARTICLE_META[slug] ?? {
    title: 'Petcare Advice Article',
    description: 'Expert pet health advice from the YourHomeVet team in Dubai.',
  };

  return (
    <div className="w-full">
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={`https://yourhomevet.ae/petcare-advice/${slug}`}
      />
      <ArticleHero />
      <ArticleContent />
      <ArticleRelated />
    </div>
  );
}
