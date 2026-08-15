import React from 'react';

export default function InsuranceHero() {
  return (
    <section className="relative w-full pt-12 lg:pt-24 lg:pt-16 lg:pt-32 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#e8f4fd] dark:bg-slate-950 transition-colors">
      
      {/* Soft Ambient Radial Glow Effects */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#edf7cf] opacity-90 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-[#dbeefe] opacity-75 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 mb-8 lg:mb-16">
        
        {/* Category Label */}
        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-slate-700 dark:text-slate-300 mb-6 block">
          INSURANCE CLAIMS
        </span>
        
        {/* Main Headline */}
        <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] font-serif text-slate-900 dark:text-slate-100 font-normal leading-[1.1] mb-8 tracking-tight">
          YourHomeVet is here to help you with your insurance claims.
        </h1>
        
        {/* Subtitle Description */}
        <p className="text-slate-600 dark:text-slate-400 text-[15px] sm:text-[16px] leading-[1.75] max-w-2xl mx-auto mb-10 font-normal">
          Your financial commitment towards your pet's health helps us provide the best medical care your pets deserve.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#how-to-claim" 
            className="px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
          >
            HOW TO CLAIM
          </a>
          <a 
            href="#get-in-touch" 
            className="px-8 py-3.5 rounded-sm border border-slate-400/50 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
      
      {/* Large Image Below Text */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-t-lg sm:rounded-t-xl bg-slate-100 shadow-xl border border-slate-200 dark:border-slate-800 border-b-0">
          <img 
            src="https://images.unsplash.com/photo-1628009368231-7bb7cbcb0def?auto=format&fit=crop&q=80&w=1200" 
            alt="Vet holding cat" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </section>
  );
}
