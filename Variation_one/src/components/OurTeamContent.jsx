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
  Filter, 
  GraduationCap, 
  Languages, 
  Sparkles, 
  X, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowUpRight,
  PawPrint
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Dina Samy",
    degrees: "DVM, MRCVS, CertSAS",
    role: "Senior Veterinary Surgeon — Soft Tissue & Orthopedics",
    category: "surgery",
    experience: "14+ Years Experience",
    languages: ["English", "Arabic", "French"],
    bio: "Dr. Dina is a distinguished RCVS registered veterinary surgeon with over 14 years of surgical experience. She specializes in minimally invasive soft tissue procedures, complex bone fracture repair, knee reconstruction (TPLO), and emergency trauma interventions.",
    specialties: ["Complex Soft Tissue Surgery", "Orthopedics & Fracture Repair", "Emergency Surgical Triage", "Minimally Invasive Laparoscopy"],
    education: "Cairo University & Royal Veterinary College London",
    image: "https://images.unsplash.com/photo-1594824432258-45e336b9c9f2?auto=format&fit=crop&q=80&w=600",
    quote: "Every surgical patient deserves the utmost gentleness and meticulous precision, ensuring rapid recovery in the comfort of their home."
  },
  {
    id: 2,
    name: "Dr. Mahmood Al-Khatib",
    degrees: "DVM, MSc (Internal Med), MRCVS",
    role: "Head of Internal Medicine & Chronic Care",
    category: "medicine",
    experience: "12+ Years Experience",
    languages: ["English", "Arabic"],
    bio: "Dr. Mahmood leads the Internal Medicine department, bringing vast expertise in managing complex endocrine disorders (diabetes, Cushing's), nephrology, gastrointestinal conditions, and multi-system chronic disease management.",
    specialties: ["Endocrinology & Diabetes", "Renal & Hepatic Disorders", "Ultrasound & In-House Lab", "Cardiorespiratory Assessment"],
    education: "University of Jordan & European School for Advanced Veterinary Studies",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    quote: "Our goal is not just treating symptoms, but diagnosing the root cause through modern diagnostics to give pets an exceptional quality of life."
  },
  {
    id: 3,
    name: "Dr. Yuliia Vlasenko",
    degrees: "DVM, Emergency & Critical Care Lead",
    role: "Director of 24/7 Emergency & ICU Care",
    category: "emergency",
    experience: "9+ Years Experience",
    languages: ["English", "Ukrainian", "Russian"],
    bio: "Dr. Yuliia oversees the 24/7 rapid-response emergency mobile unit and intensive care triage. She is certified in point-of-care ultrasound (POCUS), toxicological emergencies, acute cardiopulmonary resuscitation, and trauma stabilization.",
    specialties: ["24/7 Acute Triage & Trauma", "POCUS Point-of-Care Ultrasound", "Fluid Therapy & ICU", "Toxicology & Poison Response"],
    education: "National University of Life & Environmental Sciences, Kyiv",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    quote: "In life-critical emergency situations, seconds matter. Having specialized equipment and rapid stabilization directly at the pet's door saves lives."
  },
  {
    id: 4,
    name: "Dr. Horacio Ruiz",
    degrees: "DVM, DipECVN, Neuro Specialist",
    role: "Veterinary Neurologist & Neurosurgery Consultant",
    category: "neurology",
    experience: "15+ Years Experience",
    languages: ["English", "Spanish", "Italian"],
    bio: "Dr. Horacio is a board-certified veterinary neurologist specializing in intervertebral disc disease (IVDD), spinal decompression, seizure disorders, inflammatory brain diseases, and advanced MRI/CT diagnostic interpretation.",
    specialties: ["Spinal Disc Disease (IVDD)", "Epilepsy & Seizure Disorders", "Advanced MRI/CT Interpretation", "Neuro-rehabilitation"],
    education: "Autonomous University of Barcelona & Royal Veterinary College",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600",
    quote: "Restoring mobility and pain-free movement to a paralyzed pet is the most rewarding privilege in veterinary science."
  },
  {
    id: 5,
    name: "Dr. Nicoletta Nica",
    degrees: "DVM, ISFM Member (Feline Medicine)",
    role: "Feline Medicine & Veterinary Dentistry Specialist",
    category: "dental",
    experience: "11+ Years Experience",
    languages: ["English", "Italian", "Romanian"],
    bio: "Dr. Nicoletta has dedicated her career to low-stress feline clinical medicine and advanced veterinary dentistry. She conducts ultrasonic dental scaling, surgical extractions, periodontal therapies, and fear-free home consultations.",
    specialties: ["Fear-Free Feline Medicine", "Advanced Dental Scaling & Extractions", "Periodontal Disease Surgery", "Senior Pet Wellness"],
    education: "University of Agronomic Sciences & Veterinary Medicine Bucharest",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    quote: "A gentle, calm home environment completely eliminates stress for cats, allowing thorough dental and health examinations without fear."
  },
  {
    id: 6,
    name: "Dr. Rahaf Roushdi",
    degrees: "DVM, Head of Mobile Fleet",
    role: "Head of Mobile Veterinary Operations & Diagnostics",
    category: "mobile",
    experience: "8+ Years Experience",
    languages: ["English", "Arabic"],
    bio: "Dr. Rahaf leads our custom-built mobile veterinary ambulance fleet across Dubai. She coordinates doorstep wellness checkups, digital microchipping, vaccination programs, health certificates, and export medical screenings.",
    specialties: ["Doorstep Clinical Consultations", "Preventative Care & Vaccinations", "Pet Relocation & Travel Clearance", "Mobile Ultrasound & Bloodwork"],
    education: "Jordan University of Science & Technology",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=600",
    quote: "Bringing clinic-grade veterinary technology directly to the doorstep transforms healthcare for both pets and busy pet parents."
  },
  {
    id: 7,
    name: "Sarah Jenkins",
    degrees: "RVN, DipAVN (Surgical)",
    role: "Head Registered Veterinary Nurse & Triage Coordinator",
    category: "nursing",
    experience: "10+ Years Experience",
    languages: ["English"],
    bio: "Sarah is a Registered Veterinary Nurse with advanced diplomas in surgical nursing, anesthetic monitoring, and post-operative home recovery care. She leads our nursing and triage team with warmth and dedication.",
    specialties: ["Anesthetic Monitoring", "Post-Op Wound Management", "Compassionate In-Home Nursing", "Nutritional Consultation"],
    education: "Royal College of Veterinary Surgeons (RCVS UK)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    quote: "Compassionate nursing care and continuous reassurance create the foundation of healing for every recovering patient."
  },
  {
    id: 8,
    name: "Tariq Al-Mansoor",
    degrees: "BSc Pharm, Veterinary Pharmacist",
    role: "Senior Veterinary Pharmacist & Diagnostic Lab Manager",
    category: "medicine",
    experience: "7+ Years Experience",
    languages: ["English", "Arabic"],
    bio: "Tariq manages the clinical pharmacy and in-house mobile diagnostic laboratory, ensuring prompt delivery of emergency medications, specialized compounding, prescription accuracy, and rapid blood assay processing.",
    specialties: ["Veterinary Pharmacology", "Rapid Blood & Biochemistry Assays", "Prescription Management", "Therapeutic Drug Monitoring"],
    education: "Dubai Pharmacy College & Clinical Pharmacology Certification",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    quote: "Precision and promptness in pharmacology guarantee that our doctors have the exact lifesaving treatments when seconds count."
  }
];

