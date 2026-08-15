import React from 'react';

export default function EmergencyVetHero() {
  return (
    <section className="relative w-full pt-12 lg:pt-24 lg:pt-16 lg:pt-32 pb-20 lg:pb-16 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#e8f4fd] dark:bg-slate-950 transition-colors">
      
      {/* Soft Ambient Radial Glow Effects */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#dbeefe] opacity-90 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full bg-[#e0d4f5] opacity-60 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Category Label */}
        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-slate-700 dark:text-slate-300 mb-6 block">
          WHAT IS AN EMERGENCY VET?
        </span>
        
        {/* Main Headline */}
        <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] font-serif text-slate-900 dark:text-slate-100 font-normal leading-[1.1] mb-8 tracking-tight">
          We care for your pet all around the clock
        </h1>
        
        {/* Subtitle Description */}
        <p className="text-slate-600 dark:text-slate-400 text-[15px] sm:text-[16px] leading-[1.75] max-w-2xl mx-auto mb-10 font-normal">
          YourHomeVet is a team of Emergency Veterinary Surgeons equipped with the comprehensive kit in order to provide in a very short time the most expert and basic care in the comfort of your home.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="tel:03308089066" 
            className="px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
          >BOOK AN APPOINTMENT</a>
          <a 
            href="#call-me-back" 
            className="px-8 py-3.5 rounded-sm border border-slate-400/50 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
          >
            CALL ME BACK
          </a>
        </div>
      </div>
      
    </section>
  );
}
