import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  Syringe, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  Clock,
  Award,
  Users,
  Building2,
  FileCheck,
  Check
} from 'lucide-react';

export default function VaccinationsContent() {
  const [selectedPet, setSelectedPet] = useState('Dog');

  const dogCoreVaccines = [
    { name: "Rabies", desc: "Mandatory UAE protection against fatal neurological viral infection." },
    { name: "Distemper", desc: "Protects against contagious respiratory, gastrointestinal, and nervous system viral disease." },
    { name: "Parvovirus", desc: "Prevents severe, highly contagious gastrointestinal illness in dogs." },
    { name: "Adenovirus Types 1 & 2", desc: "Protects against infectious canine hepatitis and respiratory illness." }
  ];

  const catCoreVaccines = [
    { name: "Rabies", desc: "Mandatory UAE legal protection against fatal viral infection." },
    { name: "Panleukopenia (Feline Distemper)", desc: "Protects against severe viral infection affecting white blood cells." },
    { name: "Feline Calicivirus", desc: "Prevents upper respiratory tract infections and painful oral ulcers." },
    { name: "Feline Viral Rhinotracheitis (Herpesvirus)", desc: "Protects against severe upper respiratory illness and eye lesions." }
  ];

  const scheduleData = [
    {
      age: "6-8 Weeks",
      dog: "DHPPi / L",
      cat: "PCH (Panleukopenia, Calicivirus, Herpesvirus)"
    },
    {
      age: "10-12 Weeks",
      dog: "DHPPi / L",
      cat: "PCH"
    },
    {
      age: "14-16 Weeks",
      dog: "DHPPi / L + Rabies (Non-core: Kennel Cough if needed)",
      cat: "Rabies + PCH"
    },
    {
      age: "Annually",
      dog: "DHPPi / L + Rabies Booster",
      cat: "Rabies + PCH Booster"
    }
  ];

  const processSteps = [
    { num: "01", title: "Comprehensive Health Evaluation", desc: "All visits begin with an evaluation of your pet’s overall health to ensure they are healthy enough to be vaccinated." },
    { num: "02", title: "Personalized Protocol Assessment", desc: "Your veterinarian evaluates medical history, lifestyle, and age to determine the exact vaccines needed." },
    { num: "03", title: "Low-Stress Administration", desc: "Vaccines are administered in a calm, relaxed environment with minimal stress for your pet." },
    { num: "04", title: "Post-Vaccine Monitoring & Records", desc: "We monitor your pet post-vaccination and maintain a complete digital medical history." },
    { num: "05", title: "Automated Booster Reminders", desc: "You receive timely automated notifications when your pet's booster shots are due." }
  ];

  const contraindications = [
    { title: "Pregnancy", text: "Vaccinating pregnant animals carries a high risk of damage to developing fetuses." },
    { title: "Active Illness or Fever", text: "Pets with active infections, fever, or severe chronic disease should postpone vaccination until fully recovered." },
    { title: "Recent Immunization", text: "Pets recently vaccinated or on immunosuppressive medication require veterinarian clearance." },
    { title: "Weight Extremes", text: "Underweight or overweight pets require individual risk evaluation prior to administration." },
    { title: "Upper Respiratory Infection in Cats", text: "Cats with active respiratory infections must not receive Rabies vaccines until fully resolved." }
  ];

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <img 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=1200" 
            alt="Pet Vaccination Administration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-[#ec558b] lg:dark:text-[#ec558b] mb-3 block">
              PREVENTIVE HEALTH & PROTECTION
            </span>
            <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] mb-6 tracking-tight">
              Pet Vaccinations
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-6">
              Preventive care through vaccinations is a simple way to ensure your pets remain as healthy as possible. Our preventative care is not simply limited to regular veterinary visits; it is about providing your dogs or cats with the best protection available against potentially deadly diseases.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[14px] sm:text-[16px] leading-[1.8] mb-8">
              In order to provide you with this protection, we have partnered with <strong>Zoetis</strong>, the leading animal health company in the world. As a result, we can offer our customers who own pets in Dubai globally recognized and researched vaccines that meet the highest safety standards established by Zoetis.
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
                <Phone size={16} /> Call: 971 4 5971 000
              </a>
            </div>
          </div>

          {/* Desktop Image Side */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=900" 
                alt="Pet Vaccination Administration" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#9cbc65] uppercase tracking-wider mb-1">
                  Zoetis Global Partner
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  World-Class Vaccine Protection
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Importance of Vaccination */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Immune System Training
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6">
              The Importance of Vaccination
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              When your pet receives a vaccine, it trains their immune system to attack viruses and bacteria prior to them causing an infection or illness. Routine vaccination will protect your pet from serious and life-threatening illnesses while avoiding preventable medical emergencies, reducing community transmission of infectious diseases, and protecting your family.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#fff2f6] to-[#ffe8f0] dark:from-slate-900 dark:to-slate-800 p-8 rounded-sm border border-rose-200 dark:border-slate-700 shadow-xl text-center">
            <Syringe size={48} className="text-[#ec558b] mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
              Keep your pet healthy with vaccinations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Schedule your pet's vaccination checkup with our experienced Dubai veterinary team today.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://modernvet.com/booking/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all block"
              >
                Book An Appointment
              </a>
              <a 
                href="tel:97145971000" 
                className="w-full py-3.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-all block"
              >
                Call : 971 4 5971 000
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Core vs. Non-Core Vaccines */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Customized Protection
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            Core vs. Non-Core Vaccines
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
            Every pet’s vaccination plan is personalized. Core vaccines protect all pets against common and severe diseases, while non-core vaccines are recommended based on lifestyle and risk exposure.
          </p>

          <div className="inline-flex p-1.5 rounded-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setSelectedPet('Dog')}
              className={`px-8 py-3 rounded-sm text-xs font-bold transition-all ${
                selectedPet === 'Dog'
                  ? 'bg-[#ec558b] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Dog Core Vaccines
            </button>
            <button
              onClick={() => setSelectedPet('Cat')}
              className={`px-8 py-3 rounded-sm text-xs font-bold transition-all ${
                selectedPet === 'Cat'
                  ? 'bg-[#ec558b] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Cat Core Vaccines
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(selectedPet === 'Dog' ? dogCoreVaccines : catCoreVaccines).map((vac, idx) => (
            <div key={idx} className="p-7 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-950/50 text-[#ec558b] flex items-center justify-center shrink-0 font-bold">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {vac.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {vac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Pet Vaccination Schedule Table */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Timeline Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              What is the Recommended Pet Vaccination Schedule?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              The vaccination schedule depends upon your pet’s species, age and overall health condition. Below is a general puppy and kitten timeline modified by your veterinarian for your pet's specific lifestyle:
            </p>
          </div>

          <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 shadow-xl mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-5 px-6">Duration</th>
                  <th className="py-5 px-6">Dog Schedule</th>
                  <th className="py-5 px-6">Cat Schedule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {scheduleData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-5 px-6 font-serif font-bold text-[#ec558b] whitespace-nowrap">{row.age}</td>
                    <td className="py-5 px-6 font-medium">{row.dog}</td>
                    <td className="py-5 px-6 font-medium">{row.cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-center text-slate-500 max-w-2xl mx-auto">
            Depending on your pet’s lifestyle (traveling, boarding, etc.), your veterinarian will assess your pet's health before administering any vaccine and suggest a personalized schedule.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-4">
            How much do pet vaccinations cost?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Our prices are clearly stated, inclusive of core vaccines and a full veterinarian check-up before vaccination so that we can assure your pet’s health and readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white dark:bg-slate-900 rounded-sm border-2 border-slate-200 dark:border-slate-800 p-8 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#51b255] uppercase tracking-wider block mb-2">Primary Dose</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                Initial DHPPi/L Vaccination
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Includes full comprehensive veterinary examination and initial core vaccine administration.
              </p>
              <div className="text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
                360 AED
              </div>
            </div>
            <a 
              href="https://modernvet.com/booking/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#51b255] hover:bg-[#439c47] text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm shadow-md block"
            >
              Book Now
            </a>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-sm border-2 border-[#ec558b] p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#ec558b] text-white px-4 py-1 text-[11px] font-bold uppercase tracking-wider rounded-bl-sm">
              Complete Package
            </div>
            <div>
              <span className="text-xs font-bold text-[#ec558b] uppercase tracking-wider block mb-2">Annual Protection</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
                Booster Vaccination
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Includes DHPPi/L, Rabies, Dubai Municipality tag & registration, plus comprehensive veterinary examination.
              </p>
              <div className="text-4xl font-serif font-bold text-[#ec558b] mb-6">
                510 AED
              </div>
            </div>
            <a 
              href="https://modernvet.com/booking/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#ec558b] hover:bg-[#d84074] text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm shadow-md block"
            >
              Book Now
            </a>
          </div>

        </div>

        {/* Action Banner */}
        <div className="bg-[#f4faee] dark:bg-emerald-950/30 border border-[#d3e9c4] dark:border-emerald-900/50 rounded-sm p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#51b255] text-white flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100">
                Keep your pet safe with timely vaccinations
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Optional services (kennel cough, feline leukemia, microchip) available based on lifestyle.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a 
              href="https://modernvet.com/booking/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-7 py-3.5 bg-[#51b255] hover:bg-[#439c47] text-white text-xs font-bold uppercase tracking-wide rounded-sm shadow-md"
            >
              Book An Appointment
            </a>
            <a 
              href="tel:97145971000" 
              className="px-7 py-3.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wide rounded-sm shadow-md"
            >
              Call : 971 4 5971 000
            </a>
          </div>
        </div>
      </section>

      {/* Modern Vet Vaccination Process */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Step-By-Step Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">
              Modern Vet Vaccination Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((s, idx) => (
              <div key={idx} className="p-6 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-serif font-bold text-[#ec558b] block mb-3">{s.num}</span>
                  <h3 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoetis Partnership & Advantages Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Zoetis Partnership */}
          <div className="p-8 sm:p-10 rounded-sm bg-gradient-to-br from-[#fff2f6] to-white dark:from-slate-900 dark:to-slate-800 border border-rose-200 dark:border-slate-700 shadow-lg">
            <Award size={36} className="text-[#ec558b] mb-4" />
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
              Zoetis and Modern Vet Partnership
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#ec558b] shrink-0 mt-0.5" />
                <span>Unmatched vaccine quality backed by decades of global research.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#ec558b] shrink-0 mt-0.5" />
                <span>Complete, lifestyle-based protection for each pet’s individual needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#ec558b] shrink-0 mt-0.5" />
                <span>Administered by trained veterinary staff using best medical practices.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#ec558b] shrink-0 mt-0.5" />
                <span>Regular scheduling and reminders to maintain high immunity.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#ec558b] shrink-0 mt-0.5" />
                <span>Continuous 24/7 care at Dubai's only 24-hour veterinary hospital.</span>
              </li>
            </ul>
          </div>

          {/* Key Advantages */}
          <div className="p-8 sm:p-10 rounded-sm bg-slate-900 text-white shadow-xl flex flex-col justify-between">
            <div>
              <ShieldCheck size={36} className="text-[#51b255] mb-4" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Advantages of Vaccinations in Pets
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#51b255] mt-1.5 shrink-0"></span>
                  <span>Protection against fatal diseases like rabies, distemper, parvovirus, and feline leukemia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#51b255] mt-1.5 shrink-0"></span>
                  <span>Facilitates safe entry into doggy daycare, boarding facilities, and international travel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#51b255] mt-1.5 shrink-0"></span>
                  <span><strong>Legal UAE compliance:</strong> Mandatory rabies vaccination for all dogs and cats.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#51b255] mt-1.5 shrink-0"></span>
                  <span>Protects community health by reducing disease transmission to other pets and humans.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Microchipping & Contraindications */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Microchipping Card */}
          <div className="p-8 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-3">
              <Sparkles className="text-[#ec558b]" size={22} />
              Added Care: Microchipping
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              While receiving a vaccine is convenient, our veterinarians also recommend having your pet microchipped during the same visit. Microchipping is an easy, virtually pain-free method of permanently identifying your pet, making it easier to locate and reunite with them if they ever get lost.
            </p>
          </div>

          {/* Contraindications Grid */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
              Contraindications: When Vaccination Should Be Delayed or Avoided
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contraindications.map((c, idx) => (
                <div key={idx} className="p-6 rounded-sm bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 text-amber-600">
                    <AlertTriangle size={20} />
                    <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">{c.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
