import React from 'react';
import SEO from './SEO';
import { motion } from 'framer-motion';
import { PawPrint, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';

export default function EmergenciesPage() {
  return (
    <>
      <SEO 
        title="Emergency Vets" 
        description="24/7 emergency veterinary services in Dubai. Immediate home-visit care for your pet's urgent health needs." 
        canonical="https://homevetsdubai.com/emergencies"
      />
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-40 bg-[#a4d4c8] flex flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <PawPrint size={64} className="mb-4 text-[#F2306D]" fill="currentColor" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-sm">
            Emergencies
          </h1>
          <p className="text-lg font-medium text-white/90">
            Dr. Cesar Moreno
          </p>
        </motion.div>
      </section>

      {/* Content Section (Overlapping Card) */}
      <section className="relative z-10 -mt-24 pb-12 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-10 md:p-14 shadow-lg border border-slate-100 dark:border-slate-800"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 dark:text-white mb-6">
              Veteris Emergency phone
            </h2>
            <div className="space-y-2 text-lg text-slate-500 dark:text-slate-400">
              <p>+44 20 4579 3880</p>
              <p><a href="https://www.veteris.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2306D] transition-colors">www.veteris.co.uk</a></p>
            </div>
          </motion.div>

          {/* Back link */}
          <div className="mt-12 flex items-center gap-2 border-t border-slate-200 dark:border-slate-800 pt-8">
            <ArrowLeft size={16} className="text-slate-400" />
            <Link to="/resources/pet-sitting" className="text-sm font-medium text-slate-400 hover:text-[#F2306D] transition-colors uppercase tracking-wide">
              Pet sitting services
            </Link>
          </div>
          
        </div>
      </section>

      {/* Shared Sections */}
      <Reviews />
      <ResourcesVideo />
    </>
  );
}
