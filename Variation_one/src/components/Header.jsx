import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Menu, X, Sun, Moon, PawPrint } from 'lucide-react';
import logo from '../assets/logo.png';

function NavDropdown({ link, isActive }) {
  const dropdownRef = useRef(null);
  const itemsRef = useRef([]);

  const handleMouseEnter = () => {
    if (dropdownRef.current) {
      gsap.killTweensOf([dropdownRef.current, itemsRef.current]);
      gsap.to(dropdownRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: 'power2.out'
      });
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, x: -8 },
        { opacity: 1, x: 0, duration: 0.2, stagger: 0.03, ease: 'power1.out', delay: 0.05 }
      );
    }
  };

  const handleMouseLeave = () => {
    if (dropdownRef.current) {
      gsap.killTweensOf([dropdownRef.current, itemsRef.current]);
      gsap.to(dropdownRef.current, {
        autoAlpha: 0,
        y: -10,
        scale: 0.97,
        duration: 0.2,
        ease: 'power2.in'
      });
    }
  };

  return (
    <div 
      className="relative group h-20 flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {link.href.includes('#') ? (
        <a
          href={link.href}
          className={`flex items-center text-[13px] font-bold transition-colors duration-200 tracking-wide ${isActive ? 'text-[#5b8cce]' : 'text-slate-700 dark:text-slate-300 hover:text-[#5b8cce] group-hover:text-[#5b8cce] dark:hover:text-[#5b8cce] dark:group-hover:text-[#5b8cce]'}`}
        >
          {link.name}
          {link.hasDropdown && <ChevronDown size={14} className="ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300" strokeWidth={3} />}
        </a>
      ) : (
        <Link
          to={link.href}
          className={`flex items-center text-[13px] font-bold transition-colors duration-200 tracking-wide ${isActive ? 'text-[#5b8cce]' : 'text-slate-700 dark:text-slate-300 hover:text-[#5b8cce] group-hover:text-[#5b8cce] dark:hover:text-[#5b8cce] dark:group-hover:text-[#5b8cce]'}`}
        >
          {link.name}
          {link.hasDropdown && <ChevronDown size={14} className="ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300" strokeWidth={3} />}
        </Link>
      )}

      {/* GSAP Animated Dropdown Menu */}
      {link.hasDropdown && link.dropdownItems && (
        <div 
          ref={dropdownRef}
          className="absolute top-20 left-0 w-60 bg-white dark:bg-slate-900 shadow-2xl opacity-0 invisible translate-y-[-10px] scale-[0.97] z-50 border border-slate-100 dark:border-slate-800 rounded-sm overflow-hidden"
        >
          <div className="flex flex-col py-1">
            {link.dropdownItems.map((item, idx) => {
              const linkContent = item.path.includes('#') ? (
                <a
                  key={idx}
                  ref={el => itemsRef.current[idx] = el}
                  href={item.path}
                  className="px-6 py-3.5 text-[11px] font-bold tracking-[0.1em] text-slate-700 dark:text-slate-300 hover:text-[#5b8cce] dark:hover:text-[#5b8cce] hover:bg-slate-50 dark:hover:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800/60 last:border-0 transition-colors uppercase flex items-center justify-between"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  ref={el => itemsRef.current[idx] = el}
                  to={item.path}
                  className="px-6 py-3.5 text-[11px] font-bold tracking-[0.1em] text-slate-700 dark:text-slate-300 hover:text-[#5b8cce] dark:hover:text-[#5b8cce] hover:bg-slate-50 dark:hover:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800/60 last:border-0 transition-colors uppercase flex items-center justify-between"
                >
                  {item.label}
                </Link>
              );
              return linkContent;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(prev => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  // Auto-hide header on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Mobile drawer animation & comprehensive scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      gsap.to(menuRef.current, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(
        '.mobile-nav-link',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.3, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
      gsap.to(menuRef.current, { autoAlpha: 0, duration: 0.2, ease: 'power2.in' });
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { 
      name: 'SERVICES', 
      href: '/24-7-emergency-care-at-your-door', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'EMERGENCY', path: '/ourservice/emergency' },
        { label: 'DENTAL', path: '/ourservice/dental' },
        { label: 'NEUROLOGY', path: '/ourservice/neurology' },
        { label: 'SPAY & NEUTER', path: '/ourservice/spay-neuter' },
        { label: 'OPHTHALMOLOGY', path: '/ourservice/ophthalmology' },
        { label: 'VACCINATIONS', path: '/ourservice/vaccinations' },
        { label: 'MOBILE CLINIC', path: '/ourservice/mobile-clinic' },
        { label: 'PRICES', path: '/prices' },
        { label: 'ALL SERVICES', path: '/24-7-emergency-care-at-your-door' }
      ]
    },
    { 
      name: 'ABOUT US', 
      href: '/about', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'ABOUT', path: '/about' },
        { label: 'CAREERS', path: '/join-us' },
        { label: 'PARTNERS', path: '/partners' },
        { label: 'GALLERY', path: '/gallery' },
        { label: 'VIDEO', path: '/our-video' },
        { label: 'HEALTH LIBRARY', path: '/health-library' },
        { label: 'NEWS', path: '/health-library' },
        { label: 'MEDIA', path: '/about' }
      ]
    },
    { name: 'PACKAGES', href: '/packages', hasDropdown: false },
    { name: 'OUR TEAM', href: '/about#team', hasDropdown: false },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-transform duration-300 ease-in-out ${navVisible ? 'translate-y-0 shadow-md' : '-translate-y-full shadow-none'}`}>
        {/* Top Banner */}
        <div className="bg-[#9cbc65] text-white py-2 px-4 w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-center text-xs sm:text-[13px] font-medium tracking-wide text-center">
            <PawPrint size={14} className="mr-2 inline-block shrink-0" />
            <span>24/7 VETERINARY EMERGENCY SERVICES - DUBAI - UAE CALL <a href="tel:+971505503777" className="hover:underline font-bold">+971 50 550 3777</a></span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src={logo} alt="YourHomeVet Logo" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 px-4">
              {navLinks.map((link) => {
                const isActive = (link.dropdownItems && link.dropdownItems.some(item => item.path === location.pathname)) || location.pathname === link.href;
                return (
                  <NavDropdown 
                    key={link.name} 
                    link={link} 
                    isActive={isActive} 
                  />
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4 lg:gap-6 shrink-0">
              {/* Language Selector */}
              <div className="hidden sm:flex items-center text-[13px] font-bold text-slate-700 dark:text-slate-300 cursor-pointer hover:text-[#ec558b] dark:hover:text-[#ec558b] transition-colors">
                EN <ChevronDown size={14} className="ml-1 opacity-70" strokeWidth={3} />
              </div>

              {/* Light/Dark Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
              </motion.button>

              {/* CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+971505503777"
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-[13px] font-bold shadow-md shadow-pink-500/20 transition-all duration-200 tracking-wide"
              >BOOK AN APPOINTMENT</motion.a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 lg:hidden text-slate-600 dark:text-slate-300 cursor-pointer relative"
                aria-label="Open mobile menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 100% Full-Screen Mobile Menu (Complete Takeover) */}
      <div 
        ref={menuRef}
        className="lg:hidden fixed inset-0 w-full h-full h-[100dvh] z-[9999] bg-white dark:bg-slate-950 flex flex-col opacity-0 invisible overflow-hidden transition-colors"
      >
        {/* Fullscreen Mobile Top Header */}
        <div className="h-20 px-6 sm:px-8 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 shrink-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center">
            <img src={logo} alt="YourHomeVet Logo" className="h-11 w-auto object-contain" />
          </Link>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              aria-label="Close mobile menu"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain scroll-smooth px-6 sm:px-8 py-6 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isExpanded = activeMobileDropdown === link.name;
              return (
                <div key={link.name} className="mobile-nav-link border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  {link.hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="w-full flex justify-between items-center py-2 text-2xl font-serif font-bold text-slate-800 dark:text-slate-100 hover:text-[#ec558b] dark:hover:text-[#ec558b] transition-colors text-left"
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        size={22} 
                        className={`text-slate-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#ec558b]' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className="flex justify-between items-center py-2 text-2xl font-serif font-bold text-slate-800 dark:text-slate-100 hover:text-[#ec558b] dark:hover:text-[#ec558b] transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.hasDropdown && link.dropdownItems && (
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-2.5 pl-4 pt-3 pb-2 border-l-2 border-[#5b8cce]/40 dark:border-[#5b8cce]/30 mt-2">
                            {link.dropdownItems.map((item, idx) => {
                              const isAnchor = item.path.includes('#');
                              return isAnchor ? (
                                <a
                                  key={idx}
                                  href={item.path}
                                  onClick={closeMobileMenu}
                                  className="text-[14px] font-semibold tracking-wide text-slate-600 dark:text-slate-400 hover:text-[#ec558b] dark:hover:text-[#ec558b] py-1 transition-colors block uppercase"
                                >
                                  {item.label}
                                </a>
                              ) : (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  onClick={closeMobileMenu}
                                  className="text-[14px] font-semibold tracking-wide text-slate-600 dark:text-slate-400 hover:text-[#ec558b] dark:hover:text-[#ec558b] py-1 transition-colors block uppercase"
                                >
                                  {item.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Action Cards inside Fullscreen Drawer */}
          <div className="pt-8 pb-4 flex flex-col gap-3">
            <a
              href="https://modernvet.com/booking/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full py-3.5 rounded-sm bg-[#ec558b] text-white text-center text-xs font-bold uppercase tracking-widest shadow-md hover:bg-[#d84074] transition-all"
            >
              Book An Appointment
            </a>
            <a
              href="tel:+971505503777"
              className="w-full py-3.5 rounded-sm bg-slate-900 dark:bg-slate-800 text-white text-center text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call 24/7: +971 50 550 3777
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