const categories = [
  { id: 'all', label: 'All Specialists' },
  { id: 'surgery', label: 'Surgery & Orthopedics' },
  { id: 'emergency', label: 'Emergency & Critical Care' },
  { id: 'medicine', label: 'Internal Medicine & Labs' },
  { id: 'neurology', label: 'Neurology' },
  { id: 'dental', label: 'Feline & Dental' },
  { id: 'mobile', label: 'Mobile Clinic Fleet' }
];

import teamHeroImage from '../assets/vet_team_hero.jpg';
import centerLogo from '../assets/center_logo.jpg';

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
    <div id="team" className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* 1. SPLIT HERO & INTRO BANNER (HOMEPAGE HERO STYLE) */}
      <section className="relative w-full flex flex-col lg:flex-row transition-colors duration-300 min-h-[540px] lg:min-h-[500px]">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 bg-transparent lg:bg-[#f7faf3] lg:dark:bg-slate-900 relative overflow-hidden flex z-10">
          
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
            <PawPrint size={90} className="absolute bottom-8 left-[15%] text-[#9cbc65] opacity-15 dark:opacity-5 -rotate-12" />
            <PawPrint size={50} className="absolute bottom-20 right-[35%] text-[#9cbc65] opacity-15 dark:opacity-5 rotate-12" />
            <Heart size={140} className="absolute bottom-0 right-[10%] text-[#9cbc65] opacity-10 dark:opacity-5 rotate-12 stroke-[1px] fill-transparent" />
          </div>

          <div className="w-full max-w-[640px] px-6 sm:px-8 lg:px-8 xl:pr-16 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:py-36 relative z-10 flex flex-col justify-center ml-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9cbc65]/15 dark:bg-[#9cbc65]/20 text-[#607937] dark:text-[#9cbc65] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <ShieldCheck size={14} />
              <span>RCVS & UAE MOCCAE Accredited Clinicians</span>
            </div>

            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] mb-3 block">
              YOURHOMEVET &gt; CLINICAL TEAM
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-white leading-tight mb-4">
              Meet Our Board-Certified Surgeons & Specialists
            </h1>

            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] sm:text-[17px] mb-8 max-w-md leading-relaxed font-medium lg:font-normal">
              A collaborative team of international surgeons, veterinary neurologists, emergency specialists, and dedicated nurses delivering hospital-grade care directly to your home.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+971505503777"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-md"
              >
                Book Specialist Consult
              </a>
              <a
                href="tel:+971505503777"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm border-2 border-[#9cbc65] text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white text-xs font-bold uppercase tracking-wide transition-colors bg-slate-950/40 lg:bg-transparent"
              >
                24/7 Emergency Triage
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto">
          <img
            src={teamHeroImage}
            alt="Veterinary Specialists Team"
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

      {/* 2. STATS & DIRECTORY FILTER BAR */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-6 px-6 sm:px-8 rounded-2xl bg-[#f5f9fc] dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 shadow-sm mb-12">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 dark:text-white">30+</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Years Legacy in UAE</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#ec558b]">100%</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">RCVS & MOCCAE Certified</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#607937] dark:text-[#9cbc65]">24/7</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Emergency Mobile Dispatch</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 dark:text-white">25,000+</span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Successful Home Treatments</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by doctor, specialty..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ec558b]/30 transition-all"
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

      {/* 2. TEAM MEMBERS DIRECTORY GRID */}
      <section className="pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <PawPrint size={40} className="mx-auto text-slate-300 dark:text-slate-600 mb-3" />
            <h3 className="text-lg font-serif text-slate-800 dark:text-slate-200 mb-1">No specialists found</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Try adjusting your search query or filter category.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setShowAll(false); }}
              className="px-4 py-1.5 rounded-full bg-[#ec558b] text-white text-xs font-bold hover:bg-[#d84074] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {displayedMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-slate-700 transition-all duration-300 overflow-hidden"
                  >
                    <div>
                      {/* Photo Container */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <LazyImage
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <button
                            onClick={() => setSelectedDoctor(member)}
                            className="w-full py-2 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md hover:bg-white transition-colors cursor-pointer"
                          >
                            <span>View Full Bio & Case Experience</span>
                            <ArrowUpRight size={14} />
                          </button>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[10px] font-bold tracking-wide">
                          {member.experience}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 sm:p-7">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#9cbc65] block mb-1.5">
                          {member.degrees}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif text-slate-900 dark:text-white mb-2 group-hover:text-[#ec558b] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                          {member.role}
                        </p>

                        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-5 font-normal">
                          {member.bio}
                        </p>

                        {/* Key Specialties Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {member.specialties.slice(0, 3).map((spec, i) => (
                            <span 
                              key={i} 
                              className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-300 font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedDoctor(member)}
                        className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#ec558b] dark:hover:text-[#ec558b] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Doctor Profile</span>
                        <ChevronRight size={14} />
                      </button>

                      <a
                        href="tel:+971505503777"
                        className="px-3.5 py-1.5 rounded-full bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold shadow-sm shadow-pink-500/20 transition-colors flex items-center gap-1.5"
                      >
                        <Phone size={12} />
                        <span>Book Consult</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* View More / Show Less Action Button */}
            {filteredMembers.length > visibleLimit && (
              <div className="flex justify-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
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

      {/* 3. CLINICAL STANDARDS & HOSPITAL INTEGRATION */}
      <section className="py-16 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#f5f9fc] dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] block mb-2">
              Our Veterinary Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Integrated Multi-Specialist Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When you welcome YourHomeVet into your home, you are not just getting a visiting vet. You gain the backing of an entire multi-disciplinary hospital with dedicated surgical theaters, CT imaging, and ICU specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-[#9cbc65]/20 text-[#607937] dark:text-[#9cbc65] flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">Continuous Specialist Training</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Our veterinary surgeons hold active RCVS accreditation, European diplomas, and undergo continuous professional development (CPD) in state-of-the-art procedures.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-[#ec558b]/20 text-[#ec558b] flex items-center justify-center mb-6">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">Mobile Clinic-Grade Equipment</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Every mobile unit carries sterile surgical packs, multi-parameter anesthetic monitors, point-of-care ultrasound, oxygen concentrators, and direct diagnostic lab links.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">Fear-Free Home Approach</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                By eliminating the anxiety of car travel and clinic waiting rooms, our doctors can perform thorough, gentle physical exams where your pet feels most secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DOCTOR BIO MODAL */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Modal Doctor Photo */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-4 bg-slate-100 dark:bg-slate-800">
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full p-4 rounded-xl bg-[#f5f9fc] dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-2">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                      <GraduationCap size={14} className="text-[#9cbc65] shrink-0" />
                      <span>{selectedDoctor.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                      <Languages size={14} className="text-[#ec558b] shrink-0" />
                      <span>Languages: {selectedDoctor.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                      <Clock size={14} className="text-indigo-500 shrink-0" />
                      <span>{selectedDoctor.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Modal Info */}
                <div className="sm:col-span-7 flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9cbc65] mb-1">
                    {selectedDoctor.degrees}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white mb-2">
                    {selectedDoctor.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#ec558b] mb-4">
                    {selectedDoctor.role}
                  </p>

                  {/* Philosophy Quote */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border-l-4 border-[#ec558b] italic text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    "{selectedDoctor.quote}"
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Biography & Clinical Background
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {selectedDoctor.bio}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Clinical Focus & Procedures
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedDoctor.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-[#f5f9fc] dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <a
                      href="tel:+971505503777"
                      className="flex-1 py-3 rounded-xl bg-[#ec558b] hover:bg-[#d84074] text-white text-xs sm:text-sm font-bold text-center shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Phone size={16} />
                      <span>Book Consultation With {selectedDoctor.name.split(' ')[1]}</span>
                    </a>
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
