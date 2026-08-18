import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Award,
  CreditCard,
  Lock,
  X,
  Check,
  Shield,
  Clock,
  ArrowRight,
  FileText,
  Dog,
  Cat,
  Stethoscope
} from 'lucide-react';
import LazyImage from './ui/LazyImage';

const PACKAGES_DATA = {
  Dog: {
    'Preventive Packages': [
      {
        id: 'dog-prev-1',
        title: "The Primary Protection",
        price: 360,
        priceFormatted: "360 AED",
        vat: "VAT not included",
        badge: "Primary Dose",
        badgeColor: "bg-[#51b255] text-white",
        popular: false,
        included: [
          "Full physical examination",
          "Primary DHPPi/L vaccine dose",
          "Comprehensive health checkup",
          "Digital medical record",
          "Deworming treatment",
          "Veterinarian consultation"
        ]
      },
      {
        id: 'dog-prev-2',
        title: "The Booster Package",
        price: 510,
        priceFormatted: "510 AED",
        vat: "VAT not included",
        badge: "Annual Protection",
        badgeColor: "bg-[#ec558b] text-white",
        popular: true,
        included: [
          "Full physical examination",
          "Annual DHPPi/L booster vaccine",
          "Rabies vaccination",
          "Dubai Municipality tag registration",
          "Official Municipality tag",
          "Deworming treatment",
          "Comprehensive health checkup"
        ]
      },
      {
        id: 'dog-prev-3',
        title: "Dog Smile Dental Package",
        price: 1500,
        priceFormatted: "1,500 AED",
        vat: "VAT not included",
        badge: "Complete Dental",
        badgeColor: "bg-sky-600 text-white",
        popular: false,
        included: [
          "Professional dental scale and polish",
          "Full general anesthesia & monitoring",
          "Pre-anesthetic blood lab test (IDEXX)",
          "IV cannula & fluid therapy",
          "Day hospitalization",
          "Post-op pain management",
          "Free 7-day follow-up checkup"
        ]
      }
    ],
    'Spay & Neuter Packages': [
      {
        id: 'dog-sn-1',
        title: "Dog Castration (Male)",
        price: 950,
        priceFormatted: "950 AED",
        vat: "VAT not included",
        badge: "Male Canine",
        badgeColor: "bg-indigo-600 text-white",
        popular: false,
        included: [
          "Pre-surgical physical examination",
          "General anesthesia & vitals monitoring",
          "Castration surgical procedure",
          "Post-op pain medication",
          "Daycare & recovery monitoring",
          "Complimentary suture check"
        ]
      },
      {
        id: 'dog-sn-2',
        title: "Dog Spay (Female)",
        price: 1250,
        priceFormatted: "1,250 AED",
        vat: "VAT not included",
        badge: "Female Canine",
        badgeColor: "bg-[#ec558b] text-white",
        popular: true,
        included: [
          "Comprehensive pre-surgical examination",
          "General anesthesia with IV fluid therapy",
          "Ovariohysterectomy surgical procedure",
          "Full post-operative pain management",
          "Full-day ICU recovery monitoring",
          "Free 7-day post-op follow-up check"
        ]
      },
      {
        id: 'dog-sn-3',
        title: "Complete Spay + Bloodwork Bundle",
        price: 1590,
        priceFormatted: "1,590 AED",
        vat: "VAT not included",
        badge: "All-Inclusive",
        badgeColor: "bg-[#51b255] text-white",
        popular: false,
        included: [
          "Full IDEXX CBC + Biochemical pre-op panel",
          "Surgical spay / castration procedure",
          "Advanced multi-modal pain control",
          "E-collar protection & take-home meds",
          "Hospitalization & fluid therapy",
          "Free 10-day suture removal & check"
        ]
      }
    ],
    'Smile Packages (Dental)': [
      {
        id: 'dog-dent-1',
        title: "Stage 1 Preventive Dental Clean",
        price: 980,
        priceFormatted: "980 AED",
        vat: "VAT not included",
        badge: "Preventive Care",
        badgeColor: "bg-[#51b255] text-white",
        popular: false,
        included: [
          "Complete oral examination",
          "Ultrasonic supragingival scaling",
          "Enamel polishing & fluoride treatment",
          "General anesthesia & monitoring",
          "Oral homecare consultation"
        ]
      },
      {
        id: 'dog-dent-2',
        title: "Stage 2 Deep Scale & Polish",
        price: 1500,
        priceFormatted: "1,500 AED",
        vat: "VAT not included",
        badge: "Most Popular",
        badgeColor: "bg-[#ec558b] text-white",
        popular: true,
        included: [
          "Subgingival curettage & deep scaling",
          "Full mouth dental digital X-rays",
          "Pre-anesthetic blood chemistry panel",
          "IV catheter & continuous fluid support",
          "Post-op pain relief & antibiotic therapy"
        ]
      },
      {
        id: 'dog-dent-3',
        title: "Advanced Surgical Extraction Care",
        price: 2200,
        priceFormatted: "2,200 AED",
        vat: "VAT not included",
        badge: "Advanced Surgical",
        badgeColor: "bg-purple-600 text-white",
        popular: false,
        included: [
          "Full dental X-ray diagnostics",
          "Multi-rooted tooth extraction surgery",
          "Gingival flap creation & suturing",
          "Local nerve blocks & multi-modal pain meds",
          "Full hospital recovery & 2 post-op checks"
        ]
      }
    ]
  },
  Cat: {
    'Preventive Packages': [
      {
        id: 'cat-prev-1',
        title: "Kitten Primary Care",
        price: 349,
        priceFormatted: "349 AED",
        vat: "VAT not included",
        badge: "Primary Dose",
        badgeColor: "bg-[#51b255] text-white",
        popular: false,
        included: [
          "Full physical examination",
          "Primary PCH (Distemper, Calici, Herpes)",
          "Feline health assessment",
          "Digital medical record",
          "Deworming treatment",
          "Veterinarian consultation"
        ]
      },
      {
        id: 'cat-prev-2',
        title: "Feline Annual Booster",
        price: 490,
        priceFormatted: "490 AED",
        vat: "VAT not included",
        badge: "Annual Protection",
        badgeColor: "bg-[#ec558b] text-white",
        popular: true,
        included: [
          "Full physical examination",
          "Annual PCH booster vaccine",
          "Rabies vaccination",
          "Dubai Municipality tag registration",
          "Official Municipality tag",
          "Deworming treatment",
          "Comprehensive feline checkup"
        ]
      },
      {
        id: 'cat-prev-3',
        title: "Cat Smile Dental Package",
        price: 1348,
        priceFormatted: "1,348 AED",
        vat: "VAT not included",
        badge: "Complete Dental",
        badgeColor: "bg-sky-600 text-white",
        popular: false,
        included: [
          "Professional feline scale and polish",
          "General anesthesia & monitoring",
          "Pre-anesthetic blood panel (IDEXX SDMA)",
          "IV cannula & fluid therapy",
          "Day hospitalization",
          "Post-op pain management",
          "Free 7-day follow-up checkup"
        ]
      }
    ],
    'Spay & Neuter Packages': [
      {
        id: 'cat-sn-1',
        title: "Cat Castration (Male)",
        price: 450,
        priceFormatted: "450 AED",
        vat: "VAT not included",
        badge: "Male Feline",
        badgeColor: "bg-indigo-600 text-white",
        popular: false,
        included: [
          "Pre-surgical physical exam",
          "Safe feline anesthesia & monitoring",
          "Castration surgical procedure",
          "Pain management medication",
          "Day hospitalization & recovery",
          "Post-op checkup"
        ]
      },
      {
        id: 'cat-sn-2',
        title: "Cat Spay (Female)",
        price: 650,
        priceFormatted: "650 AED",
        vat: "VAT not included",
        badge: "Female Feline",
        badgeColor: "bg-[#ec558b] text-white",
        popular: true,
        included: [
          "Comprehensive pre-surgical examination",
          "General anesthesia & fluid therapy",
          "Feline ovariohysterectomy surgery",
          "Pain control medication & take-home meds",
          "Recovery hospitalization",
          "Complimentary suture inspection"
        ]
      },
      {
        id: 'cat-sn-3',
        title: "Complete Feline Spay + Blood Panel",
        price: 950,
        priceFormatted: "950 AED",
        vat: "VAT not included",
        badge: "All-Inclusive",
        badgeColor: "bg-[#51b255] text-white",
        popular: false,
        included: [
          "Full IDEXX pre-anesthetic blood chemistry",
          "Feline spay / castration procedure",
          "Fluid therapy & anesthesia monitoring",
          "Post-operative pain relief bundle",
          "Microchip implantation & registration",
          "Free 10-day follow-up examination"
        ]
      }
    ],
    'Smile Packages (Dental)': [
      {
        id: 'cat-dent-1',
        title: "Kitten & Adult Scaling Clean",
        price: 850,
        priceFormatted: "850 AED",
        vat: "VAT not included",
        badge: "Preventive Care",
        badgeColor: "bg-[#51b255] text-white",
        popular: false,
        included: [
          "Oral exam and dental charting",
          "Ultrasonic supragingival scaling",
          "Enamel polishing",
          "Feline anesthesia & vital signs tracking",
          "Home care dental instructions"
        ]
      },
      {
        id: 'cat-dent-2',
        title: "Cat Complete Smile Care",
        price: 1348,
        priceFormatted: "1,348 AED",
        vat: "VAT not included",
        badge: "Most Popular",
        badgeColor: "bg-[#ec558b] text-white",
        popular: true,
        included: [
          "Full mouth scaling & subgingival cleaning",
          "Dental X-ray assessment for tooth resorption (FORLs)",
          "Pre-op IDEXX blood lab work",
          "IV catheter & fluid support",
          "Post-treatment pain relief"
        ]
      },
      {
        id: 'cat-dent-3',
        title: "Surgical Resorption & Extraction Care",
        price: 1850,
        priceFormatted: "1,850 AED",
        vat: "VAT not included",
        badge: "Advanced Care",
        badgeColor: "bg-purple-600 text-white",
        popular: false,
        included: [
          "Digital full dental radiography",
          "Surgical extraction of resorbed teeth",
          "Gingival suturing & mucosal flap",
          "Local analgesia & post-op antibiotics",
          "Comprehensive recovery care"
        ]
      }
    ]
  }
};

