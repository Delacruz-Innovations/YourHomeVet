import React from 'react';
import { motion } from 'framer-motion';
import heroCat from '../assets/cat_play.png';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF0F5] dark:bg-slate-950 min-h-[580px] lg:min-h-[660px] flex items-center pt-8 lg:pt-0">
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 lg:pr-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white leading-[1.1] tracking-tight"
          >
            The <span className="text-[#F2306D]">best care</span> for your <span className="text-[#F2306D]">best friend</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-md"
          >
            Independent since 2002, YourHomeVet delivers premium, personalised veterinary care designed around you and your pet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#book"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F2306D] hover:bg-[#D9265F] text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg"
            >
              Book an Appointment
            </a>
            <a
              href="tel:+"
              className="bg-transparent hover:bg-[#F2306D] text-[#F2306D] hover:text-white border-2 border-[#F2306D] font-bold text-[13px] tracking-wide px-8 py-3 rounded-full transition-colors"
            >
              Call Us
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg"
           >
             <img 
               src={heroCat} 
               alt="Veterinary care cat" 
               className="w-full h-auto object-cover rounded-3xl"
             />
             
             {/* WhatsApp Floating Button Overlay */}
             <a href="#whatsapp" className="absolute bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-20">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M12.031 21.183h-.01c-1.523 0-3.013-.404-4.32-1.168l-.31-.184-3.21.841.854-3.13-.202-.321c-.838-1.332-1.28-2.871-1.28-4.464 0-4.606 3.748-8.354 8.354-8.354 2.234 0 4.333.871 5.912 2.451a8.307 8.307 0 012.449 5.908c-.002 4.605-3.75 8.353-8.237 8.421zM7.054 18.59c1.233.731 2.664 1.118 4.135 1.118h.01c3.843 0 6.97-3.127 6.97-6.97s-3.127-6.97-6.97-6.97-6.97 3.127-6.97 6.97c0 1.545.424 3.036 1.229 4.316l1.042 1.656z" />
                </svg>
             </a>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
