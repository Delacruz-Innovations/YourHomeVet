import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  Truck, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Clock,
  Home as HomeIcon,
  Users,
  Stethoscope,
  Smile,
  Activity,
  Award
} from 'lucide-react';
import LazyImage from './ui/LazyImage';
import mobileHeroImg from '../assets/vet_home_visit.jpg';
import centerLogo from '../assets/center_logo.jpg';
import { PawPrint } from 'lucide-react';

export default function MobileClinicContent() {
  const keyReasons = [
    "Trusted, High Quality Veterinary Care Delivered To Your Location",
    "Consultations Conducted Inside A Fully Equipped Mobile Clinic Van",
    "Reduced Stress For Pets By Staying Close To Their Home Environment",
    "Convenient Care That Saves Time And Avoids Clinic Waiting Rooms",
    "Ideal For Multi Pet Households With Multiple Pets Seen In One Visit",
    "Routine Check Ups, Vaccinations And Preventative Care Made Easier",
    "Minor Treatments And Suitable Procedures Performed In The Van",
    "Dedicated One To One Time With An Experienced Veterinarian",
    "Helpful For Senior Pets And Pets With Mobility Or Anxiety Issues",
    "Safe, Clean Clinical Environment Without Requiring The Vet To Enter Your Home",
    "Easy Booking Online Or By Phone Across Dubai",
    "Referral To A Full YourHomeVet Facility When More Advanced Care Is Needed"
  ];

  const whyChoosePillars = [
    {
      title: "Convenience",
      desc: "Traveling and waiting in waiting rooms can be eliminated by having the mobile vet unit come to you. Your animals will be treated in the van at your location, saving time and reducing stress."
    },
    {
      title: "Multiple Pets Care",
      desc: "For families who have many pets, visiting once with the mobile unit means all of them receive medical treatment inside the same unit, eliminating multiple clinic trips."
    },
    {
      title: "Reduced Pet Anxiety",
      desc: "For many animals traveling to clinics creates significant stress. Treating animals in the mobile clinic reduces anxiety while maintaining full professional medical standards."
    }
  ];

  const advantages = [
    {
      title: "Reduced Stress for Your Pet",
      desc: "Eliminate car anxiety, carrier struggles, and bustling waiting rooms. Your pet is treated peacefully in a quiet clinical environment right outside your home."
    },
    {
      title: "Convenient for Busy Owners",
      desc: "Save valuable travel and waiting time. Ideal for professionals, multiple-pet households, seniors, or families with children."
    },
    {
      title: "Clean Clinical Unit on Wheels",
      desc: "Our custom Mercedes ambulance vehicle is sanitized between every appointment and equipped with diagnostic tools, treatment table, and cold storage."
    },
    {
      title: "Personalized One-on-One Attention",
      desc: "Each family enjoys dedicated one-to-one interaction with Dr. Rahaf Roushdi and experienced veterinarians in a peaceful, fully equipped clinical area."
    }
  ];

  const mobileServices = [
    "Complete Health Assessments At Your Location",
    "Vaccinations, Deworming And Preventative Care",
    "Minor Treatments Performed In The Mobile Clinic",
    "Senior And Geriatric Pet Care",
    "Support For Pets With Mobility, Behavioral Or Anxiety Issues",
    "Multi Pet Household Appointments In One Visit",
    "Blood Work And Laboratory Testing Where Suitable",
    "Behavioral And Lifestyle Consultations",
    "Nutrition, Weight And Wellness Guidance",
    "Personalized One To One Veterinary Attention",
    "Convenient Care Across Dubai",
    "Easy Booking Online Or By Phone"
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
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block flex items-center gap-2">
              <Truck size={16} /> MOBILE CLINIC DUBAI
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4">
              Mobile Vet Dubai Service
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              Our veterinary home visit provides hospital-grade care at your location, making it easy and stress-free for you and your pet.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-sm leading-relaxed mb-8 hidden sm:block">
              Managed by experienced clinicians, our state-of-the-art mobile clinic van travels across all Dubai communities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/book-an-appointment" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-md"
              >
                <Calendar size={16} /> Book Mobile Vet
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
            src={mobileHeroImg} 
            alt="YourHomeVet Mobile Clinic Unit Van" 
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

      {/* Upgraded Mobile Veterinary Unit & 12 Key Reasons */}
      <section id="why-choose" className="py-8 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Convenient & Safe Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Key Reasons To Choose The YourHomeVet Mobile Clinic
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              For years, YourHomeVet has been a trusted multi-specialist veterinary provider in Dubai. With our upgraded Mobile Clinic, veterinary care is now more convenient, accessible, and stress-free than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyReasons.map((reason, idx) => (
              <div key={idx} className="p-6 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-[#ec558b]/30 transition-all">
                <div className="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-950/50 text-[#ec558b] flex items-center justify-center shrink-0 font-bold text-xs">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Veterinary Care Delivered to Your Location */}
      <section id="expert-care" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Unrivaled Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6">
              Expert Veterinary Care, Delivered to Your Location
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              YourHomeVet is known for high quality veterinary care, available when you need it. The Mobile Clinic brings the same professional standards directly to you.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Consultations and treatment of your pets take place in the mobile clinic vehicle parked at your location. This ensures sanitation, safety and compliance with clinical standards while providing ultimate convenience.
            </p>

            <div className="p-6 rounded-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <ShieldCheck size={28} className="text-[#9cbc65] shrink-0 mt-1" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                Your pets remain close to their own environments while receiving the highest quality medical care from experienced veterinary professionals.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#fff2f6] to-[#ffe8f0] dark:from-slate-900 dark:to-slate-800 p-8 sm:p-10 rounded-sm border border-rose-200 dark:border-slate-700 shadow-xl text-center">
            <Truck size={48} className="text-[#ec558b] mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
              Book a Mobile Vet Visit
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Skip clinic waiting rooms and enjoy full professional veterinary care right outside your home across Dubai.
            </p>
            <div className="flex flex-col gap-3">
              <Link 
                to="/book-an-appointment" 
                className="w-full py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-all block text-center"
              >
                Book An Appointment
              </Link>
              <a 
                href="tel:97145971000" 
                className="w-full py-3.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm transition-all block text-center"
              >
                Call Us: 971 4 5971 000
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose a Mobile Vet Clinic in Dubai? (6 Pillars) */}
      <section className="py-8 lg:py-10 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              The Mobile Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Why Choose a Mobile Vet Clinic in Dubai?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              The mobile vet unit of YourHomeVet is more than just a house call. It is designed to provide effective and safe animal healthcare for suitable procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePillars.map((pillar, idx) => (
              <div key={idx} className="p-8 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ec558b] block mb-3">0{idx + 1}</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered By The YourHomeVet Mobile Clinic */}
      <section id="services-offered" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Dr. Rahaf Roushdi & Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            Services Offered By The YourHomeVet Mobile Clinic
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Our Mobile Clinic provides a comprehensive suite of routine veterinary services right at your location:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mobileServices.map((svc, idx) => (
            <div key={idx} className="p-6 rounded-sm bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex items-center gap-4 shadow-sm">
              <CheckCircle2 size={20} className="text-[#9cbc65] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                {svc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced In-Van Capabilities */}
      <section id="van-capabilities" className="py-8 lg:py-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Purpose-Built Clinical Van
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-white mb-6">
              Advanced In-Van Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              The YourHomeVet Mobile Clinic is a purpose built veterinary unit that provides consultations, wellness care and minor procedures not requiring anesthesia performed inside the van.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Every client visit has the same goal of providing detailed guidance about your pet's health. If additional treatment or advanced diagnostics are needed beyond what we offer in the van, we seamlessly arrange for your pet to be seen at YourHomeVet's main hospital facility under continuous care.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/book-an-appointment" 
                className="px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                Book Mobile Visit
              </Link>
              <a 
                href="tel:97145971000" 
                className="px-8 py-4 rounded-sm bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
              >
                Call Us: 971 4 5971 000
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/80 p-8 sm:p-10 rounded-sm border border-slate-200 dark:border-slate-700/60 shadow-xl">
            <Sparkles size={36} className="text-[#9cbc65] mb-4" />
            <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-3">
              A Smarter Way to Manage Your Pet's Health
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              YourHomeVet Mobile Clinic has changed how we provide veterinary care in Dubai by offering a reliable solution for busy owners needing convenient access to professional veterinary care. To book a Mobile Vet Visit, call 971 4 5971 000.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
