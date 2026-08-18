import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: "The team is so gentle and caring. Our dog actually gets excited when the vet comes!",
    name: "Tolu A.",
    location: "Dubai, UAE",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=tolu"
  },
  {
    text: "Annual checkups have helped us catch things early. I trust YourHomeVet completely.",
    name: "Bola M.",
    location: "Dubai, UAE",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=bola"
  },
  {
    text: "Professional, punctual, and so convenient. Best decision for our fur baby!",
    name: "Chidi & Mimi",
    location: "Dubai, UAE",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=chidi"
  },
  {
    text: "They explain everything and really care. My cat is healthier than ever!",
    name: "Zainab K.",
    location: "Dubai, UAE",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=zainab"
  }
];

export default function Reviews() {
  return (
    <section className="py-4 bg-[#fafafa] dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#F2306D] font-bold text-sm uppercase tracking-wider mb-2">
              <Heart size={16} />
              <span>Happy Pets, Happy Parents</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              What <span className="text-[#F2306D]">Pet Parents</span> Say
            </h2>
          </div>
          <div>
            <a href="#reviews" className="inline-block px-6 py-2.5 rounded-full border-2 border-[#F2306D] text-[#F2306D] font-bold text-sm hover:bg-[#F2306D] hover:text-white transition-colors">
              View All Reviews
            </a>
          </div>
        </div>

        {/* Reviews Carousel Container */}
        <div className="relative">
          
          {/* Navigation Arrows (Hidden on smaller screens) */}
          <button className="hidden xl:flex absolute top-1/2 -left-16 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md items-center justify-center text-slate-400 hover:text-[#F2306D] transition-colors border border-slate-100 dark:border-slate-700 z-10">
            <ChevronLeft size={24} />
          </button>
          <button className="hidden xl:flex absolute top-1/2 -right-16 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md items-center justify-center text-slate-400 hover:text-[#F2306D] transition-colors border border-slate-100 dark:border-slate-700 z-10">
            <ChevronRight size={24} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-full"
              >
                <div className="flex items-center gap-1 text-[#f59e0b] mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50 dark:border-slate-800/50">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
