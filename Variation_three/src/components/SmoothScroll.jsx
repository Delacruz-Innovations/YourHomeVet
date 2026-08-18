import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const smootherRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize ScrollSmoother with optimal smooth scrolling configuration
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
      });

      // Reset scroll position on route change
      smootherRef.current.scrollTop(0);
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [location.pathname]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef} className="fixed inset-0 overflow-hidden w-full h-full z-0">
      <div id="smooth-content" ref={contentRef} className="w-full will-change-transform flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
