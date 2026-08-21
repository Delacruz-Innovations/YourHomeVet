import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import heroLandscape from '../assets/v3_brand_hero.jpg';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ambient Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroLandscape} 
          alt="Veterinary Care At Your Doorstep" 
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        {/* Soft Vignette and Gradient Overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-900/25 to-slate-950/80 backdrop-blur-[0.3px]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/15 to-black/50 pointer-events-none" />
      </div>

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center justify-center">
        
        {/* Brand Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg"
        >
        
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.08] drop-shadow-md"
        >
          Grow through <br className="hidden sm:inline" />
          what you go through
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/95 max-w-2xl font-normal leading-relaxed drop-shadow"
        >
          Gentle, stress-free mobile veterinary care for your cats and dogs — compassionate check-ups, vaccines, and emergencies delivered right to your home.
        </motion.p>

        {/* Signature Pill CTA Button matching brand colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-3.5 bg-white/95 hover:bg-white text-slate-900 font-semibold text-sm sm:text-base py-2.5 pl-3 pr-7 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="w-9 h-9 rounded-full bg-[#58B66E] group-hover:bg-[#4ea863] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45 shadow-sm">
              <ArrowRight size={17} strokeWidth={2.5} />
            </span>
            <span className="tracking-tight font-bold">Book Consultation</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md text-sm font-semibold tracking-wide transition-all shadow-md hover:scale-105"
          >
            <Sparkles size={16} className="text-[#FA4D80]" />
            <span>Explore Services</span>
          </a>
        </motion.div>

      </div>

      {/* Subtle Bottom Ambient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFCF8] dark:from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
