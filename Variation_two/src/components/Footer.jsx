import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#18181b] pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-[13px] font-medium text-[#9cbc65]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About Dr Berardier</a>
            <a href="#prices" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#book" className="hover:text-white transition-colors">Book Appointment</a>
          </nav>
          
          {/* Email */}
          <a href="mailto:hello@yourhomevet.co.uk" className="text-slate-300 hover:text-white text-[13px] font-medium transition-colors text-center md:text-right">
            hello@yourhomevet.co.uk
          </a>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-800 my-7"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          
          {/* Copyright */}
          <p className="text-slate-400 text-xs text-center sm:text-left">
            Copyright &copy; {new Date().getFullYear()} YourHomeVet
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="mailto:hello@yourhomevet.co.uk" className="hover:text-white transition-colors">
              <Mail size={16} />
            </a>
            <a href="https://wa.me/443308089066" className="hover:text-white transition-colors">
              <MessageCircle size={16} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
