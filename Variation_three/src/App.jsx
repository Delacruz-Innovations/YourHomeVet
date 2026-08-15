import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import PetExportPage from './components/PetExportPage';
import EmergenciesPage from './components/EmergenciesPage';
import ServicesListPage from './components/ServicesListPage';
import ServiceDetailsPage from './components/ServiceDetailsPage';
import ServiceAmbulancePage from './components/ServiceAmbulancePage';
import Service247Page from './components/Service247Page';
import ServiceVaccinationPage from './components/ServiceVaccinationPage';
import ServiceDewormingPage from './components/ServiceDewormingPage';
import ServiceSoftTissuePage from './components/ServiceSoftTissuePage';
import ServiceOrthopedicPage from './components/ServiceOrthopedicPage';
import ServiceBloodTestsPage from './components/ServiceBloodTestsPage';
import BookingModal from './components/BookingModal';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        // If it's a link to #book or contains specific text
        const href = target.getAttribute('href');
        const text = target.textContent.trim().toUpperCase();
        
        if (href === '#book' || text === 'BOOK AN APPOINTMENT') {
          e.preventDefault();
          window.dispatchEvent(new Event('openBookingModal'));
        }
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FFF0F5] text-slate-800 transition-colors duration-300 selection:bg-[#F2306D]/20 selection:text-[#F2306D]">
        <SEO />
        
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesListPage />} />
            <Route path="/services/check-ups" element={<ServiceDetailsPage />} />
            <Route path="/services/ambulance" element={<ServiceAmbulancePage />} />
            <Route path="/services/24-7-availability" element={<Service247Page />} />
            <Route path="/services/vaccination" element={<ServiceVaccinationPage />} />
            <Route path="/services/deworming" element={<ServiceDewormingPage />} />
            <Route path="/services/soft-tissue-surgery" element={<ServiceSoftTissuePage />} />
            <Route path="/services/orthopedic-surgery" element={<ServiceOrthopedicPage />} />
            <Route path="/services/blood-tests" element={<ServiceBloodTestsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pet-export" element={<PetExportPage />} />
            <Route path="/resources/emergencies" element={<EmergenciesPage />} />
          </Routes>
        </main>

        <Footer />
        <BookingModal />
      </div>
    </Router>
  );
}

export default App;
