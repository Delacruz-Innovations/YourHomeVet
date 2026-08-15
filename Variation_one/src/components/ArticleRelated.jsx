import React from 'react';

const relatedArticles = [
  {
    id: 1,
    title: "Kennel Cough in Dogs: Is It An Emergency?",
    description: "Most cases are mild and self-resolving, but could your dog's kennel cough become an emergency? Here's what to watch for.",
    image: "https://images.unsplash.com/photo-1599805986427-04b360b134d1?auto=format&fit=crop&q=80&w=600",
    date: "June 12, 2026 - 1 min read",
  },
  {
    id: 2,
    title: "UTI in Dogs: Signs, Causes and Treatment",
    description: "Discover the symptoms, causes, and treatment of urinary tract infections in dogs, and when to see a vet.",
    image: "https://images.unsplash.com/photo-1616429598799-a86851214e21?auto=format&fit=crop&q=80&w=600",
    date: "May 14, 2026 - 1 min read",
  },
  {
    id: 3,
    title: "Trachea Collapse in Dogs: Causes and Treatment",
    description: "Tracheal collapse in dogs causes symptoms, treatment options, and when to seek veterinary care to support your dog's breathing and comfort.",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=600",
    date: "March 23, 2026 - 1 min read",
  }
];

export default function ArticleRelated() {
  return (
    <section className="w-full py-16 lg:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f9fc] dark:bg-slate-900 transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-8 lg:mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
            YOU MIGHT ALSO LIKE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 leading-tight">
            Related Articles
          </h2>
        </div>

        {/* 3-Column Grid - Carousel on mobile */}
        <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 gap-y-12 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 sm:px-6 md:mx-0 md:px-0 md:pb-0">
          {relatedArticles.map((article) => (
            <article key={article.id} className="flex flex-col group cursor-pointer bg-white dark:bg-slate-950 p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow min-w-[280px] sm:min-w-[320px] md:min-w-0 shrink-0 snap-center md:snap-align-none">
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-sm mb-5 bg-slate-100 dark:bg-slate-900">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Meta */}
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                {article.date}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-serif text-slate-900 dark:text-slate-100 leading-tight mb-3 group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors">
                {article.title}
              </h3>
              
              {/* Description */}
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-[1.7] mb-5 line-clamp-2">
                {article.description}
              </p>
              
              {/* Read Article Link */}
              <div className="mt-auto pt-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black dark:text-white group-hover:underline underline-offset-4 decoration-2">
                  READ ARTICLE
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
