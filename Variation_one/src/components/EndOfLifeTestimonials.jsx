import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "I cannot express enough gratitude to the team. They were so compassionate and professional during such a difficult time. Having our beloved dog pass away peacefully in her own bed made the heartbreaking process a little easier to bear. Thank you for your kindness.",
    name: "Mary Smith",
    date: "March 15, 2024"
  },
  {
    id: 2,
    quote: "The vet arrived on time and was incredibly gentle with our 15-year-old cat. They explained everything clearly and gave us all the time we needed to say goodbye. It was truly a peaceful experience, and we are so grateful we chose in-home euthanasia over a stressful clinic visit.",
    name: "John Doe",
    date: "April 22, 2024"
  },
  {
    id: 3,
    quote: "Thank you for providing such a respectful and dignified service. Our golden retriever was very anxious about car rides, so being able to have the vet come to our home was a blessing. The care and empathy shown by the staff were outstanding. Highly recommended.",
    name: "Sarah Williams",
    date: "May 08, 2024"
  }
];

export default function EndOfLifeTestimonials() {
  return (
    <section className="relative w-full py-8 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#fafcff] dark:bg-slate-900 transition-colors">
      
      {/* Soft Ambient Radial Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#e0d4f5] opacity-70 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#dbeefe] opacity-60 blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16">
          <div className="mb-8 md:mb-0">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-4 block">
              WHAT OUR CLIENTS SAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-slate-100 leading-tight">
              Testimonials
            </h2>
          </div>
          
          {/* Pagination arrows placeholder to match design */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow flex items-center justify-center hover:bg-slate-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-slate-300">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow flex items-center justify-center hover:bg-slate-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-slate-300">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Cards Grid - Carousel on mobile */}
        <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 sm:px-6 md:mx-0 md:px-0 md:pb-0">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-slate-950 p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800 rounded-sm flex flex-col h-full min-w-[280px] sm:min-w-[320px] md:min-w-0 shrink-0 snap-center md:snap-align-none"
            >
              <div className="mb-6">
                {/* Quote Icon */}
                <span className="text-[#5b8cce] font-serif text-6xl leading-none">"</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-[14px] sm:text-[15px] leading-[1.8] flex-grow mb-8 font-normal italic">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
