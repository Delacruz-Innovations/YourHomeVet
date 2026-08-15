import React from 'react';
import { Stethoscope, Home, Clock } from 'lucide-react';

export default function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#9cbc65] font-bold text-[10px] tracking-widest uppercase mb-4 block">
          Why choose us
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12 md:mb-20 max-w-3xl mx-auto leading-tight">
          The advantages over a traditional veterinary appointment
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          
          <div className="flex flex-col items-center py-10 sm:py-0 sm:px-10">
            <Stethoscope size={48} strokeWidth={1.5} className="text-[#9cbc65] mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Convenient</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
              No back and forth trips, no waiting rooms. Dr Clarisse comes to you when you are available!
            </p>
          </div>
          
          <div className="flex flex-col items-center py-10 sm:py-0 sm:px-10">
            <Home size={48} strokeWidth={1.5} className="text-[#9cbc65] mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Stress Free</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
              Keep your pet stress-free in their natural environment.
            </p>
          </div>
          
          <div className="flex flex-col items-center py-10 sm:py-0 sm:px-10">
            <Clock size={48} strokeWidth={1.5} className="text-[#9cbc65] mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Unrushed</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
              We schedule longer appointment times to give your pet the attention it deserves.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
