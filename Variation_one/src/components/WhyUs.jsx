import React, { useRef, useEffect } from 'react';
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
          imageRef.current.querySelector('img'),
          { scale: 1.1, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'bottom top',
              scrub: 1
            }
          }
        );
      }

      // Text container staggered reveal on scroll (with entrance and exit)
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current.querySelectorAll('.whyus-text-container > *'),
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              end: 'bottom 20%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="whyus" className="relative w-full flex flex-col lg:flex-row transition-colors duration-300">
      
      <div ref={imageRef} className="w-full lg:w-1/2 relative h-[400px] lg:h-auto min-h-[500px] whyus-image-container">
        <img
          src={rabbitImage}
          alt="Woman holding a rabbit"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-[#fdf0f4] dark:bg-slate-900 relative overflow-hidden flex">
        
        <PawPrint size={140} className="absolute bottom-8 right-12 text-[#ec558b] opacity-10 dark:opacity-5 rotate-12 pointer-events-none" fill="currentColor" />

        <div className="w-full max-w-[640px] px-4 sm:px-6 lg:px-8 xl:pl-16 py-8 lg:py-16 lg:py-32 relative z-10 flex flex-col justify-center mr-auto whyus-text-container">
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
            <a
              href="/emergency-vet-near-me"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-wide transition-colors shadow-md"
            >
              Explore Areas We Cover
            </a>
            <a
              href="#call"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm border border-[#9cbc65] text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white dark:hover:text-slate-900 text-[11px] font-bold uppercase tracking-wide transition-colors"
            >BOOK AN APPOINTMENT</a>
          </div>
        </div>
      </div>

    </section>
  );
}
