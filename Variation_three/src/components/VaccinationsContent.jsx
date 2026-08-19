import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Syringe, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  HelpCircle,
  Dog,
  Cat
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import vetVaccineImg from '../assets/vet_vaccine_puppy.jpg';

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
                      Preventive Protection
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

export default function VaccinationsContent() {

  const vaccineCarouselItems = [
    {
      title: "Canine Core DHPPiL Vaccine",
      desc: "Protects dogs against Distemper, Hepatitis, Parvovirus, Parainfluenza, and Leptospirosis.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Rabies Vaccination & Registration",
      desc: "Essential annual rabies vaccination complete with official pet passport entry and microchip verification.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Kennel Cough (Bordetella)",
      desc: "Protects dogs visiting boarding facilities, dog parks, and grooming parlors from highly contagious respiratory illness.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Feline FVRCP & FeLV Vaccines",
      desc: "Protects cats against Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia, and Feline Leukemia Virus.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const dogVaccines = [
    { name: "DHPPiL Core Vaccine", detail: "Distemper, Hepatitis, Parvovirus, Parainfluenza, Leptospirosis" },
    { name: "Rabies Vaccine", detail: "Required annually for pet travel and registration" },
    { name: "Bordetella Kennel Cough", detail: "Protects against infectious tracheobronchitis" }
  ];

  const catVaccines = [
    { name: "FVRCP Core Vaccine", detail: "Feline Rhinotracheitis, Calicivirus, Panleukopenia" },
    { name: "FeLV Vaccine", detail: "Feline Leukemia Virus protection for outdoor or multi-cat homes" },
    { name: "Rabies Vaccine", detail: "Annual feline rabies immunization and passport record" }
  ];

  const faqs = [
    { q: "Why administer vaccinations at home?", a: "Vaccinating at home eliminates clinic anxiety and waiting rooms, reducing stress-induced immune suppression for a safer, gentler vaccination experience." },
    { q: "Are Zoetis vaccines used?", a: "Yes, we exclusively utilize premium, cold-chain maintained vaccines from leading global pharmaceutical manufacturers such as Zoetis." },
    { q: "Do you issue official Rabies certificates?", a: "Yes, our licensed veterinarians issue official microchipped Rabies vaccination certificates and update your pet's passport during the home visit." }
  ];

  return (
    <div className="w-full bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
              In-Home Pet Immunization
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6">
              Pet Vaccinations & Boosters
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              Vaccinations are the cornerstone of preventive pet healthcare. Protecting your dog or cat from contagious and fatal diseases starts with a customized immunization schedule delivered right in the comfort of your home.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              Our mobile vets bring cold-chain stored Zoetis vaccines, microchip scanners, and official documentation to keep your pet protected without the anxiety of a car ride or busy waiting room.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <Calendar size={16} /> Book Vaccination Visit
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
              <img 
                src={vetVaccineImg} 
                alt="Pet Vaccination at Home" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#58B66E] uppercase tracking-wider mb-1">
                  Gentle In-Home Immunization
                </span>
                <h3 className="text-xl font-bold text-white">
                  Anxiety-Free Protection for Dogs & Cats
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <SkiperPinnedCarousel
        items={vaccineCarouselItems}
        badgeText="Core & Lifestyle Vaccines"
        badgeColor="text-[#58B66E]"
        title="Vaccinations Delivered to Your Door"
        subtitle="Customized vaccination schedules for puppies, kittens, adult pets, and seniors."
      />

      {/* Vaccine Breakdown Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Dog Vaccines */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-[#58B66E] font-bold text-xs uppercase tracking-widest mb-3">
              <Dog size={18} /> Canine Immunizations
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Dog Vaccination Schedule</h3>
            <div className="space-y-4">
              {dogVaccines.map((v, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FAFCF8] dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#58B66E]" /> {v.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-relaxed">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cat Vaccines */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-[#FA4D80] font-bold text-xs uppercase tracking-widest mb-3">
              <Cat size={18} /> Feline Immunizations
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cat Vaccination Schedule</h3>
            <div className="space-y-4">
              {catVaccines.map((v, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FAFCF8] dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#FA4D80]" /> {v.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-relaxed">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#FAFCF8] dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">Vaccination FAQs</h3>
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-[#FA4D80]" /> {faq.q}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
