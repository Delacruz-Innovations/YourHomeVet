import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  HeartHandshake, 
  Stethoscope, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const dubaiAreas = [
  'Downtown Dubai',
  'Dubai Marina & JBR',
  'Palm Jumeirah',
  'Arabian Ranches',
  'Jumeirah Village Circle (JVC)',
  'Jumeirah Village Triangle (JVT)',
  'Jumeirah Islands & Park',
  'The Greens & The Views',
  'Dubai Hills Estate',
  'Business Bay',
  'Al Barsha & Al Barsha South',
  'Mirdif & Al Warqa',
  'Damac Hills 1 & 2',
  'Emirates Hills / Meadows / Springs',
  'Umm Suqeim & Jumeirah 1-3',
  'Other Dubai Area / UAE'
];

const serviceOptions = [
  { id: 'general', title: 'General Wellness & Health Check', desc: 'Comprehensive examination in your living room' },
  { id: 'urgent', title: 'Urgent / Sick Pet Consultation', desc: 'Rapid assessment for vomiting, lethargy, pain' },
  { id: 'vaccines', title: 'Vaccinations & Microchipping', desc: 'Core vaccines & Dubai municipality registration' },
  { id: 'dental', title: 'Pet Dental Care & Check-up', desc: 'Tartar check, breath issues, dental health review' },
  { id: 'euthanasia', title: 'In-Home Peaceful End-of-Life', desc: 'Compassionate, peaceful goodbye in familiar surroundings' },
  { id: 'specialist', title: 'Neurology / Ophthalmology Specialist', desc: 'Advanced diagnostics & targeted treatment plans' },
  { id: 'spay-neuter', title: 'Spay & Neuter Assessment', desc: 'Pre-surgery consultation & home aftercare check' },
  { id: 'mobile-clinic', title: 'Mobile Clinic Diagnostic Unit', desc: 'On-site bloodwork, ultrasound & rapid testing' }
];