export default function PackagesContent() {
  const [petType, setPetType] = useState('Dog');
  const [activeTab, setActiveTab] = useState('Preventive Packages');
  const [openFaq, setOpenFaq] = useState(null);

  // Stripe Checkout Modal State
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState('form'); // 'form' | 'processing' | 'success'
  const [formData, setFormData] = useState({
    name: '',
    petName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    postalCode: ''
  });
  const [paymentError, setPaymentError] = useState('');

  const faqs = [
    {
      q: "What is included in the health packages?",
      a: "Our health packages combine essential veterinary services including comprehensive physical examinations, core vaccinations, Rabies protection, Dubai Municipality tags, deworming, and digital record maintenance at discounted bundled prices."
    },
    {
      q: "How does the Stripe online payment work?",
      a: "You can securely pay for your chosen package online using Stripe with all major Credit/Debit Cards, Apple Pay, or Google Pay. Once paid, our concierge team immediately reserves your preferred appointment slot and emails your official tax receipt."
    },
    {
      q: "When should my pet receive their booster shot?",
      a: "Booster vaccinations are typically due annually (12 months after the initial primary series). We send automated digital reminders when your pet's boosters are due."
    },
    {
      q: "Can I customize a package for my pet's specific needs?",
      a: "Yes! During your checkup, our veterinarians can add specialized services such as Kennel Cough vaccines, Feline Leukemia testing, or Microchipping tailored to your pet's lifestyle."
    },
    {
      q: "Can I get a refund if I reschedule my appointment?",
      a: "Yes, appointments can be freely rescheduled up to 24 hours prior with full credit or immediate refund through Stripe."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Nicoletta Nica",
      title: "Veterinarian",
      image: "https://images.unsplash.com/photo-1594824813571-2b533411efa0?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Dr. Manuel De Oliveira",
      title: "Veterinarian",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Dr. Eric Rosenberg",
      title: "Specialist Veterinary Surgeon",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const currentCategoryPackages = PACKAGES_DATA[petType]?.[activeTab] || PACKAGES_DATA[petType]['Preventive Packages'];

  const handleOpenStripe = (pkg) => {
    setSelectedPackage(pkg);
    setPaymentStep('form');
    setPaymentError('');
    setIsStripeModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\D/g, '').slice(0, 16);
      const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
      setFormData(prev => ({ ...prev, [name]: formatted }));
      return;
    }
    if (name === 'expiry') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      const formatted = cleaned.length >= 3 ? `${cleaned.slice(0, 2)}/${cleaned.slice(2)}` : cleaned;
      setFormData(prev => ({ ...prev, [name]: formatted }));
      return;
    }
    if (name === 'cvc') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      setFormData(prev => ({ ...prev, [name]: cleaned }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayWithStripe = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setPaymentError('Please fill in your contact information.');
      return;
    }
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 15) {
      setPaymentError('Please enter a valid 16-digit card number.');
      return;
    }
    if (!formData.expiry || formData.expiry.length < 5) {
      setPaymentError('Please enter card expiry date (MM/YY).');
      return;
    }
    if (!formData.cvc || formData.cvc.length < 3) {
      setPaymentError('Please enter a valid CVC code.');
      return;
    }

    setPaymentError('');
    setPaymentStep('processing');

    setTimeout(() => {
      setPaymentStep('success');
    }, 2000);
  };

  const calculateTotal = (basePrice) => {
    const vat = basePrice * 0.05;
    const total = basePrice + vat;
    return {
      base: basePrice,
      vat: vat.toFixed(2),
      total: total.toFixed(2)
    };
  };

  return (
    <div className="w-full bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Overview / Hero Section */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Background Image for Mobile and Tablet */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <LazyImage 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200" 
            alt="Pet Health Packages" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/85 to-slate-950/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <span className="text-[#ec558b] font-bold text-xs tracking-widest uppercase mb-3 block">
              PREVENTIVE & WELLNESS CARE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-tight mb-6">
              Health Packages
            </h1>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed mb-6">
              Vaccinations, dental care, daily check-ups and preventative health packages carefully designed to ensure your pet maintains a long, healthy life. Explore our range of bundled health packages created for maximum value and comprehensive protection.
            </p>
            <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-base leading-relaxed mb-8">
              Save up to 30% on essential veterinary services with transparent upfront pricing, comprehensive examinations, and instant secure payment via <strong className="text-white lg:text-slate-900 lg:dark:text-slate-100 font-bold">Stripe</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#packages-grid"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                <CreditCard size={16} /> Choose & Pay Package
              </a>
              <a 
                href="tel:97145971000" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-slate-900/80 lg:bg-slate-900 lg:dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md border border-white/20 lg:border-none"
              >
                <Phone size={16} /> Call: 971 4 5971 000
              </a>
            </div>
          </div>

          {/* Desktop Image Side */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <LazyImage 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=900" 
                alt="Pet Health Packages" 
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#9cbc65] uppercase tracking-wider mb-1">
                  Bundled Healthcare
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Save Up To 30% on Complete Care
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Select Pet & Package Category */}
      <section id="packages-grid" className="py-12 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#9cbc65] font-bold text-xs tracking-widest uppercase mb-2 block">
            Customized Healthcare Plans
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3 leading-tight">
            Select Your Pet and Book the Right Package
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Choose your pet type and explore transparent, all-inclusive bundles with instant Stripe checkout.
          </p>
        </div>

        {/* Mobile & Desktop Segmented Pet Switcher */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-xs grid grid-cols-2 p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-inner">
            <button
              onClick={() => setPetType('Dog')}
              className={`py-2.5 px-4 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                petType === 'Dog'
                  ? 'bg-[#1b2b4b] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <Dog size={16} /> Dogs
            </button>
            <button
              onClick={() => setPetType('Cat')}
              className={`py-2.5 px-4 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                petType === 'Cat'
                  ? 'bg-[#1b2b4b] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <Cat size={16} /> Cats
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Scrollable Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar px-2 sm:px-0">
          {[
            { label: 'Preventive Packages', icon: ShieldCheck },
            { label: 'Spay & Neuter Packages', icon: Heart },
            { label: 'Smile Packages (Dental)', icon: Sparkles }
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveTab(cat.label)}
                className={`whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#ec558b] text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#ec558b]/50'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-[#ec558b]'} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left mb-12 sm:mb-16">
          {currentCategoryPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`bg-white dark:bg-slate-900 rounded-xl sm:rounded-sm border ${
                pkg.popular 
                  ? 'border-[#ec558b] shadow-xl ring-2 ring-[#ec558b]/30' 
                  : 'border-slate-200/80 dark:border-slate-800 shadow-md sm:shadow-lg'
              } p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#ec558b]/60 transition-all`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${pkg.badgeColor}`}>
                  {pkg.badge}
                </span>
                {pkg.popular && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ec558b] bg-[#ec558b]/10 px-2.5 py-0.5 rounded-full">
                    Recommended
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                  {pkg.title}
                </h3>
                
                {/* Price block */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 sm:p-0 sm:bg-transparent sm:dark:bg-transparent mb-5 border border-slate-100 dark:border-slate-800 sm:border-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#ec558b]">
                      {pkg.priceFormatted}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      +5% VAT
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
                    Includes official certificate & digital record
                  </span>
                </div>

                {/* Inclusions */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#ec558b]" /> Included In Package:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={15} className="text-[#51b255] shrink-0 mt-0.5" />
                        <span className="leading-tight">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={() => handleOpenStripe(pkg)}
                  className="w-full py-3.5 bg-[#635BFF] hover:bg-[#5349e4] active:scale-[0.98] text-white text-center text-xs font-bold uppercase tracking-widest rounded-lg sm:rounded-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard size={15} /> Pay with Stripe ({pkg.priceFormatted})
                </button>
                <a 
                  href="https://yourhomevet.com/booking/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-700 dark:text-slate-200 text-center text-xs font-bold uppercase tracking-wider rounded-lg sm:rounded-sm transition-all block"
                >
                  Book & Pay In Clinic
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Protection Banner */}
        <div className="bg-[#fff2f5] dark:bg-rose-950/20 border border-[#fcd5e2] dark:border-rose-900/40 rounded-xl sm:rounded-sm p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm mb-12 sm:mb-16">
          <div className="text-left">
            <span className="text-[#ec558b] font-bold text-xs uppercase tracking-wider block mb-1">
              Guaranteed Best Value
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
              Ensure your pet’s complete protection today
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              All online packages include instant booking priority, digital receipts, and free cancellation up to 24h.
            </p>
          </div>
          <div className="w-full sm:w-auto flex items-center shrink-0">
            <button 
              onClick={() => handleOpenStripe(currentCategoryPackages[0])}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#635BFF] hover:bg-[#5349e4] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-widest rounded-lg sm:rounded-sm shadow-md flex items-center justify-center gap-2"
            >
              <CreditCard size={15} /> Instant Stripe Checkout
            </button>
          </div>
        </div>
      </section>

      {/* Stripe Payment Checkout Modal */}
      <AnimatePresence>
        {isStripeModalOpen && selectedPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStripeModalOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xl overflow-hidden z-10 my-8"
            >
              {/* Header */}
              <div className="bg-[#1b2b4b] text-white p-6 sm:p-8 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-[#635BFF] text-white text-[10px] font-bold uppercase tracking-wider rounded">
                      Stripe Secure
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1">
                      <Lock size={12} className="text-[#51b255]" /> 256-Bit SSL Encrypted
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {selectedPackage.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Pet Type: <span className="font-semibold text-white">{petType}</span> • Category: <span className="font-semibold text-white">{activeTab}</span>
                  </p>
                </div>
                <button 
                  onClick={() => setIsStripeModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                {paymentStep === 'form' && (
                  <form onSubmit={handlePayWithStripe} className="space-y-5">
                    {/* Price Breakdown Banner */}
                    <div className="bg-slate-50 dark:bg-slate-800/60 rounded-md p-4 border border-slate-200 dark:border-slate-700 text-xs">
                      <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 mb-1.5">
                        <span>Package Base Price:</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">{selectedPackage.priceFormatted}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 mb-1.5">
                        <span>UAE VAT (5%):</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">{calculateTotal(selectedPackage.price).vat} AED</span>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-2 flex justify-between items-center text-sm font-bold text-slate-900 dark:text-white">
                        <span>Total Due:</span>
                        <span className="text-[#ec558b] text-base">{calculateTotal(selectedPackage.price).total} AED</span>
                      </div>
                    </div>

                    {/* Supported Cards / Methods Badge */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Accepted Payment Methods</span>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px]">VISA</span>
                        <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px]">Mastercard</span>
                        <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px]">Apple Pay</span>
                      </div>
                    </div>

                    {/* Error message */}
                    {paymentError && (
                      <div className="p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 rounded text-xs">
                        {paymentError}
                      </div>
                    )}

                    {/* Owner & Pet Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Pet Parent Name *
                        </label>
                        <input 
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#635BFF]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Pet Name & Breed *
                        </label>
                        <input 
                          type="text"
                          name="petName"
                          value={formData.petName}
                          onChange={handleInputChange}
                          placeholder="e.g. Bella (Golden Retriever)"
                          className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#635BFF]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address (for receipt) *
                        </label>
                        <input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sarah@example.com"
                          className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#635BFF]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Phone Number *
                        </label>
                        <input 
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 50 123 4567"
                          className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#635BFF]"
                          required
                        />
                      </div>
                    </div>

                    {/* Stripe Card Field */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Card Information *
                        </label>
                        <div className="relative">
                          <input 
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="4242 4242 4242 4242"
                            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#635BFF]"
                            required
                          />
                          <CreditCard size={16} className="absolute left-3.5 top-3 text-slate-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Expiry (MM/YY) *
                          </label>
                          <input 
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            placeholder="12/28"
                            className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#635BFF]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            CVC / CVV *
                          </label>
                          <input 
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#635BFF]"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#635BFF] hover:bg-[#5349e4] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      <Lock size={15} /> Pay {calculateTotal(selectedPackage.price).total} AED with Stripe
                    </button>

                    <div className="text-center">
                      <span className="text-[10px] text-slate-400 inline-flex items-center gap-1">
                        <Shield size={12} className="text-[#51b255]" /> Powered by Stripe Payments • 100% Secure & Guaranteed
                      </span>
                    </div>
                  </form>
                )}

                {paymentStep === 'processing' && (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 border-4 border-[#635BFF]/20 border-t-[#635BFF] rounded-full animate-spin mx-auto" />
                    <h4 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100">
                      Authorizing with Stripe...
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Please do not close this window while we securely confirm your payment and create your appointment confirmation.
                    </p>
                  </div>
                )}

                {paymentStep === 'success' && (
                  <div className="py-8 text-center space-y-5">
                    <div className="w-16 h-16 bg-[#51b255]/20 text-[#51b255] border border-[#51b255]/40 rounded-full flex items-center justify-center mx-auto">
                      <Check size={32} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#51b255] uppercase tracking-wider block mb-1">
                        Payment Successful
                      </span>
                      <h4 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
                        Package Confirmed!
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                        Thank you, <strong className="text-slate-900 dark:text-slate-100">{formData.name || 'valued pet parent'}</strong>! Your booking for <strong className="text-[#ec558b]">{selectedPackage.title}</strong> has been confirmed.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800 rounded-md p-4 text-xs text-left max-w-md mx-auto border border-slate-200 dark:border-slate-700 space-y-1.5">
                      <div className="flex justify-between text-slate-500">
                        <span>Transaction ID:</span>
                        <span className="font-mono text-slate-900 dark:text-slate-100 font-bold">YHV-ST-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Amount Paid:</span>
                        <span className="font-semibold text-[#51b255]">{calculateTotal(selectedPackage.price).total} AED (inc. VAT)</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Receipt sent to:</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">{formData.email || 'your email'}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                      <button 
                        onClick={() => setIsStripeModalOpen(false)}
                        className="px-8 py-3 bg-[#ec558b] hover:bg-[#d84074] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                      >
                        Done & Return to Packages
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-[#ec558b]" /> : <ChevronDown size={18} />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-8 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-3">
          Meet the Team and Schedule your Appointment
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          Our team of experienced Dubai veterinarians is dedicated to keeping your pet healthy and thriving at every life stage.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 p-6 text-center shadow-sm">
              <LazyImage 
                src={member.image} 
                alt={member.name} 
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-2 border-[#ec558b]"
              />
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-slate-100">{member.name}</h3>
              <span className="text-xs text-[#51b255] font-semibold">{member.title}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
