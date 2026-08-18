import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Search, 
  Users, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Building2,
  Award
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function CareersContent() {
  const [searchTerm, setSearchTerm] = useState('');

  const coreValues = [
    {
      title: "Innovation",
      desc: "We continuously strive to innovate our veterinary practice by staying up to date with the latest technology and equipment."
    },
    {
      title: "Dedication & Compassion",
      desc: "YourHomeVet was built for compassion and everything we do is motivated by our dedication to ease the lives of pet owners and their pets."
    },
    {
      title: "Excellence in Service",
      desc: "We strive for excellence in everything we do and employ the best and proven methods and vet care team in our practice."
    }
  ];

  const jobsList = [
    {
      id: "1",
      title: "Mobile Veterinary Nurse",
      department: "Medical Department",
      location: "London",
      type: "Full time",
      policy: "ONSITE / MOBILE",
      desc: "We are seeking a dedicated and compassionate Veterinary Nurse to join our growing clinical department, supporting in-home health visits and rapid emergency dispatch.",
      applyUrl: "#contact"
    },
    {
      id: "2",
      title: "Mobile Veterinary Surgeon",
      department: "Vets",
      location: "London",
      type: "Full time",
      policy: "ONSITE / MOBILE",
      desc: "Are you an RCVS qualified professional passionate about gentle, in-home patient care? Join our specialist emergency and consultation team delivering doorstep care.",
      applyUrl: "#contact"
    },
    {
      id: "3",
      title: "Veterinary Care Coordinator",
      department: "Dispatch and Patient Care",
      location: "London",
      type: "Full time",
      policy: "HYBRID",
      desc: "Are you a skilled care coordinator with a passion for animal health? Join YourHomeVet and play a key role in managing client dispatch and appointment scheduling.",
      applyUrl: "#contact"
    }
  ];

  const filteredJobs = jobsList.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header & About Section */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#58B66E] mb-2 block">
              Join Our Veterinary Team
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              Careers At YourHomeVet
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Build a Rewarding Veterinary Career with Freedom & Impact
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              At YourHomeVet, we are redefining pet healthcare by taking veterinary medicine out of stressful clinics and straight into the home. We believe in providing our veterinary surgeons and nurses with unhurried appointments, modern equipment, and a supportive team culture.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              We empower our team members with continuing education, competitive compensation, flexible schedules, and career growth opportunities.
            </p>

            <a 
              href="#openings" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
            >
              <Briefcase size={16} /> View Current Openings
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <LazyImage 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900" 
                alt="Veterinary team collaboration" 
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {coreValues.map((val, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F7EC] dark:bg-slate-800 flex items-center justify-center text-[#58B66E] mb-5 font-bold">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{val.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings Section */}
      <section id="openings" className="py-16 bg-white dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-2 block">
                Current Opportunities
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Job Vacancies</h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search job title or keyword..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#FAFCF8] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full pl-11 pr-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FA4D80]"
              />
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="p-8 rounded-3xl bg-[#FAFCF8] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-all">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#E8F7EC] dark:bg-slate-800 text-[#58B66E] text-[10px] font-bold uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#EBF5FB] dark:bg-slate-800 text-[#4FA3DE] text-[10px] font-bold uppercase tracking-wider">
                      {job.policy}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{job.desc}</p>
                </div>

                <a 
                  href="#contact"
                  className="px-6 py-3.5 rounded-full bg-slate-900 dark:bg-slate-800 text-white hover:bg-[#FA4D80] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 text-center"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
