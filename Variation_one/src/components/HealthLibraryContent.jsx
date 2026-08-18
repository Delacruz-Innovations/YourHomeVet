import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight, BookOpen, Clock } from 'lucide-react';

export default function HealthLibraryContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    'All',
    'Nutrition',
    'Medical Conditions',
    'Pet Friendly Places',
    'Pet Care Guides',
    'Dogs',
    'Cats'
  ];

  const articles = [
    {
      id: 1,
      title: "ALLERGIES IN DOGS",
      slug: "allergies-in-dogs",
      category: "Dogs",
      date: "21/07/2026",
      desc: "Allergies can be a source of great frustration and discomfort among humans. But in dogs, allergies can be extremely irritating. Certain behaviour like licking, scratching, chewing at themselves, and shaking their heads to relieve itchy ears are common indications.",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "CATARACTS IN CATS",
      slug: "cataracts-in-cats",
      category: "Cats",
      date: "21/07/2026",
      desc: "Cataracts occur when the normally transparent lens inside the eye becomes cloudy preventing light from reaching the retina. The cloudy eye lenses stop the light from reaching the retina of the cat's eye, which could block vision or cause blindness.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "CANINE INFLUENZA (DOG FLU)",
      slug: "canine-influenza-dog-flu",
      category: "Dogs",
      date: "21/07/2026",
      desc: "Canine influenza, commonly known as dog flu, is a contagious upper respiratory infection caused by a highly infectious strain of influenza virus. Transmitted via airborne droplets, direct contact, or proximity to an infected dog.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "BODY LANGUAGE OF CATS",
      slug: "body-language-of-cats",
      category: "Cats",
      date: "21/07/2026",
      desc: "Unlike humans, cats rely heavily on body language, vocalizations and scent signals to communicate their emotions and intentions. Cats do this through movement of their tails, positioning of ears, eye expression, and posture.",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "CANCER WARNING SIGNS",
      slug: "cancer-warning-signs",
      category: "Medical Conditions",
      date: "21/07/2026",
      desc: "Cancer is a serious illness affecting pets. Like humans, cats and dogs suffer from similar forms of cancer. However, it becomes complicated as pets cannot directly communicate pain or discomfort, making early warning signs crucial.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "BODY LANGUAGE OF DOGS",
      slug: "body-language-of-dogs",
      category: "Dogs",
      date: "21/07/2026",
      desc: "The primary means by which dogs communicate is through non-verbal behaviors. Every movement of every body part (tail, ears, eyes, posture, facial expressions) provides valuable information about a dog's emotional state.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      title: "5 WAYS TO CARE FOR YOUR SENIOR DOG",
      slug: "5-ways-to-care-for-your-senior-dog",
      category: "Pet Care Guides",
      date: "21/07/2026",
      desc: "Your dog may always be a puppy to you. But it’s important to remember that dogs age just like we do and need extra attention once they reach geriatric age (six years for large breeds, seven for small breeds).",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      title: "THE IMPORTANCE OF RABIES VACCINE FOR YOUR PET",
      slug: "the-importance-of-rabies-vaccine-for-your-pet",
      category: "Pet Care Guides",
      date: "05/06/2026",
      desc: "Rabies is a deadly virus that causes severe damage to pet health, specifically attacking the central nervous system and brain. Mandatory UAE rabies vaccination guarantees legal compliance and complete family safety.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 9,
      title: "HOW TO PROPERLY CARE FOR YOUR PET’S TEETH?",
      slug: "how-to-properly-care-for-your-pets-teeth",
      category: "Nutrition",
      date: "21/07/2026",
      desc: "Foul pet breath isn't just unpleasant—it often signals underlying periodontal disease or bacterial plaque. Proper dental scaling, polishing, and oral hygiene routine protect your pet from painful tooth loss.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 10,
      title: "PETS IN A BUSTLING CITY: APARTMENT CARE",
      slug: "pets-in-a-bustling-city-all-about-pets-who-live-in-apartments",
      category: "Pet Friendly Places",
      date: "21/07/2026",
      desc: "Living with a pet in a bustling Dubai city apartment requires thoughtful routines to prevent stress and boredom. Learn how to optimize small spaces and daily exercise for apartment-dwelling pets.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 11,
      title: "FELINE LEUKEMIA VIRUS (FeLV)",
      slug: "feline-leukemia-virus-felv",
      category: "Cats",
      date: "21/07/2026",
      desc: "Feline leukemia virus (FeLV) is a highly contagious viral illness that compromises a cat's immune system, increasing vulnerability to chronic infections, anemia, and life-threatening conditions.",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 12,
      title: "LIVER IN DOGS: SYMPTOMS, TYPES & TREATMENT",
      slug: "liver-in-dogs-symptoms-types-treatment-and-prevention",
      category: "Medical Conditions",
      date: "21/07/2026",
      desc: "Reviewed by Dr. Nicoletta Nica. An in-depth overview of canine liver function, early warning symptoms of liver dysfunction, diagnostic laboratory bloodwork, and preventative nutrition.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 13,
      title: "LYMPHOMA IN CATS",
      slug: "lymphoma-in-cats",
      category: "Cats",
      date: "21/07/2026",
      desc: "Cancer beginning in the immune system cells is known as feline lymphoma. Uncontrolled growth of lymphocytes leads to tumor development, requiring early diagnostic evaluation and oncology care.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 14,
      title: "PARVOVIRUS IN DOGS",
      slug: "parvovirus-in-dogs",
      category: "Dogs",
      date: "21/07/2026",
      desc: "Canine parvovirus (CPV) is an extremely contagious viral illness affecting puppies. CPV damages intestinal walls and bone marrow, depleting the dog's immune system.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 15,
      title: "CUSHING’S DISEASE IN DOGS",
      slug: "cushings-disease-in-dogs",
      category: "Medical Conditions",
      date: "21/07/2026",
      desc: "Hyperadrenocorticism or Cushing's disease is a chronic endocrine disorder causing excessive cortisol production, impacting metabolic regulation, immune responses, and organ systems.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Title Header */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200" 
            alt="Featured Article Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/85 to-slate-950/60" />
        </div>

        <div className="relative z-10">
          <span className="text-xs font-semibold text-slate-300 lg:text-slate-400 uppercase tracking-widest block mb-2">
            ModernVet &gt; health-library
          </span>
          <div className="inline-block px-14 py-4 bg-white/10 lg:bg-slate-50 dark:lg:bg-slate-900 border border-white/20 lg:border-slate-200 dark:lg:border-slate-800 rounded-sm shadow-sm mb-6">
            <h1 className="text-3xl sm:text-4xl font-serif text-white lg:text-slate-900 dark:lg:text-slate-100 font-bold tracking-wide">
              Health Library
            </h1>
          </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#1b2b4b] text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative mb-12">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search for articles, symptoms, or conditions..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-11 pr-4 py-3 rounded-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#ec558b]"
          />
        </div>
        </div>
      </section>

      {/* Articles Grid (3 Columns) */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedArticles.map((art) => (
            <div 
              key={art.id} 
              className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200/80 dark:border-slate-800 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#ec558b]/40 transition-all group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#ec558b] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                    Updated: {art.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="text-[10px] font-mono font-bold text-[#51b255] uppercase tracking-wider block mb-2">
                    {art.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-[#ec558b] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="p-6 pt-0">
                <Link 
                  to={`/petcare-advice/${art.slug}`}
                  className="w-full py-3 bg-slate-900 dark:bg-slate-800 hover:bg-[#ec558b] text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-sm block flex items-center justify-center gap-1"
                >
                  Read More <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-sm text-xs font-bold transition-all ${
                  currentPage === page
                    ? 'bg-[#1b2b4b] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 h-10 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition-all flex items-center gap-1"
              >
                Next <ChevronRight size={14} />
              </button>
            )}
          </div>
        )}
      </section>

    </div>
  );
}
