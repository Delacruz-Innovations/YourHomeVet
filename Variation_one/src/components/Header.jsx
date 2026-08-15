import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, PawPrint, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import logo from '../assets/logo.png';

export default function Header({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;
    gsap.set(menuRef.current, { x: '100%', autoAlpha: 0 });
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    const links = gsap.utils.toArray('.mobile-nav-link', menuRef.current);
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.to(menuRef.current, { x: '0%', autoAlpha: 1, duration: 0.6, ease: 'power4.out' })
        .fromTo(links, 
          { x: 80, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
          '-=0.3'
        );
    } else {
      document.body.style.overflow = 'auto';
      const tl = gsap.timeline();
      tl.to(links, { 
          x: 60, 
          opacity: 0, 
          duration: 0.3, 
          stagger: { amount: 0.2, from: 'end' }, 
          ease: 'power2.in' 
        })
        .to(menuRef.current, { x: '100%', autoAlpha: 0, duration: 0.5, ease: 'power4.in' }, '-=0.15');
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { 
      name: 'INFORMATION', 
      href: '/#info', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'HOW IT WORKS', path: '/pet-emergency-how-it-works' },
        { label: 'OUR SERVICES', path: '/24-7-emergency-care-at-your-door' },
        { label: 'INSURANCE CLAIM', path: '/insurance-claims' },
        { label: 'END-OF-LIFE CARE', path: '/in-home-pet-euthanasia' },
        { label: 'PARTNER PRACTICE', path: '/partner-practice' },
        { label: 'FAQS', path: '/frequently-asked-questions' }
      ]
    },
    { name: 'EMERGENCY VET', href: '/emergency-vet', hasDropdown: false },
    { name: 'PETCARE ADVICE', href: '/petcare-advice', hasDropdown: false },
    { name: 'ABOUT', href: '/about', hasDropdown: false },
  ];

  return (
    <>
      <header className="sticky top-0 z-[1000] transition-colors duration-300">
        {/* Top Banner */}
        <div className="bg-[#9cbc65] text-white py-2 px-4 w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-center text-xs sm:text-[13px] font-medium tracking-wide text-center">
            <PawPrint size={14} className="mr-2 inline-block shrink-0" />
            <span>24/7 VETERINARY EMERGENCY SERVICES - DUBAI - UAE CALL <a href="tel:03308089066" className="hover:underline font-bold">0330 808 9066</a></span>
          </div>
        </div>

        {/* Main Header */}
        <div className="backdrop-blur-md bg-white/95 dark:bg-slate-950/95 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src={logo} alt="YourHomeVet Logo" className="h-12 sm:h-14 w-auto object-contain" />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 px-4">
              {navLinks.map((link) => {
                // Active state detection
                const isActive = (link.dropdownItems && link.dropdownItems.some(item => item.path === location.pathname));
                
                return (
                  <div key={link.name} className="relative group h-20 flex items-center">
                    {/* Using standard anchor for hash links, Link component for routes */}
                    <a
                      href={link.href}
                      className={`flex items-center text-[13px] font-bold transition-colors duration-200 tracking-wide ${isActive ? 'text-[#5b8cce]' : 'text-slate-700 dark:text-slate-300 hover:text-[#5b8cce] group-hover:text-[#5b8cce] dark:hover:text-[#5b8cce] dark:group-hover:text-[#5b8cce]'}`}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown size={14} className="ml-1 opacity-70" strokeWidth={3} />}
                    </a>

                    {/* Dropdown Menu */}
                    {link.hasDropdown && link.dropdownItems && (
                      <div className="absolute top-20 left-0 w-60 bg-white dark:bg-slate-900 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="flex flex-col">
                          {link.dropdownItems.map((item, idx) => (
                            item.path.startsWith('/#') ? (
                              <a
                                key={idx}
                                href={item.path}
                                className="px-6 py-4 text-[11px] font-bold tracking-[0.1em] text-slate-700 dark:text-slate-300 hover:text-[#5b8cce] dark:hover:text-[#5b8cce] hover:bg-slate-50 dark:hover:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors"
                              >
                                {item.label}
                              </a>
                            ) : (
                              <Link
                                key={idx}
                                to={item.path}
                                className="px-6 py-4 text-[11px] font-bold tracking-[0.1em] text-slate-700 dark:text-slate-300 hover:text-[#5b8cce] dark:hover:text-[#5b8cce] hover:bg-slate-50 dark:hover:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors"
                              >
                                {item.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
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
                href="tel:03308089066"
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-[13px] font-bold shadow-md shadow-pink-500/20 transition-all duration-200 tracking-wide"
              >BOOK AN APPOINTMENT</motion.a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 lg:hidden text-slate-600 dark:text-slate-300 cursor-pointer relative z-[1001]"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className="lg:hidden fixed inset-0 w-screen h-screen h-[100dvh] min-h-screen z-[999] bg-white dark:bg-slate-950 overflow-y-auto no-scrollbar pt-[130px] pb-16 px-8 flex flex-col shadow-2xl"
      >
        <div className="flex flex-col gap-6 mt-4 pb-12">
          {navLinks.map((link) => (
            <div key={link.name} className="mobile-nav-link">
              <a
                href={link.href}
                onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
                className="flex justify-between items-center py-2 text-3xl font-serif text-slate-800 dark:text-slate-100 hover:text-[#ec558b] dark:hover:text-[#ec558b] transition-colors"
              >
                {link.name}
              </a>
              {link.hasDropdown && link.dropdownItems && (
                <div className="mt-4 flex flex-col gap-5 pl-4 border-l-2 border-[#ec558b]/20">
                  {link.dropdownItems.map((item, idx) => (
                     item.path.startsWith('/#') ? (
                       <a
                          key={idx}
                          href={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[12px] font-bold tracking-widest text-slate-500 dark:text-slate-400 hover:text-[#ec558b] dark:hover:text-[#ec558b] transition-colors uppercase"
                        >
                          {item.label}
                        </a>
                     ) : (
                       <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[12px] font-bold tracking-widest text-slate-500 dark:text-slate-400 hover:text-[#ec558b] dark:hover:text-[#ec558b] transition-colors uppercase"
                        >
                          {item.label}
                        </Link>
                     )
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Additional Contact/Action info at bottom of menu */}
          <div className="mobile-nav-link mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
            <a href="tel:03308089066" className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] transition-colors text-white text-[13px] font-bold tracking-wide w-full shadow-lg shadow-pink-500/20">
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
