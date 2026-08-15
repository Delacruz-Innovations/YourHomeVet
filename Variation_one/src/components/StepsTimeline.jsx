import React from 'react';
import { Clock, PawPrint } from 'lucide-react';

export default function StepsTimeline() {
  const steps = [
    {
      num: '01',
      title: 'The Phone Triage',
      desc: 'When you call +971 50 550 3777, a registered nurse will ask a few simple questions to understand your pet\'s condition. We\'ll give you advice and, if needed, arrange for a vet to visit you at home.',
      time: 'Usually in 15 mins',
      img: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&q=80&w=800',
      bgClass: 'bg-[#eef5fd] dark:bg-blue-900/10',
      numColor: 'text-[#5b8cce]',
      pawColor: 'text-[#5b8cce]',
      imageLeft: true
    },
    {
      num: '02',
      title: 'The Short Visit',
      desc: 'One of our vets will arrive promptly, examine your pet in the comfort of your home and, if we can, provide treatment there and then. If further care is needed, we\'ll guide you to the best next steps.',
      time: 'Usually in 1 hour',
      img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800',
      bgClass: 'bg-[#f7faf3] dark:bg-[#9cbc65]/10',
      numColor: 'text-[#9cbc65]',
      pawColor: 'text-[#9cbc65]',
      imageLeft: false
    },
    {
      num: '03',
      title: 'The Emergency Consultation',
      desc: 'Our vet will perform a full consultation, carry out any necessary diagnostics and provide treatment. We\'ll explain everything clearly and answer your questions.',
      time: 'Usually in 1 hour',
      img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
      bgClass: 'bg-[#fdf0f5] dark:bg-[#ec558b]/10',
      numColor: 'text-[#ec558b]',
      pawColor: 'text-[#ec558b]',
      imageLeft: true
    },
    {
      num: '04',
      title: 'The Consultation Report',
      desc: 'You\'ll receive a detailed report of the consultation, treatment and any medication given. We\'ll also share advice for ongoing care and follow-up if required.',
      time: 'Usually in 1 hour',
      img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
      bgClass: 'bg-[#eef5fd] dark:bg-blue-900/10',
      numColor: 'text-[#5b8cce]',
      pawColor: 'text-[#5b8cce]',
      imageLeft: false
    },
    {
      num: '05',
      title: 'The Continuity of Care',
      desc: 'We don\'t just treat and leave. We\'re here for ongoing support and advice to help your pet recover and stay well. Your pet\'s wellbeing doesn\'t stop when we leave.',
      time: 'Usually in 1 hour',
      img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
      bgClass: 'bg-[#fdf0f5] dark:bg-[#ec558b]/10',
      numColor: 'text-[#ec558b]',
      pawColor: 'text-[#ec558b]',
      imageLeft: true
    }
  ];

  return (
    <section className="w-full flex flex-col">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col lg:flex-row w-full lg:max-h-[400px]">
          
          {/* Image Block */}
          <div className={`w-full lg:w-[35%] h-[250px] lg:h-auto shrink-0 ${!step.imageLeft ? 'lg:order-2' : ''}`}>
            <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
          </div>

          {/* Text Block */}
          <div className={`w-full lg:w-[65%] flex items-center justify-center p-8 lg:py-12 lg:px-24 relative overflow-hidden ${step.bgClass}`}>
            
            {/* Background Paw Print */}
            <PawPrint size={100} className={`absolute bottom-[10%] ${step.imageLeft ? 'right-[10%]' : 'left-[10%]'} ${step.pawColor} opacity-10 dark:opacity-10 rotate-12 pointer-events-none`} />

            <div className="max-w-2xl w-full relative z-10">
              <span className={`${step.numColor} font-serif text-2xl lg:text-3xl block mb-3`}>
                {step.num}
              </span>
              <h3 className="text-[24px] lg:text-[28px] font-serif text-slate-800 dark:text-slate-100 leading-tight mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-[14px] mb-8 leading-[1.6] max-w-xl">
                {step.desc}
              </p>
              
              <div className="flex items-center gap-6">
                <a href="#find-out" className="px-7 py-3 rounded-sm bg-slate-950 dark:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wide hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors">
                  Find Out
                </a>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs font-medium">
                  <Clock size={15} className="mr-2 opacity-70" />
                  {step.time}
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}
