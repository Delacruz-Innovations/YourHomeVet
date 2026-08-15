import React from 'react';

export default function AboutHero() {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-[#e8f4fd] dark:bg-slate-950 transition-colors">
      
      {/* Text Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-20 xl:p-24 relative overflow-hidden">
        
        {/* Soft Ambient Radial Glow Effects */}
        <div className="absolute top-0 -left-24 w-[450px] h-[450px] rounded-full bg-[#dbeefe] opacity-90 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-xl relative z-10">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-6 block">
            ABOUT US
          </span>
          
          <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] font-serif text-slate-900 dark:text-slate-100 font-normal leading-[1.1] mb-8 tracking-tight">
            Your Home Vet
          </h1>
          
          <div className="text-slate-600 dark:text-slate-400 text-[15px] sm:text-[16px] leading-[1.8] mb-10 space-y-6">
            <p>
              At Your Home Vet, we bring compassionate veterinary care directly to your doorstep. With our mobile clinic services, caring for your pet is convenient and stress-free. Our team of dedicated veterinarians ensures your pet receives the highest standard of medical attention, all in the comfort of your home.
            </p>
            <p>
              Your Home Vet is committed to making pet healthcare accessible and personalized. We understand that every pet is unique, which is why our mobile services are designed to meet your pet's individual needs. From routine check-ups to urgent care, our experienced veterinarians provide professional and gentle treatment, ensuring your pet feels safe and loved throughout every visit.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-screen relative">
        <img 
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1200" 
          alt="Veterinarian with a dog" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
}
