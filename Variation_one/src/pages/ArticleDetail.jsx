import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleHero from '../components/ArticleHero';
import ArticleContent from '../components/ArticleContent';
import ArticleRelated from '../components/ArticleRelated';

export default function ArticleDetail() {
  const { slug } = useParams();

  // Ensure the page scrolls to top on mount (or on slug change)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="w-full">
      <ArticleHero />
      <ArticleContent />
      <ArticleRelated />
    </div>
  );
}
