import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, ChevronDown, ChevronUp } from 'lucide-react';
import LazyImage from './ui/LazyImage';

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

  const tabs = ['All', 'Facilities', 'Surgeries & ICU', 'Pets & Patients', 'Mobile Clinic'];

  const galleryImages = [
    { id: 1, category: "Pets & Patients", title: "Gentle Dog Consultation", url: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=900" },
    { id: 2, category: "Pets & Patients", title: "Fluffy Kitten Health Check", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=900" },
    { id: 3, category: "Pets & Patients", title: "Happy Labrador Post-Checkup", url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=900" },
    { id: 4, category: "Facilities", title: "YourHomeVet Clinical Equipment", url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900" },
    { id: 5, category: "Pets & Patients", title: "Feline Dental Assessment", url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=900" },
    { id: 6, category: "Facilities", title: "Point-of-Care Laboratory", url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=900" },
    { id: 7, category: "Mobile Clinic", title: "Mobile Vet Visit", url: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900" },
    { id: 8, category: "Surgeries & ICU", title: "Sterile Surgical Suite", url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=900" },
    { id: 9, category: "Pets & Patients", title: "Golden Retriever Wellness Exam", url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=900" }
  ];

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  const visibleLimit = isMobile ? 3 : 6;
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, visibleLimit);

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
          Photo Gallery
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Life at YourHomeVet
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Take a look inside our mobile veterinary units, surgical equipment, and happy patients receiving gentle care.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' 
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedImages.map((img, index) => (
              <motion.div 
                key={img.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-800 aspect-[4/3] bg-slate-100 dark:bg-slate-900 cursor-pointer"
              >
                <LazyImage 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#58B66E] mb-1">{img.category}</span>
                  <h3 className="text-base font-bold text-white">{img.title}</h3>
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
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FA4D80] hover:bg-[#e63c6f] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>View More ({filteredImages.length - visibleLimit} More)</span>
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
