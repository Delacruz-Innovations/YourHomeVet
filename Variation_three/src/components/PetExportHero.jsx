import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/v3_hero_bg.png'; // Will use a generic or existing background image since we don't have the specific car one

export default function PetExportHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] bg-slate-100 flex items-center justify-center lg:justify-end overflow-hidden px-10">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.7)' }}
      />
      <div className="absolute inset-0 bg-[#F2306D]/20 mix-blend-multiply" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-end">
        <motion.h1 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md pr-10"
        >
          Pet Export
        </motion.h1>
      </div>
    </section>
  );
}
