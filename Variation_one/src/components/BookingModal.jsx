import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openBookingModal', handleOpen);
    return () => window.removeEventListener('openBookingModal', handleOpen);
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

  const inputStyles = "w-full bg-transparent border-b border-slate-400/60 dark:border-slate-500 pb-2 text-[14px] text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:border-slate-800 dark:focus:border-slate-300 transition-colors rounded-none appearance-none";
  
  // A subtle dropdown icon for select elements
  const selectWrapper = "relative w-full";
  const selectIcon = (
    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#dbe6ef] dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="p-8 sm:p-12">
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-[#99c8e8] text-slate-800 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Request Sent Successfully!</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Thank you for booking an appointment. Our team will contact you shortly to confirm the details.
                </p>
                <button 
                  onClick={handleClose}
                  className="mt-8 px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-[13px] font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              {/* Row 1: Species & Gender */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className={selectWrapper}>
                  <select className={inputStyles} required defaultValue="">
                    <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Select Species</option>
                    <option value="dog" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Dog</option>
                    <option value="cat" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Cat</option>
                    <option value="other" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Other</option>
                  </select>
                  {selectIcon}
                </div>
                <div className={selectWrapper}>
                  <select className={inputStyles} required defaultValue="">
                    <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Gender</option>
                    <option value="male" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Male</option>
                    <option value="female" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Female</option>
                    <option value="unknown" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Unknown</option>
                  </select>
                  {selectIcon}
                </div>
              </div>

              {/* Row 2: Pet Name & Owner Name */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-full">
                  <input type="text" placeholder="Pet Name" className={inputStyles} required />
                </div>
                <div className="w-full">
                  <input type="text" placeholder="Owner Name" className={inputStyles} required />
                </div>
              </div>

              {/* Row 3: Email, Phone, Address */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-full md:w-1/3">
                  <input type="email" placeholder="Email Address" className={inputStyles} required />
                </div>
                <div className="w-full md:w-1/3">
                  <input type="tel" placeholder="Phone" className={inputStyles} required />
                </div>
                <div className="w-full md:w-1/3">
                  <input type="text" placeholder="Address" className={inputStyles} required />
                </div>
              </div>

              {/* Row 4: Date and Time */}
              <div className="flex flex-col md:flex-row items-end gap-8 md:gap-12">
                {/* Date */}
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute left-0 bottom-2 text-slate-500 pointer-events-none">
                    <Calendar size={16} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Date" 
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                    className={`${inputStyles} pl-7`} 
                    required 
                  />
                </div>
                
                {/* Time Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2">Time</span>
                  <div className="flex items-center gap-4">
                    <div className="w-full">
                      <input type="text" placeholder="Hours" className={inputStyles} required />
                    </div>
                    <div className="w-full">
                      <input type="text" placeholder="Minutes" className={inputStyles} required />
                    </div>
                    <div className={selectWrapper}>
                      <select className={inputStyles} required defaultValue="AM">
                        <option value="AM" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">AM</option>
                        <option value="PM" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">PM</option>
                      </select>
                      {selectIcon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: Services */}
              <div className="w-full">
                <textarea 
                  placeholder="Tell us what services are required..." 
                  rows={4}
                  className="w-full bg-transparent border border-slate-400/60 dark:border-slate-500 p-4 text-[14px] text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:border-slate-800 dark:focus:border-slate-300 transition-colors rounded-sm resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button 
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#99c8e8] hover:bg-[#86badc] text-slate-800 text-[13px] font-semibold transition-colors shadow-sm"
                >
                  Request Appointment
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
