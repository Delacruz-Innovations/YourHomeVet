import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
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
  Zap
} from 'lucide-react';

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
      desc: "Safe, stress-free pet transport to and from any Modern Vet location — climate-controlled vehicles with trained handlers.",
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

  const renderSection = (categoryTitle, subtitle, list) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, idx) => (
            <div 
              key={idx} 
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
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Header */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200" 
            alt="Dog group veterinary services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-[#ec558b] lg:dark:text-[#ec558b] mb-3 block">
              MULTI-SPECIALIST VETERINARY CARE
            </span>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-8">
              From routine wellness visits to complex specialist care — Modern Vet delivers compassionate, expert veterinary medicine across 6+ Dubai locations, 24 hours a day, every day of the year.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://modernvet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] lg:bg-black lg:hover:bg-slate-800 text-white lg:dark:bg-white lg:dark:text-slate-950 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
              >
                <Calendar size={16} /> Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm border border-white/30 lg:border-slate-400/50 lg:dark:border-slate-700 bg-slate-950/40 lg:bg-slate-900 lg:dark:bg-slate-900/40 text-white lg:text-slate-800 lg:dark:text-slate-200 hover:bg-white/20 lg:hover:bg-white lg:dark:hover:bg-slate-800 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
              >
                <Phone size={16} /> Call : 971 4 5971 000
              </a>
            </div>
          </div>

          {/* Desktop Image Banner (Hidden on Mobile & Tablet) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=900" 
                alt="Veterinary Care at Modern Vet Dubai" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium backdrop-blur-sm bg-slate-900/80 p-3.5 rounded-sm border border-white/10">
                <span className="text-[#9cbc65] font-bold block text-[11px] uppercase tracking-widest mb-0.5">24/7 Veterinary Excellence</span>
                Multi-specialist veterinary hospital & mobile clinics across Dubai
              </div>
            </div>
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
        {renderSection('Wellness & Prevention', 'Proactive health management to keep your pet thriving at every life stage', wellnessServices)}
        {renderSection('Surgery & Procedures', 'Board-certified surgeons delivering safe, precise, minimally invasive care', surgeryServices)}
        {renderSection('Specialist Medicine', 'Advanced diagnostics and treatment from Dubai’s leading veterinary specialists', specialistServices)}
        {renderSection('Rehabilitation', 'Evidence-based programmes to restore mobility, reduce pain, and improve quality of life', rehabServices)}
        {renderSection('Grooming & Convenience', 'Full-circle care — home visits, transport, relocation, and more', groomingServices)}
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
            <a 
              href="https://modernvet.com/booking/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all"
            >
              Book An Appointment
            </a>
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
