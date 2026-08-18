import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const categories = [
  "EMERGENCY VET SERVICES",
  "YOURHOMEVET SHOREDITCH 24 HOUR ANIMAL HOSPITAL & URGENT CARE",
  "END-OF-LIFE CARE",
  "THE EMERGENCY CONSULTATION",
  "TRIAGE",
  "AFTER THE CONSULTATION"
];

const faqs = [
  { question: "Does my insurance cover the emergency consultation?", answer: "Most pet insurance policies cover emergency consultations, but this depends on your specific coverage and deductible. We provide all necessary documentation for you to submit a claim." },
  { question: "What if my pet requires continuous monitoring?", answer: "If your pet requires continuous monitoring, we will stabilize them at your home and safely transfer them to our 24-hour animal hospital or a partner facility." },
  { question: "Do you cover my area?", answer: "We cover all areas across Dubai. Please check our interactive map or call our dispatch team to confirm coverage for your specific location." },
  { question: "What if my pet needs surgery?", answer: "We perform minor procedures at home when safe to do so. For major surgeries, we will transport your pet to a fully equipped surgical facility." },
  { question: "Do you take Amex?", answer: "Yes, we accept American Express as well as all other major credit and debit cards." },
  { question: "Is it a Vet that comes to the house or a nurse?", answer: "A fully qualified, RCVS-registered veterinary surgeon will attend every emergency call-out." },
  { question: "My insurance asks for a postcode", answer: "Our registered practice postcode will be provided on your itemized invoice for all insurance claim purposes." },
  { question: "Will I receive a a report and an itemised invoice after the consultation?", answer: "Yes, you will receive a comprehensive medical report and an itemized invoice via email within 24 hours of the consultation." },
  { question: "What do I do if haven't received my invoice or my report?", answer: "Please check your spam or junk folder first. If you still cannot find it, contact our support team and we will resend it immediately." },
  { question: "Can I book for a health check and vaccines?", answer: "We specialize in emergency care. For routine health checks and vaccinations, we recommend scheduling an appointment with your primary day practice." },
  { question: "My pet was put to sleep at my home. May I attend the cremation?", answer: "Yes, if you choose individual cremation, arrangements can often be made for you to attend. Please discuss this with our care team." },
  { question: "How long will it take for me to receive my pet's ashes back?", answer: "Typically, ashes are returned within 7 to 14 days, depending on the cremation service selected." },
  { question: "How do I get my pet's ashes back?", answer: "Ashes can be delivered securely to your home or collected from one of our partner practices, depending on your preference." },
  { question: "Does the hospital have disabled access?", answer: "Yes, our Shoreditch 24-hour hospital is fully wheelchair accessible." },
  { question: "How quickly can a veterinary surgeon arrive in an emergency?", answer: "Our average response time is between 45 and 90 minutes, depending on traffic and current emergency caseload." },
  { question: "How much does an emergency vet visit cost?", answer: "The cost depends on the time of day and the treatments required. Our triage team will provide a clear estimate of the call-out fee before dispatching a vet." },
  { question: "What should I do before the vet arrives?", answer: "Keep your pet as calm and still as possible. Do not offer food or water unless instructed, and gather any current medications they are taking." },
  { question: "Are your emergency vet services open on bank holidays?", answer: "Yes, we operate 24/7, 365 days a year, including all bank holidays and weekends." }
];

export default function FaqPageHero() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#e8f4fd] dark:bg-slate-950 transition-colors min-h-screen overflow-hidden">
      
      {/* Background Image for Mobile and Tablet */}
      <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
        <img 
          src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1200" 
          alt="FAQ Support" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/85 to-slate-950/70" />
      </div>

      {/* Soft Ambient Radial Glow Effects for Desktop */}
      <div className="hidden lg:block absolute top-1/4 -left-24 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#dbeefe] opacity-90 blur-3xl pointer-events-none"></div>
      <div className="hidden lg:block absolute top-1/3 -right-24 w-[700px] h-[700px] rounded-full bg-[#e0d4f5] opacity-60 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-700 lg:dark:text-slate-300 mb-4 sm:mb-6 block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-[32px] sm:text-[48px] lg:text-[56px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4 sm:mb-6 tracking-tight max-w-3xl mx-auto">
            We are always happy to help answer any questions you may have!
          </h1>
          <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.75] max-w-xl mx-auto font-normal">
            Below are some of our most frequently asked questions. If your question is not answered below, please contact us and we'll assist you.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="w-full mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-6 py-3 rounded-sm text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-all border ${
                  activeTab === cat
                    ? 'bg-white dark:bg-slate-800 border-white dark:border-slate-800 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-white/40 dark:bg-slate-900/40 border-slate-300/50 dark:border-slate-700 hover:bg-white/70 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Accordion List */}
        <div className="w-full max-w-3xl flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="w-full border border-slate-200 dark:border-slate-700/50 rounded-sm bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm transition-colors overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 group"
                >
                  <span className="font-bold text-[13px] sm:text-[14px] text-slate-800 dark:text-slate-200">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon inside a white circle */}
                  <div className="w-7 h-7 shrink-0 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-slate-50 transition-colors">
                    {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-5 text-slate-600 dark:text-slate-400 text-[13px] sm:text-[14px] leading-[1.7] border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
      
    </section>
  );
}
