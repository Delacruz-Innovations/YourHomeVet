import React, { useState } from 'react';
import { PawPrint, Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { question: 'What if my pet requires continuous monitoring?', answer: 'We will coordinate with the nearest 24/7 veterinary hospital to safely transfer your pet and ensure they receive the continuous monitoring they need.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit and debit cards, as well as direct bank transfers for immediate care cases.' },
    { question: 'How long will the vet stay with my pet?', answer: 'The vet will stay as long as necessary to stabilize and treat your pet. Typically, a consultation lasts around 30 to 45 minutes.' },
    { question: 'Do you offer follow-up visits after treatment?', answer: 'Yes, we can arrange follow-up visits to ensure your pet is recovering smoothly.' },
    { question: 'What if my pet needs to go to a clinic?', answer: 'We work closely with several partner practices and will arrange safe transport and handover if clinic facilities are required.' },
    { question: 'What type of pets do you treat at home?', answer: 'We primarily treat dogs and cats, but our team also includes specialists for common exotic pets like rabbits and birds.' },
    { question: 'What areas do you cover?', answer: 'We currently cover all areas of Dubai and surrounding regions in the UAE. Please refer to our coverage map.' },
    { question: 'How do I get a pet insurance claim?', answer: 'We will provide all necessary medical notes and invoices directly to you or your insurance provider to expedite the claim process.' },
    { question: 'Is the home visit fee included in the treatment cost?', answer: 'The home visit incurs a standard call-out fee. All treatment and medication costs are discussed transparently before administration.' },
    { question: 'Do you work with pet insurance companies?', answer: 'Yes, we work with most major UAE pet insurance providers.' },
    { question: 'Can I choose a specific vet to visit my pet?', answer: 'While we try to accommodate requests, we prioritize dispatching the nearest available emergency vet to ensure rapid response.' },
    { question: 'What should I do before the vet arrives?', answer: 'Keep your pet calm and still in a quiet room. Do not attempt to feed them or administer human medication.' }
  ];

  return (
    <section id="faq" className="relative py-12 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      
      {/* Decorative Paw Prints */}
      <PawPrint size={140} className="absolute left-[3%] top-[20%] text-[#9cbc65] opacity-[0.04] dark:opacity-5 -rotate-12 pointer-events-none" />
      <PawPrint size={140} className="absolute right-[3%] bottom-[20%] text-[#9cbc65] opacity-[0.04] dark:opacity-5 rotate-12 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <span className="text-[#9cbc65] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
          Frequently Asked Questions
        </span>
        <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-6">
          Do you have additional questions?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-[15px] mb-14 leading-[1.7] max-w-lg mx-auto">
          We've shared some of our most frequently asked questions, if you can't find an answer to your question please contact us!
        </p>

        {/* Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-sm bg-white dark:bg-slate-900 transition-colors">
              <button 
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-start justify-between font-bold text-[13px] text-slate-800 dark:text-slate-100 gap-4"
              >
                <span className="text-left">{faq.question}</span>
                {open === idx ? <Minus size={16} className="text-slate-400 shrink-0 mt-0.5" /> : <Plus size={16} className="text-slate-400 shrink-0 mt-0.5" />}
              </button>
              
              {open === idx && (
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-[13px] leading-[1.7]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
