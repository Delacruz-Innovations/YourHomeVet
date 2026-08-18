import React from 'react';
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
    "Referral To A Full Modern Vet Facility When More Advanced Care Is Needed"
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
    },
    {
      title: "Comprehensive Services",
      desc: "Check ups, vaccinations and minor procedures not requiring general anesthesia are completed inside the mobile clinic with diagnostic testing supported by full facility referrals."
    },
    {
      title: "Senior & Special Needs Pets",
      desc: "Ideal for senior or special needs animals experiencing mobility or anxiety difficulties, providing a safe, comfortable, and stress-free setting right at home."
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
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <img 
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1200" 
            alt="Modern Vet Mobile Clinic Unit Van" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-[#ec558b] lg:dark:text-[#ec558b] mb-3 block flex items-center gap-2">
              <Truck size={16} /> MOBILE CLINIC DUBAI
            </span>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] mb-6 tracking-tight">
              Mobile Vet Dubai Service
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-6">
              Our veterinary home visit provides you with all the services and care you would normally expect from a veterinary clinic, but at your location, making it easy and stress free to get quality veterinary care for your pet.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-8">
              Managed by experienced veterinarians including <strong>Dr. Rahaf Roushdi</strong>, our Mobile Veterinary Unit travels to you so check-ups and minor procedures are performed inside the van—maintaining a clean, safe clinical environment without requiring the vet to enter your home.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://modernvet.com/booking/" 
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
                <Phone size={16} /> Call Us: 971 4 5971 000
              </a>
            </div>

            {/* Anchor Quick Navigation Bar */}
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-300 lg:text-slate-600 dark:lg:text-slate-300">
              <span className="text-[#9cbc65] font-bold">Skip to:</span>
              <a href="#expert-care" className="hover:text-[#ec558b] underline">Expert Care</a> |
              <a href="#why-choose" className="hover:text-[#ec558b] underline">Why Choose Us</a> |
              <a href="#services-offered" className="hover:text-[#ec558b] underline">Services Offered</a> |
              <a href="#van-capabilities" className="hover:text-[#ec558b] underline">In-Van Capabilities</a>
            </div>
          </div>

          {/* Desktop Image Side */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=900" 
                alt="Modern Vet Mobile Clinic Unit Van" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#9cbc65] uppercase tracking-wider mb-1">
                  Fully Equipped Van Unit
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Clinical Quality Right at Your Doorstep
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Upgraded Mobile Veterinary Unit & 12 Key Reasons */}
      <section id="why-choose" className="py-16 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Convenient & Safe Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Key Reasons To Choose The Modern Vet Mobile Clinic
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              For years, Modern Vet has been a trusted multi-specialist veterinary provider in Dubai. With our upgraded Mobile Clinic, veterinary care is now more convenient, accessible, and stress-free than ever.
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
      <section id="expert-care" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Unrivaled Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6">
              Expert Veterinary Care, Delivered to Your Location
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Modern Vet is known for high quality veterinary care, available when you need it. The Mobile Clinic brings the same professional standards directly to you.
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
              <a 
                href="https://modernvet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-all block"
              >
                Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="w-full py-3.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm transition-all block"
              >
                Call Us: 971 4 5971 000
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose a Mobile Vet Clinic in Dubai? (6 Pillars) */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              The Mobile Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Why Choose a Mobile Vet Clinic in Dubai?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              The mobile vet unit of Modern Vet is more than just a house call. It is designed to provide effective and safe animal healthcare for suitable procedures.
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

      {/* Services Offered By The Modern Vet Mobile Clinic */}
      <section id="services-offered" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Dr. Rahaf Roushdi & Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            Services Offered By The Modern Vet Mobile Clinic
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
      <section id="van-capabilities" className="py-16 lg:py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Purpose-Built Clinical Van
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6">
              Advanced In-Van Capabilities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              The Modern Vet Mobile Clinic is a purpose built veterinary unit that provides consultations, wellness care and minor procedures not requiring anesthesia performed inside the van.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Every client visit has the same goal of providing detailed guidance about your pet’s health. If additional treatment or advanced diagnostics are needed beyond what we offer in the van, we seamlessly arrange for your pet to be seen at Modern Vet's main hospital facility under continuous care.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://modernvet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                Book Mobile Visit
              </a>
              <a 
                href="tel:97145971000" 
                className="px-8 py-4 rounded-sm bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
              >
                Call Us: 971 4 5971 000
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-800/80 p-8 sm:p-10 rounded-sm border border-slate-700/60 shadow-xl">
            <Sparkles size={36} className="text-[#9cbc65] mb-4" />
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              A Smarter Way to Manage Your Pet’s Health
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Modern Vet Mobile Clinic has changed how we provide veterinary care in Dubai by offering a reliable solution for busy owners needing convenient access to professional veterinary care. To book a Mobile Vet Visit, call 971 4 5971 000.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
