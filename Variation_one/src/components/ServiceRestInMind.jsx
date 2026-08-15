import React from 'react';
import { Check } from 'lucide-react';

export default function ServiceRestInMind() {
  const features = [
    '24/7 Service',
    'Experienced vets and nurses with a caring, calm approach',
    'No travel stress for you or your pet',
    'High quality care at home',
    'Advanced diagnostics & treatment',
    'Compassionate end-of-life care'
  ];

  return (
    <section className="py-12 lg:py-24 bg-[#f8f9fa] dark:bg-slate-900 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16 lg:gap-24 relative z-10">
        
        {/* Left SVG Graphic */}
        <div className="w-full md:w-1/3 flex justify-center lg:justify-end">
          <div className="relative w-48 h-64 lg:w-64 lg:h-80">
            {/* Outline Head SVG */}
            <svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#5b8cce] dark:stroke-[#4a72a8] drop-shadow-md">
              <path d="M100 20 C60 20 40 50 40 90 C40 120 50 140 50 160 C50 170 45 180 35 185 C25 190 20 200 20 220 L20 250 L180 250 L180 220 C180 180 150 150 150 120 C150 80 140 20 100 20 Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M40 90 C30 90 20 100 20 110 C20 120 30 130 40 130" strokeWidth="3" strokeLinecap="round" />
            </svg>
            
            {/* Inner Green Heart SVG */}
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-[#9cbc65] rounded-full blur-[2px] opacity-20"></div>
            <svg viewBox="0 0 24 24" fill="#9cbc65" xmlns="http://www.w3.org/2000/svg" className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16">
               <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
            </svg>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3">
          <span className="text-[#5b8cce] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">
            PEACE OF MIND
          </span>
          
          <h2 className="text-[32px] sm:text-[40px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-6">
            To Rest in Mind
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-[15px] mb-8 max-w-lg leading-[1.7]">
            Nothing is more important to us than your pet's health. We're here to bring expert veterinary care to your doorstep 24/7 with compassion, professionalism and peace of mind.
          </p>
          
          <ul className="space-y-3 mb-10">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                  <Check size={16} className="text-[#9cbc65]" strokeWidth={3} />
                </span>
                <span className="text-slate-700 dark:text-slate-300 text-[14px] font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-4">
            <a href="#call" className="px-7 py-3 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-wide transition-colors shadow-md">BOOK AN APPOINTMENT</a>
            <a href="#services" className="px-7 py-3 rounded-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-bold uppercase tracking-wide transition-colors">
              See All Services
            </a>
          </div>
        </div>

      </div>

      {/* Decorative dashed loop */}
      <div className="absolute right-[5%] top-1/2 opacity-30 dark:opacity-10 pointer-events-none hidden lg:block rotate-12">
         <svg width="120" height="180" viewBox="0 0 200 300" fill="none" stroke="#5b8cce" strokeWidth="1.5" strokeDasharray="6 6">
            <path d="M100 80 C 100 30, 30 30, 50 90 C 70 150, 100 160, 100 160 C 100 160, 130 150, 150 90 C 170 30, 100 30, 100 80 Z" />
         </svg>
      </div>

    </section>
  );
}
