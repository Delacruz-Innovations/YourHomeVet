import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emergencyImage from '../assets/emergency_dog.png';
import catImage from '../assets/cat_play.png';

export default function InsuranceQuestions() {
  return (
    <section id="questions" className="relative py-12 bg-[#f5f8fc] dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      
      {/* Soft Ambient Radial Glow Effects (Blue/Purple) */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#dbeefe] opacity-90 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full bg-[#e0d4f5] opacity-60 blur-3xl pointer-events-none"></div>

      {/* Floating Pet Images */}
      <div className="absolute left-[5%] lg:left-[15%] bottom-[-5%] w-[35%] max-w-[280px] pointer-events-none opacity-90 dark:opacity-80 mix-blend-multiply dark:mix-blend-normal z-0 hidden sm:block">
         <img src={emergencyImage} alt="Dog" className="w-full h-auto rounded-full object-cover aspect-square shadow-2xl border-8 border-white dark:border-slate-800" />
      </div>
      
      <div className="absolute right-[5%] lg:right-[15%] bottom-[-5%] w-[35%] max-w-[280px] pointer-events-none opacity-90 dark:opacity-80 mix-blend-multiply dark:mix-blend-normal z-0 hidden sm:block">
         <img src={catImage} alt="Cat" className="w-full h-auto rounded-full object-cover aspect-square shadow-2xl border-8 border-white dark:border-slate-800" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Header */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-2">
          Still having questions?
        </h2>
        <h3 className="text-[28px] sm:text-[34px] font-serif text-slate-700 dark:text-slate-300 leading-tight mb-10">
          Don't hesitate to call us!
        </h3>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 relative z-20">
          <Link
            to="/book-an-appointment"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-wide transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            BOOK AN APPOINTMENT
          </Link>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#callback"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm border border-slate-400/50 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
          >
            CALL ME BACK
          </motion.a>
        </div>
        
      </div>
    </section>
  );
}
