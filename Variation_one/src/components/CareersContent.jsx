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
      desc: "We continuously strive to innovate our veterinary practice by staying up to date with the latest technology."
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
      title: "Veterinary Nurse",
      department: "Medical Department",
      location: "Dubai",
      type: "Full time",
      policy: "ONSITE",
      desc: "Job Description: Veterinary Nurse Location: Dubai Work Policy: ONSITE Role Overview: We are seeking a dedicated and compassionate Veterinary Nurse to join our growing clinical department in Dubai.",
      applyUrl: "https://modern-vet.whitecarrot.ai/jobs/6dfa272f-681c-4b64-9502-1f18e13c3ae0"
    },
    {
      id: "2",
      title: "Hospital Vet / Veterinary Technician",
      department: "Vets",
      location: "Dubai",
      type: "Full time",
      policy: "ONSITE",
      desc: "Are you a DVM qualified professional with a valid MOCCAE Veterinary Technician License and currently based in the UAE? If you're passionate about animal care, join our specialist emergency team.",
      applyUrl: "https://modern-vet.whitecarrot.ai/jobs/7bd8009f-743e-4771-9f36-64ad88ec36c6"
    },
    {
      id: "3",
      title: "Veterinary Pharmacist",
      department: "Inventory and Purchasing",
      location: "Dubai",
      type: "Full time",
      policy: "ONSITE",
      desc: "Are you a qualified Pharmacist with a passion for animal health and patient care? Join YourHomeVet and play a key role in supporting exceptional veterinary care and inventory management.",
      applyUrl: "https://modern-vet.whitecarrot.ai/jobs/c3f1edc0-ab56-420f-9c5f-68a9b60d4caa"
    }
  ];

  const filteredJobs = jobsList.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header & About Section */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <LazyImage 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
            alt="Veterinary team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-white/10 lg:border-slate-100 dark:lg:border-slate-800 pb-6 relative z-10">
          <div>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-400 lg:dark:text-slate-400 mb-1 block">
              yourhomevet &gt; Careers
            </span>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] tracking-tight">
              Careers At YourHomeVet
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#jobs-pool" 
              className="px-7 py-3 rounded-sm bg-[#ec558b] hover:bg-[#d84074] lg:bg-slate-900 lg:hover:bg-slate-800 text-white lg:dark:bg-white lg:dark:text-slate-950 text-xs font-bold uppercase tracking-widest shadow-md transition-all inline-flex items-center gap-2"
            >
              <Briefcase size={15} /> View Open Jobs
            </a>
            <button className="p-3 rounded-sm border border-white/30 lg:border-slate-200 dark:lg:border-slate-700 text-white lg:text-slate-600 dark:lg:text-slate-300 hover:bg-white/20 lg:hover:bg-slate-50 dark:lg:hover:bg-slate-800 transition-colors">
              <Share2 size={16} />
            </button>
          </div>
        </div>

        <div className="max-w-4xl mb-16 relative z-10">
          <h2 className="text-2xl font-serif font-bold text-white lg:text-slate-900 lg:dark:text-slate-100 mb-4">
            About Us
          </h2>
          <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed">
            Our lifelong mission is to become dependable partners for pet owners and to aid in creating lasting bonds with their pets. We’re redefining your veterinarian experience by leveraging technology in our processes — from setting up an appointment to the actual veterinarian consultation. Alongside this is ensuring we provide everything that your pet may require with our team of seasoned veterinary doctors, nurses, and technicians — all to deliver modern and complete vet care to your pets.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-8">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-7 rounded-sm bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-3 text-[#ec558b]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hospital Video Container */}
        <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group aspect-video bg-slate-900 flex items-center justify-center max-w-5xl mx-auto mb-16">
          <LazyImage 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
            alt="YourHomeVet Hospital Careers Video" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
          />
          <button className="w-20 h-20 rounded-full bg-[#ec558b] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform absolute z-10">
            <Play size={32} className="ml-1 fill-white" />
          </button>
        </div>

        {/* Open Jobs List */}
        <div id="jobs-pool" className="max-w-5xl mx-auto pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">
              Open Jobs
            </h2>
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#ec558b]"
              />
            </div>
          </div>

          <div className="space-y-6 mb-16">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="p-8 rounded-sm bg-white dark:bg-slate-900 border-l-4 border-l-[#ec558b] border-t border-r border-b border-slate-200 dark:border-slate-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-lg transition-all"
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
                      <span className="px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <Briefcase size={12} /> {job.department}
                      </span>
                      <span className="px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="px-3 py-1 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <Clock size={12} /> {job.type}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {job.desc}
                    </p>
                  </div>

                  <a 
                    href={job.applyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-sm bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-sm"
                  >
                    View & Apply
                  </a>
                </div>
              ))
            ) : (
              <div className="p-8 text-center bg-slate-50 dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
                No open positions match your search query.
              </div>
            )}
          </div>

          {/* Join Our Talent Pool */}
          <div className="p-8 rounded-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
              Join Our Talent Pool
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              Did not find anything that suits you? Join our pool to be considered for future opportunities.
            </p>

            <div className="p-6 rounded-sm bg-white dark:bg-slate-950 border-l-4 border-l-[#51b255] border-t border-r border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-slate-100">
                  Talent Pool Application
                </h4>
                <span className="text-xs text-slate-500">General Candidate Database</span>
              </div>
              <a 
                href="https://app.whitecarrot.io/profile-builder/role/595b8103-c646-4701-aac9-1dfa84641782/user/guest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-sm bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-sm"
              >
                View & Apply
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
