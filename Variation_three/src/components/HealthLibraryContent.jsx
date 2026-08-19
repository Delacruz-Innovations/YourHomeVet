import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight, BookOpen, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function HealthLibraryContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    'All',
    'Nutrition',
    'Medical Conditions',
    'Pet Care Guides',
    'Dogs',
    'Cats'
  ];

  const articles = [
    {
      id: 1,
      title: "ALLERGIES IN DOGS",
      category: "Dogs",
      date: "21/07/2026",
      desc: "Allergies can be a source of great frustration and discomfort. Certain behaviour like licking, scratching, chewing at themselves, and shaking their heads to relieve itchy ears are common indications.",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "CATARACTS IN CATS",
      category: "Cats",
      date: "21/07/2026",
      desc: "Cataracts occur when the normally transparent lens inside the eye becomes cloudy preventing light from reaching the retina, which could block vision if undetected.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "CANINE INFLUENZA (DOG FLU)",
      category: "Dogs",
      date: "21/07/2026",
      desc: "Canine influenza is a contagious upper respiratory infection caused by a highly infectious strain of influenza virus. Learn symptoms and prevention.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "BODY LANGUAGE OF CATS",
      category: "Cats",
      date: "21/07/2026",
      desc: "Cats rely heavily on body language, vocalizations and tail posture to communicate their emotions and intentions. Understand what your cat is telling you.",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "CANCER WARNING SIGNS",
      category: "Medical Conditions",
      date: "21/07/2026",
      desc: "Like humans, cats and dogs suffer from various forms of cancer. Because pets cannot directly communicate pain, recognizing early warning signs is vital.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "PUPPY VACCINATION PROTOCOLS",
      category: "Pet Care Guides",
      date: "21/07/2026",
      desc: "A complete guide to essential early puppy immunizations against parvovirus, distemper, hepatitis, and kennel cough in their first 16 weeks.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      title: "DENTAL HYGIENE & PLAQUE PREVENTION",
      category: "Pet Care Guides",
      date: "21/07/2026",
      desc: "Over 80% of dogs and cats over the age of three suffer from periodontal disease. Practical steps to maintain fresh breath and clean teeth at home.",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      title: "SENIOR CAT COGNITIVE HEALTH",
      category: "Cats",
      date: "21/07/2026",
      desc: "Managing geriatric feline wellbeing: identifying signs of arthritis, cognitive dysfunction, and thyroid imbalances early.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleLimit = isMobile ? 3 : 6;
  const displayedArticles = showAll ? filteredArticles : filteredArticles.slice(0, visibleLimit);

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
            Expert Veterinary Advice
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Pet Health Library & Advice
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            Explore veterinary articles, health advice, nutrition tips, and medical guides written by our team of licensed veterinarians.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto mb-10">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search health library..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAll(false);
              }}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full pl-12 pr-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#FA4D80] shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#FA4D80] text-white shadow-md' 
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedArticles.map((art) => (
              <motion.div 
                key={art.id} 
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <LazyImage src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="font-bold text-[#58B66E] uppercase tracking-wider">{art.category}</span>
                      <span>{art.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#FA4D80] transition-colors">{art.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{art.desc}</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <span className="text-xs font-bold text-[#FA4D80] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 uppercase tracking-wider">
                    Read Full Guide <ChevronRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less */}
        {filteredArticles.length > visibleLimit && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FA4D80] hover:bg-[#e63c6f] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>View More ({filteredArticles.length - visibleLimit} More)</span>
                  <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </div>
        )}
      </section>

    </div>
  );
}
