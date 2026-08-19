import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Users, 
  Heart, 
  Activity, 
  Stethoscope, 
  Building2, 
  Play,
  ChevronRight,
  Target,
  Lightbulb,
  FileCheck,
  PawPrint
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

import aboutHeroImg from '../assets/vet_team_hero.jpg';
import centerLogo from '../assets/center_logo.jpg';

export default function AboutUsContent() {
  const systemCapabilities = [
    "24/7 Emergency and Critical Care Services",
    "Intensive Care Unit (ICU) Support",
    "Complex orthopedic and soft tissue surgeries",
    "Neurological, Oncology and Internal Medicine Cases",
    "Chronic disease management",
    "Advanced Dental and Oral Surgical Interventions",
    "Preventive Health Strategies to reduce future medical risk"
  ];

  const infrastructureCards = [
    {
      title: "CT (Computed Tomography) Scanning",
      desc: "Enables detailed cross-sectional images necessary for trauma assessment, neurological diagnostics, oncological staging and advanced surgical planning. On-site CT scanner eliminates external referrals."
    },
    {
      title: "Digital Radiography Systems",
      desc: "Rapidly and accurately evaluates musculoskeletal injuries, thoracic conditions, abdominal abnormalities and acute emergency cases."
    },
    {
      title: "High Resolution Ultrasound",
      desc: "Provides real-time imaging of abdominal organs, cardiac structures and soft tissues to support complex internal medicine diagnostics."
    },
    {
      title: "In-House Laboratory Services",
      desc: "Immediate access to hematology, biochemistry, infectious disease testing and pre-anesthetic screening for critical decision making in ICU situations."
    },
    {
      title: "Advanced Surgical & Anesthesia Suites",
      desc: "Modern anesthesia delivery and continuous intraoperative monitoring for enhanced safety during routine and high-risk surgical procedures."
    },
    {
      title: "Intensive Care Unit (ICU)",
      desc: "Advanced monitoring equipment providing continuous, high-priority specialized care for post-operative and critically ill patients."
    }
  ];

  const approachCards = [
    {
      title: "Comprehensive Diagnostic Care",
      desc: "We take the time to consider all possible diagnostics and treatments for your pet, approaching complex cases with a curious and determined attitude to deliver optimal outcomes."
    },
    {
      title: "Collaborative Veterinary Team",
      desc: "Our veterinarians, surgical staff, radiologists, and specialists operate as a single unified team, collaborating on evaluating complex cases to provide top-tier medical care."
    },
    {
      title: "Individualized Treatment Plan",
      desc: "Each patient receives a customized treatment plan focused on precise medical monitoring and coordinated care to promote a long, healthy life."
    }
  ];

  const coreValues = [
    {
      num: "01",
      title: "Clinical Excellence",
      desc: "Our veterinarians pursue clinical excellence through specialist training, evidence-based practice, and continuing education, achieving success in complex cases."
    },
    {
      num: "02",
      title: "Compassion First",
      desc: "All animals receive compassionate care, respect, and dignity with due consideration to the unique bond between pets and their families."
    },
    {
      num: "03",
      title: "Purposeful Innovation",
      desc: "Continued investment in advanced diagnostic and surgical technology allows for increased confidence in accurate decision making and treatment success."
    },
    {
      num: "04",
      title: "Integrity & Trust",
      desc: "Transparency and honest recommendations build enduring trust with clients. The health and well-being of each animal remains our top priority."
    },
    {
      num: "05",
      title: "Supporting the Community",
      desc: "We believe all pet owners in the UAE should have access to quality veterinary care delivered consistently, ethically, and responsibly."
    }
  ];

  const carePillars = [
    {
      title: "Advanced Medical Infrastructure",
      desc: "We believe that all pet owners in the UAE should have access to quality, YourHomeVeterinary care delivered consistently and responsibly."
    },
    {
      title: "Standardized Clinical Protocols",
      desc: "Through standardized medical documentation, process-oriented workflows, and uniform clinical protocols, we maintain consistency across all locations."
    },
    {
      title: "Collaborative Team of Experts",
      desc: "Veterinarians, registered technicians, licensed assistants, and administrative staff working together to provide comprehensive, individualized care."
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
              ESTABLISHED 1995 • 30+ YEARS IN DUBAI
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-4">
              About YourHomeVet
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              With more than 30 years of experience in Dubai, YourHomeVet has been a trusted pioneer in mobile and hospital veterinary medicine since 1995.
            </p>
            
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-sm leading-relaxed mb-8 hidden sm:block">
              From a single clinic, we have evolved into an integrated veterinary practice with mobile ambulance units, modern surgical theaters, and 24/7 emergency dispatch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://yourhomevet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-md"
              >
                <Calendar size={16} /> Book Consultation
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
            src={aboutHeroImg} 
            alt="YourHomeVet Dubai Hospital Facility" 
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

      {/* Founder Video Showcase Section */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
            Our Journey & Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-8">
            The Story That Started YourHomeVet
          </h2>

          <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group aspect-video bg-slate-900 flex items-center justify-center">
            <LazyImage 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
              alt="The Story That Started YourHomeVet Video Preview" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
            />
            <button className="w-20 h-20 rounded-full bg-[#ec558b] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform absolute z-10">
              <Play size={32} className="ml-1 fill-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Comprehensive Medical Care */}
      <section className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <LazyImage 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=900" 
                alt="Comprehensive Medical Care at YourHomeVet" 
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Integrated Medical Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6">
              Comprehensive Medical Care
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              YourHomeVet is set up as an integrated medical model that manages all levels of complexity, from preventive health plans to critical, multi-system disease and trauma. Unlike most veterinarians who give you a list of services, we are focused on comprehensive case management.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Every client has a single point of contact (our Doctor or our Technician), and every client goes through a coordinated clinical pathway, from diagnosis and stabilization to treatment, monitoring, and long-term recovery planning.
            </p>

            <div className="p-6 rounded-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
                Our system is equipped to manage:
              </h4>
              <ul className="space-y-3">
                {systemCapabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={18} className="text-[#9cbc65] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Diagnostic & Treatment Infrastructure */}
      <section className="py-8 lg:py-10 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              On-Site Medical Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Advanced Diagnostic & Treatment Infrastructure
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              YourHomeVet combines a multidisciplinary medical team with advanced diagnostic technology, allowing us to evaluate, diagnose, and treat complex cases with speed, precision, and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureCards.map((card, idx) => (
              <div key={idx} className="p-8 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3 text-[#ec558b]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach to Veterinary Care */}
      <section className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Clinical Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">
            Our Approach to Veterinary Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachCards.map((app, idx) => (
            <div key={idx} className="p-8 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#51b255] block mb-3">PILLAR 0{idx + 1}</span>
                <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 lg:py-10 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-8 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <span className="text-3xl font-serif font-bold text-[#ec558b] shrink-0">{val.num}</span>
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Care Possible */}
      <section className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Quality Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            What Makes Our Care Possible
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Reliable veterinary care can only occur with dedication, discipline, a defined framework for medical care, and accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {carePillars.map((cp, idx) => (
            <div key={idx} className="p-8 rounded-sm bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-3 text-[#51b255]">
                {cp.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {cp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Explore Our Services Callout Banner */}
        <div className="bg-[#fff2f5] dark:bg-rose-950/20 border border-[#fcd5e2] dark:border-rose-900/40 rounded-sm p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
              Explore Our Veterinary Care Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Discover routine wellness, specialist care, and emergency solutions available 24/7 across Dubai.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link 
              to="/24-7-emergency-care-at-your-door" 
              className="px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all inline-block"
            >
              Our Services
            </Link>
            <a 
              href="tel:97145971000" 
              className="px-8 py-4 rounded-sm bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all inline-block"
            >
              Call : 971 4 5971 000
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
