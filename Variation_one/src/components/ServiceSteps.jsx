import React from "react";

const steps = [
  {
    label: "PET EMERGENCY FREE ADVICE",
    title: "The Phone Triage",
    desc1:
      "YourHomeVet provides a free-of-charge emergency line to worried pet parents. You'll be connected to the dedicated team of registered veterinary nurses.",
    desc2:
      "The triage team's mission is to assess your pet's state from a distance and decide with you what would be the most reasonable solution. Common emergencies can include difficulty breathing, persistent vomiting or diarrhoea, seizures, or severe trauma. If you notice these signs, call us right away.",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=90",
    bgColor: "bg-[#dbeefe] dark:bg-blue-950/50",
    imageLeft: true,
  },
  {
    label: "IN-HOME EMERGENCY CARE",
    title: "The Emergency Consultation",
    desc1:
      "Our vets will perform a full consultation, carry out any necessary diagnostics and provide immediate medical treatment in the comfort of your home.",
    desc2:
      "We explain everything clearly and answer all your questions. If further hospitalisation or continuous monitoring is required, we coordinate directly with nearby 24/7 clinics for a seamless transfer.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=90",
    bgColor: "bg-[#eee8f7] dark:bg-purple-950/50",
    imageLeft: false,
  },
  {
    label: "PROFESSIONAL HOME TREATMENT",
    title: "The Home Treatment",
    desc1:
      "Treatment is provided at home whenever possible — from wound care and pain relief to emergency medications and fluid therapy.",
    desc2:
      "We use professional portable veterinary equipment to ensure your pet receives the highest standard of care without the trauma of traveling to a busy clinic.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=90",
    bgColor: "bg-[#e6f3e3] dark:bg-green-950/50",
    imageLeft: true,
  },
];

export default function ServiceSteps() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-12 lg:py-16 overflow-hidden">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-10 lg:gap-14 px-4 sm:px-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative w-full min-h-[460px] lg:h-[500px] flex items-center justify-center rounded-sm overflow-hidden"
          >
            {/* 1. BACKGROUND LAYER (Split 50% Image / 50% Solid Color) */}
            <div className="absolute inset-0 flex flex-col lg:flex-row w-full h-full z-0 overflow-hidden">
              {/* Left/Right Background Image */}
              <div
                className={`w-full lg:w-1/2 h-1/2 lg:h-full ${
                  step.imageLeft ? "order-1" : "order-2"
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left/Right Solid Color Background */}
              <div
                className={`w-full lg:w-1/2 h-1/2 lg:h-full ${step.bgColor} ${
                  step.imageLeft ? "order-2" : "order-1"
                }`}
              />
            </div>

            {/* 2. FOREGROUND CONTENT LAYER (Placed directly on top of the background) */}
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4 py-8 lg:py-0">
              <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 lg:p-14 shadow-2xl border border-slate-100 dark:border-slate-800 max-w-xl w-full">
                {/* Small Label */}
                <span className="text-slate-600 dark:text-slate-400 font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mb-4 block">
                  {step.label}
                </span>

                {/* Title */}
                <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-serif text-slate-900 dark:text-slate-100 font-normal leading-[1.1] mb-6">
                  {step.title}
                </h2>

                {/* Paragraph 1 */}
                <p className="text-slate-600 dark:text-slate-400 text-[13px] sm:text-[14px] leading-[1.75] mb-4 font-normal">
                  {step.desc1}
                </p>

                {/* Paragraph 2 */}
                <p className="text-slate-600 dark:text-slate-400 text-[13px] sm:text-[14px] leading-[1.75] mb-8 font-normal">
                  {step.desc2}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="tel:03308089066"
                    className="px-7 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-colors shadow-md"
                  >BOOK AN APPOINTMENT</a>
                  <a
                    href="/emergency-vet-near-me"
                    className="px-7 py-3.5 rounded-sm border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-colors"
                  >
                    EXPLORE AREAS WE COVER
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
