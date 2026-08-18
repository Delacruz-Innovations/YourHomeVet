import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PageTransition({ children, location }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const isInitialMount = useRef(true);

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
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #ec558b 0%, #1b2b4b 50%, #9cbc65 100%)',
          transform: 'scaleX(0)',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
