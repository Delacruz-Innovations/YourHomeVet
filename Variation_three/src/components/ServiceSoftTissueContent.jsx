import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, ShieldCheck, CheckCircle2, Clock, Bandage, Heart } from 'lucide-react';
import ServiceSidebar from './ServiceSidebar';
import ServiceBookingCard from './ServiceBookingCard';

export default function ServiceSoftTissueContent() {
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
                      <Scissors size={20} className="text-[#F2306D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        Expert Surgical Care Delivered with Compassion
                      </h3>
                      <p>
                        When your pet requires surgical intervention, choosing the right care can make all the difference in their recovery. Yourhomevet specializes in providing expert soft tissue surgery with the option for seamless at-home pre- and post-operative care, ensuring a stress-free experience for both you and your pet.
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
                        Why Choose Our Surgical Team
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Highly experienced surgical veterinarians
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        State-of-the-art partnered surgical facilities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Dedicated anesthetic monitoring for maximum safety
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Personalized at-home recovery management
                      </li>
                    </ul>
                  </div>

                  {/* What's Included Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Scissors size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        Common Procedures
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Spaying and Neutering
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Mass and tumor removals (Biopsies)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Wound and laceration repairs
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Gastrointestinal surgery (Foreign body removal)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Bladder stone removal (Cystotomy)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Pre-Op Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        Pre-Surgical Care
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      We perform all necessary blood tests and health evaluations in your home beforehand to ensure your pet is a safe candidate for anesthesia.
                    </p>
                  </div>

                  {/* Post-Op Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Bandage size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        Recovery at Home
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      We handle post-operative checkups, suture removals, and bandage changes at your house, eliminating the need to move a healing pet.
                    </p>
                  </div>
                  
                  {/* Be Proactive Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Heart size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        Pain Management.
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      We prioritize advanced pain management protocols so your pet remains comfortable during and long after their procedure.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Card */}
              <ServiceBookingCard title="surgical consultation" />

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
