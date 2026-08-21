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
  Users,
  PawPrint
} from 'lucide-react';
import LazyImage from './ui/LazyImage';
import emergencyHeroImg from '../assets/vet_emergency_icu.jpg';
import centerLogo from '../assets/center_logo.jpg';

export default function EmergencyContent() {
  const [activeFaq, setActiveFaq] = useState(null);

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

  const urgencyTiers = [
    {
      level: "Immediate Critical Emergencies",
      color: "bg-rose-500",
      textColor: "text-rose-500",
      borderColor: "border-rose-200 dark:border-rose-900/40",
      bgLight: "bg-rose-50/50 dark:bg-rose-950/20",
      badge: "Act Immediately",
      cases: [
        "Severe breathing distress, gasping, or pale/blue gums",
        "Loss of consciousness, sudden collapse, or inability to stand",
        "Severe trauma, motor vehicle accident, or major fall",
        "Active profuse bleeding that does not stop with pressure",
        "Suspected poisoning, toxic food or chemical ingestion",
        "Inability to urinate (especially male cats)",
        "Bloat / suspected Gastric Torsion (GDV) in dogs",
        "Continuous unyielding seizures (status epilepticus)"
      ]
    },
    {
      level: "Urgent Medical Situations",
      color: "bg-amber-500",
      textColor: "text-amber-500",
      borderColor: "border-amber-200 dark:border-amber-900/40",
      bgLight: "bg-amber-50/50 dark:bg-amber-950/20",
      badge: "Prompt Assessment",
      cases: [
        "Repeated vomiting or severe watery/bloody diarrhea",
        "Severe sudden lethargy and weakness",
        "Acute non-weight-bearing lameness or fracture suspicion",
        "Suspected foreign body ingestion without acute choking",
        "Eye injuries, sudden cloudiness, swelling, or squinting",
        "High fever, shivering, or persistent disorientation"
      ]
    },
    {
      level: "Non-Emergency Same-Day Concerns",
      color: "bg-[#51b255]",
      textColor: "text-[#51b255]",
      borderColor: "border-emerald-200 dark:border-emerald-900/40",
      bgLight: "bg-emerald-50/50 dark:bg-emerald-950/20",
      badge: "Schedule Consult",
      cases: [
        "Minor cuts or scrapes not bleeding heavily",
        "Mild limp without severe pain or fracture signs",
        "Ear infections or mild localized skin itchiness",
        "Routine questions about ongoing medications"
      ]
    }
  ];

  const emergencyCapabilities = [
    { title: "Point-of-Care Ultrasound (POCUS)", desc: "Fast-scan abdominal and thoracic ultrasound for internal bleeding or fluid accumulation." },
    { title: "Oxygen Therapy & Resuscitation", desc: "Immediate supplemental oxygen and advanced airway management during respiratory distress." },
    { title: "Continuous Multi-Parameter Monitoring", desc: "ECG, blood pressure, capnography, and pulse oximetry for high-risk patients." },
    { title: "Instant In-House Diagnostic Assays", desc: "Rapid blood gases, electrolytes, hematology, and toxicology screening in minutes." },
    { title: "Emergency Surgical Triage", desc: "Direct transition to surgical suites for foreign body removal, wound repair, or GDV stabilization." },
    { title: "24/7 Dedicated ICU Hospitalization", desc: "Round-the-clock intensive veterinary nursing care and continuous intravenous therapy." }
  ];

  const servicesList = [
    { title: "Dental Care", desc: "Preventive and advanced dental care designed to support your pet's oral and overall health.", link: "/ourservice/dental" },
    { title: "Neurology", desc: "Specialized assessment and treatment for conditions affecting the nervous system.", link: "/ourservice/neurology" },
    { title: "Dermatology", desc: "Diagnosis and management of skin, coat, allergy, and related conditions.", link: "/ourservice/neurology" },
    { title: "Vaccinations", desc: "Preventive vaccination programs designed around your pet's age, lifestyle, and health needs.", link: "/ourservice/vaccinations" },
    { title: "Veterinary Care for Dogs", desc: "Comprehensive healthcare throughout every stage of your dog's life.", link: "/24-7-emergency-care-at-your-door" },
    { title: "Veterinary Care for Cats", desc: "Specialized feline healthcare focused on prevention, diagnosis, and long-term wellbeing.", link: "/24-7-emergency-care-at-your-door" }
  ];

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* 1. Split Hero Section (Homepage Hero Style) */}
      <section className="relative w-full flex flex-col lg:flex-row transition-colors duration-300 min-h-[540px] lg:min-h-[500px]">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 bg-transparent lg:bg-[#f7faf3] lg:dark:bg-slate-900 relative overflow-hidden flex z-10">
          
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
            <PawPrint size={90} className="absolute bottom-8 left-[15%] text-[#9cbc65] opacity-15 dark:opacity-5 -rotate-12" />
            <PawPrint size={50} className="absolute bottom-20 right-[35%] text-[#9cbc65] opacity-15 dark:opacity-5 rotate-12" />
            <Heart size={140} className="absolute bottom-0 right-[10%] text-[#9cbc65] opacity-10 dark:opacity-5 rotate-12 stroke-[1px] fill-transparent" />
          </div>

          <div className="w-full max-w-[640px] px-6 sm:px-8 lg:px-8 xl:pr-16 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:py-36 relative z-10 flex flex-col justify-center ml-auto">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              24/7 EMERGENCY & CRITICAL CARE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white lg:text-slate-900 lg:dark:text-white leading-tight mb-4">
              24/7 Emergency Care At Your Door
            </h1>
            
            <div className="w-12 h-1 bg-[#ec558b] mb-6" />

            <p className="text-slate-100 lg:text-slate-700 lg:dark:text-slate-300 text-[16px] leading-relaxed mb-6 font-medium lg:font-normal">
              When an emergency happens, every minute matters. Our rapid-response veterinary ambulance delivers clinic-grade emergency care directly to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+971505503777" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-md"
              >
                <ShieldAlert size={16} /> Call Emergency Vet
              </a>
              <a 
                href="tel:+971505503777" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border-2 border-[#9cbc65] text-[#9cbc65] hover:bg-[#9cbc65] hover:text-white text-xs font-bold uppercase tracking-wide transition-all bg-slate-950/40 lg:bg-transparent"
              >
                <Phone size={16} /> +971 50 550 3777
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto min-h-[500px] bg-slate-100 dark:bg-slate-800 overflow-hidden z-0 lg:z-auto">
          <img 
            src={emergencyHeroImg} 
            alt="Emergency Veterinary Care" 
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

      {/* 2. Your Pet's Emergency Can't Wait */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
            Your Pet's Emergency Can't Wait
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
            Pets can become critically ill or injured without warning. A sudden collapse, difficulty breathing, severe bleeding, poisoning, or unexplained change in behavior can quickly become a serious medical emergency.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
            That's why our emergency service is available around the clock, including nights, weekends, and holidays.
          </p>
          <div className="p-6 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ec558b] block mb-2">Our Goal Is Simple</span>
            <p className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-slate-100">
              Stabilize your pet. Find the cause. Start the right treatment as quickly as possible.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Our emergency team works closely with our diagnostic, surgical, internal medicine, and critical-care teams so your pet can receive coordinated care without unnecessary delays.
          </p>
        </div>
      </section>

      {/* 3. When Should You Bring Your Pet to an Emergency Vet? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Emergency Triage Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
            When Should You Bring Your Pet to an Emergency Vet?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
            Some emergencies are obvious. Others can begin with subtle changes that are easy to overlook.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-semibold">
            If something about your pet's health or behavior suddenly seems wrong, it's always better to seek professional advice rather than wait for the condition to become worse.
          </p>
        </div>

        <div className="bg-[#fff2f5] dark:bg-rose-950/20 border border-[#fcd5e2] dark:border-rose-900/40 p-8 sm:p-12 rounded-sm max-w-5xl mx-auto mb-8 shadow-sm">
          <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <AlertTriangle size={20} className="text-[#ec558b]" /> Seek emergency veterinary care if your pet has:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencySymptoms.map((symptom, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-[#ec558b] shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Even small changes such as reduced appetite, unusual tiredness, hiding, or difficulty moving can sometimes indicate an underlying problem.
          </p>
          <p className="text-base font-serif font-bold text-slate-900 dark:text-slate-100">
            When in doubt, contact our veterinary team.
          </p>
        </div>
      </section>

      {/* 4. What Happens When You Arrive? */}
      <section className="py-16 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Clear & Transparent Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              What Happens When You Arrive?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              During an emergency, knowing what to expect can make an already stressful situation a little easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {triageSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-sm bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-serif font-bold text-[#9cbc65] tracking-widest uppercase block mb-2">{step.num}</span>
                  <h3 className="text-lg font-serif font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Emergency & Critical Care Services */}
      <section className="py-16 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            Complete Department Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
            Emergency & Critical Care Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Our emergency department provides comprehensive support for urgent and critical medical conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emergencyServices.map((svc, idx) => (
            <div key={idx} className="p-7 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-sm bg-[#fff2f5] dark:bg-rose-950/40 text-[#ec558b] flex items-center justify-center mb-4 font-bold">
                <HeartPulse size={20} />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2">{svc.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Advanced Diagnostics Available On-Site */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
              Precision Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
              Advanced Diagnostics Available On-Site
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Fast and accurate diagnosis can make a major difference during an emergency. Our veterinary team has access to diagnostic technology that helps investigate complex and urgent conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnostics.map((diag, idx) => (
              <div key={idx} className="p-7 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-sm bg-slate-100 dark:bg-slate-800 text-[#9cbc65] flex items-center justify-center mb-4 font-bold">
                  <Microscope size={20} />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2">{diag.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{diag.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Intensive Care for Critical Patients */}
      <section className="py-16 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
            ICU & Ongoing Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
            Intensive Care for Critical Patients
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Some pets require more than emergency stabilization. Our intensive-care environment is designed for patients who need ongoing monitoring and medical support following serious illness, injury, or surgery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {icuCare.map((icu, idx) => (
            <div key={idx} className="p-7 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-sm bg-[#fff2f5] dark:bg-rose-950/40 text-[#ec558b] flex items-center justify-center mb-4 font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2">{icu.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{icu.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Compassionate Care During Difficult Moments */}
      <section className="py-16 bg-[#1b2b4b] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-3 block">
            Empathetic Medicine
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Compassionate Care During Difficult Moments
          </h2>
          <p className="text-slate-200 text-base leading-relaxed mb-6">
            Emergency treatment can be frightening for both pets and their families. While medical stabilization and treatment are our priorities, we also understand the importance of keeping pets calm and comfortable and helping their owners understand what is happening.
          </p>
          <p className="text-slate-200 text-base leading-relaxed mb-8">
            Every patient receives care based on their individual condition, medical needs, and recovery goals.
          </p>
          <p className="text-xl font-serif font-bold text-amber-300">
            Advanced medicine matters. So does compassion.
          </p>
        </div>
      </section>

      {/* 9. Helping Prevent Future Emergencies */}
      <section className="py-16 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
            Proactive Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
            Helping Prevent Future Emergencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Not every emergency can be prevented, but many common household risks can be reduced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preventionTips.map((tip, idx) => (
            <div key={idx} className="p-7 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-sm bg-[#E8F7EC] dark:bg-slate-800 text-[#9cbc65] flex items-center justify-center mb-4 font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2">{tip.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <h3 className="font-serif font-bold text-base text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#ec558b]" /> {faq.q}
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
        <div className="bg-[#fff2f5] dark:bg-rose-950/20 border border-[#fcd5e2] dark:border-rose-900/40 rounded-sm p-8 sm:p-12 text-center shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
            Your Pet Needs Help. We're Here.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            When something goes wrong, you shouldn't have to wonder where to turn. Our Emergency & Critical Care team is available 24/7 to provide immediate veterinary attention, advanced diagnostics, stabilization, treatment, and ongoing support.
          </p>
          <p className="text-base font-serif font-bold text-[#ec558b] mb-8">
            Don't wait if your pet is showing signs of an emergency.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-sm bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest shadow-md hover:bg-slate-800 transition-all"
            >
              Find a Clinic
            </Link>
            <a 
              href="tel:02081234567" 
              className="px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all flex items-center gap-2"
            >
              <Phone size={16} /> Call Emergency Team
            </a>
          </div>
        </div>
      </section>

      {/* 12. Meet Our Veterinary Team */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">
            Meet Our Veterinary Team
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Behind every emergency response is a team of experienced veterinary professionals committed to helping animals recover. Our veterinarians, veterinary nurses, technicians, and specialists work together to provide coordinated care across emergency medicine, surgery, diagnostics, internal medicine, critical care, and rehabilitation.
          </p>
          <Link 
            to="/about#team" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest shadow-md hover:bg-[#ec558b] transition-all"
          >
            <Users size={16} /> Meet Our Team
          </Link>
        </div>
      </section>

      {/* 13. Schedule an Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 text-white rounded-sm p-8 sm:p-12 text-center shadow-xl">
          <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-3 block">
            Ready to Support You
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Schedule an Appointment
          </h2>
          <p className="text-slate-300 text-base font-serif font-bold mb-8">
            Your Pet's Health Can't Wait
          </p>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Whether your pet needs emergency treatment, follow-up care, or a comprehensive health assessment, our team is ready to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/book-an-appointment" 
              className="px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all flex items-center gap-2"
            >
              <Calendar size={16} /> Book an Appointment
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-sm border border-white/40 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-widest transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Explore More Veterinary Services */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              Comprehensive Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100">
              Explore More Veterinary Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((svc, idx) => (
              <div key={idx} className="p-6 rounded-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between group">
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#ec558b] transition-colors">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{svc.desc}</p>
                </div>
                <Link to={svc.link} className="text-xs font-bold text-[#ec558b] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
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
