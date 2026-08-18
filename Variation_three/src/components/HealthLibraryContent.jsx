import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight, BookOpen, Clock } from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function HealthLibraryContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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
      title: "5 WAYS TO CARE FOR YOUR SENIOR DOG",
      category: "Pet Care Guides",
      date: "21/07/2026",
      desc: "Dogs age just like we do and need extra attention once they reach senior age. Discover nutrition, joint supplement, and home comfort adjustments.",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full pl-12 pr-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#FA4D80] shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div key={art.id} className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
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
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
