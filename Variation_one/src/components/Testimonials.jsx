import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { text: "Amazing service! The vet arrived in 30 minutes and our dog was treated with so much care. A highly professional team.", author: "Sarah M.", pet: "Dog Owner" },
    { text: "Highly recommend! No stress of traveling to the clinic. It was so much easier for our anxious cat to be treated at home.", author: "James T.", pet: "Cat Owner" }
  ];

  return (
    <section id="testimonials" className="relative py-12 lg:py-10 bg-gradient-to-b from-[#eef5fd] to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* Dashed Heart Decorative Graphic (Blue) */}
      <div className="absolute top-10 left-[10%] opacity-40 dark:opacity-20 hidden lg:block -rotate-12">
         <svg width="250" height="350" viewBox="0 0 200 300" fill="none" stroke="#5b8cce" strokeWidth="1.5" strokeDasharray="6 6">
            <path d="M100 80 C 100 30, 30 30, 50 90 C 70 150, 100 160, 100 160 C 100 160, 130 150, 150 90 C 170 30, 100 30, 100 80 Z" />
            <path d="M100 160 C 100 240, 160 250, 170 200 C 180 150, 120 180, 130 250 C 140 320, 200 280, 190 220" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16">
          <div className="mb-8 md:mb-0">
            <span className="text-[#5b8cce] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
              The pets we cared for...
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-4">
              Testimonials
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-[15px]">
              ...and what they thought about our service.
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#5b8cce] shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-slate-50 transition-transform hover:scale-105 active:scale-95">
              <ArrowLeft size={20} strokeWidth={2.5} />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#5b8cce] shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-slate-50 transition-transform hover:scale-105 active:scale-95">
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Testimonials Cards (Added based on layout expectation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-10 rounded-sm shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <p className="text-slate-600 dark:text-slate-400 text-[15px] italic mb-8 leading-[1.7]">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-100">{t.author}</p>
                <p className="text-xs text-[#9cbc65] mt-1 font-bold uppercase tracking-wider">{t.pet}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
