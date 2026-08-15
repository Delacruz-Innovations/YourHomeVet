import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Syringe, Bug, Scissors, Clock, Truck, Bone, TestTube
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import ResourcesVideo from './ResourcesVideo';
import heroBg from '../assets/v3_hero_bg.png'; // Will use generic hero for now

const services = [
  { title: 'Ambulance', icon: Truck },
  { title: '24/7 Availability', icon: Clock },
  { title: 'Annual Checkups', icon: Stethoscope },
  { title: 'Vaccination', icon: Syringe },
  { title: 'Deworming', icon: Bug },
  { title: 'Soft Tissue Surgery', icon: Scissors },
  { title: 'Orthopedic Surgery', icon: Bone },
  { title: 'Blood Tests', icon: TestTube },
];

export default function ServicesListPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[350px] bg-slate-100 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.8)' }}
        />
        <div className="absolute inset-0 bg-[#F2306D]/40 mix-blend-multiply" />
        
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-md"
          >
            Services
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FFF0F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 pt-10 shadow-sm border border-slate-100 dark:border-slate-800"
              >
                {/* Overlapping Icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#F2306D] rounded-full flex items-center justify-center text-white shadow-md border-4 border-[#FFF0F5]">
                  <service.icon size={20} />
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 mt-2">
                  {service.title}
                </h3>
                
                <Link 
                  to={
                    service.title === 'Annual Checkups' ? '/services/check-ups' : 
                    service.title === 'Ambulance' ? '/services/ambulance' : 
                    service.title === '24/7 Availability' ? '/services/24-7-availability' : 
                    service.title === 'Vaccination' ? '/services/vaccination' : 
                    service.title === 'Deworming' ? '/services/deworming' : 
                    service.title === 'Soft Tissue Surgery' ? '/services/soft-tissue-surgery' : 
                    service.title === 'Orthopedic Surgery' ? '/services/orthopedic-surgery' : 
                    service.title === 'Blood Tests' ? '/services/blood-tests' : 
                    '#'
                  } 
                  className="text-sm font-medium text-[#F2306D] hover:text-[#D9265F] transition-colors uppercase tracking-wide"
                >
                  Learn more
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Sections */}
      <Reviews />
      <ResourcesVideo />
    </>
  );
}
