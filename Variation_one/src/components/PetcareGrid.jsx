import React, { useState } from 'react';

const categories = ["SHOW ALL", "DOGS", "CATS", "EXOTICS", "RABBITS"];

const articles = [
  {
    id: 1,
    title: "Seizures in Dogs: Causes and Treatment Options",
    description: "Learn about seizures in dogs, their common causes, warning signs, and available treatments to help protect your pet's health and manage future episodes effectively.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600",
    date: "July 22, 2026 - 1 min read",
    category: "DOGS"
  },
  {
    id: 2,
    title: "Ear Infection in Dogs: What to Look For and What to Do",
    description: "Ear infections are a common and uncomfortable problem for dogs. Learn how to spot the signs early and what treatment your vet is likely to recommend.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=600",
    date: "July 17, 2026 - 1 min read",
    category: "DOGS"
  },
  {
    id: 3,
    title: "Poison Symptoms in Dogs: What to Watch For",
    description: "Poisoning in dogs can look different depending on what they have eaten. Find out the key symptoms to watch for and when to seek urgent veterinary help.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600",
    date: "July 17, 2026 - 1 min read",
    category: "DOGS"
  },
  {
    id: 4,
    title: "Diabetes in Dogs: Should You Be Worried?",
    description: "Diabetes is manageable in dogs, but knowing the signs early makes all the difference. Here's what every owner should know.",
    image: "https://images.unsplash.com/photo-1602498456745-e9503b30470b?auto=format&fit=crop&q=80&w=600",
    date: "June 12, 2026 - 1 min read",
    category: "DOGS"
  },
  {
    id: 5,
    title: "Kennel Cough in Dogs: Is It An Emergency?",
    description: "Most cases are mild and self-resolving, but could your dog's kennel cough become an emergency? Here's what to watch for.",
    image: "https://images.unsplash.com/photo-1599805986427-04b360b134d1?auto=format&fit=crop&q=80&w=600",
    date: "June 12, 2026 - 1 min read",
    category: "DOGS"
  },
  {
    id: 6,
    title: "UTI in Dogs: Signs, Causes and Treatment",
    description: "Discover the symptoms, causes, and treatment of urinary tract infections in dogs, and when to see a vet.",
    image: "https://images.unsplash.com/photo-1616429598799-a86851214e21?auto=format&fit=crop&q=80&w=600",
    date: "May 14, 2026 - 1 min read",
    category: "DOGS"
  },
  {
    id: 7,
    title: "Trachea Collapse in Dogs: Causes and Treatment",
    description: "Tracheal collapse in dogs causes symptoms, treatment options, and when to seek veterinary care to support your dog's breathing and comfort.",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=600",
    date: "March 23, 2026 - 1 min read",
    category: "DOGS"
  },
  {
    id: 8,
    title: "Spinal Cord Trauma in Dogs: When to Seek Vet Help",
    description: "Spinal trauma in dogs key symptoms to watch and when to seek urgent veterinary care to prevent serious complications.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
    date: "March 23, 2026 - 1 min read",
    category: "DOGS"
  },
  {
    id: 9,
    title: "Head Trauma in Dogs: Is it an Emergency?",
    description: "Head trauma in dogs: key signs, emergency risks, and when to seek urgent veterinary care to protect your pet.",
    image: "https://images.unsplash.com/photo-1537151608805-ea811160f6ee?auto=format&fit=crop&q=80&w=600",
    date: "March 23, 2026 - 1 min read",
    category: "DOGS"
  }
];

export default function PetcareGrid() {
  const [activeTab, setActiveTab] = useState("SHOW ALL");

  return (
    <section className="w-full py-16 lg:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 lg:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-sm text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-all border ${
                activeTab === cat
                  ? 'bg-black text-white dark:bg-white dark:text-slate-950 border-black dark:border-white'
                  : 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Articles Grid - stacked on mobile, grid on tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 gap-y-10 md:gap-y-8 lg:gap-y-16">
          {articles.map((article) => (
            <a href={`/petcare-advice/diabetes-in-dogs`} key={article.id} className="flex flex-col group cursor-pointer">
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-slate-100 dark:bg-slate-900">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Meta */}
              <div className="text-[12px] text-slate-500 dark:text-slate-400 mb-3">
                {article.date}
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-serif text-slate-900 dark:text-slate-100 leading-tight mb-4 group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors">
                {article.title}
              </h3>
              
              {/* Description */}
              <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-[1.7] mb-6 line-clamp-3">
                {article.description}
              </p>
              
              {/* Read Article Link */}
              <div className="mt-auto pt-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black dark:text-white group-hover:underline underline-offset-4 decoration-2">
                  READ ARTICLE
                </span>
              </div>
            </a>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="w-full flex justify-center mt-20">
          <button className="px-10 py-4 rounded-sm border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 text-[11px] font-bold uppercase tracking-[0.1em] transition-all">
            LOAD MORE
          </button>
        </div>

      </div>
    </section>
  );
}
