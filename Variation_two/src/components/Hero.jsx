import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/cat_play.png'; 

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[550px] flex items-center justify-start overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Vet care" className="w-full h-full object-cover" />
        {/* Gradient fade to left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent sm:to-slate-900/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-32 sm:pt-40 pb-16 md:pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-4 block drop-shadow-sm">
            Bespoke Veterinary Service
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-md">
            Taking the stress out of your pet's veterinary care
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#book" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#ec558b] hover:bg-[#d84074] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-colors shadow-lg w-full sm:w-auto">
              Book Appointment
            </a>
            <a href="tel:+971505503777" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#9cbc65] hover:bg-[#8ab051] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-colors shadow-lg w-full sm:w-auto">
              Call Us: +971 50 550 3777
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
