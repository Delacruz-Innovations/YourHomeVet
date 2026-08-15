import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft, PawPrint, Heart } from 'lucide-react';

// Import all slider images
import heroImage1 from '../assets/emergency_dog.png'; 
import heroImage2 from '../assets/hero_care.png'; 
import heroImage3 from '../assets/cat_play.png'; 
import heroImage4 from '../assets/rabbit_care.png'; 
import centerLogo from '../assets/center_logo.jpg';

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll rotation hooks for the center badge
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  // Handlers for manual slider control
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Automatic image switching
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    // Clearing the interval on unmount or when the index changes manually
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <section id="home" className="relative w-full flex flex-col lg:flex-row transition-colors duration-300 min-h-[580px] lg:min-h-0">
      
      {/* Content Column (Sits on top of background image on mobile, left column on desktop) */}
      <div className="w-full lg:w-1/2 bg-[#f7faf3] dark:bg-slate-900 lg:bg-[#f7faf3] lg:dark:bg-slate-900 relative overflow-hidden flex z-10">
        
        {/* Background Decorative Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <PawPrint size={90} className="absolute bottom-8 left-[15%] text-[#9cbc65] opacity-15 dark:opacity-5 -rotate-12" />
          <PawPrint size={50} className="absolute bottom-20 right-[35%] text-[#9cbc65] opacity-15 dark:opacity-5 rotate-12" />
          <Heart size={140} className="absolute bottom-0 right-[10%] text-[#9cbc65] opacity-10 dark:opacity-5 rotate-12 stroke-[1px] fill-transparent" />
        </div>

        {/* Content restricted to max-w-7xl alignment */}
        <div className="w-full max-w-[640px] px-6 sm:px-8 lg:px-8 xl:pr-16 py-12 lg:py-32 relative z-10 flex flex-col justify-center ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg"
          >
            <span className="text-[#9cbc65] font-bold text-xs tracking-wide uppercase mb-4 block">
              Emergency Vet
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white leading-tight mb-5">
              Mobile Vet Services in the comfort of your home.
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />
            
            <p className="text-slate-700 dark:text-slate-300 text-[17px] mb-10 max-w-sm leading-relaxed font-medium lg:font-normal">
              We care for cats, dogs, and exotic pets requiring urgent care.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#nurse"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-md"
              >
                Call Our Nurse
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#callback"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm border-2 border-[#9cbc65] text-[#9cbc65] dark:text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white dark:hover:text-slate-900 text-xs font-bold uppercase tracking-wide transition-colors bg-white/60 dark:bg-slate-900/60 lg:bg-transparent"
              >
                Call Me Back
              </motion.a>
            </div>

            {/* Slider Navigation Arrows (Mobile view placed cleanly under buttons) */}
            <div className="flex lg:hidden gap-3 mt-8 z-10">
              <button 
                onClick={prevImage}
                className="w-10 h-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center text-[#ec558b] shadow-md hover:bg-white transition-transform active:scale-95"
                aria-label="Previous image"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>
              <button 
                onClick={nextImage}
                className="w-10 h-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center text-[#ec558b] shadow-md hover:bg-white transition-transform active:scale-95"
                aria-label="Next image"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Background Image Slider on Mobile / Right Column on Desktop */}
      <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto">
        
        {/* Animated Image Crossfade */}
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt={`Hero slider image ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Mobile Soft Overlay for Perfect Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/40 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950/50 lg:hidden pointer-events-none" />

        {/* Slider Navigation Arrows (Desktop position) */}
        <div className="hidden lg:flex absolute bottom-8 right-8 gap-3 z-10">
          <button 
            onClick={prevImage}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#ec558b] shadow-lg hover:bg-slate-50 transition-transform hover:scale-105 active:scale-95"
            aria-label="Previous image"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
          <button 
            onClick={nextImage}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#ec558b] shadow-lg hover:bg-slate-50 transition-transform hover:scale-105 active:scale-95"
            aria-label="Next image"
          >
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Center Badge (Rotating Logo) */}
      <div className="absolute left-1/2 bottom-0 lg:-bottom-12 -translate-x-1/2 translate-y-1/2 lg:translate-y-0 z-20">
        <motion.div 
          style={{ rotate }}
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white dark:bg-slate-900 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden border-4 border-[#f7faf3] dark:border-slate-800"
        >
          <img src={centerLogo} alt="Rotating Logo" className="w-full h-full object-cover scale-[1.15]" />
        </motion.div>
      </div>

    </section>
  );
}
