import React, { useState } from 'react';
import { Check, Star, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function CarePlans({ onOpenEmergencyModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="care-plans" className="py-24 bg-[#f4f0e8] dark:bg-[#111a12] text-[#2c352e] dark:text-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e2dad0] dark:bg-[#1b2b1e] text-[#8c2b4e] dark:text-[#9cbc65] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-[#ec558b]" />
            <span>TRANSPARENT CARE & MEMBERSHIP</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#1c261e] dark:text-stone-100">
            Tailored Care Plans <span className="italic text-[#ec558b] font-light">for Every Pet.</span>
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-300 text-base sm:text-lg">
            Pay per visit or join our care membership for priority 24/7 emergency access and routine savings.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-[#1a291d] p-1.5 rounded-full border border-stone-300 dark:border-stone-800 mt-8 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#162a1d] text-white shadow'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#ec558b] text-white shadow'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#9cbc65] text-[#162a1d] text-[9px] font-extrabold px-2 py-0.5 rounded-full">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Pay As You Go */}
          <div className="bg-white dark:bg-[#162419] rounded-3xl p-8 border border-stone-200 dark:border-stone-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">FLEXIBLE CARE</span>
              <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mt-2 mb-4">Pay-As-You-Go Visit</h3>
              <p className="text-stone-500 dark:text-stone-400 text-xs mb-6">Ideal for occasional consultations, routine vaccines, or single health checks.</p>
              
              <div className="mb-8">
                <span className="font-serif text-5xl font-bold text-stone-900 dark:text-stone-100">£85</span>
                <span className="text-stone-500 text-xs ml-2">/ per home visit</span>
              </div>

              <ul className="space-y-3 text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>45-minute in-home consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>Full physical head-to-tail exam</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>Digital consultation report</span>
                </li>
                <li className="flex items-center gap-2 text-stone-400">
                  <Check size={16} className="text-stone-300" />
                  <span>Standard dispatch priority</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEmergencyModal}
              className="w-full mt-8 py-3.5 rounded-xl border border-[#162a1d] dark:border-stone-700 text-[#162a1d] dark:text-stone-200 font-bold text-xs uppercase tracking-wider hover:bg-[#162a1d] hover:text-white transition-colors"
            >
              BOOK SINGLE VISIT
            </button>
          </div>

          {/* Plan 2: Premier Family (Featured in Variation 1 Pink `#ec558b`) */}
          <div className="bg-[#162a1d] text-white rounded-3xl p-8 border-2 border-[#ec558b] shadow-2xl relative flex flex-col justify-between transform md:-translate-y-4">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ec558b] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
              MOST POPULAR PLAN
            </span>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9cbc65]">PREMIER WELLNESS</span>
              <h3 className="font-serif text-3xl text-stone-100 mt-2 mb-4">Premier Family Plan</h3>
              <p className="text-stone-300 text-xs mb-6">Complete year-round wellness, vaccines, and 24/7 priority emergency hotline.</p>

              <div className="mb-8">
                <span className="font-serif text-5xl font-bold text-white">
                  {billingCycle === 'monthly' ? '£39' : '£31'}
                </span>
                <span className="text-stone-300 text-xs ml-2">/ month</span>
              </div>

              <ul className="space-y-3 text-xs text-stone-200">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span className="font-semibold">2 Free In-Home Health Visits per year</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>Annual core vaccines & microchipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>24/7 Priority Emergency Vet Hotline</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>15% discount on in-home diagnostics & pharmacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>Direct insurance claim filing</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEmergencyModal}
              className="w-full mt-8 py-3.5 rounded-xl bg-[#ec558b] hover:bg-[#d83b73] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              JOIN PREMIER PLAN
            </button>
          </div>

          {/* Plan 3: VIP Emergency & Senior Care */}
          <div className="bg-white dark:bg-[#162419] rounded-3xl p-8 border border-stone-200 dark:border-stone-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8c2b4e] dark:text-[#ec558b]">MAXIMUM PROTECTION</span>
              <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mt-2 mb-4">VIP Emergency & Senior</h3>
              <p className="text-stone-500 dark:text-stone-400 text-xs mb-6">Designed for senior pets, chronic conditions, and ultimate emergency peace of mind.</p>

              <div className="mb-8">
                <span className="font-serif text-5xl font-bold text-stone-900 dark:text-stone-100">
                  {billingCycle === 'monthly' ? '£89' : '£71'}
                </span>
                <span className="text-stone-500 text-xs ml-2">/ month</span>
              </div>

              <ul className="space-y-3 text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span className="font-semibold">Unlimited Emergency Call-Outs (0 fees)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>Rapid 20-Minute Priority Dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>Comprehensive Senior Blood & Ultrasound Panel</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#9cbc65]" />
                  <span>Dedicated Named Personal Vet Surgeon</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEmergencyModal}
              className="w-full mt-8 py-3.5 rounded-xl border border-[#8c2b4e] text-[#8c2b4e] dark:text-[#ec558b] dark:border-[#ec558b] font-bold text-xs uppercase tracking-wider hover:bg-[#8c2b4e] hover:text-white transition-colors"
            >
              JOIN VIP CARE
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
