import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowLeft, PawPrint, Heart } from 'lucide-react';

import heroImage1 from '../assets/emergency_dog.png'; 
import heroImage2 from '../assets/hero_care.png'; 
import heroImage3 from '../assets/cat_play.png'; 
import heroImage4 from '../assets/rabbit_care.png'; 
import centerLogo from '../assets/center_logo.jpg';

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);
  const textContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const badgeRef = useRef(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Entrance on Load
      if (textContainerRef.current) {
        gsap.fromTo(
          textContainerRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.1
          }
        );
      }

      // Parallax scroll on image container
      if (imageContainerRef.current) {
        gsap.to(imageContainerRef.current, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2
          }
        });
      }

      // Rotating Badge on scroll
      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          rotate: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative w-full flex flex-col lg:flex-row transition-colors duration-300 min-h-[580px] lg:min-h-0">
      
      <div className="w-full lg:w-1/2 bg-transparent lg:bg-[#f7faf3] lg:dark:bg-slate-900 relative overflow-hidden flex z-10">
        
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
          <PawPrint size={90} className="absolute bottom-8 left-[15%] text-[#9cbc65] opacity-15 dark:opacity-5 -rotate-12" />
          <PawPrint size={50} className="absolute bottom-20 right-[35%] text-[#9cbc65] opacity-15 dark:opacity-5 rotate-12" />
          <Heart size={140} className="absolute bottom-0 right-[10%] text-[#9cbc65] opacity-10 dark:opacity-5 rotate-12 stroke-[1px] fill-transparent" />
        </div>

        <div className="w-full max-w-[640px] px-6 sm:px-8 lg:px-8 xl:pr-16 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:py-36 relative z-10 flex flex-col justify-center ml-auto">
          <div
            ref={textContainerRef}
            className="w-full max-w-lg hero-text-container"
          >
            <span className="text-[#9cbc65] font-bold text-xs tracking-wide uppercase mb-4 block">
              Emergency Vet
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-white leading-tight mb-5">
              Complete Veterinary Care Under One Roof
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />
            
            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[17px] mb-10 max-w-sm leading-relaxed font-medium lg:font-normal">
              We care for cats, dogs, and exotic pets requiring urgent care.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event('openBookingModal'));
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-md cursor-pointer"
              >
                Book An Appointment
              </motion.a>
            </div>

            <div className="hidden gap-3 mt-8 z-10">
              <button 
                onClick={prevImage}
                className="w-10 h-10 bg-slate-900/80 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-transform active:scale-95 border border-white/20"
                aria-label="Previous image"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>
              <button 
                onClick={nextImage}
                className="w-10 h-10 bg-slate-900/80 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-transform active:scale-95 border border-white/20"
                aria-label="Next image"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>
      </div>

      <div 
        ref={imageContainerRef}
        className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto hero-image-container"
      >
        
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 lg:hidden pointer-events-none z-10" />

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

      {/* Center Floating Rotating Badge */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-30 pointer-events-none">
        <div 
          ref={badgeRef}
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white dark:bg-slate-900 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.18)] flex items-center justify-center overflow-hidden border-4 border-[#f7faf3] dark:border-slate-800 pointer-events-auto"
        >
          <img src={centerLogo} alt="Rotating Logo" className="w-full h-full object-cover scale-[1.15]" />
        </div>
      </div>

    </section>
  );
}
