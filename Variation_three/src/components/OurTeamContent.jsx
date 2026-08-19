import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Award, 
  Heart, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  Search, 
  X, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  GraduationCap, 
  Languages, 
  Sparkles, 
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Activity,
  Zap,
  Building2,
  Briefcase,
  PawPrint
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from './ui/LazyImage';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Dina Samy",
    degrees: "DVM, MRCVS, CertSAS",
    role: "Senior Veterinary Surgeon — Soft Tissue & Orthopedics",
    category: "surgery",
    experience: "14+ Years Clinical Practice",
    languages: ["English", "Arabic", "French"],
    bio: "RCVS registered veterinary surgeon with over 14 years of surgical experience. She specializes in minimally invasive soft tissue interventions, orthopedic fracture repairs, cranial cruciate ligament (TPLO) stabilization, and emergency surgical trauma.",
    specialties: ["Minimally Invasive Laparoscopy", "Complex Orthopedic Fracture Repair", "TPLO & Joint Reconstruction", "Emergency Abdominal Surgery"],
    education: "Cairo University & Royal Veterinary College London",
    image: "https://images.unsplash.com/photo-1594824432258-45e336b9c9f2?auto=format&fit=crop&q=80&w=600",
    quote: "Precision, sterile surgical excellence, and minimal-stress recovery are the core principles behind every procedure we conduct."
  },
  {
    id: 2,
    name: "Dr. Mahmood Al-Khatib",
    degrees: "DVM, MSc (Internal Med), MRCVS",
    role: "Internal Medicine & Chronic Disease Specialist",
    category: "medicine",
    experience: "12+ Years Clinical Practice",
    languages: ["English", "Arabic"],
    bio: "Dr. Mahmood leads internal medicine investigations, specializing in complex endocrine disorders (diabetes, Cushing's, Addison's), nephrology, renal failure management, cardiopulmonary evaluations, and multi-system diagnostics.",
    specialties: ["Endocrinology & Diabetes", "Renal & Hepatic Pathology", "High-Resolution Ultrasound", "Chronic Multi-Organ Management"],
    education: "University of Jordan & European School for Advanced Veterinary Studies",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    quote: "Comprehensive diagnostics reveal what the eye cannot see. Our focus is accurate detection and individualized long-term therapy."
  },
  {
    id: 3,
    name: "Dr. Yuliia Vlasenko",
    degrees: "DVM, Emergency & Critical Care Lead",
    role: "Head of 24/7 Emergency & ICU Mobile Triage",
    category: "emergency",
    experience: "9+ Years Clinical Practice",
    languages: ["English", "Ukrainian", "Russian"],
    bio: "Specialist in acute veterinary trauma, 24/7 emergency response, point-of-care ultrasound (POCUS), toxicological crises, and advanced intensive care stabilization for critically ill patients across Dubai.",
    specialties: ["24/7 Emergency Mobile Triage", "Point-of-Care Ultrasound (POCUS)", "Toxicology & Poison Neutralization", "Cardiopulmonary Resuscitation"],
    education: "National University of Life & Environmental Sciences, Kyiv",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    quote: "Immediate response and clinic-grade mobile resuscitation equipment turn critical moments into successful patient recoveries."
  },
  {
    id: 4,
    name: "Dr. Horacio Ruiz",
    degrees: "DVM, DipECVN, Neuro Specialist",
    role: "Consultant Veterinary Neurologist & Neurosurgery Lead",
    category: "neurology",
    experience: "15+ Years Clinical Practice",
    languages: ["English", "Spanish", "Italian"],
    bio: "Board-certified neurologist specializing in intervertebral disc disease (IVDD), spinal decompressive surgery, complex seizure disorders, neuromuscular diseases, and advanced CT/MRI neurological imaging interpretation.",
    specialties: ["Spinal Disc Surgery (IVDD)", "Refractory Seizure Management", "Neurological Localization", "Advanced MRI/CT Evaluation"],
    education: "Autonomous University of Barcelona & Royal Veterinary College",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600",
    quote: "Restoring physical mobility and liberating pets from severe spinal pain is why I dedicated my career to veterinary neurosurgery."
  },
  {
    id: 5,
    name: "Dr. Nicoletta Nica",
    degrees: "DVM, ISFM Accredited",
    role: "Feline Medicine & Advanced Dentistry Specialist",
    category: "dental",
    experience: "11+ Years Clinical Practice",
    languages: ["English", "Italian", "Romanian"],
    bio: "Dr. Nicoletta specializes in low-stress, fear-free feline medicine and comprehensive veterinary dentistry, including ultrasonic scaling, surgical dental extractions, periodontal disease treatment, and oral surgery.",
    specialties: ["Low-Stress Feline Consultations", "Ultrasonic Dental Scaling", "Surgical Extractions & Oral Surgery", "Geriatric Cat Health Plans"],
    education: "University of Agronomic Sciences & Veterinary Medicine Bucharest",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    quote: "Dental health is a gateway to full-body wellness. Treating oral conditions gently at home eliminates fear and extends life expectancy."
  },
  {
    id: 6,
    name: "Dr. Rahaf Roushdi",
    degrees: "DVM, Fleet Medical Director",
    role: "Head of Mobile Veterinary Fleet & Preventative Care",
    category: "mobile",
    experience: "8+ Years Clinical Practice",
    languages: ["English", "Arabic"],
    bio: "Directs our customized mobile clinic operations throughout Dubai, administering in-home general health examinations, vaccination protocols, microchip registrations, pet travel clearance, and routine wellness screenings.",
    specialties: ["Doorstep Preventative Healthcare", "Comprehensive Vaccinations", "Pet Relocation & Travel Titres", "Mobile Health Diagnostics"],
    education: "Jordan University of Science & Technology",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=600",
    quote: "Bringing full diagnostic veterinary power directly to your living room is the most compassionate way to practice modern medicine."
  },
  {
    id: 7,
    name: "Sarah Jenkins",
    degrees: "RVN, DipAVN (Surgical)",
    role: "Head Registered Veterinary Nurse & Triage Director",
    category: "nursing",
    experience: "10+ Years Clinical Practice",
    languages: ["English"],
    bio: "Registered Veterinary Nurse holding advanced certification in anesthesia, emergency triage protocols, and post-surgical in-home recovery monitoring. Sarah ensures flawless patient safety standards across all home visits.",
    specialties: ["Advanced Anesthesia Monitoring", "Post-Op Wound & Pain Management", "Critical Patient Triage", "Nutritional Therapy"],
    education: "Royal College of Veterinary Surgeons (RCVS UK)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    quote: "Compassion and vigilance during patient recovery make all the difference in achieving rapid, complication-free healing."
  },
  {
    id: 8,
    name: "Tariq Al-Mansoor",
    degrees: "BSc Pharm, Veterinary Pharmacist",
    role: "Clinical Pharmacist & Diagnostic Lab Manager",
    category: "medicine",
    experience: "7+ Years Clinical Practice",
    languages: ["English", "Arabic"],
    bio: "Oversees the mobile clinical pharmacy and instant-result laboratory assays. Ensures immediate dispensing of acute medications, customized veterinary compounds, and rapid blood/biochemistry profile turnarounds.",
    specialties: ["Emergency Pharmacotherapy", "Instant Mobile Blood Assays", "Specialized Drug Compounding", "Therapeutic Drug Monitoring"],
    education: "Dubai Pharmacy College",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    quote: "Accurate laboratory data and rapid drug administration empower our surgical and medical doctors to act without delay."
  }
];

