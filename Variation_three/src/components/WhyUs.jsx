import React from 'react';
import { motion } from 'framer-motion';
import emergencyDog from '../assets/emergency_dog.png';
import { Stethoscope, Syringe, HeartHandshake, ShieldCheck, PawPrint } from 'lucide-react';

const highlights = [
  {
    icon: <Stethoscope className="text-[#58B66E]" size={24} />,
    bg: 'bg-[#E8F7EC] dark:bg-[#16291b]',
    title: 'Comfortable In-Home Consultations',
    desc: 'Our expert veterinary surgeons diagnose, treat, and care for your pets at home with zero stress.'
  },
  {
    icon: <Syringe className="text-[#FA4D80]" size={24} />,
    bg: 'bg-[#FFF0F5] dark:bg-[#2d141e]',
    title: 'Vaccinations & Preventive Wellness',
    desc: 'Protect your dogs and cats with routine boosters, health screenings, and microchipping.'
  },
  {
    icon: <HeartHandshake className="text-[#4FA3DE]" size={24} />,
    bg: 'bg-[#EBF5FB] dark:bg-[#142433]',
    title: 'Peaceful End-of-Life & Hospice Care',
    desc: 'Saying goodbye is hard. We ensure peaceful, dignified, and loving care in their familiar surroundings.'
  },
  {
    icon: <ShieldCheck className="text-[#58B66E]" size={24} />,
    bg: 'bg-[#E8F7EC] dark:bg-[#16291b]',
    title: '24/7 Rapid Emergency Response',
    desc: 'Round-the-clock home vet dispatch and fully equipped mobile ambulance care whenever you need us.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white dark:bg-slate-900/60 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F7EC] dark:bg-slate-800 text-[#58B66E] text-xs font-bold uppercase tracking-widest mb-4">
            <PawPrint size={14} />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Premium veterinary care designed around you and your pet — <span className="text-[#FA4D80]">right at your doorstep</span>.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto">
            No stressful car rides, no waiting rooms, and no anxious pets. Just personalized, professional medical care where your pets feel most secure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl border-4 border-white dark:border-slate-800">
              <img 
                src={emergencyDog} 
                alt="Veterinary consultation at home" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -inset-4 rounded-[3rem] border-2 border-[#58B66E]/20 -z-10 hidden sm:block"></div>
          </motion.div>

          {/* Right Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAFCF8] dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all hover:scale-[1.01]"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 shadow-sm`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
