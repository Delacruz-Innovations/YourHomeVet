import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Truck, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  HelpCircle,
  Stethoscope,
  Clock,
  MapPin
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
                      Mobile Clinic
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

export default function MobileClinicContent() {

  const mobileClinicCarouselItems = [
    {
      title: "Doorstep Health Checkups",
      desc: "Comprehensive physical exams conducted right in your living room or inside our climate-controlled mobile unit.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Point-of-Care Diagnostics",
      desc: "Immediate blood testing, urinalysis, microscopy, and digital ultrasound performed on-site for instant diagnostic answers.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Safe Clinical Transport (Pet Ambulance)",
      desc: "Fully equipped mobile ambulance units designed for stress-free transport of sick or injured pets to specialist surgical centers.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Microchipping & Pet Passports",
      desc: "Official microchipping insertion, registration, and pet travel export paperwork completed at your doorstep.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const features = [
    { title: "Zero Stress Environment", text: "Eliminate car rides, waiting room germs, and reactive animal encounters." },
    { title: "Fully Equipped Medical Unit", text: "Point-of-care lab analyzers, digital ultrasound, cold-chain vaccines, and emergency oxygen onboard." },
    { title: "24/7 Rapid Dispatch", text: "Round-the-clock availability for routine appointments or rapid emergency dispatch across London." }
  ];

  const faqs = [
    { q: "What services can be done inside the mobile clinic?", a: "Almost all routine and diagnostic procedures can be performed: physical exams, blood work, ultrasound scans, vaccinations, microchipping, eye/ear exams, wound care, and minor procedures." },
    { q: "Is the mobile clinic clean and sterile?", a: "Yes, our mobile units are disinfected between every visit according to strict surgical veterinary cleanliness standards." }
  ];

  return (
    <div className="w-full bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
              Full-Service Mobile Veterinary Care
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6">
              Mobile Veterinary Clinic & Ambulance
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              We bring the veterinary hospital directly to your driveway. Our state-of-the-art mobile units are custom built and fully equipped to deliver high-quality, compassionate veterinary medicine wherever your pet feels most comfortable.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              Whether you need routine wellness exams, vaccinations, urgent care, or safe ambulance transport, YourHomeVet is on call 24 hours a day, 365 days a year.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <Calendar size={16} /> Book Mobile Visit
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
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=900" 
                alt="Mobile Veterinary Clinic" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#58B66E] uppercase tracking-wider mb-1">
                  Doorstep Veterinary Hospital
                </span>
                <h3 className="text-xl font-bold text-white">
                  Compassionate Clinical Care At Home
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <SkiperPinnedCarousel
        items={mobileClinicCarouselItems}
        badgeText="Mobile Capabilities"
        badgeColor="text-[#58B66E]"
        title="Mobile Clinic Services"
        subtitle="Bringing advanced veterinary equipment and experienced surgeons straight to your door."
      />

      {/* Features & FAQs */}
      <section className="py-16 bg-[#FAFCF8] dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-[#E8F7EC] dark:bg-slate-800 flex items-center justify-center text-[#58B66E] mb-4 font-bold">
                  <Truck size={20} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{f.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">Mobile Clinic FAQs</h3>
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