const categories = [
  { id: 'all', label: 'All Specialists' },
  { id: 'surgery', label: 'Surgery & Orthopedics' },
  { id: 'emergency', label: 'Emergency & ICU' },
  { id: 'medicine', label: 'Internal Medicine & Labs' },
  { id: 'neurology', label: 'Neurology' },
  { id: 'dental', label: 'Feline & Dentistry' },
  { id: 'mobile', label: 'Mobile Fleet' }
];

export default function OurTeamContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenBooking = () => {
    window.dispatchEvent(new Event('openBookingModal'));
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setShowAll(false);
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setShowAll(false);
  };

  const filteredMembers = teamMembers.filter(member => {
    const matchesCategory = activeCategory === 'all' || member.category === activeCategory;
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      member.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleLimit = isMobile ? 3 : 6;
  const displayedMembers = showAll ? filteredMembers : filteredMembers.slice(0, visibleLimit);

  return (
    <div id="team" className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors font-sans">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FA4D80]/10 text-[#FA4D80] dark:bg-[#FA4D80]/20 text-[11px] font-bold uppercase tracking-widest">
            <Sparkles size={13} />
            <span>RCVS & UAE MOCCAE Accredited Clinicians</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-hero font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.05]">
            Board-Certified <br className="hidden sm:inline" />
            <span className="text-[#FA4D80]">Veterinary Specialists</span> & Surgeons
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            International veterinary experts with European and American specialist certifications bringing hospital-level medicine directly to your doorstep.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-12">
          <div className="p-4 border-r border-slate-100 dark:border-slate-800 last:border-0">
            <span className="text-3xl sm:text-4xl font-hero font-extrabold text-slate-900 dark:text-white block">30+</span>
            <span className="text-xs text-slate-500 font-medium">Years Serving UAE</span>
          </div>
          <div className="p-4 border-r border-slate-100 dark:border-slate-800 last:border-0">
            <span className="text-3xl sm:text-4xl font-hero font-extrabold text-[#FA4D80] block">100%</span>
            <span className="text-xs text-slate-500 font-medium">Licensed Specialists</span>
          </div>
          <div className="p-4 border-r border-slate-100 dark:border-slate-800 last:border-0">
            <span className="text-3xl sm:text-4xl font-hero font-extrabold text-[#58B66E] block">24/7</span>
            <span className="text-xs text-slate-500 font-medium">Mobile Ambulance Fleet</span>
          </div>
          <div className="p-4">
            <span className="text-3xl sm:text-4xl font-hero font-extrabold text-slate-900 dark:text-white block">25,000+</span>
            <span className="text-xs text-slate-500 font-medium">Home Treatments</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search specialists, procedures, skills..."
              className="w-full pl-10 pr-8 py-2.5 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#FA4D80] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. TEAM DIRECTORY GRID */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8">
            <PawPrint size={40} className="mx-auto text-slate-300 dark:text-slate-600 mb-3" />
            <h3 className="text-lg font-hero font-bold text-slate-800 dark:text-slate-200 mb-1">No specialists match your criteria</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Try clearing your search term or selecting a different clinical category.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setShowAll(false); }}
              className="px-5 py-2 bg-[#FA4D80] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#e43a6d] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {displayedMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-[#FA4D80] dark:hover:border-[#FA4D80] transition-colors duration-300"
                  >
                    <div>
                      {/* Photo with Sharp Frame */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                        <LazyImage
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Hover Dossier Reveal */}
                        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                          <button
                            onClick={() => setSelectedDoctor(member)}
                            className="px-4 py-2.5 bg-white text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#FA4D80] hover:text-white transition-colors cursor-pointer shadow-lg"
                          >
                            <span>View Clinical Dossier</span>
                            <ArrowUpRight size={14} />
                          </button>
                        </div>

                        {/* Top Credentials Tag */}
                        <div className="absolute top-0 right-0 px-3 py-1 bg-slate-950 text-white text-[10px] font-bold tracking-widest uppercase">
                          {member.experience}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-7">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#58B66E] block mb-1">
                          {member.degrees}
                        </span>
                        <h3 className="text-2xl font-hero font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#FA4D80] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">
                          {member.role}
                        </p>

                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                          {member.bio}
                        </p>

                        {/* Specialty Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {member.specialties.slice(0, 3).map((spec, i) => (
                            <span 
                              key={i} 
                              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Controls */}
                    <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedDoctor(member)}
                        className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#FA4D80] dark:hover:text-[#FA4D80] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Full Profile</span>
                        <ChevronRight size={14} />
                      </button>

                      <button
                        onClick={handleOpenBooking}
                        className="px-4 py-2 bg-[#FA4D80] hover:bg-[#e43a6d] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Calendar size={12} />
                        <span>Book Consult</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* View More / Show Less */}
            {filteredMembers.length > visibleLimit && (
              <div className="flex justify-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#FA4D80] hover:bg-[#e43a6d] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md"
                >
                  {showAll ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      <span>View More ({filteredMembers.length - visibleLimit} Remaining)</span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 3. CLINICAL STANDARDS & MOBILE CAPABILITIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#FA4D80] block mb-2">
              Veterinary Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-hero font-bold text-slate-900 dark:text-slate-100 mb-4">
              Direct Hospital-Grade Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every home appointment is backed by a fully equipped mobile ambulance and an advanced referral veterinary surgical hospital with multi-slice CT scanning and ICU facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAFCF8] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#58B66E]/15 text-[#58B66E] flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-hero font-bold text-slate-900 dark:text-white mb-2">
                  Immediate In-Home Diagnostics
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Point-of-care ultrasound (POCUS), instant hematology & biochemistry analyzers, digital blood pressure, and ECG telemetry deployed right inside your home.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#58B66E]">
                10-Minute Assay Results
              </span>
            </div>

            <div className="p-8 bg-[#FAFCF8] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FA4D80]/15 text-[#FA4D80] flex items-center justify-center mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-hero font-bold text-slate-900 dark:text-white mb-2">
                  Sterile Surgical Theater
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Isoflurane/Sevoflurane inhalation anesthesia, capnography, pulse oximetry, active warming blankets, and autoclave-sterilized orthopedic instrument trays.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FA4D80]">
                Strict Aseptic Protocol
              </span>
            </div>

            <div className="p-8 bg-[#FAFCF8] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center mb-6">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-hero font-bold text-slate-900 dark:text-white mb-2">
                  Hospital Referral Integration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  For complex polytrauma or neurological cases requiring 64-slice CT scanning, MRI, or 24-hour continuous oxygen/ICU monitoring, our ambulance provides seamless transfer.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">
                24/7 ICU Backup
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAREERS TEASER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#FA4D80] block mb-2">
              Join Our Clinical Team
            </span>
            <h3 className="text-2xl sm:text-3xl font-hero font-bold mb-3">
              Are you a passionate Veterinary Surgeon or RVN in Dubai?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We are expanding our mobile surgical and clinical team. Explore our open positions with competitive UAE packages, cutting-edge equipment, and supportive work-life balance.
            </p>
          </div>

          <Link
            to="/join-us"
            className="px-6 py-3.5 bg-[#FA4D80] hover:bg-[#e43a6d] text-white text-xs font-bold uppercase tracking-widest transition-colors shrink-0 shadow-lg"
          >
            Explore Open Vacancies &rarr;
          </Link>
        </div>
      </section>

      {/* 5. INTERACTIVE DOCTOR DOSSIER MODAL */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#FA4D80] hover:text-white transition-colors z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
                {/* Photo & Fast Facts */}
                <div className="sm:col-span-5 flex flex-col">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-4">
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 bg-[#FAFCF8] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                      <GraduationCap size={14} className="text-[#58B66E] shrink-0" />
                      <span>{selectedDoctor.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                      <Languages size={14} className="text-[#FA4D80] shrink-0" />
                      <span>Languages: {selectedDoctor.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                      <Clock size={14} className="text-slate-500 shrink-0" />
                      <span>{selectedDoctor.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Bio & Clinical Summary */}
                <div className="sm:col-span-7 flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#58B66E] mb-1">
                    {selectedDoctor.degrees}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-hero font-bold text-slate-900 dark:text-white mb-2">
                    {selectedDoctor.name}
                  </h2>
                  <p className="text-xs font-bold text-[#FA4D80] uppercase tracking-wider mb-4">
                    {selectedDoctor.role}
                  </p>

                  {/* Philosophy Box */}
                  <div className="p-4 bg-slate-50 dark:bg-slate-950 border-l-2 border-[#FA4D80] text-xs italic text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    "{selectedDoctor.quote}"
                  </div>

                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                    Clinical Background & Credentials
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {selectedDoctor.bio}
                  </p>

                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                    Procedures & Focus Disciplines
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {selectedDoctor.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Booking Trigger */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedDoctor(null);
                        handleOpenBooking();
                      }}
                      className="flex-1 py-3.5 bg-[#FA4D80] hover:bg-[#e43a6d] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Calendar size={14} />
                      <span>Book Consultation With {selectedDoctor.name.split(' ')[1]}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
