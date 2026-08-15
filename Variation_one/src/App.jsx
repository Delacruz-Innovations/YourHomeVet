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
          <Route path="partner-practice" element={<PartnerPractice />} />
          <Route path="frequently-asked-questions" element={<FaqPage />} />
          <Route path="emergency-vet" element={<EmergencyVet />} />
          <Route path="emergency-vet-near-me" element={<AreasCovered />} />
          <Route path="petcare-advice" element={<PetcareAdvice />} />
          <Route path="petcare-advice/:slug" element={<ArticleDetail />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
