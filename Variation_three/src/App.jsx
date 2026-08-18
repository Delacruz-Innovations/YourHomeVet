import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import PetExportPage from './components/PetExportPage';
import EmergenciesPage from './components/EmergenciesPage';
import ServicesListPage from './components/ServicesListPage';
import DentalServicePage from './components/DentalServicePage';
import NeurologyServicePage from './components/NeurologyServicePage';
import SpayNeuterServicePage from './components/SpayNeuterServicePage';
import OphthalmologyServicePage from './components/OphthalmologyServicePage';
import VaccinationsServicePage from './components/VaccinationsServicePage';
import MobileClinicServicePage from './components/MobileClinicServicePage';
import AboutUsPage from './components/AboutUsPage';
import CareersPage from './components/CareersPage';
import PartnersPage from './components/PartnersPage';
import GalleryPage from './components/GalleryPage';
import VideosPage from './components/VideosPage';
import HealthLibraryPage from './components/HealthLibraryPage';
import PackagesPage from './components/PackagesPage';
import OurTeamPage from './components/OurTeamPage';
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
        
        if (href === '#book' || text === 'BOOK AN APPOINTMENT' || text === 'BOOK CONSULTATION') {
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
      <div className="min-h-screen bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 selection:bg-[#FA4D80]/20 selection:text-[#FA4D80]">
        <SEO />
        
        <Header />

        <SmoothScroll>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesListPage />} />
              <Route path="/24-7-emergency-care-at-your-door" element={<ServicesListPage />} />
              <Route path="/services/check-ups" element={<VaccinationsServicePage />} />
              <Route path="/services/ambulance" element={<MobileClinicServicePage />} />
              <Route path="/services/24-7-availability" element={<EmergenciesPage />} />
              <Route path="/services/vaccination" element={<VaccinationsServicePage />} />
              <Route path="/services/deworming" element={<VaccinationsServicePage />} />
              <Route path="/services/soft-tissue-surgery" element={<SpayNeuterServicePage />} />
              <Route path="/services/orthopedic-surgery" element={<NeurologyServicePage />} />
              <Route path="/services/blood-tests" element={<VaccinationsServicePage />} />
              
              {/* V1 Main Dropdown Service Detail Routes */}
              <Route path="/ourservice/emergency" element={<EmergenciesPage />} />
              <Route path="/ourservice/dental" element={<DentalServicePage />} />
              <Route path="/ourservice/neurology" element={<NeurologyServicePage />} />
              <Route path="/ourservice/spay-neuter" element={<SpayNeuterServicePage />} />
              <Route path="/ourservice/ophthalmology" element={<OphthalmologyServicePage />} />
              <Route path="/ourservice/vaccinations" element={<VaccinationsServicePage />} />
              <Route path="/ourservice/mobile-clinic" element={<MobileClinicServicePage />} />
              
              {/* V1 About Us Dropdown Routes */}
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/join-us" element={<CareersPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/our-video" element={<VideosPage />} />
              <Route path="/health-library" element={<HealthLibraryPage />} />
              
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/our-team" element={<OurTeamPage />} />
              <Route path="/team" element={<OurTeamPage />} />
              <Route path="/prices" element={<PackagesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pet-export" element={<PetExportPage />} />
              <Route path="/resources/emergencies" element={<EmergenciesPage />} />
            </Routes>
          </main>

          <Footer />
        </SmoothScroll>

        <BookingModal />
      </div>
    </Router>
  );
}

export default App;




