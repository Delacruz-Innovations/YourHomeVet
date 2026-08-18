import React, { useState, useEffect } from 'react';
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
} from './ui/carousel';
import LazyImage from './ui/LazyImage';
import PetDentalInfographic from './PetDentalInfographic';

const SkiperPinnedCarousel = ({
  items,
  title,
  subtitle,
  badgeText,
  badgeColor = "text-[#58B66E]",
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
      className="py-12 sm:py-16 w-full bg-[#FAFCF8] dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 overflow-hidden"
    >
      <div className="w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 shrink-0">
          {badgeText && (
            <span className={`font-bold text-xs tracking-widest uppercase mb-2 block ${badgeColor}`}>
              {badgeText}
            </span>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
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
                        ? "inset(3% 0% 3% 0%)"
                        : "inset(0% 0% 0% 0%)",
                    scale: current === index ? 1 : 0.97
                  }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-full w-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#58B66E] mb-1.5">
                      Service Details
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal opacity-95">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default function DentalContent() {
  const [selectedDogWeight, setSelectedDogWeight] = useState('0-10');

  const dogPrices = {
    '0-10': '£320',
    '11-24': '£360',
    '25-40': '£410'
  };

  const includedServices = [
    "Comprehensive Oral Examination",
    "Scaling & Polishing",
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
    <div className="w-full bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Overview / Hero Banner */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
              Advanced Veterinary Dentistry
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6">
              Pet Dental Care
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              Your pet’s health depends on good oral care. Periodontal disease (gum disease) is very common in dogs and cats and often develops without showing obvious signs of pain. Pets often hide signs of dental discomfort, making routine examinations vital for early detection.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              YourHomeVet provides advanced dental services, including experienced veterinary dentists and dental X-ray capabilities to locate hidden problems below the gumline, such as infected roots, bone loss, and damaged teeth. We provide routine cleanings to advanced oral surgery to protect your pet’s long-term health.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <Calendar size={16} /> Book An Appointment
              </a>
              <a 
                href="tel:02081234567" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <Phone size={16} /> Call: 0208 123 4567
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <LazyImage 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=900" 
                alt="Pet Dental Care Examination" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#58B66E] uppercase tracking-wider mb-1">
                  Full Service Dental Care
                </span>
                <h3 className="text-xl font-bold text-white">
                  Protecting Smiles & Overall Health
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Dental Services Section */}
      <SkiperPinnedCarousel
        items={dentalServiceCarouselItems}
        badgeText="Comprehensive Care"
        badgeColor="text-[#58B66E]"
        title="Advanced Dental Services at YourHomeVet"
        subtitle="We offer full-service dental care for dogs and cats, from preventive care to advanced surgery, to ensure your dog or cat has healthy teeth."
      />

      {/* Infographic Section */}
      <PetDentalInfographic />

      {/* Transparent Pricing Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Compassionate Dental Care Packages
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Costs are carefully determined based on your pet’s size, age, and oral health condition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Dog Package Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-[#FA4D80] p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FA4D80] text-white px-4 py-1 text-[11px] font-bold uppercase tracking-wider rounded-bl-xl">
              Dog Dental Package
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                The Smile – Dog
              </h3>
              <p className="text-xs text-slate-500 mb-6">Price varies by weight</p>

              {/* Weight Selector */}
              <div className="mb-6 p-4 rounded-2xl bg-[#FAFCF8] dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-3">
                  Pick Your Pup’s Weight:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedDogWeight('0-10')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      selectedDogWeight === '0-10'
                        ? 'bg-[#FA4D80] text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    0-10 KG
                  </button>
                  <button
                    onClick={() => setSelectedDogWeight('11-24')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      selectedDogWeight === '11-24'
                        ? 'bg-[#FA4D80] text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    11-24 KG
                  </button>
                  <button
                    onClick={() => setSelectedDogWeight('25-40')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      selectedDogWeight === '25-40'
                        ? 'bg-[#FA4D80] text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    25-40 KG
                  </button>
                </div>
              </div>

              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                {dogPrices[selectedDogWeight]}
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                Package Includes:
              </h4>
              <ul className="space-y-2.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
                {includedServices.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check size={16} className="text-[#58B66E] shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="#book"
              className="w-full text-center py-3.5 rounded-full bg-[#FA4D80] hover:bg-[#e63c6f] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md block"
            >
              Book Dog Dental Care
            </a>
          </div>

          {/* Cat Package Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-[#58B66E] p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#58B66E] text-white px-4 py-1 text-[11px] font-bold uppercase tracking-wider rounded-bl-xl">
              Cat Dental Package
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                The Smile – Cat
              </h3>
              <p className="text-xs text-slate-500 mb-6">Fixed transparent package price</p>

              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                £290
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                Package Includes:
              </h4>
              <ul className="space-y-2.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
                {includedServices.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check size={16} className="text-[#58B66E] shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="#book"
              className="w-full text-center py-3.5 rounded-full bg-[#58B66E] hover:bg-[#4ea863] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md block"
            >
              Book Cat Dental Care
            </a>
          </div>

        </div>
      </section>

      {/* Warning Signs & Anesthesia Info */}
      <section className="py-16 bg-[#FAFCF8] dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Warning Signs */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center gap-2 text-[#FA4D80] font-bold text-xs uppercase tracking-widest mb-3">
                <AlertTriangle size={16} /> Early Symptoms
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Warning Signs of Pet Dental Disease
              </h3>
              <p className="text-xs text-slate-500 mb-6">If your pet exhibits any of these symptoms, schedule an oral evaluation promptly.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {warningSigns.map((sign, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-[#FA4D80]" />
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Anesthesia Points */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center gap-2 text-[#58B66E] font-bold text-xs uppercase tracking-widest mb-3">
                <ShieldCheck size={16} /> Patient Safety
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why Anesthesia is Vital for Dental Cleaning
              </h3>
              
              <div className="space-y-4">
                {anesthesiaPoints.map((point, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#58B66E]" />
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 pl-5 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
