import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Heart, 
  Eye, 
  Brain, 
  Scissors, 
  Syringe, 
  Truck, 
  Activity, 
  Stethoscope, 
  Dog, 
  Cat, 
  Award
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function AllServicesContent() {

  const wellnessServices = [
    {
      title: "Pet Dental Care",
      badge: "Preventive",
      icon: <Sparkles className="text-[#FA4D80]" size={24} />,
      desc: "Professional dental scaling, polishing, and extractions — dental disease affects over 80% of pets by age three. We make oral health a priority.",
      link: "/ourservice/dental"
    },
    {
      title: "Pet Vaccinations",
      badge: "Preventive",
      icon: <Syringe className="text-[#58B66E]" size={24} />,
      desc: "Core and lifestyle vaccinations using Zoetis vaccines — protecting your pet from serious infectious diseases, tailored to age and lifestyle.",
      link: "/ourservice/vaccinations"
    },
    {
      title: "Dog Vaccinations",
      badge: "Preventive",
      icon: <Dog className="text-amber-600" size={24} />,
      desc: "Complete canine vaccination schedules including rabies, DHPPiL, and kennel cough — with official registration included.",
      link: "/ourservice/vaccinations"
    },
    {
      title: "Cat Vaccinations",
      badge: "Preventive",
      icon: <Cat className="text-[#4FA3DE]" size={24} />,
      desc: "Essential feline vaccines — FVRCP, FeLV, and rabies — to keep your cat protected from preventable diseases throughout life.",
      link: "/ourservice/vaccinations"
    },
    {
      title: "Wellness Exams",
      badge: "Preventive",
      icon: <Stethoscope className="text-[#58B66E]" size={24} />,
      desc: "Comprehensive head-to-tail health check-ups to detect early signs of illness, review nutrition, and keep your pet thriving.",
      link: "/ourservice/vaccinations"
    },
    {
      title: "Pet Consultation",
      badge: "Preventive",
      icon: <Activity className="text-[#FA4D80]" size={24} />,
      desc: "One-on-one time with our expert vets to discuss your pet’s health, diet, behaviour, or any concerns — thorough and unhurried.",
      link: "/contact"
    },
    {
      title: "Vet for Dog",
      badge: "Preventive",
      icon: <Dog className="text-[#FA4D80]" size={24} />,
      desc: "Dedicated canine veterinary care from puppy to senior — covering check-ups, illness, nutrition, parasite control, and wellness.",
      link: "/24-7-emergency-care-at-your-door"
    },
    {
      title: "Vet for Cat",
      badge: "Preventive",
      icon: <Cat className="text-[#58B66E]" size={24} />,
      desc: "Cat-centred veterinary care with anxiety-free handling, wellness monitoring, and consultations tailored to felines.",
      link: "/24-7-emergency-care-at-your-door"
    }
  ];

  const surgeryServices = [
    {
      title: "Spay & Neuter",
      badge: "Surgery",
      icon: <Scissors className="text-[#FA4D80]" size={24} />,
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
      icon: <Cat className="text-[#FA4D80]" size={24} />,
      desc: "Gentle, stress-minimised procedures for cats, with tailored anaesthetic protocols and low-stress recovery environments.",
      link: "/ourservice/spay-neuter"
    },
    {
      title: "Soft Tissue & Orthopedics",
      badge: "Surgery",
      icon: <ShieldCheck className="text-[#58B66E]" size={24} />,
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
      icon: <Eye className="text-[#4FA3DE]" size={24} />,
      desc: "Expert eye care covering cataracts, glaucoma, corneal injuries, and conjunctivitis — protecting your pet’s vision with precision.",
      link: "/ourservice/ophthalmology"
    },
    {
      title: "Oncology in Pets",
      badge: "Specialist",
      icon: <Activity className="text-[#FA4D80]" size={24} />,
      desc: "Advanced cancer diagnosis and treatment including tumour surgery, chemotherapy, and palliative care with compassionate support.",
      link: "/ourservice/neurology"
    },
    {
      title: "Dermatology",
      badge: "Specialist",
      icon: <ShieldCheck className="text-[#58B66E]" size={24} />,
      desc: "Diagnosis and management of skin, coat, ear, and nail conditions — including allergies, hot spots, mange, and chronic skin infections.",
      link: "/ourservice/neurology"
    }
  ];

  const rehabServices = [
    {
      title: "Physiotherapy",
      badge: "Rehab",
      icon: <Activity className="text-[#58B66E]" size={24} />,
      desc: "Structured rehabilitation using therapeutic exercises, massage, and electrotherapy — ideal for post-surgical recovery and joint disease.",
      link: "/ourservice/neurology"
    },
    {
      title: "Hydrotherapy for Pets",
      badge: "Rehab",
      icon: <Sparkles className="text-[#4FA3DE]" size={24} />,
      desc: "Supervised warm-water therapy for rehabilitation from injury or surgery, arthritis management, and improving muscle tone gently.",
      link: "/ourservice/neurology"
    },
    {
      title: "Holistic Medicine",
      badge: "Rehab",
      icon: <Heart className="text-[#FA4D80]" size={24} />,
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
      icon: <Truck className="text-[#FA4D80]" size={24} />,
      desc: "A fully equipped veterinary clinic that comes to you — vaccinations, consultations, and check-ups delivered at your location.",
      link: "/ourservice/mobile-clinic"
    },
    {
      title: "Pet Taxi",
      badge: "Convenience",
      icon: <Truck className="text-[#58B66E]" size={24} />,
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
      icon: <Sparkles className="text-[#4FA3DE]" size={24} />,
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
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-[#FA4D80]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFCF8] dark:bg-slate-800/80 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#E8F7EC] dark:bg-slate-800 text-[10px] font-bold text-[#58B66E] uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-[#FA4D80] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <Link 
                to={item.link} 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FA4D80] group-hover:translate-x-1 transition-transform uppercase tracking-wider"
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
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Header */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#58B66E] mb-3 block">
              MULTI-SPECIALIST VETERINARY CARE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-bold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              From routine wellness visits to complex specialist care — YourHomeVet delivers compassionate, expert veterinary medicine delivered directly to your doorstep, 24 hours a day, every day of the year.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Calendar size={16} /> Book An Appointment
              </a>
              <a 
                href="tel:02081234567" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-[#FA4D80] text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <Phone size={16} /> Call : 0208 123 4567
              </a>
            </div>
          </div>

          {/* Desktop Image Banner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 aspect-[4/3] group">
              <LazyImage 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=900" 
                alt="Veterinary Care at YourHomeVet" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium backdrop-blur-md bg-slate-900/80 p-4 rounded-2xl border border-white/10">
                <span className="text-[#58B66E] font-bold block text-[11px] uppercase tracking-widest mb-0.5">24/7 Veterinary Excellence</span>
                Multi-specialist mobile veterinary care delivered directly to your home
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Emergency Pet Care Dark Callout Banner */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="bg-[#0f1d13] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#58B66E]/40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#58B66E] font-bold text-xs uppercase tracking-widest mb-3">
              <Sparkles size={16} /> Immediate Critical Care
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              24/7 Emergency Pet Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Round-the-clock emergency and critical care for pets in crisis. Our rapid response unit and specialist emergency team are ready at all times — because emergencies don’t wait.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a 
              href="tel:02081234567" 
              className="px-6 py-3.5 rounded-full bg-[#58B66E] hover:bg-[#4ea863] text-white text-xs font-bold flex items-center gap-2 shadow-md uppercase tracking-wider"
            >
              <Phone size={14} /> 0208 123 4567 (24/7)
            </a>
            <Link 
              to="/ourservice/emergency" 
              className="px-6 py-3.5 rounded-full border border-white/40 text-white hover:bg-white/10 text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider"
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
        {renderSection('Specialist Medicine', 'Advanced diagnostics and treatment from leading veterinary specialists', specialistServices)}
        {renderSection('Rehabilitation', 'Evidence-based programmes to restore mobility, reduce pain, and improve quality of life', rehabServices)}
        {renderSection('Grooming & Convenience', 'Full-circle care — home visits, transport, relocation, and more', groomingServices)}
      </section>

    </div>
  );
}
