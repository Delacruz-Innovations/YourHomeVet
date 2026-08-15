import React from 'react';
import { ArrowRight, ClipboardPlus } from 'lucide-react';

export default function PricingBanner() {
  return (
    <section className="py-12 lg:py-24 bg-white dark:bg-slate-950 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto border-4 border-[#edf5e1] dark:border-slate-800 rounded-sm bg-white dark:bg-slate-900 p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
        
        {/* Background decorative loop */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 opacity-30 dark:opacity-10 pointer-events-none hidden lg:block -rotate-12">
           <svg width="100" height="150" viewBox="0 0 200 300" fill="none" stroke="#ec558b" strokeWidth="1.5" strokeDasharray="6 6">
              <path d="M100 80 C 100 30, 30 30, 50 90 C 70 150, 100 160, 100 160 C 100 160, 130 150, 150 90 C 170 30, 100 30, 100 80 Z" />
           </svg>
        </div>

        {/* Left Icon */}
        <div className="w-24 h-32 shrink-0 border-4 border-[#9cbc65] bg-white dark:bg-slate-800 rounded-sm shadow-md flex items-center justify-center relative -mt-4 md:mt-0 z-10">
          <ClipboardPlus size={40} className="text-[#ec558b]" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <h2 className="text-[26px] lg:text-[32px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-4">
            High end home veterinary care. Regular Fees.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-[15px] mb-8 max-w-2xl leading-[1.7]">
            At YourHomeVet, we believe high-quality veterinary care should be accessible and affordable. That's why we offer transparent pricing with no surprise fees - so you can focus on what matters most: your pet.
          </p>
          
          <a href="#pricing" className="inline-flex items-center text-[12px] font-bold tracking-[0.1em] text-[#9cbc65] hover:text-[#7a964a] uppercase transition-colors">
            See our prices & fees
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center ml-3">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
