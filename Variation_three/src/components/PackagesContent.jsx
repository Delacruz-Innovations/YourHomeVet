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
        priceFormatted: "£95",
        vat: "VAT included",
        badge: "Primary Dose",
        badgeColor: "bg-[#58B66E] text-white",
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
        priceFormatted: "£135",
        vat: "VAT included",
        badge: "Annual Protection",
        badgeColor: "bg-[#FA4D80] text-white",
        popular: true,
        included: [
          "Full physical examination",
          "Annual DHPPi/L booster vaccine",
          "Rabies vaccination",
          "Official pet passport entry & microchip scan",
          "Deworming treatment",
          "Comprehensive health checkup"
        ]
      },
      {
        id: 'dog-prev-3',
        title: "Dog Smile Dental Package",
        priceFormatted: "£380",
        vat: "VAT included",
        badge: "Complete Dental",
        badgeColor: "bg-[#4FA3DE] text-white",
        popular: false,
        included: [
          "Professional dental scale and polish",
          "Full general anesthesia & monitoring",
          "Pre-anesthetic blood lab test",
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
        priceFormatted: "£240",
        vat: "VAT included",
        badge: "Male Canine",
        badgeColor: "bg-slate-800 text-white",
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
        priceFormatted: "£310",
        vat: "VAT included",
        badge: "Female Canine",
        badgeColor: "bg-[#FA4D80] text-white",
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
        priceFormatted: "£395",
        vat: "VAT included",
        badge: "All-Inclusive",
        badgeColor: "bg-[#58B66E] text-white",
        popular: false,
        included: [
          "Full CBC + Biochemical pre-op panel",
          "Surgical spay / castration procedure",
          "Advanced multi-modal pain control",
          "E-collar protection & take-home meds",
          "Hospitalization & fluid therapy",
          "Free 10-day suture removal & check"
        ]
      }
    ]
  },
  Cat: {
    'Preventive Packages': [
      {
        id: 'cat-prev-1',
        title: "Kitten Primary Care",
        priceFormatted: "£85",
        vat: "VAT included",
        badge: "Primary Dose",
        badgeColor: "bg-[#58B66E] text-white",
        popular: false,
        included: [
          "Full physical examination",
          "Primary FVRCP vaccine dose",
          "Feline health assessment",
          "Digital medical record",
          "Deworming treatment",
          "Veterinarian consultation"
        ]
      },
      {
        id: 'cat-prev-2',
        title: "Feline Annual Booster",
        priceFormatted: "£125",
        vat: "VAT included",
        badge: "Annual Protection",
        badgeColor: "bg-[#FA4D80] text-white",
        popular: true,
        included: [
          "Full physical examination",
          "Annual FVRCP booster vaccine",
          "Rabies vaccination",
          "Official passport entry & microchip scan",
          "Deworming treatment",
          "Comprehensive feline checkup"
        ]
      },
      {
        id: 'cat-prev-3',
        title: "Cat Smile Dental Package",
        priceFormatted: "£340",
        vat: "VAT included",
        badge: "Complete Dental",
        badgeColor: "bg-[#4FA3DE] text-white",
        popular: false,
        included: [
          "Professional feline scale and polish",
          "General anesthesia & monitoring",
          "Pre-anesthetic blood panel",
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
        title: "Cat Neuter (Male)",
        priceFormatted: "£150",
        vat: "VAT included",
        badge: "Male Feline",
        badgeColor: "bg-slate-800 text-white",
        popular: false,
        included: [
          "Pre-surgical physical examination",
          "General anesthesia & vitals monitoring",
          "Orchidectomy surgical procedure",
          "Post-op pain medication",
          "Recovery daycare & discharge advice",
          "Complimentary follow-up check"
        ]
      },
      {
        id: 'cat-sn-2',
        title: "Cat Spay (Female)",
        priceFormatted: "£210",
        vat: "VAT included",
        badge: "Female Feline",
        badgeColor: "bg-[#FA4D80] text-white",
        popular: true,
        included: [
          "Pre-surgical examination",
          "General anesthesia & fluid therapy",
          "Feline ovariohysterectomy procedure",
          "Full post-operative pain management",
          "Daycare monitoring",
          "Free 7-day follow-up check"
        ]
      }
    ]
  }
};

export default function PackagesContent() {
  const [selectedSpecies, setSelectedSpecies] = useState('Dog');

  return (
    <div className="w-full relative bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-[#58B66E] font-bold text-xs tracking-widest uppercase mb-3 block">
          Transparent Healthcare Pricing
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Veterinary Healthcare Packages
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Bundled, transparent pricing for routine wellness, annual vaccinations, dental care, and spay/neuter procedures delivered in-home or at our clinic.
        </p>

        {/* Species Selector Tabs */}
        <div className="inline-flex p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-12">
          <button
            onClick={() => setSelectedSpecies('Dog')}
            className={`flex items-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
              selectedSpecies === 'Dog'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Dog size={16} /> Dog Packages
          </button>
          <button
            onClick={() => setSelectedSpecies('Cat')}
            className={`flex items-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
              selectedSpecies === 'Cat'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Cat size={16} /> Cat Packages
          </button>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {Object.entries(PACKAGES_DATA[selectedSpecies]).map(([categoryName, packagesList]) => (
          <div key={categoryName} className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center gap-2">
              <Sparkles size={20} className="text-[#FA4D80]" /> {categoryName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packagesList.map((pkg) => (
                <div 
                  key={pkg.id}
                  className={`p-8 bg-white dark:bg-slate-900 border flex flex-col justify-between transition-all ${
                    pkg.popular 
                      ? 'border-[#FA4D80] shadow-xl relative' 
                      : 'border-slate-200/80 dark:border-slate-800 shadow-sm'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-[#FA4D80] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 inline-block mb-4 ${pkg.badgeColor}`}>
                      {pkg.badge}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.title}</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl font-bold text-slate-900 dark:text-white">{pkg.priceFormatted}</span>
                      <span className="text-xs text-slate-400">{pkg.vat}</span>
                    </div>

                    <div className="space-y-3 mb-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {pkg.included.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={15} className="text-[#58B66E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="#book"
                    className="w-full py-4 text-center text-xs font-bold uppercase tracking-wider bg-slate-900 dark:bg-slate-800 hover:bg-[#FA4D80] text-white transition-colors block"
                  >
                    Book This Package
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
