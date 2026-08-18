import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import BookingModal from './BookingModal';
import CallMeBackModal from './CallMeBackModal';
import PageTransition from './PageTransition';

// Register plugins once
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Layout({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  
  // Global click interceptor for modals
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        const text = target.textContent.trim().toUpperCase();
        
        if (text === 'BOOK AN APPOINTMENT') {
          e.preventDefault();
          window.dispatchEvent(new Event('openBookingModal'));
        }
        
        if (text === 'CALL ME BACK' || text === 'REQUEST CALL BACK' || text === 'REQUEST A CALL BACK') {
          e.preventDefault();
          window.dispatchEvent(new Event('openCallMeBackModal'));
        }
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  // Initialize GSAP ScrollSmoother
  useEffect(() => {
    let smoother;
    try {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        normalizeScroll: true
      });
    } catch (err) {
      console.warn("GSAP ScrollSmoother initialization info:", err);
    }

    return () => {
      if (smoother && typeof smoother.kill === 'function') {
        smoother.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="min-h-screen font-sans text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div id="smooth-content" className="min-h-screen flex flex-col">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-[116px]">
          <PageTransition location={location}>
            <Outlet />
          </PageTransition>
        </main>

        <Footer />
      </div>
      
      {/* Global Floating Widgets & Modals (outside smooth-content to prevent fixed position conflicts) */}
      <WhatsAppWidget />
      <BookingModal />
      <CallMeBackModal />
    </div>
  );
}
