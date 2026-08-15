import React from 'react';
import { motion } from 'framer-motion';
import emergencyImage from '../assets/emergency_dog.png';
import catImage from '../assets/cat_play.png';

export default function Emergency() {
  return (
    <section id="contact" className="relative py-12 bg-[#f7faf3] dark:bg-slate-900 overflow-hidden transition-colors duration-300 border-t border-[#edf3e6] dark:border-slate-800">
      
      {/* Decorative dashed heart (Pink) */}
      <div className="absolute top-10 left-[15%] opacity-30 dark:opacity-15 pointer-events-none hidden lg:block rotate-12">
         <svg width="200" height="300" viewBox="0 0 200 300" fill="none" stroke="#ec558b" strokeWidth="1.5" strokeDasharray="6 6">
            <path d="M100 80 C 100 30, 30 30, 50 90 C 70 150, 100 160, 100 160 C 100 160, 130 150, 150 90 C 170 30, 100 30, 100 80 Z" />
            <path d="M100 160 C 100 240, 160 250, 170 200 C 180 150, 120 180, 130 250 C 140 320, 200 280, 190 220" />
         </svg>
      </div>

      {/* Floating Pet Images (Styled as beautiful circular badges since we have full-bleed generated images) */}
      <div className="absolute left-[-10%] bottom-[-5%] w-[40%] max-w-[350px] hidden lg:block pointer-events-none opacity-90 dark:opacity-80 mix-blend-multiply dark:mix-blend-normal">
         <img src={emergencyImage} alt="Dog" className="w-full h-auto rounded-full object-cover aspect-square shadow-2xl border-8 border-white dark:border-slate-800" />
      </div>
      
      <div className="absolute right-[-10%] bottom-[-5%] w-[40%] max-w-[350px] hidden lg:block pointer-events-none opacity-90 dark:opacity-80 mix-blend-multiply dark:mix-blend-normal">
         <img src={catImage} alt="Cat" className="w-full h-auto rounded-full object-cover aspect-square shadow-2xl border-8 border-white dark:border-slate-800" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <span className="text-[#9cbc65] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
          Make an appointment
        </span>
        <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-8">
          Dealing with an emergency?
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 text-[15px] mb-12 leading-[1.8]">
          YourHomeVet operates 24/7 in Dubai. Worried? Concerned? Every minute counts. Get connected to our Phone Triage Team immediately or send a call-back request filling the form below. If your pet's condition is critical, call us right away to book an emergency consultation. Our team is on standby to provide immediate help.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.a 
            href="#call" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#ec558b] hover:bg-[#d84074] text-white px-8 py-4 rounded-sm font-bold text-[13px] uppercase tracking-[0.1em] transition-colors shadow-lg"
          >
            BOOK AN APPOINTMENT
          </motion.a>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-4 rounded-sm font-bold text-[13px] uppercase tracking-[0.1em] transition-colors shadow-lg"
          >
            CALL ME BACK
          </motion.button>
        </div>
        
      </div>
    </section>
  );
}
