import React from 'react';
import { motion } from 'framer-motion';
import heroCare from '../assets/hero_care.png'; // Will use existing image

export default function ContactHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] bg-slate-100 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCare})`, filter: 'brightness(0.7)' }}
      />
      <div className="absolute inset-0 bg-[#F2306D]/30 mix-blend-multiply" />
      
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white drop-shadow-md"
        >
          Contact Us
        </motion.h1>
      </div>
    </section>
  );
}
