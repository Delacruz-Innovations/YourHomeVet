import React from 'react';
import examImage from '../assets/hero_care.png';
import { Mail, MessageCircle } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="about" className="relative z-20 -mt-16 lg:-mt-24 max-w-7xl mx-auto px-6 mb-24 scroll-mt-24">
      {/* Overlapping Card */}
      <div className="flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        {/* Left Side: Content */}
        <div className="w-full lg:w-[60%] bg-white p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
          <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-4 block">
            Personalised at-home vet care
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-tight">
            World-class home vet care for Dubai's pets
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed text-[15px]">
            Founded to eliminate the stress out of routine veterinary care. YourHomeVet was formed in order to reduce anxiety levels in our furry patients and create ease for their owners.
          </p>
          <p className="text-slate-600 mb-10 leading-relaxed text-[15px]">
            By removing travel time and bringing the vet to you, we aim to achieve personalised veterinary care from the comfort of your own home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-auto">
            <a href="#book" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm w-full sm:w-auto">
              Book Appointment
            </a>
            <div className="flex items-center gap-4">
              <a href="mailto:Info@yourhomevet.ae" className="text-[#9cbc65] hover:text-[#8ab051] transition-colors">
                <Mail size={22} strokeWidth={2.5} />
              </a>
              <a href="https://wa.me/971505503777" className="text-[#9cbc65] hover:text-[#8ab051] transition-colors">
                <MessageCircle size={22} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[500px]">
          <img src={examImage} alt="Vet examining dog" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

    </section>
  );
}
