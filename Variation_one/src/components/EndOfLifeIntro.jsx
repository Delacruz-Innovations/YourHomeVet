import React from 'react';

export default function EndOfLifeIntro() {
  return (
    <section className="w-full py-16 lg:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 lg:gap-16 items-start">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-slate-500 dark:text-slate-400 font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-4 block">
            IN-HOME PET EUTHANASIA
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            The Toughest Decision
          </h2>
          
          <div className="text-slate-600 dark:text-slate-300 text-[14px] sm:text-[15px] leading-[1.8] space-y-4 mb-8">
            <p>
              Deciding when to say goodbye to a beloved pet is one of the hardest choices a pet owner has to make.
            </p>
            <p>
              Our dedicated team of experienced and compassionate veterinary professionals will arrive directly to your door to examine your pet in the comfort of your own home, removing the stress of a visit to the clinic and keeping them in their own comfortable and familiar surroundings.
            </p>
            <p>
              If in-home pet euthanasia is chosen as the most humane option for your pet, we can proceed with this during the same visit.
            </p>
            <p>
              Our priority is to ensure your pet's passing is peaceful and stress-free. At YourHomeVet, we aim to make this difficult time as comforting and respectful as possible for both you and your pet.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#read-more" 
              className="px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
            >
              READ MORE
            </a>
            <a 
              href="#consultation" 
              className="px-8 py-3.5 rounded-sm border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
            >
              BOOK A CONSULTATION
            </a>
          </div>
        </div>
        
        {/* Right Column: 3-Image Grid */}
        <div className="w-full lg:w-1/2">
          {/* We create a 2x2 grid but only populate 3 items */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="w-full aspect-square overflow-hidden rounded-sm bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800" 
                alt="Vet examining dog" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square overflow-hidden rounded-sm bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1537151608804-ea2f1d711905?auto=format&fit=crop&q=80&w=800" 
                alt="Dog resting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square overflow-hidden rounded-sm bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1628009368231-7bb7cbcb0def?auto=format&fit=crop&q=80&w=800" 
                alt="Vet holding cat paws" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* The fourth slot is intentionally left empty to match the design */}
          </div>
        </div>

      </div>
    </section>
  );
}
