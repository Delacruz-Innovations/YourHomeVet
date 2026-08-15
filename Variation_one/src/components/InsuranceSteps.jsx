import React from 'react';

const steps = [
  {
    id: 1,
    title: "Online or Paper form ?",
    content: "Most pet insurances you could be claim now have your insurance company details online store. Most of them are still using the old paper form! But you have to fill in but some of them are now completely paperless."
  },
  {
    id: 2,
    title: "Prepare your itemized invoice and the full report",
    content: "Within 24 hours after your consultation, you should have received a full invoice and a report of our intervention by email. If you didn't receive any email, there's a high chance it got lost in your junk folder! Worse, we might have the wrong email address! Don't hesitate to drop us an email using the contact form."
  },
  {
    id: 3,
    title: "Send the documents",
    content: "Most of the time, insurance companies will send you to provide them with the itemized invoice and the history whether by mail, email or directly on their website. They might also request it directly from us. In any case, keep those files saved for you! As safe, if you have trouble accessing them, don't hesitate to contact us!"
  },
  {
    id: 4,
    title: "The Vet Section to be filled",
    content: "If a Vet Section on your claim form needs to be filled by us, just answer to the email received and send it straight back to us. We will be delighted to fill this in for you."
  }
];

export default function InsuranceSteps() {
  return (
    <section className="w-full py-8 lg:py-16 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-slate-900 dark:text-slate-100 leading-tight">
            Making a claim with your pet <br className="hidden sm:inline" />
            insurance is easier than it looks. <br className="hidden sm:inline" />
            Let's see how we can help you!
          </h2>
        </div>
        
        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto pl-4 sm:pl-0">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex gap-8 pb-12 last:pb-0">
              
              {/* Timeline Line & Circle */}
              <div className="flex flex-col items-center">
                {/* Number Circle */}
                <div className="w-12 h-12 shrink-0 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-sm relative z-10 shadow-sm">
                  {step.id}
                </div>
                {/* Vertical Line - don't show on last item */}
                {index !== steps.length - 1 && (
                  <div className="w-px h-full bg-slate-200 dark:bg-slate-800 -my-2 flex-grow"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-3 pb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-[14px] sm:text-[15px] leading-[1.8]">
                  {step.content}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
