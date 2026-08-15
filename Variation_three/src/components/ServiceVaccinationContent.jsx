import React from 'react';
import { motion } from 'framer-motion';
import { Syringe, ShieldCheck, CheckCircle2, Clock, MapPin, Heart } from 'lucide-react';
import ServiceSidebar from './ServiceSidebar';
import ServiceBookingCard from './ServiceBookingCard';

export default function ServiceVaccinationContent() {
  return (
    <section className="py-12 -mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full md:w-1/3 lg:w-1/4"
          >
            <ServiceSidebar />
          </motion.div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 dark:border-slate-800"
            >
              
              <div className="space-y-10">
                {/* Intro Section */}
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="mt-1">
                      <Syringe size={20} className="text-[#F2306D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        Essential Protection, Stress-Free Delivery
                      </h3>
                      <p>
                        Vaccinations are crucial for protecting your pet from contagious and potentially fatal diseases. At Yourhomevet, we believe getting these vital shots shouldn't be a stressful ordeal. We provide complete vaccination protocols for dogs and cats right in your Dubai home.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* Why it Matters Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        Why Vaccinate at Home?
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Eliminates exposure to sick animals in waiting rooms
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Keeps puppies and kittens safe before full immunity
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Dramatically reduces anxiety and fear
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Customized schedules based on your pet's exact lifestyle
                      </li>
                    </ul>
                  </div>

                  {/* What's Included Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Syringe size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        What We Provide
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Core vaccines for Dogs (DHPPI, Rabies, Lepto)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Core vaccines for Cats (Tricat, Rabies)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Kennel Cough vaccines
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Official Dubai Municipality registration
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Updated vaccination booklets
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* When to Call */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        When to Vaccinate?
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Puppies and kittens need a series of shots starting at 6-8 weeks. Adult pets require annual boosters to maintain immunity.
                    </p>
                  </div>

                  {/* Travel Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        Planning to Travel?
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Rabies vaccinations and specific health certificates are strictly required for pet export and boarding. We handle all documentation.
                    </p>
                  </div>
                  
                  {/* Be Proactive Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Heart size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        Herd Immunity.
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      By vaccinating your pet, you not only protect them but also help prevent the spread of diseases within the Dubai pet community.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Card */}
              <ServiceBookingCard title="vaccination" />

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
