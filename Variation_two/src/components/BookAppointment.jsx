import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import peeringDog from '../assets/emergency_dog.png';

export default function BookAppointment() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-between overflow-hidden pt-28 sm:pt-36">
      
      {/* Content Section */}
      <div className="max-w-2xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-5">
          Book An Appointment
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
          Our team will bring expert care directly to your doorstep, ensuring a stress-free and comfortable experience for your pet. Get in touch using the button below and let us know how we can help
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <a href="mailto:Info@yourhomevet.ae" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm">
            <Mail size={16} />
            Email
          </a>
          <a href="https://wa.me/971505503777" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#9cbc65] hover:bg-[#8ab051] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm">
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
      
      {/* Bottom Image - peering dog */}
      <div className="w-full mt-12 sm:mt-16 px-4 sm:px-6 lg:px-0 max-w-5xl mx-auto">
        <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] overflow-hidden rounded-t-2xl sm:rounded-t-3xl shadow-2xl">
          <img 
            src={peeringDog} 
            alt="Dog looking up" 
            className="absolute inset-0 w-full h-full object-cover object-top" 
          />
        </div>
      </div>
      
    </div>
  );
}
