import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1b2b4b] text-white border-t border-slate-800 py-16 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Logo & Phone Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-700/60 mb-12">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Modern Vet Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            <span className="text-xs font-serif font-bold text-slate-300 tracking-wider">
              MODERN VET DUBAI
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="tel:97145971000" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#51b255] text-white text-xs font-bold hover:bg-[#439c47] transition-all shadow-md"
            >
              <Phone size={15} /> 971 4 5971 000
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec558b] transition-colors p-2 rounded-sm bg-slate-800/80">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec558b] transition-colors p-2 rounded-sm bg-slate-800/80">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec558b] transition-colors p-2 rounded-sm bg-slate-800/80">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://wa.me/97145971000" target="_blank" rel="noopener noreferrer" className="hover:text-[#51b255] transition-colors p-2 rounded-sm bg-slate-800/80">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* 5 Columns Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 text-xs">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#ec558b] uppercase tracking-wider mb-1 text-[11px]">Navigation</h4>
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link to="/health-library" className="text-slate-300 hover:text-white transition-colors">NEWS</Link>
            <Link to="/health-library" className="text-slate-300 hover:text-white transition-colors">HEALTH LIBRARY</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#ec558b] uppercase tracking-wider mb-1 text-[11px]">About Us</h4>
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors">ABOUT US</Link>
            <Link to="/join-us" className="text-slate-300 hover:text-white transition-colors">CAREERS</Link>
            <Link to="/gallery" className="text-slate-300 hover:text-white transition-colors">GALLERY</Link>
            <Link to="/packages" className="text-slate-300 hover:text-white transition-colors">PACKAGES</Link>
            <Link to="/partners" className="text-slate-300 hover:text-white transition-colors">PARTNERS</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#ec558b] uppercase tracking-wider mb-1 text-[11px]">Services & Media</h4>
            <Link to="/our-video" className="text-slate-300 hover:text-white transition-colors">VIDEOS</Link>
            <Link to="/24-7-emergency-care-at-your-door" className="text-slate-300 hover:text-white transition-colors">SERVICES</Link>
            <Link to="/prices" className="text-slate-300 hover:text-white transition-colors">PRICES</Link>
            <Link to="/about#team" className="text-slate-300 hover:text-white transition-colors">OUR TEAM</Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#ec558b] uppercase tracking-wider mb-1 text-[11px]">Locations & Support</h4>
            <Link to="/emergency-vet-near-me" className="text-slate-300 hover:text-white transition-colors">LOCATIONS</Link>
            <Link to="/frequently-asked-questions" className="text-slate-300 hover:text-white transition-colors">FAQ</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">CONTACT US</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">SHOP</Link>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#ec558b] uppercase tracking-wider mb-1 text-[11px]">Terms & Payment</h4>
            <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">T&C</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Booking T&C</Link>

            <div className="pt-3 border-t border-slate-700/60 mt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">WE ACCEPT</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-white text-slate-900 font-bold text-[10px] rounded-sm">VISA</span>
                <span className="px-2 py-1 bg-white text-slate-900 font-bold text-[10px] rounded-sm">MC</span>
                <span className="px-2 py-1 bg-white text-slate-900 font-bold text-[10px] rounded-sm">AMEX</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-700/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <p>© 2026 copyright all rights reserved • Modern Vet Dubai</p>
          <a href="tel:97145971000" className="hover:text-[#51b255] transition-colors flex items-center gap-1 font-bold">
            <Phone size={12} /> 971 4 5971 000 (24/7 Emergency Line)
          </a>
        </div>

      </div>
    </footer>
  );
}
