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
  ChevronRight,
  Target,
  Lightbulb,
  FileCheck
} from 'lucide-react';
import LazyImage from './ui/LazyImage';
import vetTeamImg from '../assets/vet_team_hero.jpg';

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
      desc: "Enables detailed cross-sectional images necessary for trauma assessment, neurological diagnostics, oncological staging and advanced surgical planning."
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
      desc: "Immediate access to hematology, biochemistry, infectious disease testing and pre-anesthetic screening for critical decision making."
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
      desc: "Promoting animal welfare, public health awareness, and responsible pet ownership through accessible home visits and community partnerships."
    }
  ];

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Banner */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
              Independent Veterinary Practice
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6">
              About YourHomeVet
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
              YourHomeVet is a premier independent mobile veterinary practice dedicated to providing compassionate, stress-free healthcare directly to your home across London.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Founded on the belief that pets deserve high-quality clinical care in the comfort of their familiar environment, our team of RCVS-registered veterinary surgeons and nurses delivers routine checkups, vaccinations, diagnostics, and 24/7 emergency dispatch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <Calendar size={16} /> Book Consultation
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
              <LazyImage 
                src={vetTeamImg} 
                alt="YourHomeVet Veterinary Team" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#58B66E] uppercase tracking-wider mb-1">
                  Compassionate Veterinary Care
                </span>
                <h3 className="text-xl font-bold text-white">
                  RCVS Registered Mobile Veterinary Surgeons
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* System Capabilities */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
              Comprehensive Medical Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Full-Spectrum Veterinary Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemCapabilities.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAFCF8] dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700 flex items-center gap-3 shadow-sm">
                <CheckCircle2 size={18} className="text-[#58B66E] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Grid */}
      <section className="py-16 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
            Clinical Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            State-of-the-Art Diagnostic Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructureCards.map((card, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F7EC] dark:bg-slate-800 flex items-center justify-center text-[#58B66E] mb-5 font-bold">
                <Building2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#4FA3DE] font-bold text-xs tracking-widest uppercase mb-3 block">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Guided by Core Practice Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#FAFCF8] dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-sm">
                <span className="text-xs font-bold text-[#FA4D80] tracking-widest uppercase block mb-2">{val.num}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Teaser Section */}
      <section id="team" className="py-20 bg-[#FAFCF8] dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#FA4D80] block mb-2">
              Clinical Team & Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-hero font-bold text-slate-900 dark:text-white mb-3">
              Meet Our RCVS-Registered Veterinary Surgeons & Specialists
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore full profiles, surgical credentials, clinical disciplines, and book home consultations with our team of veterinary surgeons, emergency triage leads, and registered veterinary nurses.
            </p>
          </div>

          <Link
            to="/our-team"
            className="px-6 py-3.5 bg-[#FA4D80] hover:bg-[#e43a6d] text-white text-xs font-bold uppercase tracking-widest transition-colors shrink-0 shadow-md flex items-center gap-2"
          >
            <span>View Specialist Directory</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
