import React from 'react';
import { PawPrint, Heart } from 'lucide-react';
import endOfLifeImg from '../assets/peace_of_mind_cat.png';
import centerLogo from '../assets/center_logo.jpg';

export default function EndOfLifeHero() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row transition-colors duration-300 min-h-[540px] lg:min-h-[500px]">
      
      {/* Left Content Side */}
      <div className="w-full lg:w-1/2 bg-transparent lg:bg-[#f7faf3] lg:dark:bg-slate-900 relative overflow-hidden flex z-10">
        
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
          <PawPrint size={90} className="absolute bottom-8 left-[15%] text-[#9cbc65] opacity-15 dark:opacity-5 -rotate-12" />
          <PawPrint size={50} className="absolute bottom-20 right-[35%] text-[#9cbc65] opacity-15 dark:opacity-5 rotate-12" />
          <Heart size={140} className="absolute bottom-0 right-[10%] text-[#9cbc65] opacity-10 dark:opacity-5 rotate-12 stroke-[1px] fill-transparent" />
        </div>

        <div className="w-full max-w-[640px] px-6 sm:px-8 lg:px-8 xl:pr-16 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:py-36 relative z-10 flex flex-col justify-center ml-auto">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] mb-3 block">
            IN-HOME PET EUTHANASIA
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-white leading-tight mb-4">
            Peaceful End-of-Life Care At Home
          </h1>
          
          <div className="w-12 h-1 bg-[#ec558b] mb-6" />

          <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-8">
            Your home is a sanctuary filled with years of happy memories. We ensure peaceful, dignified, and pain-free end-of-life care in the place your pet feels safest.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="tel:+971505503777" 
              className="px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-md"
            >
              BOOK A CONSULTATION
            </a>
            <a 
              href="#process" 
              className="px-6 py-3.5 rounded-sm border-2 border-[#9cbc65] text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white text-xs font-bold uppercase tracking-wide transition-all bg-slate-950/40 lg:bg-transparent"
            >
              THE PROCESS
            </a>
          </div>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto">
        <img 
          src={endOfLifeImg} 
          alt="In-Home End of Life Care" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 lg:hidden pointer-events-none z-10" />
      </div>

      {/* Center Floating Rotating Badge */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-30 pointer-events-none">
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white dark:bg-slate-900 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.18)] flex items-center justify-center overflow-hidden border-4 border-[#f7faf3] dark:border-slate-800 pointer-events-auto">
          <img src={centerLogo} alt="Rotating Logo" className="w-full h-full object-cover scale-[1.15]" />
        </div>
      </div>

    </section>
  );
}
