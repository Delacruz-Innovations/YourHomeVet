import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Sparkles, Video as VideoIcon, ChevronDown, ChevronUp } from 'lucide-react';
import LazyImage from './ui/LazyImage';

import videosHeroImg from '../assets/v3_hero_landscape.jpg';
import centerLogo from '../assets/center_logo.jpg';
import { PawPrint, Heart } from 'lucide-react';

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
      title: "Dr. Paul Eeg Presentation",
      desc: "In this video, Dr. Paul Eeg shares insights from his distinguished career, offering perspective on best practices and advancements in veterinary medicine.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 5,
      title: "Dr. Ray Cahill Presentation",
      desc: "Dr. Ray Cahill discusses his journey, clinical experience, and commitment to providing high-quality care to pets in a supportive clinic environment.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 6,
      title: "Dr. Jose Presentation",
      desc: "This video features Dr. Jose discussing his area of specialization, clinical approach, and passion for excellence in veterinary patient outcomes.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 7,
      title: "Dr. Greg Presentation",
      desc: "Dr. Greg shares his insights on innovative surgical techniques, continuous training, and patient safety across our UAE hospital network.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 8,
      title: "Dr. Farooq Choudhry – Emergency Care",
      desc: "Dr. Farooq breaks down critical triage protocols, rapid stabilization techniques, and how our ambulance teams handle emergencies.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 9,
      title: "Dr. Kelly Presentation",
      desc: "Dr. Kelly talks about the importance of preventive wellness plans, tailored vaccinations, and stress-free handling for cats and dogs.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900"
    },
    {
      id: 10,
      title: "Dr. Dina Presentation",
      desc: "Dr. Dina discusses soft tissue and orthopedic surgery protocols, CT-guided diagnostic planning, and compassionate post-op care.",
      youtubeId: "dQw4w9WgXcQ",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900"
    }
  ];

  const visibleLimit = isMobile ? 3 : 6;
  const displayedVideos = showAll ? videosList : videosList.slice(0, visibleLimit);

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
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
              Watch & Learn
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4">
              Video Resources
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              Hear directly from our licensed veterinarians, board-certified surgeons, and clinical team about modern pet healthcare and home care.
            </p>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto">
          <img 
            src={videosHeroImg} 
            alt="YourHomeVet Video Presentations" 
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

      {/* Video Cards Grid */}
      <section className="pb-16 pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedVideos.map((video) => (
              <motion.div 
                key={video.id} 
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
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
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d63d73] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>View More ({videosList.length - visibleLimit} Remaining)</span>
                  <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </div>
        )}
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
