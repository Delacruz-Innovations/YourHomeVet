import React from 'react';
import { PawPrint, MessageCircle, ChevronRight } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="py-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2306D] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl shadow-pink-500/20">
          
          {/* Background watermark elements */}
          <PawPrint size={180} className="absolute -left-10 -bottom-10 text-white opacity-10 rotate-[-15deg] pointer-events-none" />
          <PawPrint size={140} className="absolute -right-5 top-0 text-white opacity-10 rotate-[25deg] pointer-events-none" />
          
          <div className="flex items-center gap-6 relative z-10">
            {/* Paw Icon */}
            <div className="hidden sm:flex bg-white/20 p-4 rounded-full">
              <PawPrint size={40} className="text-white" fill="white" />
            </div>
            
            {/* Text */}
            <div className="text-white text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Not sure what your pet needs?</h3>
              <p className="text-pink-100 font-medium">Chat with our team. We're happy to help.</p>
            </div>
          </div>
          
          {/* Button */}
          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <a 
              href="#chat" 
              className="flex items-center justify-center gap-2 bg-white text-[#F2306D] font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:bg-pink-50 transition-colors tracking-wide w-full sm:w-auto group"
            >
              Chat With a Vet
              <div className="w-5 h-5 rounded-full border-2 border-[#F2306D] flex items-center justify-center group-hover:bg-[#F2306D] transition-colors">
                <ChevronRight size={14} className="text-[#F2306D] group-hover:text-white" />
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
