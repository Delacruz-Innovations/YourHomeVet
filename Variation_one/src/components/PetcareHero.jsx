import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PetcareHero() {
  return (
    <section className="relative w-full py-12 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#eaf4fe] dark:bg-slate-950 transition-colors min-h-[480px]">
      
      {/* Background Image for Mobile and Tablet */}
      <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
        <img 
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200" 
          alt="Featured Article Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/85 to-slate-950/60" />
      </div>

      {/* Soft Ambient Radial Glow Effects for Desktop */}
      <div className="hidden lg:block absolute top-1/2 -left-24 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#dbeefe] opacity-90 blur-3xl pointer-events-none"></div>
      <div className="hidden lg:block absolute top-1/4 -right-24 w-[600px] h-[600px] rounded-full bg-[#e0d4f5] opacity-60 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Featured Image for Desktop */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-square overflow-hidden shadow-xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200" 
              alt="Dachshund resting" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Featured Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-500 lg:dark:text-slate-400 mb-4 block">
            DOGS
          </span>
          
          <h1 className="text-[28px] sm:text-[40px] lg:text-[48px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4 sm:mb-6">
            Seizures in Dogs: Causes and Treatment Options
          </h1>
          
          <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-6 sm:mb-8 max-w-lg">
            Learn about seizures in dogs, their common causes, warning signs, and available treatments to help protect your pet's health and manage future episodes effectively.
          </p>
          
          <a href="/petcare-advice/diabetes-in-dogs" className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#ec558b] lg:text-black lg:dark:text-white mb-6 lg:mb-16 hover:underline underline-offset-4 decoration-2 inline-block">
            READ ARTICLE
          </a>
          
          {/* Author & Navigation */}
          <div className="flex items-center justify-between w-full border-t border-white/20 lg:border-slate-300 lg:dark:border-slate-700/50 pt-4 sm:pt-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://i.pravatar.cc/150?img=47" 
                alt="Evelyn Harcourt" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/30"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-100 lg:text-slate-900 lg:dark:text-slate-200">
                  BY EVELYN HARCOURT
                </span>
                <span className="text-[11px] sm:text-[12px] text-slate-300 lg:text-slate-500 lg:dark:text-slate-400">
                  July 22, 2026 - 1 min read
                </span>
              </div>
            </div>
            
            {/* Slider Navigation */}
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 lg:border-slate-300 lg:dark:border-slate-600 bg-slate-900/80 lg:bg-white lg:dark:bg-slate-900 flex items-center justify-center text-white lg:text-slate-600 lg:dark:text-slate-300 hover:bg-slate-800 transition-colors">
                <ArrowLeft size={16} />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 lg:border-slate-300 lg:dark:border-slate-600 bg-slate-900/80 lg:bg-white lg:dark:bg-slate-900 flex items-center justify-center text-white lg:text-slate-600 lg:dark:text-slate-300 hover:bg-slate-800 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
