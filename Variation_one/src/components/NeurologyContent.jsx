import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Brain,
  ChevronRight,
  Stethoscope,
  Crosshair,
  Microscope,
  FileText,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import LazyImage from './ui/LazyImage';

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
                  <img
                    src={item.image}
                    alt={item.title || item.text}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent transition-opacity duration-300 group-hover:from-slate-950/95 group-hover:via-slate-950/75" />
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

          <div className="hidden sm:block">
            <CarouselPrevious className="left-2 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg h-10 w-10" />
            <CarouselNext className="right-2 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg h-10 w-10" />
          </div>
        </Carousel>

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

export default function NeurologyContent() {
  const neurologicalConditions = [
    {
      title: "Seizures & Epilepsy",
      desc: "Dogs and cats can experience many types of seizures and epilepsy caused by genetics, disease, infection, toxic substances or brain injury. Requires consistent monitoring and long-term medical management.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Spinal & Mobility Problems",
      desc: "Spinal damage can cause paralysis, weakness, pain, discomfort, and loss of balance. We diagnose and treat all spinal conditions with thorough musculoskeletal and nerve exams.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Neurological Injuries & Trauma",
      desc: "Acute traumatic brain or spinal injuries cause sudden weakness, paralysis, or confusion and require immediate emergency evaluation to decrease complications.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Brain & Nerve Inflammation",
      desc: "Inflammatory disorders originating from infectious processes or autoimmune conditions that progress rapidly and require intensive care and medical management.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Balance & Coordination Disorders",
      desc: "Inner ear and central nervous system disorders causing head tilts, falling, involuntary eye movements, or disorientation requiring precise diagnostic localization.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Brain & Spinal Tumors",
      desc: "Central nervous system tumors causing seizures, personality changes, pain, and visual deficits requiring advanced neuroimaging and specialized treatment protocols.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const warningSigns = [
    "Back or neck pain",
    "Difficulty with balance or coordination",
    "Head tilt",
    "Unusual eye movements",
    "Vision loss or blindness",
    "Confusion",
    "Weakness or paralysis",
    "Dragging one of the limbs",
    "Seizure",
    "Muscles twitching or tremors",
    "Behavioral changes",
    "Loss of bladder or bowel control",
    "Circling",
    "Sudden collapse",
    "Changes in voice/bark",
    "Difficulty swallowing"
  ];

  const treatmentOptions = [
    {
      title: "Individualised Treatment Planning",
      desc: "Tailored treatment strategies considering your pet's exact diagnosis, severity, and overall health to select optimal therapies."
    },
    {
      title: "Medical Management",
      desc: "Stabilizing neurological function by controlling seizures, providing anti-inflammatory therapies, managing pain, and preventing infections."
    },
    {
      title: "Surgical Interventions",
      desc: "Operating theaters equipped with advanced technology for brain and spinal cord surgeries, including disc disease and tumor removals."
    },
    {
      title: "Rehabilitation & Functional Recovery",
      desc: "Targeted physical therapy, hydrotherapy, and laser treatment to restore mobility, build strength, and enhance post-surgical recovery."
    },
    {
      title: "Supportive & Critical Care",
      desc: "24/7 ICU continuous monitoring, stabilization, and specialized emergency care for critically ill neurological patients."
    },
    {
      title: "Long-Term Multidisciplinary Care",
      desc: "Ongoing evaluation and seamless collaboration between specialists in neurology, surgery, imaging, and physical rehabilitation."
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Banner */}
      <section className="relative py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <LazyImage 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=900" 
            alt="Veterinary Neurology Exam" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/85 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Specialized Pet Neurology
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-6">
              Veterinary Neurology
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed mb-6">
              We understand that when your pet has a neurological issue, it is a stressful time for you and your pet. The nervous system, which consists of the brain, spinal cord and peripheral nerves, controls muscles and all body functions. Any disruption can result in a dramatic, instant and significant decline in your pet’s quality of life.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed mb-8">
              Our experienced veterinary neurologist team consists of specialists who will provide your pet with the most advanced and compassionate care available.
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
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=900" 
                alt="Veterinary Neurology Exam" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#9cbc65] uppercase tracking-wider mb-1">
                  Brain & Spinal Care
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Advanced Neurological Diagnostic & Surgery
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Veterinary Neurology? */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Medical Specialty
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6">
              What is Veterinary Neurology?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Veterinary neurology is a medical specialty concerned with diseases affecting the nervous system. Animals afflicted by a wide variety of disorders related to the nervous system exhibit a wide array of clinical signs including weakness, seizures, pain, coordination problems, behavioral changes, etc. There are many causes of these disorders, ranging from hereditary problems and trauma to infection, inflammation, neoplasia (tumors) and degenerative conditions of aging.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#fff2f6] to-[#ffe8f0] dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border border-rose-200 dark:border-slate-700 shadow-lg text-center">
            <Brain size={44} className="text-[#ec558b] mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
              Schedule Your Pet’s Neurology Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Early expert diagnosis improves recovery time, restores mobility, and enhances your pet's comfort.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://yourhomevet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all block"
              >
                Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="w-full py-3.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-all block"
              >
                Call : 971 4 5971 000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned Scroll Carousel: Common Neurological Conditions */}
      <SkiperPinnedCarousel
        items={neurologicalConditions}
        badgeText="Expert Diagnosis & Treatment"
        badgeColor="text-[#ec558b]"
        title="Common Neurological Conditions in Pets"
        subtitle="Our Neurology Service provides advanced diagnostic and treatment services for dogs and cats. Early diagnosis and timely treatment will help improve recovery time, increase mobility, provide comfort and improve quality of life."
      />

      {/* Early Warning Signs of Neurological Issues */}
      <section className="py-8 lg:py-24 bg-[#fff9fa] dark:bg-slate-900/80 border-b border-rose-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Early Detection
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Early Warning Signs of Neurological Issues in Pets
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Pets can’t tell us when something is wrong, so their owners need to be on the lookout for small or sudden changes that may be a neurological problem. Here are warning signs to look out for:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {warningSigns.map((sign, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-3 hover:border-[#ec558b]/40 transition-colors"
              >
                <AlertTriangle size={18} className="text-[#ec558b] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {sign}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Neurological Diagnostics */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
            State-of-the-Art Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            Advanced Neurological Diagnostics
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            The key to providing excellent veterinary care for pet neurology disorders is accurate diagnosis. YourHomeVet Clinics uses the latest technology along with extensive experience in clinical practice to quickly and accurately diagnose the cause of your pet’s symptoms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between shadow-sm">
            <div>
              <Stethoscope size={32} className="text-[#ec558b] mb-5" />
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                Thorough Neurological Exam
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                A detailed hands-on exam evaluating reflexes, coordination, balance, sensations, cranial nerves, and muscle tone to pinpoint exact lesion locations.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between shadow-sm">
            <div>
              <Crosshair size={32} className="text-[#51b255] mb-5" />
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                MRI, CT, X-Ray & Ultrasound
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Veterinary MRI is the gold standard for neuroimaging. Supported by CT scans, X-rays, and ultrasound to identify fractures, tumors, and spinal cord injuries.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between shadow-sm">
            <div>
              <Microscope size={32} className="text-sky-600 mb-5" />
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                CSF Analysis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Cerebrospinal fluid analysis detects signs of infection, inflammation, autoimmune conditions, and central nervous system hemorrhage.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between shadow-sm">
            <div>
              <Activity size={32} className="text-amber-500 mb-5" />
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                In-House Lab & Cytology
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Rapid blood work and cytology for immediate clinical decision-making, supported by reference laboratory histopathology.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-[#fff2f6] to-white dark:from-slate-900 dark:to-slate-800 border border-rose-200 dark:border-slate-700 flex flex-col justify-between shadow-md">
            <div>
              <FileText size={32} className="text-[#ec558b] mb-5" />
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                Integrated Individualized Treatment Plans
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Integrating clinical findings, neuroimaging, and lab results allows us to create custom treatment plans incorporating medical management, physical rehabilitation, or specialized surgery.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Comprehensive Neurological Treatment Options */}
      <section className="py-8 lg:py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Advanced Clinical Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-white mb-4">
              Comprehensive Neurological Treatment Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentOptions.map((opt, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800/80 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[#ec558b] font-mono font-bold text-xs block mb-3">0{idx + 1}</span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-3">
                    {opt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
