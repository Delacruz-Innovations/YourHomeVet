import React, { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TRANSITION_IMAGES = [
  "https://images.unsplash.com/photo-1450778869180-41d0601e047e?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=1920"
];

export default function PageTransition({ children, location }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const isInitialMount = useRef(true);

  const randomImage = useMemo(() => {
    const idx = Math.floor(Math.random() * TRANSITION_IMAGES.length);
    return TRANSITION_IMAGES[idx];
  }, []);

  useEffect(() => {
    if (!overlayRef.current || !contentRef.current) return;

    const overlay = overlayRef.current;
    const content = contentRef.current;

    const ctx = gsap.context(() => {
      if (isInitialMount.current) {
        gsap.set(overlay, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set(content, { opacity: 1, scale: 1 });
        isInitialMount.current = false;
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      });

      tl.set(overlay, { scaleX: 0, transformOrigin: 'left center' })
        .to(overlay, {
          scaleX: 1,
          duration: 0.45,
          ease: 'power3.inOut',
          onStart: () => {
            gsap.to(content, {
              opacity: 0,
              scale: 0.97,
              filter: 'blur(4px)',
              duration: 0.3,
              ease: 'power2.in'
            });
          }
        })
        .to(overlay, {
          scaleX: 0,
          transformOrigin: 'right center',
          duration: 0.5,
          ease: 'power3.inOut',
          delay: 0.05,
          onStart: () => {
            gsap.to(content, {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.4,
              ease: 'power2.out'
            });
          }
        });
    });

    return () => ctx.revert();
  }, [location.key]);

  return (
    <div className="relative w-full min-h-screen">
      <div
        ref={contentRef}
        className="page-content"
        style={{ opacity: 1 }}
      >
        {children}
      </div>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url(${randomImage})`,
          transform: 'scaleX(0)',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
