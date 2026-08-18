import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const reviews = [
  {
    name: "Eddie",
    date: "Jun 17, 2025",
    rating: 5,
    text: "The vet helped me understand my dog's symptoms more clearly. She was attentive and offered a fresh perspective. I'm grateful for her support and guidance!",
    tags: ["Annual Checkups", "Emergency"]
  },
  {
    name: "John F.",
    date: "Jun 12, 2025",
    rating: 5,
    text: "I've been using YourHomeVet for a few months. Taking my cat to a clinic was challenging, but their home support truly helps. We're making steady progress. Highly recommend!",
    tags: ["Vaccinations", "Blood Tests"]
  },
  {
    name: "Anna S.",
    date: "May 28, 2025",
    rating: 5,
    text: "I've been amazed by the dedication and professionalism. Having a vet examine my senior dog in his own bed made a world of difference. Incredible service.",
    tags: ["Senior Care", "Diagnostics"]
  },
  {
    name: "Maria G.",
    date: "May 15, 2025",
    rating: 5,
    text: "Punctual, kind, and extremely thorough. They explained every step of the examination. It's such a relief to have this level of care delivered to my doorstep.",
    tags: ["Emergency", "Soft Tissue Surgery"]
  }
];

export default function Reviews() {
  const scrollRef = useRef(null);

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAFCF8] dark:bg-slate-950 overflow-hidden font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-16 lg:mb-20">
          {/* Left Column */}
          <div className="lg:w-1/4 flex flex-col items-start">
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-800 dark:text-white mb-1">
              Testimonial
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              (03-08)
            </span>
          </div>

          {/* Right Column */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-medium text-slate-900 dark:text-white leading-[1.15] tracking-tight max-w-4xl">
              See how our mobile vets have helped pet parents overcome challenges and improve their pet's wellbeing
            </h2>
          </div>
        </div>

        {/* Carousel / Cards Layout */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Summary Card (Leftmost) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0 w-[300px] sm:w-[340px] snap-start rounded-3xl bg-gradient-to-br from-[#f2ebff] to-[#f4f2ff] dark:from-slate-900 dark:to-slate-800 p-8 flex flex-col justify-between border border-slate-200/50 dark:border-slate-700/50"
          >
            <div>
              <div className="flex items-baseline gap-1 text-slate-900 dark:text-white">
                <span className="text-6xl font-medium tracking-tighter">4.9</span>
                <span className="text-3xl text-slate-400 font-light">/5</span>
              </div>
            </div>

            <div className="mt-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Client" className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="Client" className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800" />
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center text-[10px] font-bold">
                    +1k
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight max-w-[100px]">
                  Trusted by clients worldwide
                </p>
              </div>

              <button className="w-full flex items-center justify-between gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2.5 px-3 rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white transition-transform group-hover:scale-105">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold pr-4">View All Reviews</span>
              </button>
            </div>
          </motion.div>

          {/* Individual Review Cards */}
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="shrink-0 w-[300px] sm:w-[340px] snap-start rounded-3xl bg-white dark:bg-slate-900 p-8 flex flex-col border border-slate-200/60 dark:border-slate-800 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium text-[15px]">{review.name}</h4>
                  <p className="text-slate-500 text-xs mt-0.5">{review.date}</p>
                </div>
                <div className="flex gap-0.5 text-slate-900 dark:text-white">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed mb-8 flex-grow">
                {review.text}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {review.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-full bg-[#f2ebff] dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-8 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

      </div>
    </section>
  );
}
