import React from 'react';
import catImage from '../assets/cat_play.png'; 

export default function CTA() {
  return (
    <section id="contact" className="bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row shadow-[0_0_20px_rgba(0,0,0,0.05)]">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center items-start bg-[#f6f9fc]">
          <span className="text-[#9cbc65] font-bold text-[10px] tracking-widest uppercase mb-4 block">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Have Any Questions?
          </h2>
          <p className="text-slate-500 mb-10 text-sm leading-relaxed max-w-sm">
            If you have any questions, feel free to get in touch today, we're always happy to help!
          </p>
          
          <div className="flex flex-col gap-4 w-full sm:w-auto mb-12">
            <a href="#book" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm w-full sm:w-auto">
              Book An Appointment
            </a>
            <a href="https://wa.me/971505503777" className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-[#9cbc65] text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors w-full sm:w-auto">
              Send Us A Message
            </a>
          </div>
          
          <div className="text-slate-500 text-sm">
            <div className="mb-6">
              <p className="mb-1 uppercase tracking-widest text-[10px] font-bold text-[#9cbc65]">Email</p>
              <a href="mailto:Info@yourhomevet.ae" className="hover:text-[#ec558b] transition-colors">Info@yourhomevet.ae</a>
            </div>
            <div>
              <p className="mb-1 uppercase tracking-widest text-[10px] font-bold text-[#9cbc65]">WhatsApp</p>
              <a href="https://wa.me/971505503777" className="hover:text-[#ec558b] transition-colors">Click here</a>
            </div>
          </div>
        </div>
        
        {/* Right Side - hidden on very small screens to avoid excessive page height */}
        <div className="hidden md:block w-full md:w-1/2 min-h-[400px] md:h-auto">
          <img src={catImage} alt="Cat looking up" className="w-full h-full object-cover" />
        </div>
        
      </div>
    </section>
  );
}