export default function BookingContent() {
  const [formData, setFormData] = useState({
    species: 'dog',
    gender: 'male',
    petName: '',
    petBreed: '',
    petAge: '',
    service: 'general',
    preferredDate: '',
    preferredTime: 'morning',
    ownerName: '',
    phone: '',
    email: '',
    area: '',
    address: '',
    notes: '',
    isUrgent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const setFieldValue = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full bg-[#f4f8fb] dark:bg-slate-950 transition-colors pt-28 sm:pt-36 pb-20">
      
      {/* Top Banner / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9cbc65] mb-2">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span className="text-[#ec558b]">Book An Appointment</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-white font-normal">
              Book a Home Vet Visit
            </h1>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-pink-100 dark:border-pink-950/40 px-4 py-3 rounded-lg shadow-sm">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Need immediate emergency help?</p>
              <a href="tel:+971505503777" className="text-sm font-bold text-[#ec558b] hover:underline">
                Call 24/7 Hotline: +971 50 550 3777
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 dark:border-slate-800">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ec558b]/10 text-[#ec558b] text-xs font-bold tracking-wide uppercase mb-4">
                <Sparkles size={13} /> Stress-Free Mobile Vet Care
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white leading-tight mb-4">
                Dubai's Premier In-Home Veterinary Service
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Skip the stressful carrier rides and busy clinic waiting rooms. Our fully licensed veterinarians arrive equipped directly at your doorstep anywhere in Dubai.
              </p>

              <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#e8f5d8] dark:bg-[#253916] text-[#6d942b] dark:text-[#9cbc65] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Fully Licensed Dubai Vets</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Certified practitioners registered with Dubai Municipality.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fdebf2] dark:bg-[#3f1929] text-[#ec558b] flex items-center justify-center shrink-0 mt-0.5">
                    <Stethoscope size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Complete Diagnostic Equipment</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Mobile ultrasound, bloodwork, medications & emergency kit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#e0effa] dark:bg-[#162d40] text-[#3382c4] flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Comfort in Your Pet's Home</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Zero travel anxiety, comfortable living-room checkups.</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">Fast WhatsApp Chat</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400">Prefer to book via WhatsApp message?</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/971505503777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-md shadow transition-colors whitespace-nowrap"
                >
                  Chat Now
                </a>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#9cbc65]">Direct Dispatch Hotline</h4>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#ec558b]" />
                <span className="text-base font-semibold">+971 50 550 3777</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#ec558b]" />
                <span className="text-sm text-slate-300">info@yourhomevet.ae</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#ec558b]" />
                <span className="text-sm text-slate-300">Serving All Communities Across Dubai & UAE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-200/80 dark:border-slate-800 relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-md">
                      <CheckCircle2 size={44} />
                    </div>
                    
                    <span className="text-xs font-bold uppercase tracking-widest text-[#9cbc65] mb-2">Request Received</span>
                    <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-3">
                      Appointment Request Submitted!
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 max-w-md text-sm sm:text-base leading-relaxed mb-8">
                      Thank you <span className="font-semibold text-slate-900 dark:text-white">{formData.ownerName || 'Pet Parent'}</span>. Our veterinary coordination team is reviewing your appointment details for <span className="font-semibold text-slate-900 dark:text-white">{formData.petName || 'your pet'}</span> and will call or message you immediately to confirm the visit time.
                    </p>

                    {/* Summary box */}
                    <div className="w-full max-w-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5 text-left text-xs sm:text-sm space-y-2.5 mb-8">
                      <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                        <span className="text-slate-500 dark:text-slate-400">Pet:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">{formData.petName} ({formData.species})</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                        <span className="text-slate-500 dark:text-slate-400">Service:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">{formData.service.replace('-', ' ')}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                        <span className="text-slate-500 dark:text-slate-400">Preferred Date:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{formData.preferredDate || 'Earliest Available'} ({formData.preferredTime})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Location:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{formData.area || 'Dubai'}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <a
                        href="https://wa.me/971505503777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                      >
                        <MessageSquare size={16} /> Chat On WhatsApp
                      </a>
                      
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            species: 'dog',
                            gender: 'male',
                            petName: '',
                            petBreed: '',
                            petAge: '',
                            service: 'general',
                            preferredDate: '',
                            preferredTime: 'morning',
                            ownerName: '',
                            phone: '',
                            email: '',
                            area: '',
                            address: '',
                            notes: '',
                            isUrgent: false
                          });
                        }}
                        className="px-6 py-3 rounded-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Book Another Visit
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    
                    {/* Section 1: Pet Details */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <span className="w-6 h-6 rounded-full bg-[#ec558b] text-white flex items-center justify-center text-xs font-bold">1</span>
                        <h3 className="text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white">Pet Information</h3>
                      </div>

                      {/* Species Selection Pills */}
                      <div className="mb-5">
                        <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Pet Species *</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            { id: 'dog', label: '🐶 Dog' },
                            { id: 'cat', label: '🐱 Cat' },
                            { id: 'bird', label: '🦜 Bird' },
                            { id: 'other', label: '🐰 Exotic / Other' }
                          ].map(item => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setFieldValue('species', item.id)}
                              className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all text-center ${
                                formData.species === item.id 
                                  ? 'border-[#ec558b] bg-[#ec558b]/10 text-[#ec558b] dark:text-[#ec558b] shadow-sm' 
                                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Pet's Name *</label>
                          <input
                            type="text"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            placeholder="e.g. Bella"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Breed / Type</label>
                          <input
                            type="text"
                            name="petBreed"
                            value={formData.petBreed}
                            onChange={handleChange}
                            placeholder="e.g. Golden Retriever"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Gender</label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unknown">Unknown</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Service Selection */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <span className="w-6 h-6 rounded-full bg-[#ec558b] text-white flex items-center justify-center text-xs font-bold">2</span>
                        <h3 className="text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white">Select Service Needed</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        {serviceOptions.map(srv => (
                          <div 
                            key={srv.id}
                            onClick={() => setFieldValue('service', srv.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                              formData.service === srv.id
                                ? 'border-[#ec558b] bg-[#ec558b]/5 dark:bg-[#ec558b]/10 shadow-sm'
                                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">{srv.title}</h4>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{srv.desc}</p>
                              </div>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                                formData.service === srv.id ? 'border-[#ec558b] bg-[#ec558b]' : 'border-slate-300 dark:border-slate-600'
                              }`}>
                                {formData.service === srv.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Urgent Flag Checkbox */}
                      <label className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/40 cursor-pointer">
                        <input
                          type="checkbox"
                          name="isUrgent"
                          checked={formData.isUrgent}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#ec558b] rounded focus:ring-[#ec558b]"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-[#ec558b]">This is an urgent case</span>
                          <span className="text-slate-600 dark:text-slate-400 block">Dispatch veterinarian as soon as possible today.</span>
                        </div>
                      </label>
                    </div>

                    {/* Section 3: Date, Time & Location */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <span className="w-6 h-6 rounded-full bg-[#ec558b] text-white flex items-center justify-center text-xs font-bold">3</span>
                        <h3 className="text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white">When & Where</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Preferred Date *</label>
                          <div className="relative">
                            <input
                              type="date"
                              name="preferredDate"
                              min={today}
                              value={formData.preferredDate}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Preferred Time Window</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          >
                            <option value="morning">Morning (08:00 - 12:00)</option>
                            <option value="afternoon">Afternoon (12:00 - 16:00)</option>
                            <option value="evening">Evening (16:00 - 20:00)</option>
                            <option value="night-urgent">24/7 Immediate Emergency Window</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Dubai Area / Community *</label>
                          <select
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          >
                            <option value="" disabled>Select your area in Dubai</option>
                            {dubaiAreas.map((ar, idx) => (
                              <option key={idx} value={ar}>{ar}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Building / Villa / Street *</label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="e.g. Villa 24, Street 12"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Owner Details & Notes */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <span className="w-6 h-6 rounded-full bg-[#ec558b] text-white flex items-center justify-center text-xs font-bold">4</span>
                        <h3 className="text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white">Contact & Health Notes</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Your Full Name *</label>
                          <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Phone / WhatsApp *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 50 ..."
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                          Symptoms / Special Medical Notes
                        </label>
                        <textarea
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Please describe any symptoms, behavioral changes, current medication, or specific instructions for our vet..."
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec558b] transition-all resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-sm bg-[#ec558b] hover:bg-[#d84074] text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-pink-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {loading ? (
                          <span className="inline-flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                            </svg>
                            Processing Your Booking...
                          </span>
                        ) : (
                          <>
                            <span>Confirm & Request Appointment</span>
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                      
                      <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
                        🔒 No upfront payment required online. Instant dispatch confirmation via call / WhatsApp.
                      </p>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
