import React from 'react';
import { motion } from 'framer-motion';
import { TestTube, ShieldCheck, CheckCircle2, Clock, CheckSquare, Heart } from 'lucide-react';
import ServiceSidebar from './ServiceSidebar';
import ServiceBookingCard from './ServiceBookingCard';

export default function ServiceBloodTestsContent() {
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
                      <TestTube size={20} className="text-[#F2306D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        Accurate Diagnostics with Convenient Mobile Sampling
                      </h3>
                      <p>
                        Blood tests are vital tools for understanding your pet's health beneath the surface. Yourhomevet brings comprehensive blood testing services to your home in Dubai, offering quick, reliable diagnostics that guide effective treatment plans without the stress of clinic visits.
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
                        Why Blood Tests Matter
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Early disease detection before symptoms show
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Monitoring chronic conditions safely at home
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Pre-surgical safety assessments
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Evaluating medication side effects over time
                      </li>
                    </ul>
                  </div>

                  {/* What's Included Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <TestTube size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        Common Lab Tests
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Complete Blood Count (CBC)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Biochemistry profiles (Liver & Kidney function)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Thyroid and hormonal testing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Rabies Titre tests (for international travel)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        Infectious disease screening (e.g., FIV/FeLV)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* How it works Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        Gentle Sampling
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Our experienced veterinary nurses safely collect blood samples from your pet at home, using gentle techniques tailored to minimize discomfort.
                    </p>
                  </div>

                  {/* Results Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <CheckSquare size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        Rapid Results
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Samples are promptly processed in our partnered diagnostic laboratories. We call you directly to discuss the results as soon as they are ready.
                    </p>
                  </div>
                  
                  {/* Be Proactive Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center shrink-0">
                        <Heart size={20} className="text-[#F2306D]" />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
                        No More Clinic Fear.
                      </h3>
                    </div>
                    <p className="pl-[3.5rem] text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Taking blood can be scary for pets. Being in their own living room significantly lowers their heart rate and anxiety during the process.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Card */}
              <ServiceBookingCard title="blood test" />

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
