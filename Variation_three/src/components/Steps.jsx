import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint, Calendar, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';
import heroCat from '../assets/cat_play.png';
import emergencyDog from '../assets/emergency_dog.png';

const steps = [
  {
    num: '01',
    icon: <PawPrint size={28} className="text-white" />,
    title: 'Register Your Pet',
    desc: 'Share a few quick details about your dog or cat and health requirements online.',
    bg: 'bg-gradient-to-br from-[#58B66E] to-[#479e5b]'
  },
  {
    num: '02',
    icon: <Calendar size={28} className="text-white" />,
    title: 'Schedule In-Home Visit',
    desc: 'Select a time that suits your family schedule. Same-day & 24/7 slots available.',
    bg: 'bg-gradient-to-br from-[#4FA3DE] to-[#3988c2]'
  },
  {
    num: '03',
    icon: <HeartPulse size={28} className="text-white" />,
    title: 'Stress-Free Care',
    desc: 'Our veterinarian arrives at your doorstep for gentle, comprehensive medical care.',
    bg: 'bg-gradient-to-br from-[#FA4D80] to-[#e63c6f]'
  }
];

export default function Steps() {
  return (
    <section className="py-10 bg-white dark:bg-slate-900 overflow-hidden relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F7EC] dark:bg-slate-800 text-[#58B66E] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles size={14} />
            <span>SIMPLE & SEAMLESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            3 simple steps to <span className="text-[#FA4D80]">healthy, happy pets</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Booking home veterinary appointments has never been easier or more relaxing for your pets.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Dashed line connecting steps (desktop) */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px border-t-2 border-dashed border-slate-200 dark:border-slate-700 z-0" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-5xl font-black text-slate-200/80 dark:text-slate-800 -z-10 tracking-tighter transition-transform group-hover:scale-110">
                    {step.num}
                  </span>
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-800 ${step.bg} transform group-hover:scale-105 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[260px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            <span>Book Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>

      {/* Decorative pet images (bottom corners) */}
      <div className="absolute left-[-2%] bottom-[-4%] w-44 lg:w-56 opacity-40 pointer-events-none z-0">
         <img src={emergencyDog} alt="Dog" className="w-full h-auto object-contain transform -scale-x-100" />
      </div>
      <div className="absolute right-[-2%] bottom-[-4%] w-32 lg:w-44 opacity-40 pointer-events-none z-0">
         <img src={heroCat} alt="Cat" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
}
