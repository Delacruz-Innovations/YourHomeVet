import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Faq from '../components/Faq';
import Emergency from '../components/Emergency';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const aboutRef = useRef(null);
  const whyUsRef = useRef(null);
  const faqRef = useRef(null);
  const emergencyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (aboutRef.current) {
        gsap.fromTo(aboutRef.current.querySelectorAll('.about-text-container > *, .about-cards-container > *'),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out',
            scrollTrigger: { trigger: aboutRef.current, start: 'top 82%', toggleActions: 'play none none none' }
          }
        );
      }

      if (whyUsRef.current) {
        gsap.fromTo(whyUsRef.current.querySelector('.whyus-image-container'),
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: whyUsRef.current, start: 'top 75%', toggleActions: 'play none none none' }
          }
        );
        gsap.fromTo(whyUsRef.current.querySelector('.whyus-text-container > *'),
          { opacity: 0, y: 25 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: whyUsRef.current, start: 'top 70%', toggleActions: 'play none none none' }
          }
        );
      }

      if (faqRef.current) {
        gsap.fromTo(faqRef.current.querySelectorAll('.faq-item'),
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
            scrollTrigger: { trigger: faqRef.current, start: 'top 82%', toggleActions: 'play none none none' }
          }
        );
      }

      if (emergencyRef.current) {
        gsap.fromTo(emergencyRef.current.querySelector('.emergency-content > *'),
          { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
          {
            opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: emergencyRef.current, start: 'top 80%', toggleActions: 'play none none none' }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Emergency Vet at Home, Dubai"
        description="24/7 emergency home vet service across Dubai. A Registered Veterinary Surgeon comes to your door. No waiting rooms — expert pet care in the comfort of your home."
        canonical="https://yourhomevet.ae/"
      />
      <Hero />
      <div ref={aboutRef}><About /></div>
      <div ref={whyUsRef}><WhyUs /></div>
      <div ref={faqRef}><Faq /></div>
      <div ref={emergencyRef}><Emergency /></div>
    </>
  );
}
