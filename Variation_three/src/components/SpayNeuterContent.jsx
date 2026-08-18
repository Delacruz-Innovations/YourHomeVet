import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  Scissors, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Check,
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
                      Surgical Excellence
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

export default function SpayNeuterContent() {

  const spayCarouselItems = [
    {
      title: "Laparoscopic Keyhole Spay",
      desc: "Minimally invasive spay surgery with up to 65% less pain, tiny incisions, and remarkably rapid post-op recovery.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cat Spay & Neuter",
      desc: "Gentle, stress-minimised sterilisation for male and female cats with custom anesthetic monitoring and pain relief.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Dog Spay & Neuter",
      desc: "Breed-tailored sterilisation protocols evaluated by experienced surgeons to support long-term orthopedic and endocrine health.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pre-Surgical Blood Panels",
      desc: "Comprehensive pre-anesthetic screening of liver and kidney function to ensure 100% surgical safety before procedure.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const benefitsList = [
    "Prevents uterine infections (pyometra) and greatly reduces mammary cancer risk in females.",
    "Eliminates testicular cancer risk and reduces prostate problems in males.",
    "Curbs unwanted behaviors like spraying, roaming, aggressive territorial marking, and howling.",
    "Supports population control and prevents unwanted litters.",
    "Laparoscopic options offer 65% less pain and faster healing times."
  ];

  const faqs = [
    { q: "At what age should my pet be spayed or neutered?", a: "Most cats and small dogs are neutered around 6 months of age. For large breed dogs, waiting until 9-12 months may be recommended to allow joint growth plates to mature." },
    { q: "What is the difference between keyhole and traditional spay?", a: "Keyhole (laparoscopic) spay uses a tiny camera and two 0.5cm incisions rather than a 5-10cm abdominal incision, resulting in significantly less discomfort and faster recovery." },
    { q: "How long does recovery take?", a: "With keyhole spays, pets are often back to normal within 2-3 days. Traditional surgeries require 7-10 days of restricted activity." }
  ];

  return (
    <div className="w-full bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
              Safe & Compassionate Sterilisation
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6">
              Pet Spay & Neuter Surgery
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              Spaying and neutering are among the most beneficial health decisions you can make for your pet. Routine sterilisation prevents life-threatening infections, drastically reduces cancer risks, and promotes a longer, happier life.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              At YourHomeVet, our surgical team utilizes state-of-the-art sterile surgical suites, continuous vital monitoring, and advanced laparoscopic (keyhole) options for minimal discomfort.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <Calendar size={16} /> Book Surgery Consultation
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
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=900" 
                alt="Spay & Neuter Care" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#58B66E] uppercase tracking-wider mb-1">
                  Gentle Recovery & Care
                </span>
                <h3 className="text-xl font-bold text-white">
                  Advanced Keyhole & Routine Spaying
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <SkiperPinnedCarousel
        items={spayCarouselItems}
        badgeText="Surgical Procedures"
        badgeColor="text-[#58B66E]"
        title="Spay & Neuter Procedures We Perform"
        subtitle="Safe, sterile surgical solutions customized to your pet's age, breed, and size."
      />

      {/* Benefits & FAQ */}
      <section className="py-16 bg-[#FAFCF8] dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200/70 dark:border-slate-800 mb-12">
            <div className="flex items-center gap-2 text-[#58B66E] font-bold text-xs uppercase tracking-widest mb-3">
              <ShieldCheck size={16} /> Health Advantages
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Key Health Benefits of Sterilisation
            </h3>
            
            <div className="space-y-3">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300 p-3.5 rounded-2xl bg-[#FAFCF8] dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50">
                  <CheckCircle2 size={18} className="text-[#58B66E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">Spay & Neuter FAQs</h3>
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
