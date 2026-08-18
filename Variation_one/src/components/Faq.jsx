import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PawPrint, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out'
      });
      gsap.to(iconRef.current, {
        rotate: 180,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in'
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [isOpen]);

  return (
    <div className="faq-item border border-slate-200 dark:border-slate-800 rounded-sm bg-white dark:bg-slate-900 transition-colors overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between font-bold text-[14px] text-slate-800 dark:text-slate-100 gap-4 cursor-pointer text-left"
      >
        <span>{faq.question}</span>
        <div ref={iconRef} className="shrink-0 text-[#ec558b]">
          <ChevronDown size={18} strokeWidth={2.5} />
        </div>
      </button>
      
      <div 
        ref={contentRef} 
        className="px-6 h-0 opacity-0 overflow-hidden text-slate-600 dark:text-slate-400 text-[13px] leading-[1.7]"
      >
        <div className="pb-5 border-t border-slate-100 dark:border-slate-800/60 pt-3">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(0);

  const faqs = [
    { question: 'Whats include in each package', answer: 'A package bundles the core vaccinations, tests and screenings that provide comprehensive care for your pet’s lifelong health needs. All packages include discounts on our services.' },
    { question: 'What choose a package over a routine exam', answer: 'Packages allow more care at a lower cost by combining multiple services into one. The packages focus on prevention and early detection, as opposed to after symptoms appear. This way, your pet gets better care, with fewer surprises.' },
    { question: 'Are the vaccines and procedures done on my pet safe?', answer: 'vaccines and the most reliable IDEXX testing equipment available. During all procedures, pets are closely watched to ensure they are comfortable.' },
    { question: 'How can I determine which package is right for my pet?', answer: 'The packages have been developed based on your pet’s age, lifestyle, and overall health. Your veterinarian will be able to assist you in determining the best package for your pet. Each pet receives individualized care.' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current.querySelectorAll('.faq-item'),
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="relative py-8 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      
      <PawPrint size={140} className="absolute left-[3%] top-[20%] text-[#9cbc65] opacity-[0.04] dark:opacity-5 -rotate-12 pointer-events-none" />
      <PawPrint size={140} className="absolute right-[3%] bottom-[20%] text-[#9cbc65] opacity-[0.04] dark:opacity-5 rotate-12 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <span className="text-[#9cbc65] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
          Frequently Asked Questions
        </span>
        <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-6">
          Do you have additional questions?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-[15px] mb-14 leading-[1.7] max-w-lg mx-auto">
          We've shared some of our most frequently asked questions. If you can't find an answer to your question, please contact us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {faqs.map((faq, idx) => (
            <FaqItem
              key={idx}
              faq={faq}
              isOpen={open === idx}
              onClick={() => setOpen(open === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
