import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart } from 'lucide-react';
import dogPlayImg from '../assets/emergency_dog.png'; // Using existing image

export default function ResourcesVideo() {
  return (
    <section className="py-4 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#f8fafc] dark:bg-slate-900 rounded-[2rem] flex flex-col md:flex-row overflow-hidden relative shadow-sm border border-slate-100 dark:border-slate-800">
          
          {/* Decorative Green Circle */}
          <div className="absolute left-1/2 bottom-0 w-32 h-32 bg-[#eefdf2] dark:bg-green-900/20 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>

          {/* Left Content */}
          <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-2 text-green-500 font-bold text-xs uppercase tracking-widest mb-4">
              <Heart size={14} />
              <span>Care That Comes Home</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Vet care in the comfort of your home
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 font-medium mb-10 max-w-sm">
              No stress. No waiting rooms. Just compassionate care where your pet feels safest.
            </p>
            
            <div>
              <a 
                href="#video" 
                className="inline-flex items-center gap-3 bg-[#F2306D] hover:bg-[#D9265F] text-white font-bold text-sm px-8 py-4 rounded-full shadow-md transition-colors"
              >
                See How It Works
                <div className="bg-white rounded-full p-1">
                  <Play size={12} className="text-[#F2306D]" fill="currentColor" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Video Thumbnail */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full flex z-10 p-4 md:p-0">
            <div className="w-full h-full relative overflow-hidden rounded-3xl md:rounded-none md:rounded-l-[4rem] group cursor-pointer shadow-lg md:shadow-none">
              <img 
                src={dogPlayImg} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#F2306D] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
              </div>

              {/* Decorative Heart on Video */}
              <div className="absolute top-8 right-8 text-white/70">
                <Heart size={48} strokeWidth={1} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
