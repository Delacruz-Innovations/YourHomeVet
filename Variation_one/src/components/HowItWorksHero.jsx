import React from 'react';
import { PawPrint } from 'lucide-react';

export default function HowItWorksHero() {
  return (
    <section className="relative w-full h-[550px] lg:h-[650px] flex flex-col lg:flex-row overflow-hidden bg-[#f7faf3] dark:bg-slate-900">
      
      {/* Decorative Paw Prints */}
      <PawPrint size={60} className="absolute top-[15%] left-[5%] text-[#9cbc65] opacity-20 dark:opacity-5 rotate-12 pointer-events-none" />
      <PawPrint size={80} className="absolute bottom-[20%] left-[8%] text-[#9cbc65] opacity-20 dark:opacity-5 -rotate-12 pointer-events-none" />

      {/* Dashed Heart Decorative */}
      <div className="absolute top-1/4 right-[45%] opacity-30 dark:opacity-10 pointer-events-none hidden lg:block z-10 rotate-12">
         <svg width="100" height="150" viewBox="0 0 200 300" fill="none" stroke="#ec558b" strokeWidth="1.5" strokeDasharray="6 6">
            <path d="M100 80 C 100 30, 30 30, 50 90 C 70 150, 100 160, 100 160 C 100 160, 130 150, 150 90 C 170 30, 100 30, 100 80 Z" />
         </svg>
      </div>

      {/* Left Text */}
      <div className="w-full lg:w-[50%] h-full flex flex-col justify-center px-4 sm:px-8 lg:pl-16 xl:pl-[calc((100vw-1280px)/2+2rem)] relative z-10 lg:bg-transparent bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm lg:backdrop-blur-none">
        
        <span className="text-[#9cbc65] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
          Emergency Vet
        </span>
        
        <h1 className="text-[36px] sm:text-[44px] lg:text-[54px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-6 max-w-lg">
          How does the pet emergency service work <span className="text-[#ec558b]">?</span>
        </h1>
        
        <p className="text-slate-600 dark:text-slate-400 text-[15px] mb-10 max-w-md leading-[1.7]">
          Dial 0330 808 9066. We'll ask a few quick questions, arrange for a vet to visit your home, and provide the care your pet needs right where they feel safest.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#call" className="px-8 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-wide transition-colors shadow-md">BOOK AN APPOINTMENT</a>
          <a href="#advice" className="px-8 py-3.5 rounded-sm border border-[#9cbc65] text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white dark:hover:text-slate-900 text-[11px] font-bold uppercase tracking-wide transition-colors">
            Expert Advice
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 pointer-events-none lg:pointer-events-auto">
        <img 
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1400" 
          alt="Dog Bandage" 
          className="w-full h-full object-cover" 
        />
        
        {/* Wavy Mask Overlay (Simulating the S-curve cutoff) */}
        <div className="absolute top-0 -left-1 h-full w-[20%] hidden lg:block text-[#f7faf3] dark:text-slate-900">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current origin-left scale-x-125">
            <path d="M0,0 C60,0 20,50 60,100 L0,100 Z" />
          </svg>
        </div>
      </div>
      
    </section>
  );
}
