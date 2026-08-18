import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  HelpCircle
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';

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
                      Eye Care
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

export default function OphthalmologyContent() {

  const ophthalmologyCarouselItems = [
    {
      title: "Corneal Ulcer & Trauma Repair",
      desc: "Fluorescein stain testing and advanced microsurgical repair for corneal scratches, deep ulcers, and eye trauma.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Glaucoma Screening & Tonometry",
      desc: "Electronic intraocular pressure (IOP) measurement to detect and treat high-pressure glaucoma before vision loss occurs.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cataract Evaluation",
      desc: "Slit-lamp biomicroscopy to evaluate lens clarity, cataract progression, and surgical candidate readiness.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Dry Eye (KCS) & Tear Testing",
      desc: "Schirmer tear test diagnosis and specialized immune-modulating drop therapy for chronic dry eye syndrome.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const warningSigns = [
    "Squinting, keeping one or both eyes closed",
    "Cloudiness or bluish haze over the eye",
    "Excessive tearing, green/yellow eye discharge",
    "Redness or swollen tissue around eyelids",
    "Rubbing face against carpet or pawing at eyes",
    "Bumping into furniture or sudden loss of vision"
  ];

  const faqs = [
    { q: "Why is an eye examination urgent if my pet is squinting?", a: "Squinting is a primary sign of severe eye pain, often caused by corneal ulcers or high intraocular pressure. Early treatment prevents permanent scarring or loss of sight." },
    { q: "Can eye tests be performed during a home visit?", a: "Yes! Our mobile vets carry portable slit-lamps, tonometers, fluorescein stains, and Schirmer tear test strips for complete in-home ophthalmic workups." }
  ];

  return (
    <div className="w-full bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#4FA3DE] font-bold text-xs tracking-widest uppercase mb-3 block">
              Specialist Veterinary Eye Care
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6">
              Pet Ophthalmology Care
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              Vision is priceless. Ophthalmic conditions in dogs and cats can progress rapidly, causing intense discomfort and potential vision loss if left untreated.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              YourHomeVet offers specialist eye evaluations, tonometry, corneal repair, and medical management of glaucoma, cataracts, and dry eye to preserve your pet’s sight.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <Calendar size={16} /> Book Eye Consultation
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
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900" 
                alt="Pet Ophthalmology" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#4FA3DE] uppercase tracking-wider mb-1">
                  Precision Eye Care
                </span>
                <h3 className="text-xl font-bold text-white">
                  Protecting Your Pet’s Precious Vision
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <SkiperPinnedCarousel
        items={ophthalmologyCarouselItems}
        badgeText="Specialist Care"
        badgeColor="text-[#4FA3DE]"
        title="Ophthalmic Conditions We Treat"
        subtitle="Advanced diagnostic and therapeutic solutions for corneal, lens, and retinal health."
      />

      {/* Warning Signs & FAQ */}
      <section className="py-16 bg-[#FAFCF8] dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200/70 dark:border-slate-800 mb-12">
            <div className="flex items-center gap-2 text-[#4FA3DE] font-bold text-xs uppercase tracking-widest mb-3">
              <AlertTriangle size={16} /> Ocular Symptoms
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Signs Your Pet Needs an Eye Exam
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {warningSigns.map((sign, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300 p-3.5 rounded-2xl bg-[#FAFCF8] dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50">
                  <Eye size={16} className="text-[#4FA3DE] shrink-0" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">Ophthalmology FAQs</h3>
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
        </div>
      </section>

    </div>
  );
}
