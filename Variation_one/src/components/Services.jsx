import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Syringe, ShieldAlert, FlaskConical, Heart, Apple, Activity } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Stethoscope size={28} className="text-pink-500" />,
      title: 'Wellness & Check-ups',
      desc: 'Routine exams, health screenings, and preventative care plans to keep your pet thriving.',
      bg: 'bg-pink-50 dark:bg-pink-950/20',
      border: 'border-pink-100 dark:border-pink-950/30',
    },
    {
      icon: <Syringe size={28} className="text-emerald-500" />,
      title: 'Vaccinations',
      desc: 'Core and non-core vaccines tailored to your pet’s specific lifestyle and risk factors.',
      bg: 'bg-emerald-50 dark:bg-emerald-950/20',
      border: 'border-emerald-100 dark:border-emerald-950/30',
    },
    {
      icon: <ShieldAlert size={28} className="text-rose-500" />,
      title: 'Emergency Care',
      desc: 'Rapid diagnostic assessment, wound treatment, and pain management for urgent pet crises.',
      bg: 'bg-rose-50 dark:bg-rose-950/20',
      border: 'border-rose-100 dark:border-rose-950/30',
    },
    {
      icon: <FlaskConical size={28} className="text-sky-500" />,
      title: 'Diagnostics & Lab Tests',
      desc: 'Blood tests, urinalysis, and rapid diagnostics performed inside the comfort of your home.',
      bg: 'bg-sky-50 dark:bg-sky-950/20',
      border: 'border-sky-100 dark:border-sky-950/30',
    },
    {
      icon: <Activity size={28} className="text-purple-500" />,
      title: 'Wound Care & Treatment',
      desc: 'Suturing, bandage changes, wound cleaning, and customized medication schedules.',
      bg: 'bg-purple-50 dark:bg-purple-950/20',
      border: 'border-purple-100 dark:border-purple-950/30',
    },
    {
      icon: <Heart size={28} className="text-amber-500" />,
      title: 'Senior Pet Care',
      desc: 'Geriatric management plans focusing on joint health, comfort, and cognitive support.',
      bg: 'bg-amber-50 dark:bg-amber-950/20',
      border: 'border-amber-100 dark:border-amber-950/30',
    },
    {
      icon: <Apple size={28} className="text-teal-500" />,
      title: 'Nutritional Advice',
      desc: 'Diet plans, weight management, and specialty food advice optimized for your pet’s health.',
      bg: 'bg-teal-50 dark:bg-teal-950/20',
      border: 'border-teal-100 dark:border-teal-950/30',
    },
  ];

  return (
    <section id="services" className="py-8 md:py-12 lg:py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 lg:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Professional Veterinary Services <br className="hidden sm:inline" />
            brought directly to your home
          </h2>
          <div className="h-1 w-20 bg-rose-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            From preventive check-ups to comprehensive medical care, we provide a complete suite of services designed for your convenience.
          </p>
        </div>

        {/* Services Grid - Carousel on mobile */}
        <div className="flex flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 services-grid-container overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border ${svc.border} shadow-xl shadow-slate-100/50 dark:shadow-none text-left flex flex-col justify-between h-full min-w-[260px] shrink-0 snap-start sm:snap-align-none`}
            >
              <div className="space-y-4">
                <div className={`p-4 rounded-2xl w-14 h-14 flex items-center justify-center ${svc.bg}`}>
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
