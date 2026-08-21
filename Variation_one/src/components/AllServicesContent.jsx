import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  AlertTriangle, 
  Heart, 
  CheckCircle2, 
  Eye, 
  Brain, 
  Scissors, 
  Syringe, 
  Truck, 
  Activity, 
  Stethoscope, 
  Dog, 
  Cat, 
  Star,
  Award,
  Zap,
  PawPrint
} from 'lucide-react';
import allServicesHeroImg from '../assets/hero_care.png';
import centerLogo from '../assets/center_logo.jpg';

function ServiceCategorySection({ categoryTitle, subtitle, list }) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleLimit = isMobile ? 3 : 6;
  const displayedList = showAll ? list : list.slice(0, visibleLimit);

  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
          {categoryTitle}
        </h2>
        {subtitle && (
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm italic">
            {subtitle}
          </p>
        )}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedList.map((item, idx) => (
            <motion.div 
              key={item.title || idx} 
              layout
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="p-7 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#ec558b]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-sm bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-[#ec558b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <Link 
                to={item.link} 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ec558b] group-hover:translate-x-1 transition-transform"
              >
                Learn More <ChevronRight size={14} />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length > visibleLimit && (
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-[#ec558b] hover:text-white dark:bg-slate-800 dark:hover:bg-[#ec558b] text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <ChevronUp size={15} />
              </>
            ) : (
              <>
                <span>View More ({list.length - visibleLimit} more)</span>
                <ChevronDown size={15} />
              </>
            )}
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default function AllServicesContent() {

  const wellnessServices = [
    {
      title: "Pet Dental Care",
      badge: "Preventive",
      icon: <Sparkles className="text-[#ec558b]" size={24} />,
      desc: "Professional dental scaling, polishing, and extractions — dental disease affects over 80% of pets by age three. We make oral health a priority.",
      link: "/ourservice/dental"
    },
    {
      title: "Pet Vaccinations",
      badge: "Preventive",
      icon: <Syringe className="text-[#51b255]" size={24} />,
      desc: "Core and lifestyle vaccinations using Zoetis vaccines — protecting your pet from serious infectious diseases, tailored to age and lifestyle.",
      link: "/ourservice/vaccinations"
    },
    {
      title: "Dog Vaccinations",
      badge: "Preventive",
      icon: <Dog className="text-amber-600" size={24} />,
      desc: "Complete canine vaccination schedules including rabies, DHPPiL, and kennel cough — with Dubai Municipality registration included.",
      link: "/ourservice/vaccinations"
    },
    {
      title: "Cat Vaccinations",
      badge: "Preventive",
      icon: <Cat className="text-sky-600" size={24} />,
      desc: "Essential feline vaccines — FVRCP, FeLV, and rabies — to keep your cat protected from preventable diseases throughout life.",
      link: "/ourservice/vaccinations"
    },
    {
      title: "Wellness Exams",
      badge: "Preventive",
      icon: <Stethoscope className="text-emerald-600" size={24} />,
      desc: "Comprehensive head-to-tail health check-ups to detect early signs of illness, review nutrition, and keep your pet thriving.",
      link: "/ourservice/vaccinations"
    },
    {
      title: "Pet Consultation",
      badge: "Preventive",
      icon: <Activity className="text-rose-500" size={24} />,
      desc: "One-on-one time with our expert vets to discuss your pet’s health, diet, behaviour, or any concerns — thorough and unhurried.",
      link: "/prices"
    },
    {
      title: "Vet for Dog",
      badge: "Preventive",
      icon: <Dog className="text-[#ec558b]" size={24} />,
      desc: "Dedicated canine veterinary care from puppy to senior — covering check-ups, illness, nutrition, parasite control, and wellness.",
      link: "/24-7-emergency-care-at-your-door"
    },
    {
      title: "Vet for Cat",
      badge: "Preventive",
      icon: <Cat className="text-[#51b255]" size={24} />,
      desc: "Cat-centred veterinary care with anxiety-free handling, wellness monitoring, and consultations tailored to felines.",
      link: "/24-7-emergency-care-at-your-door"
    }
  ];

  const surgeryServices = [
    {
      title: "Spay & Neuter",
      badge: "Surgery",
      icon: <Scissors className="text-[#ec558b]" size={24} />,
      desc: "Safe, routine sterilisation for dogs and cats by experienced surgeons, helping to prevent disease and support responsible ownership.",
      link: "/ourservice/spay-neuter"
    },
    {
      title: "Laparoscopic Spay",
      badge: "Surgery",
      icon: <Sparkles className="text-indigo-600" size={24} />,
      desc: "Minimally invasive keyhole spay surgery — smaller incisions, significantly less pain, and faster recovery compared to traditional spays.",
      link: "/ourservice/spay-neuter"
    },
    {
      title: "Dog Spaying & Neutering",
      badge: "Surgery",
      icon: <Dog className="text-amber-600" size={24} />,
      desc: "Breed and size-specific spay/neuter protocols for dogs, with pre-surgical assessments and attentive post-operative recovery care.",
      link: "/ourservice/spay-neuter"
    },
    {
      title: "Cat Spaying & Neutering",
      badge: "Surgery",
      icon: <Cat className="text-rose-500" size={24} />,
      desc: "Gentle, stress-minimised procedures for cats, with tailored anaesthetic protocols and low-stress recovery environments.",
      link: "/ourservice/spay-neuter"
    },
    {
      title: "Soft Tissue & Orthopedics",
      badge: "Surgery",
      icon: <ShieldCheck className="text-emerald-600" size={24} />,
      desc: "Advanced surgical treatment for fractures, torn ligaments, joint disease, and internal conditions in fully equipped surgical suites.",
      link: "/ourservice/emergency"
    }
  ];

  const specialistServices = [
    {
      title: "Neurology",
      badge: "Specialist",
      icon: <Brain className="text-purple-600" size={24} />,
      desc: "Specialist assessment and treatment of neurological conditions including seizures, spinal disease, disc herniation, and vestibular disorders.",
      link: "/ourservice/neurology"
    },
    {
      title: "Cardiology",
      badge: "Specialist",
      icon: <Heart className="text-rose-600" size={24} />,
      desc: "Comprehensive heart health care — echocardiography, ECG, and management of murmurs, arrhythmias, and heart failure.",
      link: "/ourservice/neurology"
    },
    {
      title: "Ophthalmology",
      badge: "Specialist",
      icon: <Eye className="text-sky-600" size={24} />,
      desc: "Expert eye care covering cataracts, glaucoma, corneal injuries, and conjunctivitis — protecting your pet’s vision with precision.",
      link: "/ourservice/ophthalmology"
    },
    {
      title: "Oncology in Pets",
      badge: "Specialist",
      icon: <Activity className="text-[#ec558b]" size={24} />,
      desc: "Advanced cancer diagnosis and treatment including tumour surgery, chemotherapy, and palliative care with compassionate support.",
      link: "/ourservice/neurology"
    },
    {
      title: "Dermatology",
      badge: "Specialist",
      icon: <ShieldCheck className="text-[#51b255]" size={24} />,
      desc: "Diagnosis and management of skin, coat, ear, and nail conditions — including allergies, hot spots, mange, and chronic skin infections.",
      link: "/ourservice/neurology"
    }
  ];

  const rehabServices = [
    {
      title: "Physiotherapy",
      badge: "Rehab",
      icon: <Activity className="text-[#51b255]" size={24} />,
      desc: "Structured rehabilitation using therapeutic exercises, massage, and electrotherapy — ideal for post-surgical recovery and joint disease.",
      link: "/ourservice/neurology"
    },
    {
      title: "Hydrotherapy for Pets",
      badge: "Rehab",
      icon: <Sparkles className="text-sky-600" size={24} />,
      desc: "Supervised warm-water therapy for rehabilitation from injury or surgery, arthritis management, and improving muscle tone gently.",
      link: "/ourservice/neurology"
    },
    {
      title: "Holistic Medicine",
      badge: "Rehab",
      icon: <Heart className="text-[#ec558b]" size={24} />,
      desc: "Complementary therapies including acupuncture, herbal medicine, and nutritional therapy supporting overall wellbeing.",
      link: "/ourservice/neurology"
    }
  ];

  const groomingServices = [
    {
      title: "Grooming",
      badge: "Care",
      icon: <Scissors className="text-amber-600" size={24} />,
      desc: "Professional full-service grooming — styling, bathing, blow-drying, nail trimming, ear cleaning, and deshedding treatments.",
      link: "/contact"
    },
    {
      title: "Mobile Clinic",
      badge: "Convenience",
      icon: <Truck className="text-[#ec558b]" size={24} />,
      desc: "A fully equipped veterinary clinic that comes to you — vaccinations, consultations, and check-ups delivered at your location across Dubai.",
      link: "/ourservice/mobile-clinic"
    },
    {
      title: "Pet Taxi",
      badge: "Convenience",
      icon: <Truck className="text-[#51b255]" size={24} />,
      desc: "Safe, stress-free pet transport to and from any YourHomeVet location — climate-controlled vehicles with trained handlers.",
      link: "/ourservice/mobile-clinic"
    },
    {
      title: "Pet Relocation",
      badge: "Convenience",
      icon: <Award className="text-indigo-600" size={24} />,
      desc: "Complete international pet travel support — health certificates, microchipping, export documentation, and smooth coordination.",
      link: "/contact"
    },
    {
      title: "Food Delivery",
      badge: "Convenience",
      icon: <Sparkles className="text-sky-600" size={24} />,
      desc: "Vet-recommended premium pet food, prescription diets, and health supplements delivered directly to your door.",
      link: "/contact"
    },
    {
      title: "Pet Welfare",
      badge: "Welfare",
      icon: <Heart className="text-rose-500" size={24} />,
      desc: "Welfare assessments and support for rescued, rehomed, or at-risk animals — ensuring quality care is accessible.",
      link: "/about"
    }
  ];

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Split Hero Section (Homepage Hero Style) */}
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
              MULTI-SPECIALIST VETERINARY CARE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-white leading-tight mb-4">
              Our Veterinary Services
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-8">
              From routine wellness visits to complex specialist surgery — YourHomeVet delivers compassionate, expert veterinary medicine across Dubai, 24 hours a day.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/book-an-appointment" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-md"
              >
                <Calendar size={16} /> Book An Appointment
              </Link>
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
            src={allServicesHeroImg} 
            alt="Veterinary Care at YourHomeVet Dubai" 
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

      {/* Emergency Pet Care Dark Callout Banner */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="bg-[#1b2b4b] text-white rounded-sm p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">
              <Sparkles size={16} /> Immediate Critical Care
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Emergency Pet Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Round-the-clock emergency and critical care for pets in crisis. Our ICU-equipped hospital and specialist emergency team are ready at all times — because emergencies don’t wait.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a 
              href="tel:97145971000" 
              className="px-6 py-3 rounded-sm bg-[#51b255] text-white text-xs font-bold flex items-center gap-2 shadow-md hover:bg-[#439c47]"
            >
              <Phone size={14} /> 971 4 5971 000 (24/7)
            </a>
            <Link 
              to="/ourservice/emergency" 
              className="px-6 py-3 rounded-sm border border-white/60 text-white hover:bg-white/10 text-xs font-bold flex items-center gap-1.5"
            >
              Learn More <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Categories */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ServiceCategorySection categoryTitle="Wellness & Prevention" subtitle="Proactive health management to keep your pet thriving at every life stage" list={wellnessServices} />
        <ServiceCategorySection categoryTitle="Surgery & Procedures" subtitle="Board-certified surgeons delivering safe, precise, minimally invasive care" list={surgeryServices} />
        <ServiceCategorySection categoryTitle="Specialist Medicine" subtitle="Advanced diagnostics and treatment from Dubai’s leading veterinary specialists" list={specialistServices} />
        <ServiceCategorySection categoryTitle="Rehabilitation" subtitle="Evidence-based programmes to restore mobility, reduce pain, and improve quality of life" list={rehabServices} />
        <ServiceCategorySection categoryTitle="Grooming & Convenience" subtitle="Full-circle care — home visits, transport, relocation, and more" list={groomingServices} />
      </section>

      {/* Book Consultation Footer Banner */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#fff2f5] dark:bg-rose-950/20 border border-[#fcd5e2] dark:border-rose-900/40 rounded-sm p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
              Book Your Pet’s Consultation Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Online booking takes less than 60 seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link 
              to="/book-an-appointment" 
              className="px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all"
            >
              Book An Appointment
            </Link>
            <a 
              href="tel:97145971000" 
              className="px-8 py-4 rounded-sm bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all"
            >
              Call : 971 4 5971 000
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
