import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row bg-[#e8f4fd] dark:bg-slate-950 transition-colors overflow-hidden min-h-[500px]">
      
      {/* Background Image for Mobile and Tablet */}
      <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
        <img 
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1200" 
          alt="Veterinarian with a dog" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
      </div>

      {/* Text Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-20 xl:p-24 relative z-10 overflow-hidden">
        
        {/* Soft Ambient Radial Glow Effects for Desktop */}
        <div className="hidden lg:block absolute top-0 -left-24 w-[450px] h-[450px] rounded-full bg-[#dbeefe] opacity-90 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-xl relative z-10">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-500 lg:dark:text-slate-400 mb-6 block">
            ABOUT US
          </span>
          
          <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] mb-6 tracking-tight">
            Your Home Vet
          </h1>
          
          <div className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-8 space-y-4 font-normal">
            <p>
              At Your Home Vet, we bring compassionate veterinary care directly to your doorstep. With our mobile clinic services, caring for your pet is convenient and stress-free. Our team of dedicated veterinarians ensures your pet receives the highest standard of medical attention, all in the comfort of your home.
            </p>
            <p className="hidden sm:block">
              Your Home Vet is committed to making pet healthcare accessible and personalized. We understand that every pet is unique, which is why our mobile services are designed to meet your pet's individual needs.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] lg:bg-black lg:hover:bg-slate-800 text-white lg:dark:bg-white lg:dark:text-slate-950 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* Image Side for Desktop */}
      <div className="hidden lg:block w-1/2 min-h-screen relative">
        <img 
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1200" 
          alt="Veterinarian with a dog" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
}
