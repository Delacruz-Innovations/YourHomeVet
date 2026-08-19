import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function ServicesList() {
  const services = [
    { 
      title: "Consultation", 
      desc: "Home consultations are ideal for routine health concerns, chronic condition management, senior pet care, mild illnesses, skin and ear issues, gastrointestinal upsets, mobility concerns, and preventative healthcare." 
    },
    { 
      title: "Health checks and prescriptions", 
      desc: "A general health check is a comprehensive nose-to-tail examination designed to assess your pet's overall wellbeing and identify any early signs of illness. This health check enables us to safely and legally prescribe or continue ongoing medications where appropriate." 
    },
    { 
      title: "Worming, flea and parasite control", 
      desc: "As part of our home veterinary service, we can provide written prescriptions for flea and worming treatments following a recent clinical examination. We will advise you on the most appropriate product based on your pet's age, weight, lifestyle, and risk factors." 
    },
    { 
      title: "Puppy or Kitten Pack", 
      desc: "Our Puppy & Kitten Packs provide essential early preventative care in the comfort of your home. The package includes a full clinical health check, first and second core vaccinations, microchipping, and age-appropriate flea and worming treatments." 
    }
  ];

  return (
    <section id="services" className="py-8 md:py-10 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Intro & CTA */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[#9cbc65] font-bold text-[10px] tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-tight">
            Exceptional home veterinary care ensuring comfort for your pets
          </h2>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            We are passionate about providing exceptional home veterinary care, ensuring pets are well-taken care of with compassion, comfort, and dedication.
          </p>
          <p className="text-slate-600 mb-10 text-sm leading-relaxed">
            We are currently only able to provide routine veterinary care. For emergency/urgent or critical care we urge you to contact your usual veterinary clinic or alternatively we can transfer you to a mobile emergency vet service.
          </p>
          
          <div className="flex flex-col items-start gap-4">
            <a href="#book" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm w-full sm:w-auto">
              Book Appointment
            </a>
            <div className="flex items-center gap-4 mt-1 ml-1">
              <a href="mailto:Info@yourhomevet.ae" className="text-[#9cbc65] hover:text-[#8ab051] transition-colors">
                <Mail size={20} strokeWidth={2.5} />
              </a>
              <a href="https://wa.me/971505503777" className="text-[#9cbc65] hover:text-[#8ab051] transition-colors">
                <MessageCircle size={20} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Column: Services List */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex flex-col">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col border-b border-slate-200 py-7 first:pt-0 last:border-b-0">
                <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
