import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Video as VideoIcon, ChevronDown, ChevronUp } from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function VideosContent() {
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      title: "YourHomeVet Mobile Clinic Overview",
      desc: "This video offers a detailed look at YourHomeVet mobile veterinary units, showcasing state-of-the-art diagnostic equipment and home care workflow.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900"
    }
  ];

  const visibleLimit = isMobile ? 3 : 6;
  const displayedVideos = showAll ? videosList : videosList.slice(0, visibleLimit);

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
          Video Resources
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Our Video Library
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Watch presentations, specialist insights, and virtual tours of YourHomeVet mobile units and surgical suites.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedVideos.map((video) => (
              <motion.div 
                key={video.id} 
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div 
                    onClick={() => setActiveVideo(video.youtubeId)}
                    className="relative h-52 overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <LazyImage 
                      src={video.image} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#FA4D80] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play size={24} className="fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{video.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{video.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less */}
        {videosList.length > visibleLimit && (
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
                  <span>View More ({videosList.length - visibleLimit} More)</span>
                  <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </div>
        )}

        {/* Video Lightbox */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setActiveVideo(null)}
            >
              <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video">
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-md"
                >
                  <X size={20} />
                </button>
                <iframe 
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                  title="Video Player"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </div>
  );
}
