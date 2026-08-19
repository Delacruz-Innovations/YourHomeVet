import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Tag, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  ChevronRight,
  Info,
  DollarSign
} from 'lucide-react';
import LazyImage from './ui/LazyImage';
import pricesHeroImg from '../assets/hero_care.png';
import centerLogo from '../assets/center_logo.jpg';
import { PawPrint } from 'lucide-react';

export default function PricesContent() {
  const [activeCategory, setActiveCategory] = useState('Core Services');

  const categories = [
    'Core Services',
    'Surgical Services',
    'Dental Care',
    'Specialized Services'
  ];

  const coreServices = [
    {
      title: "Vaccination Packages",
      badge: "Popular Package",
      badgeColor: "bg-[#ec558b] text-white",
      desc: "The complete vaccine package protects your pet from serious diseases such as rabies, panleucopaenia, parvovirus, etc.",
      included: [
        "Veterinary consultation",
        "Core vaccines",
        "Full physical examination",
        "Digital reminders for future vaccinations",
        "Municipality Tag",
        "Deworming"
      ],
      price: "From 349 AED",
      vatNote: "VAT not included"
    },
    {
      title: "Consultation",
      badge: "Essential Checkup",
      badgeColor: "bg-[#51b255] text-white",
      desc: "Annual check-ups, vomiting, diarrhea, loss of appetite or any health-related concerns that need to be addressed with your veterinarian. It includes a full physical examination and all recommended next steps.",
      included: [
        "Full physical examination",
        "Discussion of symptoms and concerns",
        "All recommended next steps"
      ],
      price: "From 249 AED",
      vatNote: "VAT not included"
    },
    {
      title: "Registration Tag",
      badge: "Dubai Municipality",
      badgeColor: "bg-sky-600 text-white",
      desc: "Tags for registration of pets with the Dubai Municipality are handled by us for your convenience.",
      included: [
        "Official pet tag registration with Dubai Municipality"
      ],
      price: "84 AED",
      vatNote: "VAT not included"
    }
  ];

  const surgicalServices = [
    {
      title: "Male Castration",
      badge: "Surgery",
      badgeColor: "bg-[#51b255] text-white",
      desc: "Safe surgical neutering under general anesthesia inclusive of pre-op checkup, monitoring, and medication.",
      included: [
        "Pre-anesthetic evaluation",
        "General anesthesia & monitoring",
        "Post-surgical pain management & follow-up"
      ],
      price: "From 1,449 AED",
      vatNote: "VAT not included"
    },
    {
      title: "Female Spay",
      badge: "Surgery",
      badgeColor: "bg-[#ec558b] text-white",
      desc: "Comprehensive surgical spay procedure including complete tissue removal, anesthesia monitoring, and aftercare.",
      included: [
        "Full veterinary examination",
        "Sterile operating room & anesthesia",
        "Post-op checkup & recovery guidance"
      ],
      price: "From 1,849 AED",
      vatNote: "VAT not included"
    }
  ];

  const dentalServices = [
    {
      title: "Dog Smile Dental Package",
      badge: "Dental Cleaning",
      badgeColor: "bg-[#ec558b] text-white",
      desc: "Comprehensive dog dental scaling, polishing, IV fluids, pre-anesthetic blood testing, and monitoring.",
      included: [
        "Dental Scale and Polish",
        "IV Cannula & Fluid IV Therapy",
        "Blood Collection & Lab IDEXX Chem 10 & CBC",
        "Hospitalization & Anesthesia"
      ],
      price: "From 1,500 AED",
      vatNote: "VAT not included"
    },
    {
      title: "Cat Smile Dental Package",
      badge: "Dental Cleaning",
      badgeColor: "bg-[#51b255] text-white",
      desc: "Full oral health package for cats including scaling, polishing, blood work, IV fluids, and anesthesia.",
      included: [
        "Dental Scale and Polish",
        "IV Cannula placing & IV Fluid Therapy",
        "Lab IDEXX Catalyst SDMA & Electrolytes",
        "Anesthesia & Sedation"
      ],
      price: "1,348 AED",
      vatNote: "VAT not included"
    }
  ];

  const specializedServices = [
    {
      title: "Neurology Consultation",
      badge: "Specialist Care",
      badgeColor: "bg-purple-600 text-white",
      desc: "In-depth examination by specialized veterinary neurologists for seizures, spinal problems, and brain disorders.",
      included: [
        "Reflex, coordination & cranial nerve assessment",
        "Custom diagnostic roadmap (MRI/CT referral)",
        "Individualized treatment planning"
      ],
      price: "On Consultation",
      vatNote: "VAT not included"
    },
    {
      title: "Ophthalmology Examination",
      badge: "Eye Specialist",
      badgeColor: "bg-sky-600 text-white",
      desc: "Targeted eye testing using slit lamp, tonometry pressure measurement, and fluorescein staining.",
      included: [
        "Intraocular pressure evaluation",
        "Slit lamp biomicroscopy",
        "Tear production & corneal testing"
      ],
      price: "On Consultation",
      vatNote: "VAT not included"
    },
    {
      title: "CT Scan & Diagnostic Imaging",
      badge: "Diagnostics",
      badgeColor: "bg-indigo-600 text-white",
      desc: "Computed tomography imaging with high-resolution contrast and specialist radiology report.",
      included: [
        "High-definition 3D CT acquisition",
        "Contrast enhancement study",
        "Board-certified radiologist analysis"
      ],
      price: "From 2,800 AED",
      vatNote: "VAT not included"
    }
  ];

  const getActiveList = () => {
    switch (activeCategory) {
      case 'Surgical Services':
        return surgicalServices;
      case 'Dental Care':
        return dentalServices;
      case 'Specialized Services':
        return specializedServices;
      default:
        return coreServices;
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
              Transparent & Upfront
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4">
              Costs & Service Pricing
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              All services are clearly listed with upfront prices. Each service includes the required examinations, monitoring, and aftercare.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-sm leading-relaxed mb-8 hidden sm:block">
              No hidden fees, no surprise add-ons. Clear, transparent healthcare you can trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://yourhomevet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-md"
              >
                <Calendar size={16} /> Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border-2 border-[#9cbc65] text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white text-xs font-bold uppercase tracking-wide transition-all bg-slate-950/40 lg:bg-transparent"
              >
                <Phone size={16} /> Call: 971 4 5971 000
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto">
          <img 
            src={pricesHeroImg} 
            alt="Transparent Veterinary Pricing Dubai" 
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

      {/* Category Tabs & Pricing Cards Section */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-7 py-3 rounded-sm text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#ec558b] text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#ec558b]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getActiveList().map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200/80 dark:border-slate-800 p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#ec558b]/40 transition-all">
                <div className={`absolute top-0 right-0 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-bl-sm ${item.badgeColor}`}>
                  {item.badge}
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3 pt-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
                      What’s included:
                    </h4>
                    <ul className="space-y-2.5">
                      {item.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 size={16} className="text-[#9cbc65] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mb-6">
                    <span className="text-3xl font-serif font-bold text-[#ec558b] block">
                      {item.price}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.vatNote}
                    </span>
                  </div>

                  <a 
                    href="https://yourhomevet.com/booking/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-md block"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote Notice */}
          <div className="max-w-3xl mx-auto p-6 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <Info size={24} className="text-[#ec558b] shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Please note:</strong> Prices shown do not include Value Added Tax (VAT). We offer comprehensive packages of services – please visit our booking portal or contact us for details on combined services purchased as an all-inclusive package.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
