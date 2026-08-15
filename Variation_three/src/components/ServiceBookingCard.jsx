import React from 'react';
import { CalendarDays } from 'lucide-react';

export default function ServiceBookingCard({ title = "appointment" }) {
  return (
    <div className="bg-[#eefdf2] dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-green-100 dark:border-slate-800 mt-12">
      <div className="flex items-center gap-6 text-center sm:text-left">
        <div className="hidden sm:flex bg-white p-3 rounded-2xl shadow-sm text-green-500">
          <CalendarDays size={32} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">One visit today. A healthier tomorrow.</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Book your pet's {title} with YourHomeVet.</p>
        </div>
      </div>
      <div className="shrink-0">
        <a href="#book" className="inline-block bg-[#F2306D] hover:bg-[#D9265F] text-white font-bold text-sm px-8 py-3 rounded-full shadow-md transition-colors whitespace-nowrap">
          Book an Appointment
        </a>
      </div>
    </div>
  );
}
