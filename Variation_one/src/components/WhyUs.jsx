import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PawPrint } from 'lucide-react';
import rabbitImage from '../assets/rabbit_care.png'; 

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax and entrance on image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 40, opacity: 0.8 },
          {
            y: -20,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-[#fdf5b6]/20 dark:bg-slate-900/30 py-20 lg:py-28 overflow-hidden transition-colors"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Image with custom organic shape background */}
        <div className="relative flex justify-center items-center">
          {/* Soft yellow/cream organic blob */}
          <div className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-[#fbf5be] dark:bg-[#fbf5be]/10 rounded-full blur-2xl -z-10" />
          
          <div className="relative w-full max-w-[440px] aspect-square rounded-[36px] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl border-4 border-white dark:border-slate-800">
            <img 
              ref={imageRef}
              src={rabbitImage} 
              alt="Rabbit emergency care" 
              className="w-full h-full object-cover transform scale-105"
            />
          </div>

          <div className="absolute -bottom-6 -left-2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-slate-100 dark:border-slate-700">
            <div className="w-10 h-10 rounded-xl bg-[#ec558b]/10 text-[#ec558b] flex items-center justify-center">
              <PawPrint size={22} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100">Exotic Pets Care</p>
              <p className="text-[11px] text-slate-400">Rabbits, birds, & more</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col">
          <span className="text-[#ec558b] font-bold text-[11px] tracking-wide uppercase mb-4 block">
            Do we service your postcode?
          </span>
          
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-6">
            The Map We Cover
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-[15px] mb-10 max-w-[460px] leading-[1.7]">
            YourHomeVet is operating 24/7 in Dubai. Please refer to the map to find out if your location is covered by our service. If you have any doubts or are not too far from our operating border, please call us to see if an arrangement can be made.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/emergency-vet-near-me"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-wide transition-colors shadow-md"
            >
              Explore Areas We Cover
            </Link>
            <Link
              to="/book-an-appointment"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm border border-[#9cbc65] text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white dark:hover:text-slate-900 text-[11px] font-bold uppercase tracking-wide transition-colors"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
