import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Heart, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <footer className="bg-[#FAFCF8] dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200/70 dark:border-slate-800/80 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-block bg-white dark:bg-slate-900 p-2.5 rounded-2xl shadow-sm border border-slate-200/70 dark:border-slate-800">
              <img 
                src={logo} 
                alt="YourHomeVet Logo" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
              Compassionate, premium in-home veterinary healthcare across London. Routine wellness exams, diagnostics, vaccinations, and 24/7 rapid emergency dispatch.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">
              Quick Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li><Link to="/24-7-emergency-care-at-your-door" className="hover:text-[#FA4D80] transition-colors">All Services</Link></li>
              <li><Link to="/ourservice/emergency" className="hover:text-[#FA4D80] transition-colors">24/7 Emergency Care</Link></li>
              <li><Link to="/packages" className="hover:text-[#FA4D80] transition-colors">Pet Care Packages</Link></li>
              <li><Link to="/about" className="hover:text-[#FA4D80] transition-colors">About Us</Link></li>
              <li><Link to="/our-team" className="hover:text-[#FA4D80] transition-colors">Our Veterinary Team</Link></li>
              <li><Link to="/contact" className="hover:text-[#FA4D80] transition-colors">Contact & Dispatch</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Follow our mobile veterinary updates and pet care wellness tips.
            </p>
            <div className="pt-2">
              <a 
                href="#instagram" 
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-full px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#FA4D80] hover:border-[#FA4D80] transition-colors shadow-sm"
              >
                <InstagramIcon />
                <span>@YourHomeVet</span>
              </a>
            </div>
          </div>

          {/* Subscribe Column */}
          <div className="lg:col-span-1 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-2">
              Stay in Touch
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Subscribe for seasonal pet healthcare advice and member offers.
            </p>
            {isSubmitted ? (
              <div className="bg-[#E8F7EC] dark:bg-slate-900 rounded-2xl p-4 text-center border border-[#58B66E]/40">
                <p className="text-[#58B66E] font-bold text-xs">Thanks for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-[#FA4D80] text-xs shadow-sm"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition-all uppercase tracking-wider"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>YOURHOMEVET LTD • Registered with the Royal College of Veterinary Surgeons (RCVS)</p>
          <p>© {new Date().getFullYear()} YourHomeVet. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
