import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Clock,
  PawPrint
} from 'lucide-react';
import LazyImage from './ui/LazyImage';
import spayHeroImg from '../assets/vet_surgery_suite.jpg';
import centerLogo from '../assets/center_logo.jpg';

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
      title: "Reduced Risk of Diseases",
      desc: "Spaying females prevents uterine infections and greatly reduces the risk of mammary tumors. Neutering males prevents testicular cancer and lowers prostate issue risks."
    },
    {
      num: "02",
      title: "Better Behavioral Balance",
      desc: "Neutered pets are less likely to mark territory, display aggressive behaviors, or experience stress from mating drives, making them calmer and happier companions."
    },
    {
      num: "03",
      title: "Safer & More Harmonious Living",
      desc: "Pets are less likely to roam, escape or get into fights when they are spayed or neutered. This lowers the risk of injuries and helps promote better harmony in multi-pet households."
    }
  ];

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
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
              PREVENTIVE SURGICAL CARE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4">
              Spay & Neuter Care
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              Keep your pet healthy and protect their future with our gentle spay and neuter services. We provide safe, minimally invasive procedures.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-sm leading-relaxed mb-8 hidden sm:block">
              Performed by skilled surgeons with continuous multi-parameter vital monitoring and dedicated post-operative recovery care.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/book-an-appointment" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-md"
              >
                <Calendar size={16} /> Book Consult
              </Link>
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
            src={spayHeroImg} 
            alt="Pet Spay and Neuter Care" 
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
              <Link 
                to="/book-an-appointment" 
                className="w-full py-4 bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all block text-center"
              >
                Book An Appointment
              </Link>
              <a 
                href="tel:97145971000" 
                className="w-full py-4 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all block text-center"
              >
                Call : 971 4 5971 000
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Transparent Pricing Matrix Section */}
      <section className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

            <Link 
              to="/book-an-appointment" 
              className="w-full py-4 bg-[#51b255] hover:bg-[#439c47] text-white text-center text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md block"
            >
              Book Castration
            </Link>
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

            <Link 
              to="/book-an-appointment" 
              className="w-full py-4 bg-[#ec558b] hover:bg-[#d84074] text-white text-center text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md block"
            >
              Book Spay
            </Link>
          </div>

        </div>

        {/* Pricing Footer Action */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link 
            to="/book-an-appointment" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
          >
            <Calendar size={16} /> Book an Appointment
          </Link>
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
      <section className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
