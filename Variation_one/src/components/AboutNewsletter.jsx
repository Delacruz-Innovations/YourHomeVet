import React, { useState } from 'react';
import { PawPrint } from 'lucide-react';

export default function AboutNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="w-full py-16 lg:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#e8f4fd] dark:bg-slate-900 transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Copy */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm">
            <PawPrint size={24} className="text-slate-700 dark:text-slate-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-[1.8]">
            Get the latest pet care tips, news, and exclusive offers delivered straight to your inbox.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2">
          {isSubmitted ? (
            <div className="w-full py-4 px-6 bg-[#dbe6ef] text-slate-800 rounded-sm text-sm font-semibold border border-[#99c8e8]">
              Thank you for subscribing!
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address" 
                required
                className="w-full px-5 py-4 rounded-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all shadow-sm"
              />
              <button 
                type="submit"
                className="shrink-0 px-8 py-4 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
