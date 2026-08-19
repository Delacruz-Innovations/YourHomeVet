import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import LazyImage from './ui/LazyImage';

import galleryHeroImg from '../assets/v3_hero_landscape.jpg';
import centerLogo from '../assets/center_logo.jpg';
import { PawPrint, Heart } from 'lucide-react';

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tabs = ['All', 'Hospital & Facilities', 'Surgeries & ICU', 'Pets & Patients', 'Mobile Clinic'];

  const galleryImages = [
    {
      id: 1,
      category: "Pets & Patients",
      title: "Gentle Dog Consultation",
      url: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 2,
      category: "Pets & Patients",
      title: "Fluffy Kitten Health Check",
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 3,
      category: "Pets & Patients",
      title: "Happy Labrador Post-Checkup",
      url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 4,
      category: "Hospital & Facilities",
      title: "YourHomeVet Reception & Lounge",
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 5,
      category: "Pets & Patients",
      title: "Feline Dental Assessment",
      url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 6,
      category: "Hospital & Facilities",
      title: "Pharmacy & Medication Center",
      url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 7,
      category: "Pets & Patients",
      title: "Exotic Pet Care & Examination",
      url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 8,
      category: "Pets & Patients",
      title: "Golden Retriever Wellness Exam",
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 9,
      category: "Mobile Clinic",
      title: "Mobile Vet Van Visit in Dubai",
      url: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 10,
      category: "Surgeries & ICU",
      title: "Sterile Surgical Suite & Monitoring",
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 11,
      category: "Hospital & Facilities",
      title: "Advanced CT Scan & Diagnostic Imaging",
      url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 12,
      category: "Pets & Patients",
      title: "French Bulldog Pediatric Visit",
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 13,
      category: "Surgeries & ICU",
      title: "Microscope & Laboratory Analysis",
      url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 14,
      category: "Hospital & Facilities",
      title: "YourHomeVet Exterior Hospital Building",
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 15,
      category: "Pets & Patients",
      title: "Cat Vaccination & Microchipping",
      url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 16,
      category: "Surgeries & ICU",
      title: "Specialist Orthopedic Surgery Team",
      url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 17,
      category: "Pets & Patients",
      title: "Pomeranian Grooming & Health Check",
      url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 18,
      category: "Mobile Clinic",
      title: "Mobile Clinic Van Interior Equipment",
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=900"
    }
  ];

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  const visibleLimit = isMobile ? 3 : 6;
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, visibleLimit);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Overview / Split Hero Section */}
      <section className="relative w-full flex flex-col lg:flex-row transition-colors duration-300 min-h-[540px] lg:min-h-[500px]">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 bg-transparent lg:bg-[#f7faf3] lg:dark:bg-slate-900 relative overflow-hidden flex z-10">
          
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
            <PawPrint size={90} className="absolute bottom-8 left-[15%] text-[#9cbc65] opacity-15 dark:opacity-5 -rotate-12" />
            <PawPrint size={50} className="absolute bottom-20 right-[35%] text-[#9cbc65] opacity-15 dark:opacity-5 rotate-12" />
            <Heart size={140} className="absolute bottom-0 right-[10%] text-[#9cbc65] opacity-10 dark:opacity-5 rotate-12 stroke-[1px] fill-transparent" />
          </div>

          <div className="w-full max-w-[640px] px-6 sm:px-8 lg:px-8 xl:pr-16 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:py-36 relative z-10 flex flex-col justify-center ml-auto">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Behind the Scenes
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4">
              Photo Gallery
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              Explore life at YourHomeVet! From our state-of-the-art diagnostic suites and modern operating rooms to happy recovering pets and mobile clinic van visits across Dubai.
            </p>

            {/* Filter Pills in Hero */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTab(tab);
                    setShowAll(false);
                  }}
                  className={`px-4 py-2 rounded-sm text-xs font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-[#ec558b] text-white shadow-md'
                      : 'bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto">
          <img 
            src={galleryHeroImg} 
            alt="YourHomeVet Hospital Facility" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 lg:hidden pointer-events-none z-10" />
        </div>

        {/* Center Floating Rotating Badge */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-30 pointer-events-none">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white dark:bg-slate-900 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.18)] flex items-center justify-center overflow-hidden border-4 border-[#f7faf3] dark:border-slate-800 pointer-events-auto">
            <img src={centerLogo} alt="Rotating Logo" className="w-full h-full object-cover scale-[1.15]" />
          </div>
        </div>

      </section>

      {/* Masonry / Grid Gallery */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedImages.map((img, idx) => (
              <motion.div 
                key={img.id} 
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="relative rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer aspect-[4/3] bg-slate-100 dark:bg-slate-800"
                onClick={() => openLightbox(idx)}
              >
                <LazyImage 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-wider bg-slate-900/80 px-4 py-2 rounded-sm backdrop-blur-sm">
                    View Image
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less */}
        {filteredImages.length > visibleLimit && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d63d73] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>View More ({filteredImages.length - visibleLimit} Remaining)</span>
                  <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-[#ec558b] transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ec558b] transition-colors z-10"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ec558b] transition-colors z-10"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[lightboxIndex]?.url}
              alt={filteredImages[lightboxIndex]?.title}
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white text-sm font-medium">{filteredImages[lightboxIndex]?.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}