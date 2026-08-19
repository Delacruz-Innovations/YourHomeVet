import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Globe, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  Heart, 
  Truck, 
  Sparkles, 
  Home as HomeIcon, 
  Calendar,
  PawPrint,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

import partnerHeroImg from '../assets/v3_brand_hero.jpg';
import centerLogo from '../assets/center_logo.jpg';

export default function PartnersContent() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const partnersList = [
    {
      id: "1",
      title: "BLUE SKY PET RELOCATION",
      subtitle: "International Pet Relocation & Export",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
      desc: "At Blue Sky Relocation, we guide you through every step of the relocation process to keep your pet moving smoothly and safely around the globe. Our team handles export documentation, health certificates, flight bookings, and door-to-door transit.",
      location: "201 - 10th Street, Community Village, Dubai, UAE",
      hours: "Mon - Thu: 9:00 AM - 6:00 PM",
      contact: "info@blueskypetrelocation.com | +971 4 340 8573",
      website: "https://blueskypetrelocation.com",
      btnText: "Book Relocation",
      phone: "+97143408573"
    },
    {
      id: "2",
      title: "CLEVER DOG ACADEMY",
      subtitle: "Professional Dog Training & Behavior",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
      desc: "With 10+ years of experience in the dog training industry, Clever Dog offers positive reinforcement behavior modification and obedience classes in Dubai. From puppy socialization to behavioral therapy, our certified trainers provide personalized guidance.",
      location: "Al Quoz Industrial 3, Dubai, UAE",
      hours: "Mon - Sat: 8:00 AM - 7:00 PM",
      contact: "info@cleverdog.ae | +971 50 123 4567",
      website: "https://cleverdog.ae",
      btnText: "Book Training",
      phone: "+971501234567"
    },
    {
      id: "3",
      title: "NAFSI HEALTH",
      subtitle: "Online Mental Wellbeing & Counseling",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      desc: "Nafsi is a leading tele-mental health platform providing specialized online therapy and counseling services across the UAE. We connect individuals with licensed psychologists for mental health support, stress management, and emotional wellness.",
      location: "Dubai Healthcare City, Dubai, UAE",
      hours: "24/7 Online Support Available",
      contact: "support@nafsi.ae",
      website: "https://nafsi.ae",
      btnText: "Visit Website",
      phone: "+97145971000"
    },
    {
      id: "4",
      title: "PET BAE",
      subtitle: "Trusted Pet Sitting & Dog Walking",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
      desc: "PetBae connects pet parents with vetted, trusted pet sitters and dog walkers across Dubai. Enjoy complete peace of mind with insured care, daily photo updates, and flexible home pet care services while you are away.",
      location: "Business Bay, Dubai, UAE",
      hours: "Daily: 7:00 AM - 9:00 PM",
      contact: "info@petbae.com | +971 4 800 223",
      website: "https://petbae.com",
      btnText: "Visit Website",
      phone: "+9714800223"
    },
    {
      id: "5",
      title: "THE HEALTHY HOME",
      subtitle: "Eco-Friendly Indoor Environmental Sanitization",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
      desc: "The Healthy Home is a premier eco-friendly indoor sanitization company in Dubai. Specializing in mattress cleaning, AC duct cleaning, sofa sanitization, and deep home cleaning to create allergy-free pet environments.",
      location: "Al Barsha 1, Dubai, UAE",
      hours: "Working Hours: 8:00 AM - 7:00 PM",
      contact: "info@thehealthyhome.me | 800 SANITIZE",
      website: "https://thehealthyhome.me",
      btnText: "Book Service",
      phone: "+97180072648493"
    },
    {
      id: "6",
      title: "CHAUFFEUR PET TAXI",
      subtitle: "Safe, Climate-Controlled Pet Transport",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
      desc: "Chauffeur provides specialized, climate-controlled pet transport services across all 7 Emirates. Equipped with secure pet crates, GPS tracking, and trained handlers for stress-free travel to clinics, grooming, and airports.",
      location: "Dubai Marina, Dubai, UAE",
      hours: "Working Hours: 24/7",
      contact: "booking@petchauffeur.ae | +971 52 987 6543",
      website: "https://petchauffeur.ae",
      btnText: "Book Taxi",
      phone: "+971529876543"
    },
    {
      id: "7",
      title: "ELLO PET HOTEL & RESORT",
      subtitle: "Luxury 5-Star Pet Boarding & Daycare",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=800",
      desc: "ELLO is a 5-star luxury boutique pet resort in Dubai offering private climate-controlled suites, indoor play parks, swimming pools, and 24/7 webcams for dogs and cats to enjoy a true staycation experience.",
      location: "Al Serkal Avenue, Al Quoz, Dubai",
      hours: "Working Hours: Mon - Sun 7:00 AM - 8:00 PM",
      contact: "stay@ellopethotel.ae | +971 4 399 1234",
      website: "https://ellopethotel.ae",
      btnText: "Book Suite",
      phone: "+97143991234"
    }
  ];

  const visibleLimit = isMobile ? 3 : 6;
  const displayedPartners = showAll ? partnersList : partnersList.slice(0, visibleLimit);

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
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] mb-3 block">
              YOURHOMEVET &gt; PARTNER NETWORK
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-white leading-tight mb-4">
              Community Partners
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              We collaborate with Dubai's leading pet care, relocation, training, resort, and wellness providers to deliver complete 360° support for your beloved pets.
            </p>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto">
          <img 
            src={partnerHeroImg} 
            alt="YourHomeVet Partner Network" 
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

      {/* Partners Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {displayedPartners.map((partner) => (
              <motion.div 
                key={partner.id} 
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-sm shadow-md overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all group"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={partner.image} 
                      alt={partner.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
                      Verified Partner
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 text-center border-t border-slate-100 dark:border-slate-800">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {partner.title}
                    </h2>
                    <span className="text-xs font-bold text-[#ec558b] uppercase tracking-wider block mb-4">
                      {partner.subtitle}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {partner.desc}
                    </p>

                    <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                      <p className="flex items-center justify-center gap-1.5">
                        <MapPin size={14} className="text-[#51b255]" /> {partner.location}
                      </p>
                      <p className="flex items-center justify-center gap-1.5">
                        <Clock size={14} className="text-[#ec558b]" /> {partner.hours}
                      </p>
                      <p className="text-[11px] font-mono text-slate-400">{partner.contact}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-[#51b255] hover:bg-[#439c47] text-white text-center text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Globe size={14} /> {partner.btnText}
                  </a>
                  <a 
                    href={`tel:${partner.phone}`}
                    className="py-3 px-4 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-center text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less */}
        {partnersList.length > visibleLimit && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>View More ({partnersList.length - visibleLimit} More)</span>
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
