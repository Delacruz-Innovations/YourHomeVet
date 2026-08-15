import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldAlert, CheckCircle2, Clock, Truck, ShieldCheck, Ambulance, ClipboardList, Stethoscope, CalendarHeart } from 'lucide-react';
import ServiceSidebar from './ServiceSidebar';
import ServiceBookingCard from './ServiceBookingCard';

export default function ServiceAmbulanceContent() {
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
                      <Ambulance size={20} className="text-[#F2306D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        Rapid Response When Every Second Counts
                      </h3>
                      <p>
                        Emergencies don't wait for appointments. Our fully equipped pet ambulance brings life-saving veterinary care directly to your doorstep in Dubai, ensuring your pet receives immediate stabilization and safe transport when they need it most.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* Why it Matters Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Stethoscope size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        Why an Ambulance Matters
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Immediate stabilization at your home
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Safe, monitored transport to our clinic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Reduces stress for injured or panicked pets
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Equipped with oxygen and emergency medication
                      </li>
                    </ul>
                  </div>

                  {/* What's Included Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <ClipboardList size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        What's Included?
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Dispatch of a trained veterinary nurse
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        On-site primary assessment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Pain management and fluid therapy setup
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Stretcher and safe handling equipment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Direct communication with the receiving vet
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
                        When to Call the Ambulance?
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Call immediately for severe trauma, difficulty breathing, seizures, suspected poisoning, or collapse.
                    </p>
                  </div>

                  {/* Senior/Immobile Pets Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <CalendarHeart size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        For Immobile Pets
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Our ambulance isn't just for emergencies. We safely transport large, senior, or disabled pets who cannot travel in a standard car.
                    </p>
                  </div>
                  
                  {/* Be Proactive Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Heart size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        We're Here For You.
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Keep our number saved. In a crisis, you shouldn't have to worry about how to get your pet safely to the vet.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Card */}
              <ServiceBookingCard title="emergency care" />

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
