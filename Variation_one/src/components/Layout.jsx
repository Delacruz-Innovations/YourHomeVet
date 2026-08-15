import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import BookingModal from './BookingModal';
import CallMeBackModal from './CallMeBackModal';

export default function Layout({ darkMode, toggleDarkMode }) {
  
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

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      
      {/* Global Widgets & Modals */}
      <WhatsAppWidget />
      <BookingModal />
      <CallMeBackModal />
    </div>
  );
}
