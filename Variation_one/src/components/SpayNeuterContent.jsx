import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Award,
  ChevronRight,
  Scissors,
  Check,
  Zap,
  Clock
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function SpayNeuterContent() {
  const [selectedPet, setSelectedPet] = useState('Dog');
  const [selectedLocation, setSelectedLocation] = useState('Hospital');

  const dogPrices = {
    castration: [
      { name: "Small Mammal (Male)", weight: "N/A", price: "1,449 AED" },
      { name: "Small Dog", weight: "<10 kg", price: "1,849 AED" },
      { name: "Medium Dog", weight: "10–25 kg", price: "2,049 AED" },
      { name: "Large Dog", weight: ">25 kg", price: "2,299 AED" }
    ],
    spay: [
      { name: "Small Mammal (Female)", weight: "N/A", price: "1,849 AED" },
      { name: "Small Dog", weight: "<10 kg", price: "2,049 AED" },
      { name: "Medium Dog", weight: "10–25 kg", price: "2,299 AED" },
      { name: "Large Dog", weight: ">25 kg", price: "2,549 AED" }
    ]
  };

  const catPrices = {
    castration: [
      { name: "Male Cat", weight: "Standard", price: "1,249 AED" }
    ],
    spay: [
      { name: "Female Cat", weight: "Standard", price: "1,549 AED" }
    ]
  };

  const currentPrices = selectedPet === 'Dog' ? dogPrices : catPrices;

  const benefits = [
    {
      num: "01",
      title: "A Longer, Healthier Life",
      desc: "Spaying and neutering significantly reduce the risk of serious health conditions, including uterine infections, mammary tumors, testicular tumors and prostate problems. It’s one of the most important steps you can take to give your pet a longer, healthier life."
    },
    {
      num: "02",
      title: "A Calmer, Happier Companion",
      desc: "Hormone-driven behaviors like heat cycles, excessive vocalization, spraying, mounting and dominance can be stressful for both pets and owners. Spaying or neutering helps reduce these behaviors, creating a calmer and more comfortable home environment."
    },
    {
      num: "03",
      title: "Safer & More Harmonious Living",
      desc: "Pets are less likely to roam, escape or get into fights when they are spayed or neutered. This lowers the risk of injuries and helps promote better harmony in multi-pet households."
    }
  ];

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Section */}
      <section className="relative py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <LazyImage 
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1200" 
            alt="Pet Spay and Neuter Care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-[#ec558b] lg:dark:text-[#ec558b] mb-3 block">
              PREVENTIVE SURGICAL CARE
            </span>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] mb-6 tracking-tight">
              Spay & Neuter
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-8">
              Keep your pet healthy and protect their future with our spay and neuter services. We offer safe, compassionate care by our experienced veterinarians to prevent litters and help ensure your pet lives a long, healthy life.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://yourhomevet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] lg:bg-black lg:hover:bg-slate-800 text-white lg:dark:bg-white lg:dark:text-slate-950 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
              >
                <Calendar size={16} /> Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm border border-white/30 lg:border-slate-400/50 lg:dark:border-slate-700 bg-slate-950/40 lg:bg-slate-900 lg:dark:bg-slate-900/40 text-white lg:text-slate-800 lg:dark:text-slate-200 hover:bg-white/20 lg:hover:bg-white lg:dark:hover:bg-slate-800 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
              >
                <Phone size={16} /> Call: 971 4 5971 000
              </a>
            </div>
          </div>

          {/* Desktop Image Side */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <LazyImage 
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900" 
                alt="Pet Spay and Neuter Care" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#9cbc65] uppercase tracking-wider mb-1">
                  Compassionate Surgery
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Safe & Gentle Sterilization
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Your Trusted Partner Section & Special Package Banner */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Long-Term Wellness
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6">
              Your Trusted Partner in Your Pet’s Long Term Health
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
              The decision to have your pet spayed or neutered is one of the most responsible actions you can take as an animal owner. Not only do these common procedures prevent unwanted litters, but they also help promote better overall health, longer life and improved temperament in your pet.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Our advanced surgical techniques, hygienic standards, and attentive follow-up care help ensure every pet has a comfortable and safe experience from beginning to end.
            </p>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-3 text-[#ec558b]">
                <Sparkles size={22} />
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-slate-100">
                  Special Tailored Packages
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                YourHomeVet has introduced new, specifically tailored Spay and Neuter Packages that offer full coverage of all necessary surgical aspects, as well as an entire spectrum of post-surgical support and preferred pricing on future related services.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#fff2f6] to-[#ffe8f0] dark:from-slate-900 dark:to-slate-800 p-8 sm:p-10 rounded-3xl border border-rose-200 dark:border-slate-700 shadow-xl text-center flex flex-col justify-between h-full">
            <div>
              <ShieldCheck size={48} className="text-[#ec558b] mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                Choose safe spay and neuter care today
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Protect your pet from future reproductive health risks with our expert veterinary surgeons.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href="https://yourhomevet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all block"
              >
                Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="w-full py-4 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all block"
              >
                Call : 971 4 5971 000
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Transparent Pricing Matrix Section */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Clear & Upfront Costs
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            What does neutering cost for pets?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Pricing for neutering depends on your pet’s species, weight, and sex. Our experienced veterinarians perform all procedures under general anesthesia, with costs adjusted for individual care requirements.
          </p>

          {/* Species & Location Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <div className="inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setSelectedPet('Dog')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedPet === 'Dog'
                    ? 'bg-[#ec558b] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Dog
              </button>
              <button
                onClick={() => setSelectedPet('Cat')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedPet === 'Cat'
                    ? 'bg-[#ec558b] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Cat
              </button>
            </div>

            <div className="inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setSelectedLocation('Hospital')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedLocation === 'Hospital'
                    ? 'bg-[#51b255] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                MV Hospital
              </button>
              <button
                onClick={() => setSelectedLocation('Clinics')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedLocation === 'Clinics'
                    ? 'bg-[#51b255] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                MV Clinics
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Tables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Castration Card (Male) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 p-7 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-[#51b255] uppercase tracking-wider block mb-1">
                  Male Sterilization
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">
                  Castration
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-[#51b255] flex items-center justify-center">
                <Scissors size={24} />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {currentPrices.castration.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.name}</h4>
                    <span className="text-xs text-slate-500 font-medium">Weight: {item.weight}</span>
                  </div>
                  <span className="text-lg font-serif font-bold text-[#51b255]">{item.price}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://yourhomevet.com/booking/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#51b255] hover:bg-[#439c47] text-white text-center text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md block"
            >
              Book Castration
            </a>
          </div>

          {/* Spay Card (Female) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-[#ec558b] p-7 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-[#ec558b] uppercase tracking-wider block mb-1">
                  Female Sterilization
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">
                  Spay
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-[#ec558b] flex items-center justify-center">
                <Heart size={24} />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {currentPrices.spay.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.name}</h4>
                    <span className="text-xs text-slate-500 font-medium">Weight: {item.weight}</span>
                  </div>
                  <span className="text-lg font-serif font-bold text-[#ec558b]">{item.price}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://yourhomevet.com/booking/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#ec558b] hover:bg-[#d84074] text-white text-center text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md block"
            >
              Book Spay
            </a>
          </div>

        </div>

        {/* Pricing Footer Action */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://yourhomevet.com/booking/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
          >
            <Calendar size={16} /> Book an Appointment
          </a>
          <a 
            href="tel:97145971000" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            <Phone size={16} /> Call : 971 4 5971 000
          </a>
        </div>
      </section>

      {/* What Is Pet Sterilization? */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Medical Definition
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              What Is Pet Sterilization?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Sterilization is a method that is used to eliminate the possibility of reproduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-950/50 text-[#ec558b] flex items-center justify-center font-bold text-lg mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                Spaying (Female)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Spaying involves the removal of the ovaries (and commonly the uterus) from female animals to stop heat cycles and prevent pregnancy.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-[#51b255] flex items-center justify-center font-bold text-lg mb-6">
                <Scissors size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                Neutering (Male)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Neutering (also known as castration) involves the removal of the testicles in male animals to stop reproduction and curb hormone-driven behaviors.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-600 flex items-center justify-center font-bold text-lg mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                Safest Method
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Chemical alternatives may be suitable in limited cases, but surgical sterilization remains the safest and most reliable method for long-term health.
              </p>
            </div>

          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#eaf6eb] via-[#f4faee] to-white dark:from-slate-900 dark:to-slate-800 border border-emerald-200 dark:border-slate-700 shadow-sm">
            <h4 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
              Optimal Age for Sterilization (5 to 6 Months)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              When a pet has been spayed or neutered before becoming sexually mature (usually around 5 to 6 months of age), it helps to prevent unwanted litters, reduce stray animal numbers, help improve an animal’s behavior, and ensure your pet is healthier long-term while providing better health for the community.
            </p>
          </div>

        </div>
      </section>

      {/* Why Spay or Neuter Your Pet? Section */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Health & Behavioral Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            Why Spay or Neuter Your Pet?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            The benefits to pet health are many and well-documented. Sterilization offers more than just population control; it provides other significant health advantages to your pets:
          </p>
        </div>

        <div className="space-y-8">
          {benefits.map((b, idx) => (
            <div 
              key={idx} 
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-5xl sm:text-6xl font-serif font-bold text-[#ec558b] shrink-0 font-mono">
                {b.num}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
