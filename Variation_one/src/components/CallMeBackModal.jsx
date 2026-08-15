import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CallMeBackModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openCallMeBackModal', handleOpen);
    return () => window.removeEventListener('openCallMeBackModal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const inputStyles = "w-full px-4 py-3 bg-white border border-slate-300 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors text-[14px] text-slate-800 placeholder:text-slate-400";
  const labelStyles = "block text-[13px] text-[#222] font-medium mb-1.5";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-[500px] bg-white rounded-md shadow-2xl overflow-hidden my-auto"
        >
          {/* Close Button - Floats outside the white bounds visually */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors z-10 shadow-sm border border-slate-200"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          <div className="p-8 sm:p-10 pt-12">
            
            <form className="flex flex-col gap-6">
              
              <div>
                <label className={labelStyles}>Full name *</label>
                <input type="text" className={inputStyles} required />
              </div>

              <div>
                <label className={labelStyles}>Email</label>
                <input type="email" className={inputStyles} />
              </div>

              <div>
                <label className={labelStyles}>Phone number *</label>
                <input type="tel" className={inputStyles} required />
              </div>

              <div>
                <label className={labelStyles}>Postcode *</label>
                <input type="text" className={inputStyles} required />
              </div>

              <div>
                <label className={labelStyles}>Describe your problem *</label>
                <textarea 
                  rows={4}
                  className={`${inputStyles} resize-none`}
                  required
                ></textarea>
              </div>

              {/* reCAPTCHA Mockup */}
              <div className="w-[300px] h-[78px] bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] flex items-center justify-between px-4 mt-2 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 border-2 border-[#c1c1c1] rounded-sm bg-white"></div>
                  <span className="text-[14px] text-[#222]">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-70" />
                  <span className="text-[10px] text-[#555] mt-1">reCAPTCHA</span>
                </div>
              </div>

              <div className="mt-4">
                <button 
                  type="submit"
                  className="w-full py-4 rounded-sm bg-black hover:bg-slate-800 text-white text-[12px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
                >
                  REQUEST CALL BACK
                </button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
