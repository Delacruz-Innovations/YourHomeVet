import React from 'react';
import { motion } from 'framer-motion';
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
  Calendar
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function PartnersContent() {
  const partnersList = [
    {
      id: "1",
      title: "BLUE SKY PET RELOCATION",
      subtitle: "International Pet Relocation & Export",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
      desc: "At Blue Sky Relocation, we guide you through every step of the relocation process to keep your pet moving smoothly and safely around the globe. Export documentation, health certificates, and door-to-door transit.",
      location: "London & International Travel Hubs",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
      contact: "info@blueskypetrelocation.com",
      website: "https://blueskypetrelocation.com",
      btnText: "Learn More"
    },
    {
      id: "2",
      title: "CLEVER DOG ACADEMY",
      subtitle: "Professional Dog Training & Behavior",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
      desc: "With 10+ years of experience, Clever Dog offers positive reinforcement behavior modification and obedience classes. From puppy socialization to behavioral therapy.",
      location: "Greater London Area",
      hours: "Mon - Sat: 8:00 AM - 7:00 PM",
      contact: "info@cleverdog.co.uk",
      website: "https://cleverdog.co.uk",
      btnText: "Learn More"
    },
    {
      id: "3",
      title: "PET BAE",
      subtitle: "Trusted Pet Sitting & Dog Walking",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
      desc: "PetBae connects pet parents with vetted, trusted pet sitters and dog walkers. Enjoy complete peace of mind with insured care and daily updates.",
      location: "Central & South London",
      hours: "Daily: 7:00 AM - 9:00 PM",
      contact: "info@petbae.com",
      website: "https://petbae.com",
      btnText: "Learn More"
    },
    {
      id: "4",
      title: "CHAUFFEUR PET TAXI",
      subtitle: "Safe, Climate-Controlled Pet Transport",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
      desc: "Chauffeur provides specialized, climate-controlled pet transport services. Equipped with secure crates and trained handlers for stress-free travel.",
      location: "London & Surrounding Counties",
      hours: "Working Hours: 24/7",
      contact: "booking@petchauffeur.co.uk",
      website: "https://petchauffeur.co.uk",
      btnText: "Learn More"
    }
  ];

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
            Trusted Network
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Our Trusted Partners
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We collaborate with leading pet care providers, trainers, relocation specialists, and boarding resorts to ensure full 360-degree care for your beloved animals.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnersList.map((partner) => (
            <div key={partner.id} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="h-52 rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
                  <LazyImage 
                    src={partner.image} 
                    alt={partner.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#FA4D80] tracking-widest uppercase block mb-1">
                  {partner.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{partner.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{partner.desc}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#58B66E]" />
                  <span>{partner.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#4FA3DE]" />
                  <span>{partner.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
