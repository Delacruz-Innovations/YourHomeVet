import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { 
  Phone, 
  ShieldAlert, 
  Clock, 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  Crosshair, 
  FileText, 
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  Thermometer,
  Zap,
  Microscope,
  LifeBuoy,
  ClipboardCheck,
  MessageSquare,
  ArrowRight,
  Heart
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';

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
      className="py-16 sm:py-20 w-full bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 overflow-hidden"
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

export default function EmergencyContent() {
  const [activeTab, setActiveTab] = useState('symptoms');

  const emergencyReasons = [
    "Immediate Treatment For Life-Threatening Injuries Or Illnesses",
    "Safe Blood Transfusions For Anaemia & Blood Loss",
    "24/7 Access To Skilled Veterinarians, Even On Weekends & Holidays",
    "Oxygen & IV Fluid Therapy For Pets In Respiratory Distress",
    "Rapid Diagnosis With On-Site X-Ray, Ultrasound & Lab Testing",
    "Support From Specialists In Cardiology, Neurology & Surgery",
    "Continuous Monitoring & Intensive Care For Critical Patients",
    "Compassionate Care To Keep Pets Calm & Comfortable",
    "Expert Pain Relief & Stabilization For Trauma Or Shock",
    "Emergency Surgery Available For Severe Wounds & Internal Bleeding"
  ];

  const symptomList = [
    { title: "Uncontrolled Bleeding", desc: "Bleeding that will not stop after a few minutes, even with pressure." },
    { title: "Trauma & Wounds", desc: "Deep cuts, punctures, bites, or vehicle accidents." },
    { title: "Breathing Distress", desc: "Rapid, laboured, noisy breathing or gasping for air." },
    { title: "Toxin & Poison Ingestion", desc: "Ingestion of human medications, pesticides, chocolate, or poisonous plants." },
    { title: "Foreign Object Swallowing", desc: "Ingestion of toys, string, cloth, stones, or bones causing blockage." },
    { title: "Extreme Temperature", desc: "Severe fever or hypothermia with shivering or heatstroke." },
    { title: "Severe Pain & Discomfort", desc: "Vocalizing, restlessness, trembling, or guarding body parts." },
    { title: "Vomiting or Diarrhea", desc: "Repeated episodes, especially if blood is present or pet is lethargic." },
    { title: "Urinary Distress", desc: "Straining or inability to pass urine or faeces." },
    { title: "Eye Injuries & Discharge", desc: "Sudden closure, cloudiness, redness, swelling, or trauma to eyes." },
    { title: "Ear Irritation & Discharge", desc: "Extreme head shaking, swelling, or severe ear discharge." },
    { title: "Seizures & Sudden Collapse", desc: "Neurological episodes, tremors, fainting, or loss of balance." },
    { title: "Face Swelling & Allergic React", desc: "Hives, facial edema, or severe allergic swelling." },
    { title: "Sudden Behavior Changes", desc: "Confusion, aggression, extreme lethargy, or unresponsive state." }
  ];

  const servicesOffered = [
    { name: "24/7 Emergency Consultations", desc: "Immediate assessment by senior emergency vets." },
    { name: "Intensive Care Unit (ICU)", desc: "24-hour vital monitoring & oxygen support." },
    { name: "Advanced On-Site Diagnostics", desc: "Digital X-Ray, Ultrasound & In-house Blood Lab." },
    { name: "Heatstroke & Poisoning Care", desc: "Rapid toxin elimination & body cooling." },
    { name: "Emergency Trauma Surgery", desc: "Immediate surgical response for internal bleeding & wounds." },
    { name: "Cardiac & Respiratory Support", desc: "Oxygen therapy & cardiac stabilization." },
    { name: "Blood Transfusions", desc: "Safe blood product administration for severe anemia." },
    { name: "Specialist Team Coordination", desc: "Direct access to Cardiology, Neurology & Surgery experts." }
  ];

  const diagnosticFeatures = [
    { title: "Digital X-Rays", text: "Immediate high-resolution imaging of bones, lungs, and abdominal issues." },
    { title: "Ultrasound Scanning", text: "Real-time evaluation of internal organ structure, trauma, and fluid buildup." },
    { title: "ECG & Cardiac Scan", text: "Detect irregular heart rhythms and evaluate heart muscle function." },
    { title: "Full-Service In-House Lab", text: "Rapid blood work, urinalysis, and organ function results in minutes." },
    { title: "Orthopaedic & Skin Checks", text: "Rapid fracture stabilization and emergency allergic reaction testing." }
  ];

  const triageSteps = [
    { 
      step: "01", 
      title: "Immediate Triage", 
      desc: "Our veterinary technician conducts an instant evaluation to determine urgency upon arrival.",
      icon: ClipboardCheck
    },
    { 
      step: "02", 
      title: "Rapid Stabilization", 
      desc: "We prioritize establishing normal breathing, circulation, and immediate pain relief.",
      icon: HeartPulse
    },
    { 
      step: "03", 
      title: "On-Site Testing", 
      desc: "Diagnostic tests pinpoint the root cause without unnecessary delay.",
      icon: Microscope
    },
    { 
      step: "04", 
      title: "Clear Communication", 
      desc: "We keep you informed at every step so you can make confident medical decisions.",
      icon: MessageSquare
    }
  ];

  const preventionTips = [
    "Store toxic items (chocolate, onions, grapes, meds) out of reach.",
    "Use secure trash containers to prevent ingestion of bones & packaging.",
    "Remove small hazardous objects and electrical cords from living areas.",
    "Never leave pets unattended in parked vehicles, even for a minute.",
    "Keep vaccinations and parasite prevention up-to-date.",
    "Schedule regular wellness check-ups to catch health issues early."
  ];

  const faqs = [
    { q: "Should I call before coming?", a: "Yes, please call our 24/7 hotline (+971 50 550 3777) while you are on your way so our emergency medical team can prepare equipment and be ready at the door." },
    { q: "Do you operate on weekends and holidays?", a: "Yes, YourHomeVet operates 24/7, 365 days a year, including weekends, night shifts, and all public holidays." },
    { q: "Can you treat my pet at home?", a: "Our mobile vet units carry emergency stabilization equipment and medication for home visits across Dubai. If advanced hospital surgery or ICU is needed, we arrange seamless transport." },
    { q: "What should I do if my pet ingested poison?", a: "Bring the packaging or sample of what your pet ingested if safe to do so, and call our hotline immediately so we can administer antidotes or induce vomiting safely." }
  ];

  const capabilityImages = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1594824432258-45e336b9c9f2?auto=format&fit=crop&q=80&w=800"
  ];

  const warningImages = [
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80&w=800"
  ];

  // Prepared items for Skiper Carousel
  const capabilityCarouselItems = emergencyReasons.map((reason, idx) => ({
    text: reason,
    image: capabilityImages[idx % capabilityImages.length]
  }));

  const warningSignsCarouselItems = symptomList.map((item, idx) => ({
    title: item.title,
    desc: item.desc,
    image: warningImages[idx % warningImages.length]
  }));
  return (
    <div className="w-full bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">

      {/* Headline & Overview Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
            alt="Emergency Vet Care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/85 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Emergency & Critical Care 24/7
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-6">
              Immediate expert care when time matters most
            </h2>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed mb-6">
              Urgent and life-threatening conditions require immediate action. If your pet is suddenly sick or injured, it is important to get professional veterinary care as soon as possible. Our emergency response team is ready to stabilize and treat critical cases within minutes, backed by years of experience and high standards of expertise.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed mb-8">
              YourHomeVet operates <strong className="text-white lg:text-slate-900 lg:dark:text-slate-100 font-bold">24 hours a day, 365 days a year</strong> across Dubai. Whether it's late at night, early morning, or a public holiday, our team is always ready.
            </p>

        

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+971505503777" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                <Phone size={16} /> Call Emergency Hotline
              </a>
            </div>
          </div>


        </div>
      </section>

      {/* Key Reasons Cards - Pinned Scroll Carousel */}
      <SkiperPinnedCarousel
        items={capabilityCarouselItems}
        badgeText="Emergency Capabilities"
        badgeColor="text-[#9cbc65]"
        title="Key Reasons Why Your Pet Needs Emergency Care"
      />

      {/* Emergency Warning Signs - Pinned Scroll Carousel */}
      <SkiperPinnedCarousel
        sectionId="when-to-visit"
        items={warningSignsCarouselItems}
        badgeText="Emergency Warning Signs"
        badgeColor="text-[#ec558b]"
        title="When do you need an emergency vet?"
        subtitle="Pet symptoms sometimes produce obvious emergency indications; other times, signs are subtle. Always err on the side of caution. If you are unsure, call us immediately. Waiting can make conditions worse."
      />

      {/* What Happens When We Arrive (Triage Steps) */}
      <section id="triage-process" className="py-20 bg-[#060D1E] text-white border-y border-slate-800/80 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9cbc65]/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Step-by-Step Triage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-100 mb-4">
              What happens when we arrive?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our medical team springs into immediate action. Here is how we care for your pet step by step.
            </p>
          </div>

          {/* 4-Step Process Grid with Connecting Arrows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative mb-16">
            {triageSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  {/* Step Connector Arrow for Desktop */}
                  {idx < triageSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-12 left-[60%] w-[80%] items-center justify-center pointer-events-none z-0">
                      <div className="h-[1px] w-full bg-gradient-to-r from-[#9cbc65]/50 via-[#9cbc65]/30 to-transparent" />
                      <div className="w-2 h-2 rounded-full bg-[#9cbc65] shadow-[0_0_8px_#9cbc65]" />
                      <ArrowRight size={14} className="text-[#9cbc65]/80 -ml-1" />
                    </div>
                  )}

                  {/* Circle Badge Container */}
                  <div className="relative z-10 mb-6">
                    {/* Top Step Number Badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-sm bg-slate-900 border border-[#9cbc65]/40 text-[#9cbc65] text-xs font-serif font-bold tracking-wider z-20 shadow-md">
                      {step.step}
                    </div>

                    {/* Outer Glowing Circle Ring */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-slate-700/80 bg-slate-900/60 p-2 flex items-center justify-center transition-all duration-300 group-hover:border-[#9cbc65]/60 group-hover:shadow-[0_0_20px_rgba(156,188,101,0.15)]">
                      {/* Inner Circular Icon Container */}
                      <div className="w-full h-full rounded-full border border-slate-800 bg-slate-950 flex items-center justify-center text-[#9cbc65] transition-transform duration-300 group-hover:scale-105">
                        <StepIcon size={32} className="stroke-[1.5]" />
                      </div>
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="text-lg sm:text-xl font-serif text-slate-100 font-semibold mb-2">
                    {step.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#9cbc65]/40 my-2 rounded-full group-hover:w-12 transition-all duration-300" />
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Reassurance Banner (respecting border radius rule rounded-sm) */}
          <div className="flex justify-center">
            <div className="rounded-sm border border-slate-800 bg-slate-900/80 hover:border-[#9cbc65]/40 transition-colors py-3.5 px-6 sm:px-8 inline-flex items-center gap-3 text-slate-200 text-xs sm:text-sm shadow-xl">
              <div className="w-7 h-7 rounded-sm bg-[#9cbc65]/20 border border-[#9cbc65]/40 flex items-center justify-center text-[#9cbc65] shrink-0">
                <Heart size={14} className="fill-[#9cbc65]/30" />
              </div>
              <span>
                Every minute matters. Your pet is in <strong className="text-[#9cbc65] font-semibold">caring, capable</strong> hands.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Offered & Diagnostics */}
      <section id="services-list" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Services List */}
          <div className="lg:col-span-6">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Department Services
            </span>
            <h2 className="text-3xl font-serif text-slate-900 dark:text-slate-100 mb-8">
              Services Offered at Emergency Department
            </h2>

            <div className="space-y-4">
              {servicesOffered.map((svc, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-xs uppercase tracking-wide text-slate-900 dark:text-slate-100 mb-1">
                    {svc.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostics & ICU */}
          <div id="diagnostics" className="lg:col-span-6 flex flex-col gap-8">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-2 block">
                24-Hour On-Site Testing
              </span>
              <h3 className="text-2xl font-serif mb-6 text-white">Diagnostic Capabilities</h3>
              <div className="space-y-4 text-xs">
                {diagnosticFeatures.map((df, idx) => (
                  <div key={idx} className="border-b border-slate-800 pb-3 last:border-0">
                    <h5 className="font-bold text-slate-200 mb-0.5">{df.title}</h5>
                    <p className="text-slate-400 leading-relaxed">{df.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
              <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-2 block">
                Hospitalized Patient Care
              </span>
              <h3 className="text-2xl font-serif text-slate-900 dark:text-slate-100 mb-4">Intensive Care Unit (ICU)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Our ICU provides 24-hour monitoring by licensed veterinarians and experienced nursing teams. We maintain temperature-controlled, oxygen-equipped environments with strong pain management protocols to support full recovery.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Pet Safety Advice
            </span>
            <h2 className="text-3xl font-serif text-white mb-4">
              How to Reduce the Risk of Pet Emergencies
            </h2>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              While not all emergencies can be prevented, taking key steps can greatly decrease sudden risks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventionTips.map((tip, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#9cbc65] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Common Questions
          </span>
          <h2 className="text-3xl font-serif text-slate-900 dark:text-slate-100">
            Emergency Care FAQs
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-[#ec558b]" /> {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Callout Banner */}
      <section className="py-16 bg-[#e8f4fd] dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            Save Our Emergency Number Now
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
            Be prepared if the worst happens. Save our 24/7 hotline to your phone contacts today.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800">
            <div className="text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ec558b] block">24-Hour Emergency Hotline</span>
              <a href="tel:+971505503777" className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100 hover:text-[#ec558b]">
                +971 50 550 3777
              </a>
            </div>
            <a 
              href="tel:+971505503777" 
              className="px-6 py-3 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
