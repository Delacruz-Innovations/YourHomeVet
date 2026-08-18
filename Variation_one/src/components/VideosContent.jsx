import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Sparkles, Video as VideoIcon } from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function VideosContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState(null);

  const videosList = [
    {
      id: 1,
      title: "Megan Taylor Presentation",
      desc: "This video highlights Megan Taylor's presentation, where she shares her professional journey, expertise, and her approach to her field in veterinary care.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 2,
      title: "Dr. Farooq Presentation",
      desc: "This video features Dr. Farooq Ahmad Choudhry, who discusses his extensive experience and unique expertise in veterinary medicine, focusing on emergency care.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 3,
      title: "Dr. Renata Majka Presentation",
      desc: "The video showcases Dr. Renata Majka as she presents her professional background and specialized knowledge in veterinary medicine, emphasizing compassionate treatment.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 4,
      title: "Dr. Vladimir Vujicic Presentation",
      desc: "In this video, Dr. Vladimir Vujicic delivers a presentation that delves into his professional background and areas of expertise in veterinary surgery.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 5,
      title: "Dr. Horacio Ruiz Presentation",
      desc: "This video features Dr. Horacio Ruiz, who provides an insightful presentation about his extensive experience and specialist skills in neurology.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 6,
      title: "Dr. Silverio Moniz Presentation",
      desc: "In this video, Dr. Silverio Moniz offers a detailed presentation about his background, expertise, and philosophies in veterinary medicine and diagnostics.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 7,
      title: "Dr. Cristina Epifanio Presentation",
      desc: "The video presents Dr. Cristina Epifanio, showcasing her professional journey and expertise in veterinary medicine, along with her approach to patient care.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 8,
      title: "Dr. Luciano De Batia Presentation",
      desc: "This video features a presentation by Dr. Luciano De Batia, where he shares insights into his veterinary expertise, discussing internal medicine cases.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 9,
      title: "YourHomeVet Palm Clinic Overview",
      desc: "The video provides a brief yet detailed look at the YourHomeVet Palm Clinic, showcasing its YourHomeVeterinary facilities, diagnostic labs, and reception.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 10,
      title: "YourHomeVet Downtown Clinic Overview",
      desc: "This video offers a succinct overview of the YourHomeVet Downtown Clinic, emphasizing its contemporary veterinary facilities, professional team, and patient lounge.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900"
    }
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(videosList.length / itemsPerPage);

  const displayedVideos = videosList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Title Header */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <LazyImage 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1200" 
            alt="Veterinary presentations and clinic tour" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-400 lg:dark:text-slate-400 mb-2 block relative z-10">
          yourhomevet &gt; Our Video
        </span>
        <div className="inline-block px-14 py-4 bg-slate-50/90 dark:bg-slate-900/90 border border-white/10 lg:border-slate-200 dark:lg:border-slate-800 rounded-sm shadow-sm mb-6 relative z-10">
          <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-bold tracking-wide">
            Videos
          </h1>
        </div>
        <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-sm max-w-2xl mx-auto relative z-10">
          Watch presentations by our specialist veterinary doctors, tour our modern Dubai clinics, and learn more about our 24/7 medical care.
        </p>
      </section>

      {/* Video Cards Grid (2 Columns) */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedVideos.map((video) => (
            <div 
              key={video.id} 
              onClick={() => setActiveVideo(video)}
              className="bg-[#1b2b4b] border border-slate-700/80 rounded-sm shadow-md overflow-hidden flex flex-col justify-between cursor-pointer group hover:border-[#ec558b] transition-all"
            >
              {/* Video Thumbnail Box */}
              <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                <LazyImage 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="w-16 h-16 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-2xl group-hover:bg-[#ec558b] group-hover:text-white group-hover:scale-110 transition-all absolute z-10">
                  <Play size={28} className="ml-1 fill-current" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2b4b] via-transparent to-transparent"></div>
              </div>

              {/* Card Footer Text */}
              <div className="p-6 text-center text-white">
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-[#ec558b] transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-lg mx-auto">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-3 mt-12">
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
      </section>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-sm overflow-hidden shadow-2xl relative"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-800">
                <h3 className="text-base font-serif font-bold text-white">
                  {activeVideo.title}
                </h3>
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="p-2 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4 text-xs text-slate-400 bg-slate-950">
                {activeVideo.desc}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
