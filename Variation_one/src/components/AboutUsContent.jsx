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
  FileCheck
} from 'lucide-react';

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
      desc: "We believe that all pet owners in the UAE should have access to quality, modern veterinary care delivered consistently and responsibly."
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
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Background Image for Mobile and Tablet */}
      <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
        <img 
          src="https://images.unsplash.com/photo-1576201836106?auto=format&fit=crop&q=80&w=1200" 
          alt="Veterinarian with a dog" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-[#ec558b] lg:dark:text-[#ec558b] mb-3 block">
              ESTABLISHED 1995 • 30+ YEARS IN DUBAI
            </span>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] mb-6 tracking-tight">
              About Us
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-6">
              With more than 30 years of experience in Dubai, Modern Vet has been a trusted provider of pet healthcare since 1995. Today, Modern Vet is one of the oldest veterinary clinics in the UAE and continues to provide high quality and compassionate veterinary services for pets and their owners.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-8">
              From a single clinic, we have evolved into an integrated veterinary group with modern medical technology and facilities, skilled veterinarians, and a commitment to continually improving clinical standards. Our name reflects this journey and forward-thinking approach to veterinary medicine.
            </p>

            <div className="flex flex-wrap gap-4">
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
                <Phone size={16} /> Call : 971 4 5971 000
              </a>
            </div>
          </div>

          {/* Desktop Image Side */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1576201836106?auto=format&fit=crop&q=80&w=900" 
                alt="Modern Vet Dubai Hospital Facility" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#9cbc65] uppercase tracking-wider mb-1">
                  Established 1995
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  30+ Years of Veterinary Excellence in Dubai
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Founder Video Showcase Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
            Our Journey & Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-8">
            The Story That Started Modern Vet
          </h2>

          <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group aspect-video bg-slate-900 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
              alt="The Story That Started Modern Vet Video Preview" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
            />
            <button className="w-20 h-20 rounded-full bg-[#ec558b] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform absolute z-10">
              <Play size={32} className="ml-1 fill-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Comprehensive Medical Care */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=900" 
                alt="Comprehensive Medical Care at Modern Vet" 
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
              Modern Vet is set up as an integrated medical model that manages all levels of complexity, from preventive health plans to critical, multi-system disease and trauma. Unlike most veterinarians who give you a list of services, we are focused on comprehensive case management.
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
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              On-Site Medical Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Advanced Diagnostic & Treatment Infrastructure
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Modern Vet combines a multidisciplinary medical team with advanced diagnostic technology, allowing us to evaluate, diagnose, and treat complex cases with speed, precision, and confidence.
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
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
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
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
