import React from 'react';

export default function ArticleHero() {
  return (
    <section className="relative w-full pt-12 lg:pt-24 lg:pt-16 lg:pt-32 px-4 sm:px-6 lg:px-8 bg-[#eaf4fe] dark:bg-slate-950 transition-colors">
      
      {/* Soft Ambient Radial Glow Effects */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[#dbeefe] opacity-90 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#e0d4f5] opacity-60 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center mb-12 lg:mb-8 lg:mb-16">
        
        {/* Category */}
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-6 block">
          DOGS
        </span>
        
        {/* Title */}
        <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-serif text-slate-900 dark:text-slate-100 font-normal leading-[1.1] mb-8 tracking-tight">
          Diabetes in Dogs: Should You Be Worried?
        </h1>
        
        {/* Author Metadata */}
        <div className="flex items-center gap-4">
          <img 
            src="https://i.pravatar.cc/150?img=47" 
            alt="Evelyn Harcourt" 
            className="w-12 h-12 rounded-full object-cover shadow-sm"
          />
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              BY EVELYN HARCOURT
            </span>
            <span className="text-[12px] text-slate-500 dark:text-slate-400">
              June 12, 2026 - 1 min read
            </span>
          </div>
        </div>
        
      </div>
      
      {/* Featured Image */}
      <div className="max-w-5xl mx-auto relative z-10 -mb-16 sm:-mb-24 lg:-mb-32">
        <div className="w-full aspect-[16/9] lg:aspect-[21/9] rounded-sm sm:rounded-md overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1602498456745-e9503b30470b?auto=format&fit=crop&q=80&w=1600" 
            alt="Dog with diabetes" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </section>
  );
}
