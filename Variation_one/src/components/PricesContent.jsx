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
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <img 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1200" 
            alt="Transparent Veterinary Pricing Dubai" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Transparent & Upfront
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white lg:text-slate-900 dark:text-slate-100 font-normal leading-tight mb-6">
              Costs & Service Pricing
            </h1>
            <p className="text-slate-200 lg:text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              All services are clearly listed with a price, which helps you know what you will be charged before the appointment occurs. Each of the routine and surgical services includes the required examinations, monitoring, and follow-up (after-care) for the safety and well-being of your pet.
            </p>
            <p className="text-slate-200 lg:text-slate-600 dark:text-slate-400 text-base font-semibold leading-relaxed mb-8">
              All of our services have clear pricing in advance, so you'll always know what to expect. No surprises on the day.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://modernvet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                <Calendar size={16} /> Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
              >
                <Phone size={16} /> Call : 971 4 5971 000
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=900" 
                alt="Transparent Veterinary Pricing Dubai" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#9cbc65] uppercase tracking-wider mb-1">
                  No Hidden Surprises
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Clear Prices & All-Inclusive Care
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Category Tabs & Pricing Cards Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
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
                    href="https://modernvet.com/booking/" 
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
