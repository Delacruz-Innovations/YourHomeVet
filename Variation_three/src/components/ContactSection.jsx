import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import testimonialBg from '../assets/testimonial_family2.jpg';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-10 bg-[#FAFCF8] dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Image */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 sm:mb-20 bg-gradient-to-br from-[#FFF0F5] to-[#E8F7EC] dark:from-slate-900 dark:to-slate-900/90 rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-sm">
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#58B66E] mb-3">DOORSTEP VETERINARY CARE</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Veterinary care designed <span className="text-[#FA4D80]">around you</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We bring clinical equipment directly to your living room. Reduced stress for your pet, personalized one-on-one attention, and complete peace of mind.
            </p>
          </div>
          <div className="h-64 sm:h-80 lg:h-auto overflow-hidden">
            <img 
              src={testimonialBg} 
              alt="Happy pet owner receiving in-home vet visit" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Form and Details */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                Get in Touch with Our Dispatch Team
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Have questions about our home visits, emergency coverage, or care packages? Our friendly team is available 24/7 to assist.
              </p>
            </div>
            
            <div className="space-y-4 pt-2 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF0F5] dark:bg-slate-900 flex items-center justify-center text-[#FA4D80]">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">Email Us</span>
                  <a href="mailto:info@yourhomevet.co.uk" className="font-bold text-slate-900 dark:text-white hover:text-[#FA4D80] transition-colors">info@yourhomevet.co.uk</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F7EC] dark:bg-slate-900 flex items-center justify-center text-[#58B66E]">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">24/7 Emergency Line</span>
                  <a href="tel:02081234567" className="font-bold text-slate-900 dark:text-white hover:text-[#58B66E] transition-colors">0208 123 4567</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] dark:bg-slate-900 flex items-center justify-center text-[#4FA3DE]">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">Service Coverage</span>
                  <span className="font-bold text-slate-900 dark:text-white">Central, North, West & South London</span>
                </div>
              </div>
            </div>

            {/* Accreditation Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Accreditations & Trust</span>
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm">
                  <CheckCircle2 size={16} className="text-[#58B66E]" />
                  <span>RCVS Registered Vets</span>
                </div>
                <div className="px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm">
                  <CheckCircle2 size={16} className="text-[#4FA3DE]" />
                  <span>4.9★ Google Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-200/70 dark:border-slate-800 relative overflow-hidden">
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Us a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 bg-[#58B66E] text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Thank you for reaching out. A member of our veterinary team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full bg-[#FAFCF8] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#FA4D80] transition-colors"
                        placeholder="Sarah Jenkins"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full bg-[#FAFCF8] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#FA4D80] transition-colors"
                        placeholder="sarah@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full bg-[#FAFCF8] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#FA4D80] transition-colors"
                      placeholder="07123 456789"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message</label>
                    <textarea 
                      id="message"
                      rows="4"
                      className="w-full bg-[#FAFCF8] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#FA4D80] transition-colors resize-none"
                      placeholder="Tell us how we can help you and your pet..."
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#FA4D80] to-[#FF6B9D] hover:from-[#e63c6f] hover:to-[#fa4d80] text-white rounded-full font-bold uppercase tracking-wider text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
