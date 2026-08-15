import React from 'react';
import logo from '../assets/logo.png';
import { ChevronDown } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 lg:mb-24">
          
          {/* Logo & Language */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <img src={logo} alt="YourHomeVet Logo" className="h-14 w-auto mb-6 object-contain" />
            <button className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-sm px-4 py-2 text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              <span className="text-base">🇬🇧</span> EN <ChevronDown size={14} className="ml-2" strokeWidth={3} />
            </button>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-[15px]">Information</h4>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">How it works</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Our service</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Insurance Claim</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Pet Euthanasia at Home</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">FAQs</a>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-[15px]">About YourHomeVet</h4>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Meet the team</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Careers</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Become a Partner</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Practice</a>
            <a href="/contact" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Contact</a>
          </div>

          {/* Links Column 3 */}
          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-[15px]">Pet Care Advice</h4>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Dog Advice</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Cat Advice</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Exotics Advice</a>
          </div>

          {/* Links Column 4 */}
          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-[15px]">Connect with us</h4>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Facebook</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-[#ec558b] transition-colors">Instagram</a>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <p>© 2016-2025 YourHomeVet. All Rights Reserved.</p>
          <a href="#" className="hover:text-[#ec558b] transition-colors">Terms of Service</a>
          <p>Built by Jamie Gajic</p>
        </div>
      </div>
    </footer>
  );
}
