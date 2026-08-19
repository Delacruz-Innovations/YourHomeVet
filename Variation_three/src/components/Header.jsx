import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  }, [location.pathname]);

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
        { label: 'OUR TEAM', path: '/about#team' },
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

  const isTransparent = isHomePage && !scrolled;

  const isLinkActive = (link) => {
    if (location.pathname === link.href) return true;
    if (link.hasDropdown && link.dropdownItems?.some(item => location.pathname === item.path)) return true;
    return false;
  };

  const handleHashClick = (path) => {
    if (path.includes('#')) {
      const hash = path.substring(path.indexOf('#'));
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const linkClass = (active = false) => `
    text-[13px] font-semibold tracking-wider transition-all duration-200 flex items-center gap-1 py-1
    ${isTransparent 
      ? (active ? 'text-white font-bold drop-shadow' : 'text-white/90 hover:text-white drop-shadow') 
      : (active ? 'text-[#FA4D80] font-bold' : 'text-slate-700 dark:text-slate-200 hover:text-[#FA4D80]')
    }
  `;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isTransparent 
          ? 'bg-transparent pt-3 pb-2' 
          : 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-slate-200/60 dark:border-slate-800/60 shadow-sm py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between relative">
        
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div >
            <img 
              src={logo} 
              alt="YourHomeVet Logo - Veterinary Care At Your Doorstep" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const active = isLinkActive(link);

            if (link.hasDropdown) {
              return (
                <div 
                  key={idx}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={link.href}
                    onClick={() => handleHashClick(link.href)}
                    className={linkClass(active)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={14} className="opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-transform duration-200 text-[#58B66E]" />
                  </Link>
                  
                  <div className="absolute top-[calc(100%-4px)] -left-4 w-60 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md  shadow-xl rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {link.dropdownItems.map((item, subIdx) => (
                      <Link 
                        key={subIdx} 
                        to={item.path} 
                        onClick={() => handleHashClick(item.path)}
                        className="block px-4 py-2 text-[12.5px] font-semibold tracking-wide text-slate-700 dark:text-slate-200 hover:text-[#FA4D80] hover:bg-[#E8F7EC]/60 dark:hover:bg-slate-800/70 rounded-xl transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link 
                key={idx} 
                to={link.href} 
                onClick={() => handleHashClick(link.href)}
                className={linkClass(active)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Top Right Consultation Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#book"
            className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm ${
              isTransparent
                ? 'bg-white/25 hover:bg-white/35 text-white border border-white/50 backdrop-blur-md hover:shadow-lg hover:scale-105'
                : 'bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white shadow-md hover:shadow-lg hover:scale-105'
            }`}
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${
              isTransparent 
                ? 'text-white bg-white/20 backdrop-blur-md border border-white/30' 
                : 'text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-6 py-5 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-1">
              {navLinks.map((link, idx) => {
                const isOpen = mobileActiveDropdown === link.name;

                if (link.hasDropdown) {
                  return (
                    <div key={idx} className="pb-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2.5 text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider"
                        >
                          {link.name}
                        </Link>
                        <button 
                          onClick={() => setMobileActiveDropdown(isOpen ? null : link.name)}
                          className="p-2 text-slate-500 hover:text-[#F2306D]"
                          aria-label={`Toggle ${link.name} submenu`}
                        >
                          <ChevronDown size={18} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 pb-2 space-y-1.5 border-l-2 border-[#F2306D]/30 ml-2 mt-1"
                          >
                            {link.dropdownItems.map((item, subIdx) => (
                              <Link
                                key={subIdx}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#F2306D] py-1 uppercase tracking-wider"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={idx} className=" pb-1">
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider"
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center text-xs font-bold uppercase tracking-wider py-3.5 rounded-full bg-[#F2306D] hover:bg-[#D9265F] text-white shadow-lg"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
