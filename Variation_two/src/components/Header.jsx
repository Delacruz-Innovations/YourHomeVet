import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home',      href: '#home' },
  { name: 'About',     href: '#about' },
  { name: 'Services',  href: '#services' },
  { name: 'Prices',    href: '#prices' },
  { name: 'Contact',   href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  /* ── Scroll listener ───────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY > 10) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── GSAP slide-in / slide-out (same as Variation One) ─────── */
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
      tl.to(menuRef.current, { x: '0%', autoAlpha: 1, duration: 0.55, ease: 'power4.out' })
        .fromTo(
          links,
          { x: 70, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: 'power3.out' },
          '-=0.25'
        );
    } else {
      document.body.style.overflow = 'auto';
      const tl = gsap.timeline();
      tl.to(links, {
          x: 50,
          opacity: 0,
          duration: 0.28,
          stagger: { amount: 0.18, from: 'end' },
          ease: 'power2.in',
        })
        .to(menuRef.current, { x: '100%', autoAlpha: 0, duration: 0.45, ease: 'power4.in' }, '-=0.12');
    }
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  /* ── Render ─────────────────────────────────────────────────── */
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-[1000] flex flex-col">

        {/* Top Bar – hidden on mobile */}
        <div className="hidden sm:block bg-[#f7faf3]">
          <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-[11px] font-medium text-slate-600 tracking-wide">
            <div className="flex items-center gap-2 hover:text-[#ec558b] transition-colors">
              <Mail size={14} className="text-[#9cbc65]" />
              <a href="mailto:hello@yourhomevet.co.uk">hello@yourhomevet.co.uk</a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@yourhomevet.co.uk"
                className="w-6 h-6 rounded-full bg-slate-600 hover:bg-[#ec558b] text-white flex items-center justify-center transition-colors"
              >
                <Mail size={12} />
              </a>
              <a
                href="https://wa.me/443308089066"
                className="w-6 h-6 rounded-full bg-slate-600 hover:bg-[#9cbc65] text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'fixed top-0 left-0 w-full bg-slate-900/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5 z-[1001]'
              : 'bg-transparent relative'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 lg:h-[88px] flex items-center justify-between">

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8 text-[11px] font-bold text-white tracking-widest uppercase flex-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-[#9cbc65] transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Logo */}
            <div className="flex justify-start lg:justify-center flex-1 lg:flex-none">
              <a href="#home">
                <img
                  src={logo}
                  alt="YourHomeVet"
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain brightness-0 invert drop-shadow-md"
                />
              </a>
            </div>

            {/* CTA + Hamburger */}
            <div className="flex justify-end flex-1 items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="#book"
                className="hidden sm:inline-flex items-center justify-center px-5 lg:px-8 py-2.5 lg:py-3 bg-[#ec558b] hover:bg-[#d84074] text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors shadow-lg"
              >
                Book Appointment
              </motion.a>

              {/* Hamburger – same as V1 */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 lg:hidden text-white cursor-pointer relative z-[1002]"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Full-Screen Slide-in Mobile Menu (Variation One style) ── */}
      <div
        ref={menuRef}
        className="lg:hidden fixed inset-0 w-screen h-screen z-[999] bg-slate-900 overflow-y-auto no-scrollbar pt-28 pb-16 px-8 flex flex-col shadow-2xl"
      >
        <div className="flex flex-col gap-5 mt-4 pb-12">

          {navLinks.map((link) => (
            <div key={link.name} className="mobile-nav-link border-b border-slate-800 pb-5">
              <a
                href={link.href}
                onClick={closeMobileMenu}
                className="flex justify-between items-center py-1 text-3xl font-serif text-white hover:text-[#9cbc65] transition-colors"
              >
                {link.name}
              </a>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="mobile-nav-link mt-8 pt-4 flex flex-col gap-4">
            <a
              href="#book"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ec558b] hover:bg-[#d84074] text-white text-[13px] font-bold tracking-wide uppercase w-full rounded-sm shadow-lg transition-colors"
            >
              Book An Appointment
            </a>
            <div className="flex items-center gap-4 justify-center mt-2">
              <a href="mailto:hello@yourhomevet.co.uk" className="text-[#9cbc65] hover:text-white transition-colors">
                <Mail size={22} />
              </a>
              <a href="https://wa.me/443308089066" className="text-[#9cbc65] hover:text-white transition-colors">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
