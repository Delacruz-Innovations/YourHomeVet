import React, { useState } from 'react';

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <footer className="bg-[#f8f9fa] dark:bg-slate-950 pt-20 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Column */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-6">
              About YourHomeVet
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-loose">
              We provide high-quality in-home veterinary services such as medical investigations, annual health checks, diagnostics tests, online consultations, vaccinations, parasite control, micro-chipping, pet passports, export certificates, rabies vaccinations, pet hospice, prescriptions for chronic patients, chemotherapy, etc.
            </p>
          </div>

          {/* Useful Links Column */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-6">
              Useful Links
            </h4>
            <ul className="space-y-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#services" className="hover:text-[#F2306D] transition-colors">Services</a></li>
              <li><a href="#resources" className="hover:text-[#F2306D] transition-colors">Resources</a></li>
              <li><a href="#privacy" className="hover:text-[#F2306D] transition-colors">Privacy policy</a></li>
            </ul>
            <div className="pt-4">
              <span className="text-[11px] font-medium text-slate-500 block mb-2">Follow us</span>
              <a href="#instagram" className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 rounded-full px-4 py-1.5 text-[11px] font-medium text-slate-600 hover:text-[#F2306D] hover:border-[#F2306D] transition-colors">
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>

          {/* Subscribe Column */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end space-y-6">
            <div className="w-full max-w-sm">
               <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-6">
                 Subscribe to our Newsletter
               </h4>
               {isSubmitted ? (
                <div className="bg-slate-200 dark:bg-slate-900 rounded-full p-4 text-center border border-slate-300 dark:border-slate-800">
                  <p className="text-slate-800 dark:text-white font-medium text-sm">Thanks for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-[#F2306D] text-sm shadow-sm"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-[#F2306D] hover:bg-[#D9265F] text-white font-bold py-2.5 rounded-full text-[13px] shadow-sm transition-colors tracking-wide"
                  >
                    Send
                  </button>
                </form>
              )}

                 <div className="mt-12 flex flex-col items-center">
                 <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-4">
                   YOURHOMEVET LTD
                 </span>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
          <p>YOURHOMEVET registered with the Royal College of Veterinary Surgeons in UK(RCVS)</p>
          <p>YOURHOMEVET © 2026</p>
        </div>

      </div>
    </footer>
  );
}
