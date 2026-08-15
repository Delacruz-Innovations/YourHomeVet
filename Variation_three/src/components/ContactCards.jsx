import React from 'react';
import { motion } from 'framer-motion';

export default function ContactCards() {
  return (
    <section className="py-12 -mt-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center text-center h-full min-h-[200px]"
          >
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              At Home Vets - Your Questions Answered?<br/>
              Simply drop us an email or share your phone number, and we'll get back to you promptly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center text-center h-full min-h-[200px]"
          >
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              For any enquiries or to book a home visit service, please contact us at <a href="mailto:contact@homevetsdubai.com" className="text-[#F2306D] font-medium hover:underline">contact@homevetsdubai.com</a>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#signup"
            className="bg-white hover:bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-bold text-sm px-8 py-2.5 rounded-full shadow-sm transition-colors"
          >
            Sign up
          </a>
          <a
            href="#signin"
            className="bg-[#F2306D] hover:bg-[#D9265F] text-white font-bold text-sm px-8 py-2.5 rounded-full shadow-sm transition-colors"
          >
            Sign in
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
