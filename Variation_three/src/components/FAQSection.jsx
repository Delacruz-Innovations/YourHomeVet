import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does an in-home veterinary appointment work?",
      answer: "Our licensed veterinary surgeon and nurse arrive at your doorstep in a fully equipped mobile unit. We conduct thorough examinations, treatments, vaccines, and diagnostic tests right in the comfort of your living room, keeping your pet calm and stress-free."
    },
    {
      question: "What areas and hours do you cover?",
      answer: "We offer comprehensive 24/7 coverage across London and surrounding areas. For routine consultations and check-ups, appointments are available 7 days a week from 8am to 8pm, with our 24/7 rapid emergency dispatch on call around the clock."
    },
    {
      question: "Can you perform blood tests and ultrasounds at home?",
      answer: "Yes! Our mobile units are equipped with point-of-care lab analyzers, digital ultrasound, blood pressure monitors, and microchip scanners, providing real-time results during your appointment."
    },
    {
      question: "What happens if my pet needs major surgery or hospitalization?",
      answer: "While we perform minor and soft tissue surgeries at home, if advanced surgical intervention or intensive hospitalization is required, our private pet ambulance transports your pet directly to our partner state-of-the-art veterinary surgical hospital."
    },
    {
      question: "Do you accept pet insurance?",
      answer: "Yes, we work with all major pet insurance providers. We provide comprehensive digital itemized invoices and medical notes, and can file direct claims on your behalf."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#FFF0F5]/50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-[#F2306D] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base max-w-xl mx-auto">
            Everything you need to know about our home visits, emergency services, and compassionate pet healthcare.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base sm:text-lg text-slate-800 dark:text-slate-100 gap-4"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${
                    isOpen ? 'bg-[#F2306D] text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    <ChevronDown size={18} strokeWidth={2.2} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
