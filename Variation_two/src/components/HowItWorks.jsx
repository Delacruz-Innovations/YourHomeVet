import React from 'react';
import image1 from '../assets/emergency_dog.png'; 
import image2 from '../assets/cat_play.png'; 
import { Mail, MessageCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-8 md:py-24 bg-[#f7faf3]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[560px]">
          <img 
            src={image1} 
            alt="Dog in blanket" 
            className="absolute top-0 left-0 w-[72%] h-[60%] object-cover shadow-lg" 
          />
          <img 
            src={image2} 
            alt="Vet giving medicine" 
            className="absolute bottom-0 right-0 w-[65%] h-[65%] object-cover shadow-2xl border-[6px] lg:border-8 border-[#f7faf3]" 
          />
        </div>

        {/* Right Side: Text & Steps */}
        <div className="flex flex-col justify-center">
          <span className="text-[#9cbc65] font-bold text-[10px] tracking-widest uppercase mb-4 block">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10 leading-tight max-w-md">
            A super simple booking system to get you seen at home
          </h2>

          <div className="flex flex-col gap-8 mb-10">
            <div>
              <span className="text-slate-400 font-bold text-[10px] tracking-widest uppercase mb-1 block">Step 1</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Get In Touch</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contact our vet, Dr Clarisse, directly via WhatsApp or email with details of the service you require
              </p>
            </div>
            
            <div>
              <span className="text-slate-400 font-bold text-[10px] tracking-widest uppercase mb-1 block">Step 2</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Schedule Your Appointment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Book a home visit at a time that suits you and your pet.
              </p>
            </div>

            <div>
              <span className="text-slate-400 font-bold text-[10px] tracking-widest uppercase mb-1 block">Step 3</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Receive Treatment at Home</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy a calm, stress-free consultation with personalised veterinary care delivered in the comfort and familiarity of your own home.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <a href="#book" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm w-full sm:w-auto">
              Book Appointment
            </a>
            <div className="flex items-center gap-4 mt-1 ml-1">
              <a href="mailto:Info@yourhomevet.ae" className="text-[#9cbc65] hover:text-[#8ab051] transition-colors">
                <Mail size={20} strokeWidth={2.5} />
              </a>
              <a href="https://wa.me/971505503777" className="text-[#9cbc65] hover:text-[#8ab051] transition-colors">
                <MessageCircle size={20} strokeWidth={2.5} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
