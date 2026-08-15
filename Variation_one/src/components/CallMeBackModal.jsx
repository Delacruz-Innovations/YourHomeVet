import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CallMeBackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openCallMeBackModal', handleOpen);
    return () => window.removeEventListener('openCallMeBackModal', handleOpen);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsSubmitted(false), 300); // reset after transition
  };

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
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-slate-600 transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="p-8 sm:p-12">
            
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">Request a Call Back</h2>
              <p className="text-slate-600 text-sm">
                Leave your details below and one of our veterinary specialists will call you back as soon as possible.
              </p>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 bg-[#99c8e8] text-slate-800 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Received!</h3>
                <p className="text-slate-600 text-sm">
                  We have received your call back request. Our team will be in touch shortly.
                </p>
                <button 
                  onClick={handleClose}
                  className="mt-8 px-8 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 text-[13px] font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input type="text" placeholder="John Doe" className={inputStyles} required />
                </div>
                <div className="w-full">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" placeholder="+44 1234 567890" className={inputStyles} required />
                </div>
              </div>

              <div className="w-full">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Best time to call</label>
                <div className={selectWrapper}>
                  <select className={inputStyles} required defaultValue="asap">
                    <option value="asap">As soon as possible</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                  {selectIcon}
                </div>
              </div>

              <div className="w-full">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Brief Reason for Call</label>
                <textarea 
                  placeholder="e.g., Question about my dog's vaccination, Emergency..." 
                  rows={3}
                  className="w-full bg-transparent border border-slate-400/60 p-4 text-[14px] text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-slate-800 transition-colors rounded-sm resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#99c8e8] hover:bg-[#86badc] text-slate-800 text-[13px] font-semibold transition-colors shadow-sm w-full sm:w-auto"
                >
                  Submit Request
                </button>
              </div>

            </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
