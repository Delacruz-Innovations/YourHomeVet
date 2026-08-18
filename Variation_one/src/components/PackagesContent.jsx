import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Dog, 
  Cat,
  Stethoscope,
  Heart
} from 'lucide-react';

export default function PackagesContent() {
  const [petType, setPetType] = useState('Dog');
  const [activeTab, setActiveTab] = useState('Preventive Packages');
  const [openFaq, setOpenFaq] = useState(null);

  const dogPackages = [
    {
      title: "The Primary Protection",
      price: "360 AED",
      vat: "VAT not included",
      badge: "Primary Dose",
      badgeColor: "bg-[#51b255] text-white",
      included: [
        "Full physical examination",
        "Primary DHPPi/L vaccine dose",
        "Comprehensive health checkup",
        "Digital medical record",
        "Deworming treatment",
        "Veterinarian consultation"
      ]
    },
    {
      title: "The Booster Package",
      price: "510 AED",
      vat: "VAT not included",
      badge: "Annual Protection",
      badgeColor: "bg-[#ec558b] text-white",
      included: [
        "Full physical examination",
        "Annual DHPPi/L booster vaccine",
        "Rabies vaccination",
        "Dubai Municipality tag registration",
        "Official Municipality tag",
        "Deworming treatment",
        "Comprehensive health checkup"
      ]
    },
    {
      title: "Dog Smile Dental Package",
      price: "1,500 AED",
      vat: "VAT not included",
      badge: "Complete Dental",
      badgeColor: "bg-sky-600 text-white",
      included: [
        "Professional dental scale and polish",
        "Full general anesthesia & monitoring",
        "Pre-anesthetic blood lab test (IDEXX)",
        "IV cannula & fluid therapy",
        "Day hospitalization",
        "Post-op pain management",
        "Free 7-day follow-up checkup"
      ]
    }
  ];

  const catPackages = [
    {
      title: "Kitten Primary Care",
      price: "349 AED",
      vat: "VAT not included",
      badge: "Primary Dose",
      badgeColor: "bg-[#51b255] text-white",
      included: [
        "Full physical examination",
        "Primary PCH (Distemper, Calici, Herpes)",
        "Feline health assessment",
        "Digital medical record",
        "Deworming treatment",
        "Veterinarian consultation"
      ]
    },
    {
      title: "Feline Annual Booster",
      price: "490 AED",
      vat: "VAT not included",
      badge: "Annual Protection",
      badgeColor: "bg-[#ec558b] text-white",
      included: [
        "Full physical examination",
        "Annual PCH booster vaccine",
        "Rabies vaccination",
        "Dubai Municipality tag registration",
        "Official Municipality tag",
        "Deworming treatment",
        "Comprehensive feline checkup"
      ]
    },
    {
      title: "Cat Smile Dental Package",
      price: "1,348 AED",
      vat: "VAT not included",
      badge: "Complete Dental",
      badgeColor: "bg-sky-600 text-white",
      included: [
        "Professional feline scale and polish",
        "General anesthesia & monitoring",
        "Pre-anesthetic blood panel (IDEXX SDMA)",
        "IV cannula & fluid therapy",
        "Day hospitalization",
        "Post-op pain management",
        "Free 7-day follow-up checkup"
      ]
    }
  ];

  const faqs = [
    {
      q: "What is included in the health packages?",
      a: "Our health packages combine essential veterinary services including comprehensive physical examinations, core vaccinations, Rabies protection, Dubai Municipality tags, deworming, and digital record maintenance at discounted bundled prices."
    },
    {
      q: "When should my pet receive their booster shot?",
      a: "Booster vaccinations are typically due annually (12 months after the initial primary series). We send automated digital reminders when your pet's boosters are due."
    },
    {
      q: "Can I customize a package for my pet's specific needs?",
      a: "Yes! During your checkup, our veterinarians can add specialized services such as Kennel Cough vaccines, Feline Leukemia testing, or Microchipping tailored to your pet's lifestyle."
    },
    {
      q: "How do I book a health package appointment online?",
      a: "Simply click 'Book Now' on your preferred package or use our 60-second online booking portal. You can also call us 24/7 at 971 4 5971 000."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Nicoletta Nica",
      title: "Veterinarian",
      image: "https://images.unsplash.com/photo-1594824813571-2b533411efa0?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Dr. Manuel De Oliveira",
      title: "Veterinarian",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Dr. Eric Rosenberg",
      title: "Specialist Veterinary Surgeon",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const currentPackages = petType === 'Dog' ? dogPackages : catPackages;

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <img 
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200" 
            alt="Modern Vet Clinic Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="bg-[#fff8f2]/95 dark:bg-slate-900/80 border border-orange-100/80 dark:border-slate-800 rounded-sm p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-8">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-400 lg:dark:text-slate-400 mb-2 block">
              ModernVet &gt; Packages
            </span>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-bold mb-4">
              Health Packages
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-6">
              Vaccinations, dental care, daily check-ups and preventative health packages carefully designed to ensure your pet maintains a long, healthy life. Explore our range of bundled health packages created for maximum value and comprehensive protection.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://modernvet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ec558b] hover:bg-[#d84074] lg:bg-black lg:hover:bg-slate-800 text-white lg:dark:bg-white lg:dark:text-slate-950 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md rounded-sm"
              >
                <Calendar size={16} /> Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 lg:border-slate-400/50 lg:dark:border-slate-700 bg-slate-950/40 lg:bg-white/40 lg:dark:bg-slate-900/40 text-white lg:text-slate-800 lg:dark:text-slate-200 hover:bg-white/20 lg:hover:bg-white lg:dark:hover:bg-slate-800 text-[11px] font-bold uppercase tracking-[0.1em] transition-all rounded-sm"
              >
                <Phone size={16} /> Call : 971 4 5971 000
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-orange-100 dark:bg-slate-800 flex items-center justify-center p-4">
              <Stethoscope size={72} className="text-[#ec558b]" />
            </div>
          </div>

        </div>
      </section>

      {/* Select Pet & Package Category */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
          Select Your Pet and Book the Right Package
        </h2>

        {/* Pet Toggle */}
        <div className="inline-flex p-1 rounded-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
          <button
            onClick={() => setPetType('Dog')}
            className={`px-8 py-2.5 rounded-sm text-xs font-bold transition-all flex items-center gap-2 ${
              petType === 'Dog'
                ? 'bg-[#1b2b4b] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Dog size={16} /> Dogs
          </button>
          <button
            onClick={() => setPetType('Cat')}
            className={`px-8 py-2.5 rounded-sm text-xs font-bold transition-all flex items-center gap-2 ${
              petType === 'Cat'
                ? 'bg-[#1b2b4b] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Cat size={16} /> Cats
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {['Preventive Packages', 'Spay & Neuter Packages', 'Smile Packages (Dental)'].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`px-7 py-3 rounded-sm text-xs font-bold transition-all ${
                activeTab === tab
                  ? 'bg-[#ec558b] text-white shadow-md'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#ec558b]/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          {currentPackages.map((pkg, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200/80 dark:border-slate-800 p-8 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-[#ec558b]/40 transition-all"
            >
              <div className={`absolute top-0 right-0 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-bl-sm ${pkg.badgeColor}`}>
                {pkg.badge}
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2 pt-2">
                  {pkg.title}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-serif font-bold text-[#ec558b] block">{pkg.price}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{pkg.vat}</span>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
                    What's included:
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={16} className="text-[#51b255] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a 
                  href="https://modernvet.com/booking/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm shadow-md transition-all block"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Protection Banner */}
        <div className="bg-[#fff2f5] dark:bg-rose-950/20 border border-[#fcd5e2] dark:border-rose-900/40 rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm mb-16">
          <div className="text-left">
            <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
              Ensure your pet’s complete protection
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Explore our range of comprehensive medical & wellness packages.
            </p>
          </div>
          <a 
            href="https://modernvet.com/booking/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-md block shrink-0"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-[#ec558b]" /> : <ChevronDown size={18} />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
          Meet the Team and Schedule your Appointment
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          Our team of experienced Dubai veterinarians is dedicated to keeping your pet healthy and thriving at every life stage.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 p-6 text-center shadow-sm">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-2 border-[#ec558b]"
              />
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-slate-100">{member.name}</h3>
              <span className="text-xs text-[#51b255] font-semibold">{member.title}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
