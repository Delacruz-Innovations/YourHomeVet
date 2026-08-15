import React from 'react';
import { Phone, Stethoscope, Home, PawPrint } from 'lucide-react'; 

export default function About() {
  const values = [
    {
      icon: <Phone size={24} className="text-[#5b8cce] dark:text-blue-400" />,
      bg: 'bg-[#eef5fd] dark:bg-blue-900/20',
      title: 'Call us, we are available 24/7',
      desc: 'If you are experiencing a pet emergency, please call us immediately. You will be directly in contact with our Registered Veterinary Nurses.',
    },
    {
      icon: <Stethoscope size={24} className="text-[#9cbc65]" />,
      bg: 'bg-[#f7faf3] dark:bg-[#9cbc65]/10',
      title: 'We will advise you',
      desc: 'We will assist you over the phone, ask you relevant questions and advise you about the necessity for an immediate emergency consultation.',
    },
    {
      icon: <Home size={24} className="text-[#ec558b]" />,
      bg: 'bg-[#fdf0f5] dark:bg-[#ec558b]/10',
      title: 'A Veterinary Surgeon to your home',
      desc: 'If our Registered Veterinary Nurse feels that care is urgently needed, she will organise for a Veterinary Surgeon to get to your home as quickly as possible.',
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#f9f9fa] dark:bg-slate-950 py-16 md:py-12 lg:py-24 lg:py-16 lg:py-32 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Paw Prints */}
      <PawPrint size={140} className="absolute left-[-3%] top-1/2 -translate-y-1/2 text-[#9cbc65] opacity-[0.04] dark:opacity-5 -rotate-12 pointer-events-none" />
      <PawPrint size={140} className="absolute right-[-3%] top-[60%] text-[#9cbc65] opacity-[0.04] dark:opacity-5 rotate-12 pointer-events-none" />
      
      {/* Dashed Heart Decorative Graphic */}
      <div className="absolute top-10 right-[15%] opacity-30 dark:opacity-20 pointer-events-none hidden lg:block -rotate-6">
         <svg width="250" height="350" viewBox="0 0 200 300" fill="none" stroke="#ec558b" strokeWidth="1.5" strokeDasharray="6 6">
            <path d="M100 80 C 100 30, 30 30, 50 90 C 70 150, 100 160, 100 160 C 100 160, 130 150, 150 90 C 170 30, 100 30, 100 80 Z" />
            <path d="M100 160 C 100 240, 160 250, 170 200 C 180 150, 120 180, 130 250 C 140 320, 200 280, 190 220" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 about-text-container">
          <span className="text-[#9cbc65] font-bold text-[11px] tracking-[0.2em] uppercase mb-5 block">
            YourHomeVet Values
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif text-slate-800 dark:text-slate-100 leading-[1.15] mb-8">
                A team of highly qualified pet-loving veterinary surgeons providing 24/7 emergency care
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-[15px] max-w-lg leading-[1.7]">
                From the most efficient phone triage to technical medical care – all in the stress-free comfort of your home or our Dubai veterinary clinic.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid - stacked on mobile, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 about-cards-container">
          {values.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start text-left bg-white md:bg-transparent dark:bg-slate-900 md:dark:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-slate-100 md:border-transparent dark:border-slate-800">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="text-[17px] font-bold text-slate-800 dark:text-slate-100 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-[14px] leading-[1.7]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
