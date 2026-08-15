import React from 'react';

export default function EndOfLifeSupport() {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-white dark:bg-slate-950">
      
      {/* Left Column: Image */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] relative">
        <img 
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" 
          alt="Vet holding a pet" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Right Column: Content on solid yellow-green background */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20 bg-[#edf7cf] dark:bg-[#2a3018]">
        <div className="max-w-xl w-full">
          <span className="text-slate-600 dark:text-slate-300 font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-4 block">
            WE ARE HERE FOR YOU
          </span>
          
          <h3 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            The Step We Cover
          </h3>
          
          <p className="text-slate-700 dark:text-slate-300 text-[14px] sm:text-[15px] leading-[1.8] mb-8">
            YourHomeVet provides a 24-7 pet euthanasia service. Whenever the time has come to say goodbye, our dedicated vets will assist you in this emotional and hard moment to provide compassionate and professional care.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#consultation" 
              className="px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
            >
              BOOK A CONSULTATION
            </a>
            <a 
              href="#services" 
              className="px-8 py-3.5 rounded-sm border border-slate-400 dark:border-slate-600 bg-transparent text-slate-800 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-900/50 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
            >
              SERVICES
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
