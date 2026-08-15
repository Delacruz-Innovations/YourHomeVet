import React from 'react';

export default function ServiceCustomizedCare() {
  return (
    <section className="py-8 lg:py-12 bg-white dark:bg-slate-950 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 lg:gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-[48%] relative">
          
          {/* Label */}
          <span className="text-slate-600 dark:text-slate-400 font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mb-4 block">
            YOUR EMERGENCY VETERINARY SURGEON
          </span>
          
          {/* Headline */}
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-serif text-slate-900 dark:text-slate-100 font-normal leading-[1.15] mb-6">
            Customized care in the comfort of <br className="hidden sm:inline" />
            your home
          </h2>
          
          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-[14px] sm:text-[15px] mb-8 leading-[1.75] max-w-lg font-normal">
            In times of need, we search for the person we know, the person who has helped our pets, and followed him or her all these years. Unfortunately, like any other human being, one cannot always be available. That is where YourHomeVet is at your service; in close connexion to your regular veterinarian.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="tel:03308089066" 
              className="px-7 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-colors shadow-md"
            >
              CALL OUR NURSE
            </a>
            <a 
              href="/emergency-vet-near-me" 
              className="px-7 py-3.5 rounded-sm border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-colors"
            >
              THE AREAS WE COVER
            </a>
          </div>

        </div>

        {/* Right Image Grid */}
        <div className="w-full lg:w-[48%] relative max-w-[500px]">
           <div className="flex gap-3 sm:gap-4 w-full">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-3 sm:gap-4 w-1/2">
                <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600" alt="Cat cuddling owner" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600" alt="Person holding sleeping dog" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3 sm:gap-4 w-1/2">
                <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600" alt="Puppy face on blanket" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600" alt="Cat on teal chair being petted" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
