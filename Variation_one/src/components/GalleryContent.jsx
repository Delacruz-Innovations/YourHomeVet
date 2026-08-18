import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Title Header */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <LazyImage 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
            alt="YourHomeVet Hospital Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-400 lg:dark:text-slate-400 mb-2 block relative z-10">
          yourhomevet &gt; Gallery
        </span>
        <div className="inline-block px-14 py-4 bg-slate-50/90 dark:bg-slate-900/90 border border-white/10 lg:border-slate-200 dark:lg:border-slate-800 rounded-sm shadow-sm mb-6 relative z-10">
          <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-bold tracking-wide">
            Gallery
          </h1>
        </div>
        <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-sm max-w-2xl mx-auto relative z-10">
          Explore inside YourHomeVet — from our state-of-the-art CT & ICU surgical suites to our compassionate veterinary teams caring for pets across Dubai.
        </p>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 relative z-10">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all ${
                activeTab === tab
                  ? 'bg-[#ec558b] text-white shadow-md'
                  : 'bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {filteredImages.map((img, idx) => (
            <div 
              key={img.id} 
              className="break-inside-avoid relative rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <LazyImage 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-wider bg-slate-900/80 px-4 py-2 rounded-sm backdrop-blur-sm">
                  View Image
                </span>
              </div>
            </div>
          ))}

        </div>
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