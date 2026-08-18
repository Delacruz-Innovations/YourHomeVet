import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  ShieldAlert, 
  Clock, 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  FileText, 
  ChevronRight,
  HelpCircle,
  Thermometer,
  Zap,
  Microscope,
  LifeBuoy,
  ClipboardCheck,
  ArrowRight,
  Heart,
  Dog,
  Cat,
  Sparkles,
  Scissors,
  Eye,
  ShieldCheck,
  Users
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

export default function EmergencyContent() {
  const emergencySymptoms = [
    "Difficulty breathing or unusual breathing sounds",
    "Uncontrolled or heavy bleeding",
    "Severe wounds, bites, punctures, or traumatic injuries",
    "Seizures, tremors, or sudden collapse",
    "Suspected poisoning or exposure to toxic substances",
    "Swallowed a foreign object such as a toy, bone, string, or fabric",
    "Repeated vomiting or diarrhea, particularly when blood is present",
    "Difficulty urinating or passing stool",
    "Severe or unexplained pain",
    "Sudden swelling of the face or signs of an allergic reaction",
    "Serious eye injuries or sudden changes in the appearance of the eyes",
    "Extreme weakness, confusion, or unusual behavior",
    "Heatstroke or dangerously abnormal body temperature"
  ];

  const triageSteps = [
    {
      num: "01",
      title: "Immediate Triage",
      desc: "When you arrive, our veterinary team quickly evaluates your pet to determine how serious the condition is and how urgently treatment is required. Critical patients are prioritized based on their medical needs."
    },
    {
      num: "02",
      title: "Stabilization",
      desc: "If your pet is unstable, our first priority is to support essential functions such as breathing and circulation while managing severe pain or shock. Depending on the situation, stabilization may include oxygen therapy, intravenous fluids, pain management, or other emergency interventions."
    },
    {
      num: "03",
      title: "Rapid Diagnostics",
      desc: "Once your pet is stable enough for further investigation, our team works to identify the underlying cause. Our on-site diagnostic capabilities allow us to perform appropriate tests without unnecessary delays."
    },
    {
      num: "04",
      title: "Treatment Plan",
      desc: "After assessing the results, the veterinary team develops a treatment plan based on your pet's condition. Depending on the emergency, treatment may involve medication, hospitalization, surgery, intensive care, or specialist intervention."
    },
    {
      num: "05",
      title: "Continuous Communication",
      desc: "We keep you informed throughout the process. Our team explains your pet's condition, recommended treatment options, expected next steps, and any important decisions that need to be made."
    }
  ];

  const emergencyServices = [
    { title: "24/7 Emergency Consultations", desc: "Veterinary support is available around the clock for sudden illness, injury, trauma, and other urgent conditions." },
    { title: "Emergency Stabilization", desc: "Rapid intervention for pets experiencing shock, severe pain, respiratory distress, blood loss, or other unstable conditions." },
    { title: "Oxygen Therapy", desc: "Supplemental oxygen can help pets experiencing breathing difficulties or respiratory compromise." },
    { title: "IV Fluid Therapy", desc: "Intravenous fluids can be used to support circulation, hydration, blood pressure, and electrolyte balance." },
    { title: "Emergency Surgery", desc: "Our surgical team can respond to serious conditions requiring immediate intervention, including traumatic injuries, internal bleeding, and foreign-body complications." },
    { title: "Blood Transfusion", desc: "Blood products may be used when pets experience significant blood loss or certain forms of severe anemia." },
    { title: "Cardiac Monitoring", desc: "Critically ill patients can receive continuous monitoring of heart activity when clinically indicated." },
    { title: "Nutritional Support", desc: "Hospitalized or recovering pets may receive supervised nutritional support to help maintain strength during recovery." },
    { title: "Specialist Support", desc: "Emergency cases can be coordinated with veterinary specialists across areas such as surgery, neurology, cardiology, orthopedics, and internal medicine." }
  ];

  const diagnostics = [
    { title: "Digital X-Ray", desc: "Useful for evaluating fractures, chest conditions, abdominal abnormalities, and traumatic injuries." },
    { title: "Ultrasound", desc: "Provides real-time imaging of internal organs and can assist with a range of abdominal and soft-tissue conditions." },
    { title: "ECG", desc: "Electrocardiography can help identify abnormal heart rhythms and other cardiac concerns." },
    { title: "Cardiac Ultrasound", desc: "Detailed cardiac imaging can help our veterinary team assess heart structure and function." },
    { title: "Laboratory Testing", desc: "Rapid laboratory testing can support clinical decisions through analysis of blood, urine, and other samples." },
    { title: "Orthopedic Assessment", desc: "Fractures, limb injuries, and other musculoskeletal emergencies can be evaluated by the appropriate veterinary team." }
  ];

  const icuCare = [
    { title: "Continuous Monitoring", desc: "Critical patients can be monitored throughout the day and night by veterinary professionals and trained nursing staff." },
    { title: "Controlled Environment", desc: "Temperature and oxygen support can be adjusted according to the patient's medical requirements." },
    { title: "Pain Management", desc: "Our team uses appropriate pain-management strategies to keep hospitalized pets as comfortable as possible during treatment and recovery." },
    { title: "Ongoing Owner Updates", desc: "We maintain communication with pet owners and provide updates regarding their pet's condition and progress." }
  ];

  const preventionTips = [
    { title: "Keep Toxic Substances Away", desc: "Store potentially dangerous foods, medications, chemicals, plants, and other toxic substances where your pet cannot reach them." },
    { title: "Pet-Proof Your Home", desc: "Secure electrical cables, small objects, household chemicals, and anything your pet could swallow or chew." },
    { title: "Keep Pets Away From Hot Cars", desc: "Never leave a pet unattended inside a parked vehicle, especially during hot weather." },
    { title: "Supervise Animal Interactions", desc: "Monitor interactions between pets and other animals to reduce the risk of fights and accidental injuries." },
    { title: "Stay Current With Preventive Care", desc: "Keep vaccinations, parasite prevention, wellness examinations, and other recommended preventive care up to date." },
    { title: "Know Your Pet's Normal Behavior", desc: "Understanding your pet's normal eating, sleeping, movement, and behavior patterns can make it easier to recognize when something has changed." }
  ];

  const faqs = [
    {
      q: "What should I do if my pet has an emergency at home?",
      a: "Stay calm and move your pet to a safe environment if possible. Contact our emergency veterinary team as soon as possible and follow the instructions provided while preparing to bring your pet to the hospital."
    },
    {
      q: "What symptoms mean my pet needs emergency care?",
      a: "Difficulty breathing, seizures, collapse, severe bleeding, suspected poisoning, inability to urinate, serious trauma, and sudden severe changes in behavior are examples of situations that may require immediate veterinary attention. If you're uncertain whether your pet's condition is an emergency, contact our veterinary team for guidance."
    },
    {
      q: "Can I give my pet human medication during an emergency?",
      a: "Do not give your pet human medication unless a veterinarian specifically instructs you to do so. Some medications that are safe for people can be dangerous or toxic to animals."
    },
    {
      q: "How much does emergency veterinary care cost?",
      a: "The cost depends on your pet's condition, the diagnostic tests required, the urgency of treatment, and whether hospitalization or surgery is necessary. After assessing your pet, our team can explain the recommended treatment and associated costs so you can make an informed decision."
    }
  ];

  const otherServices = [
    { title: "Wellness Exams", desc: "Comprehensive health assessments designed to identify potential health concerns early.", link: "/ourservice/vaccinations" },
    { title: "Dental Care", desc: "Preventive and advanced dental care designed to support your pet's oral and overall health.", link: "/ourservice/dental" },
    { title: "Neurology", desc: "Specialized assessment and treatment for conditions affecting the nervous system.", link: "/ourservice/neurology" },
    { title: "Dermatology", desc: "Diagnosis and management of skin, coat, allergy, and related conditions.", link: "/ourservice/neurology" },
    { title: "Vaccinations", desc: "Preventive vaccination programs designed around your pet's age, lifestyle, and health needs.", link: "/ourservice/vaccinations" },
    { title: "Veterinary Care for Dogs", desc: "Comprehensive healthcare throughout every stage of your dog's life.", link: "/24-7-emergency-care-at-your-door" },
    { title: "Veterinary Care for Cats", desc: "Specialized feline healthcare focused on prevention, diagnosis, and long-term wellbeing.", link: "/24-7-emergency-care-at-your-door" }
  ];

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* 1. Hero Section */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
              24/7 Emergency & Critical Care
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4">
              Emergency & Critical Care
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-[#FA4D80] mb-6">
              24/7 Emergency Veterinary Care When Your Pet Needs It Most
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6 font-bold">
              When an emergency happens, every minute matters.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Our Emergency & Critical Care team provides around-the-clock veterinary support for pets experiencing sudden illness, serious injury, poisoning, breathing difficulties, trauma, or other potentially life-threatening conditions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              From rapid stabilization and diagnostics to intensive monitoring and emergency surgery, our veterinary team is equipped to provide immediate, compassionate care when your pet needs it most.
            </p>
            
            <div className="px-5 py-3 rounded-full bg-[#FA4D80]/10 dark:bg-rose-950/40 border border-[#FA4D80]/20 mb-8 inline-block">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA4D80]">
                Available 24 hours a day, 7 days a week.
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <ShieldAlert size={16} /> Get Emergency Care
              </a>
              <a 
                href="tel:02081234567" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <Phone size={16} /> Call Now: 0208 123 4567
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <LazyImage 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900" 
                alt="Emergency Veterinary Care" 
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#58B66E] uppercase tracking-wider mb-1">
                  24/7 Rapid Dispatch & ICU
                </span>
                <h3 className="text-xl font-bold text-white">
                  Coordinated Emergency Response
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Your Pet's Emergency Can't Wait */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Your Pet's Emergency Can't Wait
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
            Pets can become critically ill or injured without warning. A sudden collapse, difficulty breathing, severe bleeding, poisoning, or unexplained change in behavior can quickly become a serious medical emergency.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
            That's why our emergency service is available around the clock, including nights, weekends, and holidays.
          </p>
          <div className="p-8 rounded-3xl bg-[#FAFCF8] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FA4D80] block mb-2">Our Goal Is Simple</span>
            <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              Stabilize your pet. Find the cause. Start the right treatment as quickly as possible.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Our emergency team works closely with our diagnostic, surgical, internal medicine, and critical-care teams so your pet can receive coordinated care without unnecessary delays.
          </p>
        </div>
      </section>

      {/* 3. When Should You Bring Your Pet to an Emergency Vet? */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
            Emergency Triage Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            When Should You Bring Your Pet to an Emergency Vet?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
            Some emergencies are obvious. Others can begin with subtle changes that are easy to overlook.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-bold text-[#FA4D80]">
            If something about your pet's health or behavior suddenly seems wrong, it's always better to seek professional advice rather than wait for the condition to become worse.
          </p>
        </div>

        <div className="bg-[#FAFCF8] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 rounded-3xl max-w-5xl mx-auto mb-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <AlertTriangle size={20} className="text-[#FA4D80]" /> Seek emergency veterinary care if your pet has:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencySymptoms.map((symptom, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-2 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                <CheckCircle2 size={16} className="text-[#FA4D80] shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Even small changes such as reduced appetite, unusual tiredness, hiding, or difficulty moving can sometimes indicate an underlying problem.
          </p>
          <p className="text-base font-bold text-slate-900 dark:text-slate-100">
            When in doubt, contact our veterinary team.
          </p>
        </div>
      </section>

      {/* 4. What Happens When You Arrive? */}
      <section className="py-16 bg-slate-950 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
              Clear & Transparent Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Happens When You Arrive?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              During an emergency, knowing what to expect can make an already stressful situation a little easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {triageSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#58B66E] tracking-widest uppercase block mb-2">{step.num}</span>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Emergency & Critical Care Services */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
            Complete Department Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Emergency & Critical Care Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Our emergency department provides comprehensive support for urgent and critical medical conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emergencyServices.map((svc, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#FA4D80]/10 text-[#FA4D80] flex items-center justify-center mb-4 font-bold">
                <HeartPulse size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{svc.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Advanced Diagnostics Available On-Site */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
              Precision Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Advanced Diagnostics Available On-Site
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Fast and accurate diagnosis can make a major difference during an emergency. Our veterinary team has access to diagnostic technology that helps investigate complex and urgent conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnostics.map((diag, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#FAFCF8] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-[#E8F7EC] dark:bg-slate-800 text-[#58B66E] flex items-center justify-center mb-4 font-bold">
                  <Microscope size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{diag.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{diag.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Intensive Care for Critical Patients */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#4FA3DE] font-bold text-xs tracking-widest uppercase mb-3 block">
            ICU & Ongoing Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Intensive Care for Critical Patients
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Some pets require more than emergency stabilization. Our intensive-care environment is designed for patients who need ongoing monitoring and medical support following serious illness, injury, or surgery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {icuCare.map((icu, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF5FB] dark:bg-slate-800 text-[#4FA3DE] flex items-center justify-center mb-4 font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{icu.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{icu.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Compassionate Care During Difficult Moments */}
      <section className="py-16 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
            Empathetic Medicine
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Compassionate Care During Difficult Moments
          </h2>
          <p className="text-slate-200 text-base leading-relaxed mb-6">
            Emergency treatment can be frightening for both pets and their families. While medical stabilization and treatment are our priorities, we also understand the importance of keeping pets calm and comfortable and helping their owners understand what is happening.
          </p>
          <p className="text-slate-200 text-base leading-relaxed mb-8">
            Every patient receives care based on their individual condition, medical needs, and recovery goals.
          </p>
          <p className="text-xl font-bold text-[#FA4D80]">
            Advanced medicine matters. So does compassion.
          </p>
        </div>
      </section>

      {/* 9. Helping Prevent Future Emergencies */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
            Proactive Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Helping Prevent Future Emergencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Not every emergency can be prevented, but many common household risks can be reduced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preventionTips.map((tip, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#E8F7EC] dark:bg-slate-800 text-[#58B66E] flex items-center justify-center mb-4 font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{tip.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAFCF8] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#FA4D80]" /> {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Your Pet Needs Help. We're Here. */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#FA4D80]/10 via-[#FAFCF8] to-[#58B66E]/10 dark:from-slate-900 dark:to-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Your Pet Needs Help. We're Here.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            When something goes wrong, you shouldn't have to wonder where to turn. Our Emergency & Critical Care team is available 24/7 to provide immediate veterinary attention, advanced diagnostics, stabilization, treatment, and ongoing support.
          </p>
          <p className="text-base font-bold text-[#FA4D80] mb-8">
            Don't wait if your pet is showing signs of an emergency.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-slate-800 transition-all"
            >
              Find a Clinic
            </Link>
            <a 
              href="tel:02081234567" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <Phone size={16} /> Call Emergency Team
            </a>
          </div>
        </div>
      </section>

      {/* 12. Meet Our Veterinary Team */}
      <section className="py-12 bg-white dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Meet Our Veterinary Team
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Behind every emergency response is a team of experienced veterinary professionals committed to helping animals recover. Our veterinarians, veterinary nurses, technicians, and specialists work together to provide coordinated care across emergency medicine, surgery, diagnostics, internal medicine, critical care, and rehabilitation.
          </p>
          <Link 
            to="/about#team" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#FA4D80] transition-all"
          >
            <Users size={16} /> Meet Our Team
          </Link>
        </div>
      </section>

      {/* 13. Schedule an Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
            Ready to Support You
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Schedule an Appointment
          </h2>
          <p className="text-slate-300 text-base font-bold mb-8">
            Your Pet's Health Can't Wait
          </p>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Whether your pet needs emergency treatment, follow-up care, or a comprehensive health assessment, our team is ready to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#book" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <Calendar size={16} /> Book an Appointment
            </a>
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full border border-white/40 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Explore More Veterinary Services */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FA4D80] font-bold text-xs tracking-widest uppercase mb-3 block">
              Comprehensive Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
              Explore More Veterinary Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((svc, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#FAFCF8] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between group">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#FA4D80] transition-colors">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{svc.desc}</p>
                </div>
                <Link to={svc.link} className="text-xs font-bold text-[#FA4D80] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
