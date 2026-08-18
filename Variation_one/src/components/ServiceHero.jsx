import React from 'react';

export default function ServiceHero() {
  return (
    <section className="relative w-full py-8 sm:py-4 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#e8f4fd] dark:bg-slate-950 transition-colors min-h-[450px]">
      
      {/* Background Image for Mobile and Tablet */}
      <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
        <img 
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1200" 
          alt="Emergency Vet Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
      </div>

      {/* Soft Ambient Radial Glow Effects for Desktop */}
      <div className="hidden lg:block absolute top-1/2 -left-24 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#edf7cf] opacity-90 blur-3xl pointer-events-none"></div>
      <div className="hidden lg:block absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-[#dbeefe] opacity-75 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Category Label */}
        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-700 lg:dark:text-slate-300 mb-4 sm:mb-6 block">
          24-7 EMERGENCY VET SERVICES
        </span>
        
        {/* Main Headline */}
        <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] mb-6 tracking-tight">
          Compassionate Emergency Care For Your Pets.
        </h1>
        
        {/* Subtitle Description */}
        <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.75] max-w-2xl mx-auto mb-8 font-normal">
          YourHomeVet is a mobile practice dedicated to pet emergencies. Our emergency vet delivers the most efficient and professional care to your pet's doorstep around the clock.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#services" 
            className="px-8 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] lg:bg-black lg:hover:bg-slate-800 text-white lg:dark:bg-white lg:dark:text-slate-950 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
          >
            SERVICES
          </a>
          <a 
            href="tel:+971505503777" 
            className="px-8 py-3.5 rounded-sm border border-white/30 lg:border-slate-400/50 lg:dark:border-slate-700 bg-slate-950/40 lg:bg-white/40 lg:dark:bg-slate-900/40 text-white lg:text-slate-800 lg:dark:text-slate-200 hover:bg-white/20 lg:hover:bg-white lg:dark:hover:bg-slate-800 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>

      </div>
    </section>
  );
}
