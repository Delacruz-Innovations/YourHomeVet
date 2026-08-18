import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'At-Home Checkups',
    desc: 'From playful puppies and kittens to gentle seniors, complete head-to-tail exams performed right in the comfort of your living room. We ensure your pet feels safe and relaxed.',
    link: '/services/check-ups'
  },
  {
    title: 'Vaccinations & Boosters',
    desc: 'Protect your dogs and cats from common infectious illnesses. We provide customized vaccination schedules and administer boosters without the stress of a clinic visit.',
    link: '/services/vaccination'
  },
  {
    title: '24/7 Emergencies',
    desc: 'Round-the-clock emergency veterinary care because pet emergencies don\'t wait. Rapid response diagnostics and stabilization in your home.',
    link: '/services/24-7-availability'
  },
  {
    title: 'Diagnostic Blood Tests',
    desc: 'In-home lab testing with rapid results to detect issues early and monitor pet health, from routine blood work to specialized diagnostics.',
    link: '/services/blood-tests'
  },
  {
    title: 'Soft Tissue Surgery',
    desc: 'Minor and soft-tissue procedures performed with the highest anesthetic safety standards, ensuring a smooth recovery process.',
    link: '/services/soft-tissue-surgery'
  },
  {
    title: 'Orthopedic Surgery',
    desc: 'Specialized bone, tendon, and joint evaluations to restore pain-free mobility for pets suffering from injuries or chronic conditions.',
    link: '/services/orthopedic-surgery'
  }
];

const tags = [
  'Vaccinations', 'Annual exams', 'Emergencies', 'Blood tests', 'Microchipping', 
  'Pet passports', 'Parasite control', 'Hospice care', '+12 more'
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-[#f2ebff] via-[#e2e1ff] to-[#e4f3ff] dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Info */}
          <div className="lg:w-1/4 flex flex-col items-start lg:sticky lg:top-32 h-fit">
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-800 dark:text-white mb-1">
              Our Services
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400 font-sans mb-8">
              (02-08)
            </span>
            
            <Link 
              to="/24-7-emergency-care-at-your-door"
              className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 rounded-full pr-6 pl-1.5 py-1.5 shadow-md hover:shadow-lg transition-shadow border border-slate-200/60 dark:border-slate-700 font-sans group"
            >
              <div className="w-8 h-8 rounded-full bg-[#CEE054] flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-white">View All Services</span>
            </Link>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-3/4 flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-sans font-medium text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-10 max-w-3xl">
              Find the right kind of care for whatever your pet is facing
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-20 max-w-3xl">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-[15px] font-sans shadow-sm border border-white/20 dark:border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Accordion List */}
            <div className="flex flex-col w-full font-sans">
              {services.map((service, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <div 
                    key={index}
                    className="border-t border-slate-300/60 dark:border-slate-700/60 py-6 sm:py-8 cursor-pointer group"
                    onClick={() => setExpandedIndex(index)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                      
                      {/* Title */}
                      <div className="sm:w-1/3">
                        <h4 className={`text-2xl sm:text-3xl font-medium transition-colors ${isExpanded ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300'}`}>
                          {service.title}
                        </h4>
                      </div>

                      {/* Description (Expandable) */}
                      <div className="sm:w-1/2 flex items-start justify-between sm:justify-start gap-4">
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-[17px] leading-relaxed pr-4 pb-4">
                                {service.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Arrow Button */}
                      <div className="shrink-0 self-end sm:self-start mt-2 sm:mt-0">
                        <Link 
                          to={service.link}
                          className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors hover:scale-105"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={18} strokeWidth={2} />
                        </Link>
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
