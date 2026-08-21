import React from 'react';
import { Link } from 'react-router-dom';

export default function EmergencyVetMap() {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-white dark:bg-slate-950">
      
      {/* Left Column: Image */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] relative border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200" 
          alt="Veterinarian with cat" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Column: Text & CTAs */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20 xl:p-24 bg-[#f8f9fa] dark:bg-slate-900/60 transition-colors">
        <div className="max-w-xl">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-6 block">
            DO WE SERVICE YOUR POSTCODE?
          </span>
          
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-serif text-slate-900 dark:text-slate-100 font-normal leading-[1.1] mb-6 tracking-tight">
            The map we cover
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-[1.8] mb-10">
            YourHomeVet is operating 24/7 in Dubai. Please refer to the map to find out if your location is covered by our service. If you have any doubts or are not too far from our operating border, please call us to see if an arrangement can be made.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to="/emergency-vet-near-me" 
              className="px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
            >
              EXPLORE AREAS WE COVER
            </Link>
            <Link 
              to="/book-an-appointment" 
              className="px-8 py-3.5 rounded-sm border border-slate-400 dark:border-slate-600 bg-transparent text-slate-800 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-900/50 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
