import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="w-full py-8 lg:py-12 lg:py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-slate-100 mb-4 leading-tight">
          Your Pets Need Some Help ?
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 text-[16px] sm:text-[18px] mb-10 font-medium">
          Feel Free To Make An Appointment
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link 
            to="/book-an-appointment" 
            className="px-8 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
          >
            BOOK AN APPOINTMENT
          </Link>
          <a 
            href="tel:+971505503777" 
            className="px-8 py-3.5 rounded-sm border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
          >
            CALL +971 50 550 3777
          </a>
        </div>
        
      </div>
    </section>
  );
}
