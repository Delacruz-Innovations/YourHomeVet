import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint, Calendar, HeartPulse } from 'lucide-react';
import heroCat from '../assets/cat_play.png';
import emergencyDog from '../assets/emergency_dog.png';

const steps = [
  {
    num: '01',
    icon: <PawPrint size={32} className="text-[#F2306D]" />,
    title: 'Register Details',
    desc: 'Fill out a simple form to register your pet with our veterinary service.',
    bg: 'bg-white'
  },
  {
    num: '02',
    icon: <Calendar size={32} className="text-white" />,
    title: 'Schedule a Visit',
    desc: 'Choose a convenient time for our mobile vet to visit your home.',
    bg: 'bg-[#2b3541]'
  },
  {
    num: '03',
    icon: <HeartPulse size={32} className="text-white" />,
    title: 'The Assessment',
    desc: 'Our expert vets will perform a thorough assessment in the comfort of your home.',
    bg: 'bg-[#F2306D]'
  }
];

export default function Steps() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-[#F2306D] font-bold text-[11px] tracking-widest uppercase mb-4 block">
            OUR PLAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
            3 easy steps to make your <span className="text-[#F2306D]">pet healthy</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Dashed line connecting steps (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px border-t-2 border-dashed border-slate-300 dark:border-slate-700 z-0">
            {/* SVG curvy line approximation as shown in image */}
            <svg className="absolute w-full h-[100px] -top-[50px] text-slate-300 dark:text-slate-700" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
               <path d="M 0,50 Q 25,0 50,50 T 100,50" />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl font-black text-slate-100 dark:text-slate-800 -z-10 tracking-tighter">
                    {step.num}
                  </span>
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-900 ${step.bg}`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-[250px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 text-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F2306D] hover:bg-[#D9265F] text-white text-[13px] font-bold tracking-wide transition-colors shadow-md"
          >
            Book an Appointment
          </a>
        </div>

      </div>

      {/* Decorative pet images (bottom corners) */}
      <div className="absolute left-[-2%] bottom-[-5%] w-48 lg:w-64 opacity-80 pointer-events-none z-0">
         <img src={emergencyDog} alt="Dog" className="w-full h-auto object-contain transform -scale-x-100" />
      </div>
      <div className="absolute right-[-2%] bottom-[-5%] w-32 lg:w-48 opacity-80 pointer-events-none z-0">
         <img src={heroCat} alt="Cat" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
}
