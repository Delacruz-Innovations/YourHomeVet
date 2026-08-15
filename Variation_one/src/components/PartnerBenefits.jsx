import React from 'react';

const benefits = [
  {
    id: 1,
    title: "Independent and dedicated out-of-hours service",
    content: "YourHomeVet is the premier mobile practice dedicated to out-of-hours care in Dubai and the UAE. We offer the most gentle care and are backed by our 24/7 facilities."
  },
  {
    id: 2,
    title: "Dedicated emergency lines to your clients",
    content: "When you leave the practice every night, all your calls are diverted to a dedicated emergency line we set up for you. We triage the calls according to your instructions and carry on with the emergency care."
  },
  {
    id: 3,
    title: "A customized medical approach",
    content: "You hate NSAID on your senior cats? You would rather not have us use Ketamine. We follow your medical approach. You clients, your medical care, your rules."
  },
  {
    id: 4,
    title: "No client retention",
    content: "Your clients remain yours. We only fill the gap. We cover the out-of-hours you need and we refer them back to you know the next morning."
  },
  {
    id: 5,
    title: "Free of charge",
    content: "Can't make it more simple. Our services are free-of-charge."
  }
];

export default function PartnerBenefits() {
  return (
    <section className="relative w-full bg-white dark:bg-slate-950">
      
      {/* Background Image Header */}
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative">
        <img 
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1600" 
          alt="Veterinary Team" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for contrast if needed */}
        <div className="absolute inset-0 bg-slate-900/10"></div>
      </div>
      
      {/* Floating Content Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24 sm:-mt-40 lg:-mt-56 z-10 pb-20 lg:pb-16 lg:pb-32">
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 lg:p-20 shadow-2xl border border-slate-100 dark:border-slate-800 rounded-sm">
          
          <div className="max-w-4xl mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Let's team up to serve your clients more efficiently
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-[15px] sm:text-[16px] leading-[1.8]">
              Veterinary Care is a 24/7 commitment towards your clients and YourHomeVet would be happy to help you with this task. When you are closed, YourHomeVet can assist you with an out-of-hours service tailored to your needs.
            </p>
          </div>
          
          {/* Benefits Grid - Carousel on mobile */}
          <div className="flex flex-nowrap lg:grid lg:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-12 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 sm:px-6 lg:mx-0 lg:px-0 lg:pb-0">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-start gap-5 min-w-[280px] sm:min-w-[350px] lg:min-w-0 shrink-0 snap-start lg:snap-align-none">
                
                {/* Number Badge */}
                <div className="w-10 h-10 shrink-0 rounded-full border border-slate-300 dark:border-slate-700 bg-transparent flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-sm">
                  {benefit.id}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-[14px] leading-[1.75]">
                    {benefit.content}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}
