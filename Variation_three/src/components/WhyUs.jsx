import React from 'react';
import { motion } from 'framer-motion';
import emergencyDog from '../assets/emergency_dog.png';
import { Stethoscope, Syringe, HeartHandshake, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: <Stethoscope className="text-[#F2306D]" size={24} />,
    title: 'Consultations',
    desc: 'Our expert vets diagnose and treat your pet at home.'
  },
  {
    icon: <Syringe className="text-[#F2306D]" size={24} />,
    title: 'Vaccinations',
    desc: 'Protect your pet with our home vaccination service.'
  },
  {
    icon: <HeartHandshake className="text-[#F2306D]" size={24} />,
    title: 'Euthanasia',
    desc: 'Saying goodbye is hard. We make it peaceful at home.'
  },
  {
    icon: <ShieldCheck className="text-[#F2306D]" size={24} />,
    title: 'Health Checks',
    desc: 'Routine checks to ensure your pet is healthy.'
  }
];

export default function WhyUs() {
  return (
    <section id="about" className="py-4 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F2306D] font-bold text-[11px] tracking-widest uppercase mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
            Independent since 2002, YourHomeVet delivers premium, personalised veterinary care designed around you and your pet—right in the comfort of your home.
          </h2>
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
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100">
              <img 
                src={emergencyDog} 
                alt="Veterinary consultation at home" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-[#F2306D]/10 -z-10 hidden sm:block"></div>
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
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFF0F5] dark:bg-slate-900 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
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
