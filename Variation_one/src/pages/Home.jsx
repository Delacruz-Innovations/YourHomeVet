import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Emergency from '../components/Emergency';

export default function Home() {
  // GSAP scroll and entrance animations for Home
  useEffect(() => {
    // Hero Entrance
    gsap.fromTo(
      '.hero-text-container > *',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.hero-image-container',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );

    // Scroll Trigger animations for all other sections
    const scrollAnims = [
      { trigger: '.about-text-container', targets: '.about-text-container > *' },
      { trigger: '.about-cards-container', targets: '.about-cards-container > *' },
      { trigger: '.whyus-text-container', targets: '.whyus-text-container > *' },
      { trigger: '.whyus-image-container', targets: '.whyus-image-container' },
      { trigger: '.services-grid-container', targets: '.services-grid-container > *' },
      { trigger: '#testimonials', targets: '#testimonials h2, #testimonials p, #testimonials .lg\\:col-span-7, #testimonials .lg\\:col-span-5' },
      { trigger: '.emergency-text-container', targets: '.emergency-text-container > *' },
      { trigger: '.emergency-image-container', targets: '.emergency-image-container' },
    ];

    scrollAnims.forEach(({ trigger, targets }) => {
      const element = document.querySelector(trigger);
      if (element) {
        gsap.fromTo(
          targets,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: trigger,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Faq />
      <Testimonials />
      <Emergency />
    </>
  );
}
