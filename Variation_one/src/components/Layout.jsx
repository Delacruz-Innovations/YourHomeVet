import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import CallMeBackModal from './CallMeBackModal';
import PageTransition from './PageTransition';

// Register plugins once
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Layout({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Global click interceptor for booking page navigation & callback modal
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        const text = target.textContent.trim().toUpperCase();
        const href = target.getAttribute('href');
        
        if (
          text === 'BOOK AN APPOINTMENT' || 
          text === 'BOOK APPOINTMENT' || 
          text === 'BOOK CONSULTATION' || 
          href === '#booking' || 
          href === '#book'
        ) {
          e.preventDefault();
          navigate('/book-an-appointment');
          window.scrollTo(0, 0);
          return;
        }
        
        if (text === 'CALL ME BACK' || text === 'REQUEST CALL BACK' || text === 'REQUEST A CALL BACK') {
          e.preventDefault();
          window.dispatchEvent(new Event('openCallMeBackModal'));
        }
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [navigate]);

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
        <main className="flex-grow">
          <PageTransition location={location}>
            <Outlet />
          </PageTransition>
        </main>

        <Footer />
      </div>
      
      {/* Global Floating Widgets & Modals (outside smooth-content to prevent fixed position conflicts) */}
      <WhatsAppWidget />
      <CallMeBackModal />
    </div>
  );
}
