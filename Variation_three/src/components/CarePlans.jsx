import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, Heart } from 'lucide-react';

export default function CarePlans({ onOpenEmergencyModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="care-plans" className="py-10 bg-[#FAFCF8] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F7EC] dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-[#58B66E] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheck size={14} />
            <span>TRANSPARENT CARE & MEMBERSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Tailored Care Plans <span className="text-[#FA4D80]">for Every Pet</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Pay per visit or join our wellness care membership for priority 24/7 emergency dispatch and routine health savings.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 mt-8 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#FA4D80] text-white shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#58B66E] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Pay As You Go */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">FLEXIBLE CARE</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-3">Pay-As-You-Go Visit</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-6">Ideal for occasional consultations, routine vaccines, or single health checks.</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black text-slate-900 dark:text-white">£85</span>
                <span className="text-slate-500 text-xs ml-2">/ per home visit</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>45-minute in-home consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>Full physical head-to-tail exam</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>Digital consultation report</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Check size={16} className="text-slate-300 dark:text-slate-700 shrink-0" />
                  <span>Standard dispatch priority</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEmergencyModal}
              className="w-full mt-8 py-3.5 rounded-2xl border-2 border-slate-900 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
            >
              BOOK SINGLE VISIT
            </button>
          </div>

          {/* Plan 2: Premier Family (Featured) */}
          <div className="bg-[#0f1d13] text-white rounded-3xl p-8 border-2 border-[#58B66E] shadow-2xl relative flex flex-col justify-between transform md:-translate-y-4">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FA4D80] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
              MOST POPULAR PLAN
            </span>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#58B66E]">PREMIER WELLNESS</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">Premier Family Plan</h3>
              <p className="text-slate-300 text-xs mb-6">Complete year-round wellness, vaccines, and 24/7 priority emergency hotline.</p>

              <div className="mb-8">
                <span className="text-5xl font-black text-white">
                  {billingCycle === 'monthly' ? '£39' : '£31'}
                </span>
                <span className="text-slate-300 text-xs ml-2">/ month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span className="font-semibold">2 Free In-Home Health Visits per year</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>Annual core vaccines & microchipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>24/7 Priority Emergency Vet Hotline</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>15% discount on in-home diagnostics & pharmacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>Direct insurance claim filing</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEmergencyModal}
              className="w-full mt-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              JOIN PREMIER PLAN
            </button>
          </div>

          {/* Plan 3: VIP Emergency & Senior Care */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4FA3DE]">MAXIMUM PROTECTION</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-3">VIP Emergency & Senior</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-6">Designed for senior pets, chronic conditions, and ultimate emergency peace of mind.</p>

              <div className="mb-8">
                <span className="text-5xl font-black text-slate-900 dark:text-white">
                  {billingCycle === 'monthly' ? '£89' : '£71'}
                </span>
                <span className="text-slate-500 text-xs ml-2">/ month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span className="font-semibold">Unlimited Emergency Call-Outs (0 fees)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>Rapid 20-Minute Priority Dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>Comprehensive Senior Blood & Ultrasound Panel</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#58B66E] shrink-0" />
                  <span>Dedicated Named Personal Vet Surgeon</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEmergencyModal}
              className="w-full mt-8 py-3.5 rounded-2xl border-2 border-[#4FA3DE] text-[#4FA3DE] font-bold text-xs uppercase tracking-wider hover:bg-[#4FA3DE] hover:text-white transition-colors"
            >
              JOIN VIP CARE
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
