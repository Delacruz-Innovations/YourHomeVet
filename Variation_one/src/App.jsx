import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import OurService from './pages/OurService';
import EndOfLife from './pages/EndOfLife';
import InsuranceClaim from './pages/InsuranceClaim';
import PartnerPractice from './pages/PartnerPractice';
import FaqPage from './pages/FaqPage';
import EmergencyVet from './pages/EmergencyVet';
import PetcareAdvice from './pages/PetcareAdvice';
import ArticleDetail from './pages/ArticleDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AreasCovered from './pages/AreasCovered';

import PetDentalCare from './pages/PetDentalCare';
import VeterinaryNeurology from './pages/VeterinaryNeurology';
import PetSpayNeuter from './pages/PetSpayNeuter';
import PetOphthalmology from './pages/PetOphthalmology';
import PetVaccinations from './pages/PetVaccinations';
import MobileClinicPage from './pages/MobileClinicPage';
import PricesPage from './pages/PricesPage';
import CareersPage from './pages/CareersPage';
import PartnersPage from './pages/PartnersPage';
import GalleryPage from './pages/GalleryPage';
import VideosPage from './pages/VideosPage';
import PackagesPage from './pages/PackagesPage';
import OurTeamPage from './pages/OurTeamPage';
import BookingPage from './pages/BookingPage';

// Register ScrollTrigger globally once
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem('yhv-dark-mode');
    if (saved !== null) return saved === 'true';
    // 2. Fall back to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('yhv-dark-mode', String(next));
      return next;
    });
  };

  // Sync dark class on document element so Tailwind's dark: mode works globally
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route index element={<Home />} />
          <Route path="pet-emergency-how-it-works" element={<HowItWorks />} />
          <Route path="24-7-emergency-care-at-your-door" element={<OurService />} />
          <Route path="in-home-pet-euthanasia" element={<EndOfLife />} />
          <Route path="insurance-claims" element={<InsuranceClaim />} />
          <Route path="partner-practice" element={<PartnersPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="our-partners" element={<PartnersPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="photos" element={<GalleryPage />} />
          <Route path="our-video" element={<VideosPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="paakages" element={<PackagesPage />} />
          <Route path="health-packages" element={<PackagesPage />} />
          <Route path="frequently-asked-questions" element={<FaqPage />} />
          <Route path="emergency-vet" element={<EmergencyVet />} />
          <Route path="ourservice/emergency" element={<EmergencyVet />} />
          <Route path="ourservice/dental" element={<PetDentalCare />} />
          <Route path="pet-dental-care" element={<PetDentalCare />} />
          <Route path="ourservice/neurology" element={<VeterinaryNeurology />} />
          <Route path="our-services/neurology" element={<VeterinaryNeurology />} />
          <Route path="veterinary-neurology" element={<VeterinaryNeurology />} />
          <Route path="ourservice/spay-neuter" element={<PetSpayNeuter />} />
          <Route path="our-services/spay-neuter" element={<PetSpayNeuter />} />
          <Route path="spay-neuter" element={<PetSpayNeuter />} />
          <Route path="ourservice/ophthalmology" element={<PetOphthalmology />} />
          <Route path="our-services/ophthalmology" element={<PetOphthalmology />} />
          <Route path="pet-ophthalmology" element={<PetOphthalmology />} />
          <Route path="ourservice/vaccinations" element={<PetVaccinations />} />
          <Route path="our-services/vaccinations" element={<PetVaccinations />} />
          <Route path="pet-vaccinations" element={<PetVaccinations />} />
          <Route path="ourservice/mobile-clinic" element={<MobileClinicPage />} />
          <Route path="our-services/mobile-clinic" element={<MobileClinicPage />} />
          <Route path="mobile-clinic" element={<MobileClinicPage />} />
          <Route path="prices" element={<PricesPage />} />
          <Route path="pricing" element={<PricesPage />} />
          <Route path="cost" element={<PricesPage />} />
          <Route path="join-us" element={<CareersPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="jobs" element={<CareersPage />} />
          <Route path="emergency-vet-near-me" element={<AreasCovered />} />
          <Route path="petcare-advice" element={<PetcareAdvice />} />
          <Route path="health-library" element={<PetcareAdvice />} />
          <Route path="petcare-advice/:slug" element={<ArticleDetail />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="our-story" element={<AboutPage />} />
          <Route path="our-team" element={<OurTeamPage />} />
          <Route path="team" element={<OurTeamPage />} />
          <Route path="meet-our-team" element={<OurTeamPage />} />
          <Route path="book-an-appointment" element={<BookingPage />} />
          <Route path="book-appointment" element={<BookingPage />} />
          <Route path="book" element={<BookingPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
