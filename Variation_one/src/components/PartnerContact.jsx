import React from 'react';

export default function PartnerContact() {
  return (
    <section className="w-full py-8 lg:py-16 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col pt-8">
          <span className="text-slate-500 dark:text-slate-400 font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-4 block">
            WANT TO KNOW MORE?
          </span>
          
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif text-slate-900 dark:text-slate-100 mb-6 leading-tight max-w-md">
            Friends that run together, stay together.
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-[15px] sm:text-[16px] leading-[1.8] max-w-md">
            If you'd want to meet for an informal chat, discuss out-of-hours or just say hello to another independent practice in Dubai or across the UAE, feel free to drop us a message here.
          </p>
        </div>
        
        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#f5f9fc] dark:bg-slate-900 p-8 sm:p-12 rounded-sm border border-slate-100 dark:border-slate-800">
            <form className="flex flex-col gap-6">
              
              {/* Practice Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="practiceName" className="text-[12px] font-bold text-slate-700 dark:text-slate-300">
                  Your practice name *
                </label>
                <input 
                  type="text" 
                  id="practiceName"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm focus:outline-none focus:border-[#5b8cce] focus:ring-1 focus:ring-[#5b8cce] transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[12px] font-bold text-slate-700 dark:text-slate-300">
                  Email *
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm focus:outline-none focus:border-[#5b8cce] focus:ring-1 focus:ring-[#5b8cce] transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[12px] font-bold text-slate-700 dark:text-slate-300">
                  Phone *
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm focus:outline-none focus:border-[#5b8cce] focus:ring-1 focus:ring-[#5b8cce] transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[12px] font-bold text-slate-700 dark:text-slate-300">
                  How can we help you? *
                </label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm focus:outline-none focus:border-[#5b8cce] focus:ring-1 focus:ring-[#5b8cce] transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* ReCAPTCHA Placeholder */}
              <div className="flex items-center justify-between w-full max-w-[280px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-sm shadow-sm mt-2">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 rounded border-slate-300 text-[#5b8cce] focus:ring-[#5b8cce]" />
                  <span className="text-[13px] text-slate-600 dark:text-slate-400">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center justify-center opacity-70">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#5b8cce] mb-1">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-[8px] text-slate-400 uppercase tracking-wider">reCAPTCHA</span>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full mt-4 py-4 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
              >
                SUBMIT
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
