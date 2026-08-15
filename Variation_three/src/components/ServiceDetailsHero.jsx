import React from 'react';
import { motion } from 'framer-motion';
import heroCare from '../assets/hero_care.png';

export default function ServiceDetailsHero({ title }) {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] bg-slate-100 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCare})`, filter: 'brightness(0.7)' }}
      />
      <div className="absolute inset-0 bg-[#F2306D]/30 mix-blend-multiply" />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-4 capitalize"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-lg md:text-xl font-medium drop-shadow-md"
        >
          Expert care in the comfort of your home.
        </motion.p>
      </div>
    </section>
  );
}
