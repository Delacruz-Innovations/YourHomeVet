import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Award, Heart, CheckCircle2, Phone, Calendar } from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function OurTeamContent() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Dina Samy",
      role: "Veterinary Surgeon — Soft Tissue & Orthopedics",
      bio: "RCVS registered veterinary surgeon with over 12 years of experience in complex soft tissue surgery, orthopedic interventions, and emergency trauma management.",
      image: "https://images.unsplash.com/photo-1594824432258-45e336b9c9f2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "Dr. Mahmood Al-Khatib",
      role: "Internal Medicine Specialist",
      bio: "Specializes in complex internal medicine, endocrinology, renal diagnostics, and long-term chronic disease management for canine and feline patients.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      name: "Dr. Yuliia Vlasenko",
      role: "Emergency & Critical Care Veterinarian",
      bio: "Expert in 24/7 emergency triage, ICU stabilization, point-of-care ultrasound, and rapid diagnostic lab evaluation for critically ill animals.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      name: "Dr. Horacio Ruiz",
      role: "Veterinary Neurologist",
      bio: "Specialist in spinal disc herniation (IVDD), seizure management, neurological diagnostics, and advanced MRI image interpretation.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      name: "Dr. Nicoletta Nica",
      role: "Feline Medicine & Dental Specialist",
      bio: "Dedicated feline health specialist focusing on gentle dentistry, ultrasonic scaling, oral surgery, and low-stress in-home consultations.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 6,
      name: "Dr. Rahaf Roushdi",
      role: "Head of Mobile Veterinary Unit",
      bio: "Leads our mobile clinic team, delivering doorstep health checkups, vaccinations, diagnostics, and patient transport across London.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
          RCVS Registered Professionals
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Meet Our Veterinary Team
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Our team of experienced veterinary surgeons, specialists, and nurses work together to provide compassionate, coordinated care across emergency medicine, surgery, diagnostics, internal medicine, and critical care.
        </p>
      </section>

      {/* Team Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 shadow-sm flex flex-col justify-between group">
              <div>
                <div className="w-full aspect-[4/3] overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
                  <LazyImage 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#58B66E] block mb-1">
                  {member.role}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{member.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-bold text-[#FA4D80]">
                  <Stethoscope size={14} /> RCVS Registered
                </span>
                <a href="#book" className="font-bold text-slate-900 dark:text-white hover:text-[#FA4D80] transition-colors">
                  Book Consult &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
