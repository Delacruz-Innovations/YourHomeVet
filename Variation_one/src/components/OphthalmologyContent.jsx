import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  Eye, 
  AlertTriangle, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  ChevronRight,
  Crosshair,
  Microscope,
  Stethoscope,
  Activity,
  Award,
  PawPrint
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import LazyImage from './ui/LazyImage';
import opthalmologyHeroImg from '../assets/vet_eye_cat.jpg';
import centerLogo from '../assets/center_logo.jpg';

// CarouselSection Component: Standard horizontal carousel with next/prev buttons & swipe support (no scroll locking)
const SkiperPinnedCarousel = ({
  items,
  title,
  subtitle,
  badgeText,
  badgeColor = "text-[#ec558b]",
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
                  <LazyImage
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
                current === idx ? 'w-6 bg-[#ec558b]' : 'w-2 bg-slate-300 dark:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function OphthalmologyContent() {
  const services = [
    {
      title: "Corneal Disease Management",
      desc: "YourHomeVet manages corneal diseases including keratitis and corneal ulcers in pets using medicated drops, pain medication and/or surgery when necessary to prevent loss of vision.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Glaucoma Control",
      desc: "At YourHomeVet, we check your pet’s intraocular pressure and use either medical therapy or surgery to slow the progression of glaucoma which is a very painful condition that can result in rapid blindness if left untreated.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cataract Evaluation and Surgery",
      desc: "YourHomeVet diagnoses cataracts in pets resulting from aging, diabetes, injury, etc., and recommends surgery to remove the cataracts when appropriate to improve vision clarity.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Preventive Eye Examinations",
      desc: "As part of your pet’s overall wellness exams, YourHomeVet will also perform eye examinations to identify any early warning signs of infection, dry eye, cataracts, glaucoma or retinal disease before it progresses.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Emergency Eye Trauma Care",
      desc: "YourHomeVet has emergency treatment available for eye injuries, such as scratches, foreign bodies, bites or accidents, to reduce pain, stabilize the eye, and save vision if possible.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Advanced Diagnostic Imaging & Testing",
      desc: "To assist in diagnosing complex eye conditions in pets, YourHomeVet uses state-of-the-art diagnostic equipment, such as a slit lamp, tonometer (pressure meter), tear tests, and other special diagnostic tools.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const signsOfEyeProblems = [
    "Redness or swelling",
    "Squinting or pawing at the eye",
    "Cloudiness of the eyes",
    "Discharge (clear, yellow, or green)",
    "Swollen tissue surrounding their eyes",
    "Hitting or bumping into objects",
    "Increased sensitivity to light"
  ];

  const diagnosticTools = [
    {
      title: "Tonometry (IOP Testing)",
      desc: "Measures intraocular pressure accurately to detect glaucoma early and prevent irreversible optic nerve damage."
    },
    {
      title: "Slit-Lamp Biomicroscopy",
      desc: "Provides a highly magnified view of front structures (cornea, lens) to identify ulcers, inflammation, and early cataract formation."
    },
    {
      title: "Direct & Indirect Ophthalmoscopy",
      desc: "Visualizes the retina, optic nerve, and vitreous to diagnose retinal degeneration, detachments, and vascular changes."
    },
    {
      title: "Ocular Ultrasound",
      desc: "High-resolution internal imaging when cataracts block visual inspection, assessing retinal health and checking for masses non-invasively."
    },
    {
      title: "Advanced CT & MRI Imaging",
      desc: "3-D scans for complex tumors, orbital disease, or neurological conditions affecting the optic pathway."
    },
    {
      title: "Fluorescein Staining",
      desc: "Applies fluorescein dye that glows under blue light to highlight corneal ulcers, micro-scratches, or embedded foreign bodies."
    },
    {
      title: "Schirmer Tear Test",
      desc: "Evaluates tear production to diagnose dry eye (keratoconjunctivitis sicca) and prevent painful corneal ulceration."
    },
    {
      title: "Gonioscopy",
      desc: "Assesses the drainage angle of the eye to evaluate glaucoma risk and progression, especially in predisposed breeds."
    }
  ];

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
              Advanced Veterinary Ophthalmology
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4">
              Pet Ophthalmology
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              Your pet’s eyes are delicate and essential to their happiness. We offer specialized diagnostics and microsurgery to protect your pet’s sight.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-sm leading-relaxed mb-8 hidden sm:block">
              From glaucoma and cataract management to corneal ulcer repair, our eye specialists provide gentle, precise treatments.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://yourhomevet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-md"
              >
                <Calendar size={16} /> Book Eye Consult
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
            src={opthalmologyHeroImg} 
            alt="Pet Ophthalmology Eye Exam" 
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

      {/* Why is Veterinary Ophthalmology Important? */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Vision & Comfort Preservation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6">
              Why is veterinary ophthalmology important?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
              Veterinary ophthalmology is concerned with diagnosing, treating and preventing disease in the eyes of animals. From simple eye infections (conjunctivitis) to more complex and progressing retina disorders, identifying and treating these issues at an early stage is often crucial to preventing long-term visual impairment.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              That is why pet owners should watch for early warning signs of possible eye disease and seek immediate professional care from an experienced veterinary ophthalmologist.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#fff2f6] to-[#ffe8f0] dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-rose-200 dark:border-slate-700 shadow-xl text-center">
            <Eye size={48} className="text-[#ec558b] mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
              Book Your Pet’s Eye Check Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Early detection prevents long-term vision loss. Schedule a comprehensive eye examination with our specialists.
            </p>
            <div className="flex flex-col gap-3">
              <Link 
                to="/book-an-appointment" 
                className="w-full py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all block text-center"
              >
                Book An Appointment
              </Link>
              <a 
                href="tel:97145971000" 
                className="w-full py-3.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-all block text-center"
              >
                Call : 971 4 5971 000
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Pinned Scroll Carousel: Ophthalmology Services */}
      <SkiperPinnedCarousel
        items={services}
        badgeText="Comprehensive Eye Care"
        badgeColor="text-[#ec558b]"
        title="Ophthalmology Services at YourHomeVet"
        subtitle="We have comprehensive ophthalmology services to help identify, manage and treat many eye problems in pets to help improve both the sight and comfort of your pet."
      />

      {/* Common Signs of Eye Problems */}
      <section className="py-8 lg:py-10 bg-[#fff9fa] dark:bg-slate-900/80 border-b border-rose-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Early Warning Indicators
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              What are the common signs of eye problems in pets?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Your veterinarian needs to see your pet as soon as possible if you identify any of these characteristics:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {signsOfEyeProblems.map((sign, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:border-[#ec558b]/40 transition-colors"
              >
                <AlertTriangle size={20} className="text-[#ec558b] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {sign}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Do We Examine Your Pet's Eyes? (8 Diagnostic Methods) */}
      <section className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
            Specialized Examinations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            How do we examine your pet’s eyes?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            At YourHomeVet, we utilize high-end ophthalmologic equipment to perform a comprehensive pet eye exam, starting with a detailed history and physical exam followed by targeted, specialized testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diagnosticTools.map((m, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#ec558b] block mb-3">0{idx + 1}</span>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Eye Treatments Do We Provide? & Preventive Wellness */}
      <section className="py-8 lg:py-10 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Treatment & Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
              What Eye Treatments Do We Provide?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We tailor pet eye health with advanced medical management and precision surgical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/60 shadow-lg">
              <h3 className="text-xl font-serif font-bold text-white mb-4 text-[#ec558b]">
                Medical Therapies
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Includes antibiotic and antifungal eye drops, anti-inflammatory medications, lubricating eye drops, artificial tear formulations, and comprehensive pain management tailored to your pet's exact diagnosis.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/60 shadow-lg">
              <h3 className="text-xl font-serif font-bold text-white mb-4 text-[#51b255]">
                Surgical Solutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Options include glaucoma shunts, corneal grafts, ectropion/entropion eyelid repair, and ocular tumor removals, backed by thorough post-surgical care and home instructions.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/40">
            <h4 className="text-lg font-serif font-bold text-white mb-3">
              Preventive Eye Wellness Recommendations
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We encourage owners to prevent eye issues through regular veterinary examinations based on breed, daily facial cleansing, avoiding potential eye irritants, feeding a balanced veterinary-approved diet, and protecting sensitive eyes from excessive sunlight when recommended.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
