import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#0d1627] text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-10 pb-6 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & 24/7 Direct Access (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 mb-3">
                <img src={logo} alt="YourHomeVet Logo" className="h-9 sm:h-10 w-auto object-contain dark:invert" />
                <span className="font-serif font-bold text-sm text-slate-900 dark:text-white tracking-wider">
                  YourHomeVet
                </span>
              </Link>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 max-w-sm">
                Compassionate at-home and clinic veterinary medicine across Dubai. Available 24 hours a day, 365 days a year.
              </p>
            </div>

            {/* Direct Contact Action Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a 
                href="tel:97145971000" 
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold transition-all shadow-sm"
              >
                <Phone size={13} />
                <span>971 4 5971 000</span>
              </a>
              <a 
                href="https://wa.me/97145971000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#51b255] hover:bg-[#439c47] text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle size={13} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Clinical Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec558b]" />
              Veterinary Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/24-7-emergency-care-at-your-door" className="hover:text-[#ec558b] dark:hover:text-white transition-colors flex items-center justify-between group">
                  <span>24/7 Emergency Care</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-[#ec558b] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/pet-dental-care" className="hover:text-[#ec558b] dark:hover:text-white transition-colors flex items-center justify-between group">
                  <span>Pet Dental Care</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-[#ec558b] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/pet-vaccinations" className="hover:text-[#ec558b] dark:hover:text-white transition-colors flex items-center justify-between group">
                  <span>Vaccinations & Boosters</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-[#ec558b] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/spay-neuter" className="hover:text-[#ec558b] dark:hover:text-white transition-colors flex items-center justify-between group">
                  <span>Spay & Neuter Surgery</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-[#ec558b] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/mobile-clinic" className="hover:text-[#ec558b] dark:hover:text-white transition-colors flex items-center justify-between group">
                  <span>Mobile Vet Clinic Van</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-[#ec558b] transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/veterinary-neurology" className="hover:text-[#ec558b] dark:hover:text-white transition-colors flex items-center justify-between group">
                  <span>Veterinary Neurology</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-[#ec558b] transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9cbc65]" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-[#ec558b] dark:hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#ec558b] dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Health Packages</span>
                  <span className="px-1.5 py-0.2 bg-[#ec558b]/15 text-[#ec558b] text-[9px] font-bold rounded">SAVE</span>
                </Link>
              </li>
              <li>
                <Link to="/prices" className="hover:text-[#ec558b] dark:hover:text-white transition-colors">Pricing & Fees</Link>
              </li>
              <li>
                <Link to="/frequently-asked-questions" className="hover:text-[#ec558b] dark:hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/health-library" className="hover:text-[#ec558b] dark:hover:text-white transition-colors">Pet Health Advice</Link>
              </li>
              <li>
                <Link to="/join-us" className="hover:text-[#ec558b] dark:hover:text-white transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Location & Secure Payment (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                Dubai Coverage
              </h4>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#ec558b] shrink-0 mt-0.5" />
                  <span>Downtown, Marina, Jumeirah, Palm, Hills & all Dubai areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#51b255] shrink-0" />
                  <span>24 Hours / 7 Days a Week</span>
                </div>
              </div>
            </div>

            {/* Payment & Trust */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1.5">
                Secure Checkout Powered by Stripe
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                <span className="px-2 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded font-mono">VISA</span>
                <span className="px-2 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded font-mono">MC</span>
                <span className="px-2 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded font-mono">Apple Pay</span>
                <span className="px-2 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded font-mono">Stripe</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Compact Legal & Social Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© 2026 YourHomeVet Dubai. All rights reserved.</p>

          {/* Social Icons & Policy Links */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Terms of Service</Link>
            <span>•</span>
            <div className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 pl-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#ec558b] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#ec558b] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
