import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Check,
  ChevronRight,
  Clock,
  Activity,
  Award
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import LazyImage from './ui/LazyImage';
import PetDentalInfographic from './PetDentalInfographic';

// CarouselSection Component: Standard horizontal carousel with next/prev buttons & swipe support (no scroll locking)
const SkiperPinnedCarousel = ({
  items,
  title,
  subtitle,
  badgeText,
  badgeColor = "text-[#9cbc65]",
  sectionId
}) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      id={sectionId}
      className="py-8 sm:py-4 w-full bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 overflow-hidden"
    >
      <div className="w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 shrink-0">
          {badgeText && (
            <span className={`font-bold text-xs tracking-widest uppercase mb-2 block ${badgeColor}`}>
              {badgeText}
            </span>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-slate-100 mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <Carousel
          setApi={setApi}
          className="w-full relative px-2 sm:px-4"
          opts={{
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="flex h-[440px] sm:h-[500px] lg:h-[520px] w-full py-4">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="relative flex h-full w-full basis-[85%] sm:basis-[48%] md:basis-[36%] lg:basis-[30%] xl:basis-[26%] items-center justify-center cursor-pointer"
              >
                <motion.div
                  initial={false}
                  animate={{
                    clipPath:
                      current !== index
                        ? "inset(3% 0% 3% 0% round 0.125rem)"
                        : "inset(0% 0% 0% 0% round 0.125rem)",
                    scale: current === index ? 1 : 0.97
                  }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-full w-full overflow-hidden rounded-sm bg-slate-900 shadow-2xl border-0"
                >
                  {/* Taller Full-Bleed Background Image */}
                  <img
                    src={item.image}
                    alt={item.title || item.text}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent transition-opacity duration-300 group-hover:from-slate-950/95 group-hover:via-slate-950/75" />

                  {/* Card Content */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-tight mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                      {item.title || item.text}
                    </h3>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-2 border-t border-white/20">
                        {item.desc || item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Next & Previous Buttons */}
          <div className="hidden sm:block">
            <CarouselPrevious className="left-2 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg h-10 w-10" />
            <CarouselNext className="right-2 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg h-10 w-10" />
          </div>
        </Carousel>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? 'w-6 bg-[#9cbc65]' : 'w-2 bg-slate-300 dark:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function DentalContent() {
  const [selectedDogWeight, setSelectedDogWeight] = useState('0-10');

  const dogPrices = {
    '0-10': '1,500 AED',
    '11-24': '1,750 AED',
    '25-40': '2,100 AED'
  };

  const services = [
    {
      title: "Oral Exam",
      desc: "All visits begin with a comprehensive examination of your pet’s teeth, gums, tongue and oral cavity. The sooner we detect an oral disease or injury, the sooner we can treat it, which may prevent a serious problem from developing."
    },
    {
      title: "Professional Cleaning",
      desc: "The process of scaling and polishing removes the plaque and tartar above and below the gumline. By removing the plaque and tartar, we keep your pet’s mouth clean and slow down the formation of future plaque and tartar and help to prevent gingivitis (inflammation of the gums)."
    },
    {
      title: "Dental X-rays",
      desc: "Dental X-rays allow veterinary professionals to view issues under your pet’s gums that may not be visible in a routine exam. The most common issues detected by dental x-ray include tooth root infections, bone loss, retained roots, cracks/fractures of teeth, and all of which can cause significant discomfort for your pet."
    },
    {
      title: "Extraction of Teeth",
      desc: "Teeth that are damaged or infected are extracted safely while your pet is under anesthesia. Extraction of damaged or infected teeth will relieve pain, eliminate potential sources of infections, and improve comfort and eating ability for your pet."
    },
    {
      title: "Advanced Oral Surgical Procedures",
      desc: "We provide surgical solutions for jaw fractures, oral tumors and gum reconstruction to restore functionality, reduce pain and promote long term oral health for your pet."
    },
    {
      title: "Emergency Dental Care",
      desc: "If you notice any emergency signs in your pet (e.g., fractured teeth, bleeding gums, sudden onset of pain), please seek immediate care so that we may address the issue promptly to protect your pet’s overall health."
    }
  ];

  const dogPackageIncludes = [
    "Dental Scale and Polish",
    "IV Cannula placing & IV Cannula",
    "Fluid IV Therapy",
    "Blood Collection",
    "Hospitalization",
    "Anesthesia/Sedation",
    "Lab IDEXX Chem 10 & CBC & Electrolytes",
    "Lab IDEXX Catalyst SDMA"
  ];

  const catPackageIncludes = [
    "Dental Scale and Polish",
    "IV Cannula placing & IV Cannula",
    "Fluid IV Therapy",
    "Blood Collection",
    "Hospitalization",
    "Anesthesia/Sedation",
    "Lab IDEXX Chem 10 & CBC & Electrolytes",
    "Lab IDEXX Catalyst SDMA"
  ];

  const warningSigns = [
    "Bad breath",
    "Tartar buildup",
    "Red, swollen, or bleeding gums",
    "Difficulty chewing or dropping food",
    "Excessive drooling",
    "Pawing at the mouth",
    "Missing or loose teeth",
    "Behavioural changes",
    "Nasal discharge or sneezing"
  ];

  const keyBenefits = [
    {
      num: "01",
      title: "Prevents pain, saves teeth",
      desc: "Pet dental cleaning prevents pain from tooth problems and can reduce the need for advanced dental procedures if disease is detected early."
    },
    {
      num: "02",
      title: "Prevents heart, kidney and liver problems",
      desc: "Dental cleaning helps reduce the risk of bacteria entering the bloodstream, which may impact vital organs such as the heart, kidneys, and liver."
    },
    {
      num: "03",
      title: "Improves comfort and ability to eat",
      desc: "After dental cleaning, eating becomes much easier for your pet as they are able to chew their kibble without pain, and many senior pets even become 'bouncy' and ravenous again."
    },
    {
      num: "04",
      title: "Will save you money",
      desc: "By having regular dental cleanings for your pet, you will avoid expensive procedures such as complex surgeries and emergency room visits."
    },
    {
      num: "05",
      title: "Extends life",
      desc: "A healthy mouth is essential to the overall health of an animal. A healthy mouth means less stress on other parts of the body and therefore a longer, happier life with your pet."
    }
  ];

  const anesthesiaPoints = [
    {
      title: "Pain & Stress-Free Experience",
      text: "General anesthesia ensures pets remain unconscious, pain-free, and stress-free during cleaning, probing, and procedures."
    },
    {
      title: "Complete Cleaning Above & Below Gumline",
      text: "The anesthetic allows for a complete mouth cleaning on both surfaces where periodontal disease and hidden bacteria reside."
    },
    {
      title: "Accurate X-Rays & Safe Sharp Tools",
      text: "The anesthetic keeps the pet calm enough to take precise dental X-rays and enables the safe use of sharp instruments without slippage or trauma."
    },
    {
      title: "Sterile Environment For Surgical Procedures",
      text: "Anesthesia enables surgical procedures such as tooth extractions, gum repair, and oral tumor removal in a sterile, controlled environment."
    },
    {
      title: "Continuous Vital Monitoring & Protocols",
      text: "Safety is ensured through preanesthetic checkups, blood testing, custom plans, and constant monitoring of vital signs during and after the procedure."
    }
  ];

  const dentalServiceCarouselItems = [
    {
      title: "Oral Exam",
      desc: "All visits begin with a comprehensive examination of your pet’s teeth, gums, tongue and oral cavity to identify problems early.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Professional Cleaning",
      desc: "Scaling and polishing removes plaque and tartar above and below the gumline to protect your pet from future dental disease.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Dental X-rays",
      desc: "Advanced imaging helps us identify problems beneath the gumline that may not be visible during a routine examination.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Extraction of Teeth",
      desc: "Damaged or infected teeth can be safely removed while under anesthesia to relieve pain and restore your pet's comfort.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Advanced Oral Surgical Procedures",
      desc: "Surgical solutions for jaw fractures, oral tumors and gum reconstruction to restore functionality and promote long-term health.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Emergency Dental Care",
      desc: "Prompt veterinary attention for broken teeth, bleeding gums, sudden pain and other emergency dental conditions.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Overview / Hero Banner */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <LazyImage 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=900" 
            alt="Pet Dental Care Examination" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/85 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Advanced Veterinary Dentistry
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-6">
              Pet Dental Care
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed mb-6">
              Your pet’s health depends on good oral care. Periodontal disease (gum disease) is very common in dogs and cats and often develops without showing obvious signs of pain. Pets often hide signs of dental discomfort, making routine examinations vital for early detection.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed mb-8">
              YourHomeVet provides advanced dental services, including experienced veterinary dentists and dental X-ray capabilities to locate hidden problems below the gumline, such as infected roots, bone loss, and damaged teeth. We provide routine cleanings to advanced oral surgery to protect your pet’s long-term health.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://yourhomevet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                <Calendar size={16} /> Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-slate-900/80 lg:bg-slate-900 lg:dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md border border-white/20 lg:border-none"
              >
                <Phone size={16} /> Call: 971 4 5971 000
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <LazyImage 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=900" 
                alt="Pet Dental Care Examination" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#9cbc65] uppercase tracking-wider mb-1">
                  Full Service Dental Care
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Protecting Smiles & Overall Health
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Dental Services Section - Pinned Scroll Carousel */}
      <SkiperPinnedCarousel
        items={dentalServiceCarouselItems}
        badgeText="Comprehensive Care"
        badgeColor="text-[#51b255]"
        title="Advanced Dental Services at YourHomeVet"
        subtitle="We offer full-service dental care for dogs and cats, from preventive care to advanced surgery, to ensure your dog or cat has healthy teeth."
      />

      {/* Transparent Pricing Section */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            Compassionate Dental Care Packages
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Costs are carefully determined based on your pet’s size, age, and oral health condition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Dog Package Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-[#ec558b] p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#ec558b] text-white px-4 py-1 text-[11px] font-bold uppercase tracking-wider rounded-bl-lg">
              Dog Dental Package
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
                The Smile – Dog
              </h3>
              <p className="text-xs text-slate-500 mb-6">Price varies by weight</p>

              {/* Weight Selector */}
              <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-3">
                  Pick Your Pup’s Pounds:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedDogWeight('0-10')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      selectedDogWeight === '0-10'
                        ? 'bg-[#ec558b] text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    0-10 KG
                  </button>
                  <button
                    onClick={() => setSelectedDogWeight('11-24')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      selectedDogWeight === '11-24'
                        ? 'bg-[#ec558b] text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    11-24 KG
                  </button>
                  <button
                    onClick={() => setSelectedDogWeight('25-40')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      selectedDogWeight === '25-40'
                        ? 'bg-[#ec558b] text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    25-40 KG
                  </button>
                </div>
              </div>

              <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
                {dogPrices[selectedDogWeight]}
              </div>

              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                What’s Included:
              </h4>
              <ul className="space-y-3 mb-8">
                {dogPackageIncludes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-[#9cbc65] shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="https://yourhomevet.com/booking/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#ec558b] hover:bg-[#d84074] text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-md block"
            >
              Book Now
            </a>
          </div>

          {/* Cat Package Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#9cbc65] text-white px-4 py-1 text-[11px] font-bold uppercase tracking-wider rounded-bl-lg">
              Cat Dental Package
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
                The Smile – Cat
              </h3>
              <p className="text-xs text-slate-500 mb-6">Full oral health package</p>

              <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-8 pt-4">
                1,348 AED
              </div>

              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                What’s Included:
              </h4>
              <ul className="space-y-3 mb-8">
                {catPackageIncludes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-[#9cbc65] shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="https://yourhomevet.com/booking/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-md block"
            >
              Book Now
            </a>
          </div>

        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-8 bg-[#fff9fa] dark:bg-slate-900/80 border-y border-rose-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Early Detection
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Warning Signs That Your Pet Needs Dental Care
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              If your pet shows any of these signs, get professional veterinary help right away:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((sign, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4">
                <AlertTriangle size={20} className="text-[#ec558b] shrink-0" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {sign}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Key Benefits Section - Tree Layout Infographic */}
      <PetDentalInfographic />

      {/* Why Is Anesthesia Essential? (Matching screenshot design) */}
      <section className="py-8 lg:py-24 bg-[#fffbfa] dark:bg-slate-900/60 border-y border-rose-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Centered Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1b2b4b] dark:text-slate-100 mb-3">
              Why Is Anesthesia Essential?
            </h2>
            <div className="w-16 h-0.5 bg-slate-300 dark:bg-slate-700 mx-auto"></div>
          </div>

          {/* Two-Column Grid: Left Image, Right 5-Item Numbered List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Photo of Veterinary Surgeon */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-rose-100 dark:border-slate-800">
                <LazyImage 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900" 
                  alt="Veterinary surgeon performing pet dental procedure" 
                  className="w-full h-[480px] sm:h-[540px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2b4b]/80 via-[#1b2b4b]/30 to-transparent" />
              </div>
            </div>

            {/* Right Numbered List (01 - 05) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {[
                {
                  id: "01",
                  text: "General anesthesia ensures pets remain unconscious, pain and stress free during cleaning, probing, and procedures."
                },
                {
                  id: "02",
                  text: "The anesthetic will allow for a complete mouth cleaning with both surfaces (above and below), where all areas of the pet’s mouth can be cleaned, where periodontal disease may reside, as well as where hidden bacteria may be located."
                },
                {
                  id: "03",
                  text: "The anesthetic will keep the pet calm enough to take dental x-rays and enable the safe use of sharp objects without slippage or trauma."
                },
                {
                  id: "04",
                  text: "The anesthetic will allow for surgical procedures such as tooth extraction, gum repair and oral tumor removal in a sterile environment."
                },
                {
                  id: "05",
                  text: "Safety is ensured through preanesthetic check ups, blood testing, individually developed plans, and constant monitoring of the pet’s vital signs during and after the procedure."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-6">
                  {/* Large Peach Number */}
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#fcd5c5] dark:text-rose-900/60 shrink-0 font-mono tracking-tighter">
                    {item.id}
                  </span>

                  {/* Vertical Separator Line */}
                  <div className="w-[1px] h-12 bg-slate-200 dark:bg-slate-800 shrink-0 mt-1"></div>

                  {/* Description Text */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Pet Dental Care at Home */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Preventive Maintenance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6">
              Pet Dental Care at Home
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Regular pet dental care helps prevent future disease occurrence by keeping your pet’s mouth clean daily with a combination of brushing and other helpful tools.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#9cbc65] shrink-0 mt-0.5" />
                <span><strong>Start Early:</strong> Train your pet to accept dental care at home using vet-recommended toothpaste and brushes.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#9cbc65] shrink-0 mt-0.5" />
                <span><strong>Target High-Risk Areas:</strong> Most plaque develops on upper back teeth. Combine oral gels & water additives.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#9cbc65] shrink-0 mt-0.5" />
                <span><strong>VOHC-Approved Products:</strong> Use approved dental chews or kibble diets providing mechanical cleaning.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#ec558b] text-white p-8 sm:p-10 rounded-2xl shadow-2xl flex flex-col justify-between">
            <div>
              <Sparkles size={36} className="text-white/80 mb-6" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Book Your Pet’s Dental Checkup Today
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-8">
                Even with home care, schedule regular professional veterinary cleanings to stop tooth damage before it starts.
              </p>
            </div>

            <div className="space-y-3">
              <a 
                href="https://yourhomevet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-[#ec558b] text-center text-xs font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-slate-100 shadow-md block"
              >
                Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="w-full py-4 bg-slate-900 text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-slate-800 shadow-md block"
              >
                Call: 971 4 5971 000
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
