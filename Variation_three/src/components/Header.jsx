import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 60) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        setNavVisible(false); // Scroll down -> hide
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
        setNavVisible(true); // Scroll up -> show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const servicesList = [
    { name: 'Ambulance', path: '/services/ambulance' },
    { name: '24/7 Availability', path: '/services/24-7-availability' },
    { name: 'Annual Checkups', path: '/services/check-ups' },
    { name: 'Vaccination', path: '/services/vaccination' },
    { name: 'Deworming', path: '/services/deworming' },
    { name: 'Soft Tissue Surgery', path: '/services/soft-tissue-surgery' },
    { name: 'Orthopedic Surgery', path: '/services/orthopedic-surgery' },
    { name: 'Blood Tests', path: '/services/blood-tests' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const desktopLinkClass = (path) => 
    `text-[13px] font-medium transition-colors relative ${
      isActive(path)
        ? 'text-[#F2306D] after:absolute after:-bottom-[27px] after:left-0 after:w-full after:h-0.5 after:bg-[#F2306D] after:rounded-full'
        : 'text-slate-600 hover:text-[#F2306D]'
    }`;

  const mobileLinkClass = (path) =>
    `block text-sm font-semibold py-2 border-slate-100 dark:border-slate-800 ${
      isActive(path) ? 'text-[#F2306D]' : 'text-slate-700 dark:text-slate-200'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-transform duration-300 ease-in-out ${navVisible ? 'translate-y-0 shadow-md' : '-translate-y-full shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src={logo} 
            alt="YourHomeVet Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          <Link to="/" className={desktopLinkClass('/')}>
            Home
          </Link>
          
          <div className="relative group h-full flex items-center">
            <Link to="/services" className={`flex items-center gap-1 ${desktopLinkClass('/services')}`}>
              Services <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            {/* Desktop Dropdown */}
            <div className="absolute top-[calc(100%-1px)] -left-4 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                {servicesList.map((service, idx) => (
                  <Link 
                    key={idx} 
                    to={service.path} 
                    className="block px-6 py-2.5 text-[13px] font-medium text-slate-600 hover:text-[#F2306D] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact" className={desktopLinkClass('/contact')}>
            Contact
          </Link>
          
          <Link to="/pet-export" className={desktopLinkClass('/pet-export')}>
            Pet Export
          </Link>
          
          <Link to="/resources/emergencies" className={desktopLinkClass('/resources/emergencies')}>
            Emergencies
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#book"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#F2306D] hover:bg-[#D9265F] text-white text-[13px] font-bold tracking-wide transition-colors shadow-md"
          >
            Book an Appointment
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-4 space-y-4 shadow-xl"
          >
            <div className="border-b border-slate-100 dark:border-slate-800">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass('/')}
              >
                Home
              </Link>
            </div>
            
            <div className="border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={mobileLinkClass('/services')}
                >
                  Services
                </Link>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 text-slate-500 hover:text-[#F2306D]"
                >
                  <ChevronDown size={16} className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-2 space-y-2">
                      {servicesList.map((service, idx) => (
                        <Link 
                          key={idx} 
                          to={service.path} 
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-[13px] font-medium text-slate-600 py-1 hover:text-[#F2306D]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-b border-slate-100 dark:border-slate-800">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass('/contact')}
              >
                Contact
              </Link>
            </div>
            
            <div className="border-b border-slate-100 dark:border-slate-800">
              <Link
                to="/pet-export"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass('/pet-export')}
              >
                Pet Export
              </Link>
            </div>
            
            <div>
              <Link
                to="/resources/emergencies"
                onClick={() => setMobileMenuOpen(false)}
                className={`${mobileLinkClass('/resources/emergencies')} border-0`}
              >
                Emergencies
              </Link>
            </div>
            <div className="pt-4">
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center text-sm font-bold py-3 rounded-full bg-[#F2306D] text-white shadow-md"
              >
                Book an Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
