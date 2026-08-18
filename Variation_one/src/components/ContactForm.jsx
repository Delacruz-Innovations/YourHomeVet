import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const inputStyles = "w-full bg-transparent border-b border-slate-400/60 dark:border-slate-500 pb-2 text-[14px] text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:border-slate-800 dark:focus:border-slate-300 transition-colors rounded-none appearance-none";

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-[#e6f2fd] dark:bg-slate-950 transition-colors overflow-hidden pt-12 lg:pt-32 pb-16 lg:pb-0">
      
      {/* Background Image for Mobile and Tablet */}
      <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
        <img 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200" 
          alt="Dog and Cat" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
      </div>
      
      {/* Soft Ambient Radial Glow Effects for Background */}
      <div className="absolute top-0 -left-24 w-[500px] h-[500px] rounded-full bg-[#dbeefe] opacity-90 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#e8f7e8] opacity-60 blur-3xl pointer-events-none"></div>

      {/* Left Column: Contact Info */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 sm:p-12 lg:p-20 xl:p-24 relative z-10 lg:pr-8">
        <div className="max-w-xl">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#9cbc65] lg:text-slate-500 lg:dark:text-slate-400 mb-6 block">
            CONTACT
          </span>
          
          <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] font-serif text-white lg:text-slate-900 lg:dark:text-slate-100 font-normal leading-[1.1] mb-8 tracking-tight">
            Let's get in touch
          </h1>
          
          <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[16px] leading-[1.8] mb-6">
            For all non-veterinary emergency related query, please don't hesitate to contact us either directly by email or by using this contact form.
          </p>
          <p className="text-slate-200 lg:text-slate-600 lg:dark:text-slate-400 text-[16px] leading-[1.8] mb-12">
            Our team will endeavour to answer as quickly as possible.
          </p>
          
          {/* Contact Details List */}
          <div className="flex flex-col gap-8 mb-8 lg:mb-16">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-white/30 lg:border-slate-300 dark:border-slate-700 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-white lg:text-slate-700 dark:lg:text-slate-300" />
              </div>
              <span className="text-[16px] text-white lg:text-slate-800 dark:lg:text-slate-200">+971 50 550 3777</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-white/30 lg:border-slate-300 dark:border-slate-700 bg-[#e4f7ca] dark:bg-[#344621] flex items-center justify-center shrink-0">
                <Mail size={18} className="text-slate-700 dark:text-slate-300" />
              </div>
              <span className="text-[16px] text-white lg:text-slate-800 dark:lg:text-slate-200">Info@yourhomevet.ae</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-white/30 lg:border-slate-300 dark:border-slate-700 bg-[#fdf5b6] dark:bg-[#524c25] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-slate-700 dark:text-slate-300" />
              </div>
              <span className="text-[16px] text-white lg:text-slate-800 dark:lg:text-slate-200">HQ : YourHomeVet, Downtown Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Animals Image at bottom left */}
        <div className="mt-auto hidden lg:block w-full max-w-sm relative -bottom-24">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800" 
            alt="Dog and Cat" 
            className="w-full h-auto object-contain rounded-[40px] drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative z-10 lg:bg-white/30 dark:lg:bg-slate-900/30 backdrop-blur-sm lg:border-l border-white/40 dark:border-slate-700/40">
        <div className="max-w-lg w-full mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-[13px] text-white lg:text-slate-700 dark:lg:text-slate-300">Full name *</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border-none rounded-sm focus:ring-2 focus:ring-black dark:focus:ring-white shadow-sm transition-shadow"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] text-white lg:text-slate-700 dark:lg:text-slate-300">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border-none rounded-sm focus:ring-2 focus:ring-black dark:focus:ring-white shadow-sm transition-shadow"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[13px] text-white lg:text-slate-700 dark:lg:text-slate-300">Phone number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border-none rounded-sm focus:ring-2 focus:ring-black dark:focus:ring-white shadow-sm transition-shadow"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[13px] text-white lg:text-slate-700 dark:lg:text-slate-300">How can we help you? *</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border-none rounded-sm focus:ring-2 focus:ring-black dark:focus:ring-white shadow-sm transition-shadow resize-none"
              ></textarea>
            </div>
            
            {/* reCAPTCHA Mockup */}
            <div className="w-[300px] h-[78px] bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] flex items-center justify-between px-4 mt-2 mb-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 border-2 border-[#c1c1c1] rounded-sm bg-white"></div>
                <span className="text-[14px] text-[#222]">I'm not a robot</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-70" />
                <span className="text-[10px] text-[#555] mt-1">reCAPTCHA</span>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md mt-4"
            >
              SEND MESSAGE
            </button>
            
          </form>
        </div>
      </div>
      
    </section>
  );
}
