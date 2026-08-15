import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, ClipboardList, Clock, CalendarHeart, CheckCircle2 } from 'lucide-react';
import ServiceSidebar from './ServiceSidebar';
import ServiceBookingCard from './ServiceBookingCard';

export default function ServiceDetailsContent() {
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
                      <Heart size={20} className="text-[#F2306D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        Give your pet the gift of good health—every year.
                      </h3>
                      <p>
                        Annual checkups are one of the best ways to keep your pet healthy throughout every stage of life. Our vets perform a thorough head-to-tail exam, update vaccines, and run recommended tests based on your pet's age, lifestyle, and health history.
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
                        Why Annual Checkups Matter
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Detect health issues early—when treatment works best
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Keep vaccines and preventive care up to date
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Build a health baseline to track changes over time
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Give you peace of mind knowing your pet is in great shape
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
                        What's Included in an Annual Checkup?
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Physical exam (heart, lungs, skin, ears, eyes, weight)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Vaccination review and updates
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Parasite prevention check
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Nutritional & lifestyle assessment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Lab tests (blood, stool, urine) as needed
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Personalized health recommendations
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* How Often Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        How Often Should My Pet Have a Checkup?
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      We recommend once a year for healthy adult pets. Puppies, kittens, and senior pets may need more frequent visits.
                    </p>
                  </div>

                  {/* Senior Pets Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <CalendarHeart size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        For Senior Pets
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Pets age faster than we do. Yearly (or twice-yearly) checkups help us stay ahead of age-related conditions and keep them comfortable.
                    </p>
                  </div>
                  
                  {/* Be Proactive Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Heart size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        Be Proactive. Be Present.
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Your pet can't tell you when something's wrong. Annual checkups give them a voice—and you the confidence that you're doing everything you can.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Card */}
              <ServiceBookingCard title="annual checkup" />

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
