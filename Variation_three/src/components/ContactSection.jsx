import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import testimonialBg from '../assets/testimonial_family2.jpg';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Image */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 bg-[#FFF0F5] dark:bg-slate-950 rounded-[2rem] overflow-hidden">
          <div className="p-10 lg:p-16 flex flex-col justify-center bg-white dark:bg-slate-900 m-2 rounded-[1.5rem]">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Veterinary care designed <span className="text-[#F2306D]">around you</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We bring the clinic to your living room. Reduced stress, personalised care, and transparent pricing.
            </p>
          </div>
          <div className="h-64 lg:h-auto">
            <img 
              src={testimonialBg} 
              alt="Happy pet owner" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Form and Details */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Details */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 uppercase tracking-wider">
              YourHomeVet
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
              We provide exceptional veterinary care to pets across Dubai. Contact us to schedule a visit or ask any questions.
            </p>
            
            <div className="space-y-4 mb-12 text-sm font-medium text-slate-700 dark:text-slate-300">
              <p>Email: <a href="mailto:info@homevetsdubai.ae" className="text-[#F2306D] hover:underline">info@homevetsdubai.ae</a></p>
              <p>Phone: <a href="tel:02081234567" className="text-[#F2306D] hover:underline">0208 123 4567</a></p>
              <p>Areas: Central, North, West & South West Dubai</p>
            </div>

            {/* Logos placeholder */}
            <div className="flex flex-col gap-4">
              <div className="w-40 h-16 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center font-bold text-slate-400 text-sm">
                RCVS Logo
              </div>
              <div className="w-40 h-12 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center font-bold text-slate-400 text-sm">
                Google Logo
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 max-w-2xl mx-auto lg:mx-0 w-full mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full pointer-events-none"></div>

              <h3 className="text-3xl font-extrabold text-slate-800 mb-8 relative z-10">Send us a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center relative z-10">
                  <div className="w-16 h-16 bg-[#F2306D] text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm">
                    Thank you for contacting us. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-600">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-[#F2306D] focus:ring-1 focus:ring-[#F2306D] transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-600">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-[#F2306D] focus:ring-1 focus:ring-[#F2306D] transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-600">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-[#F2306D] focus:ring-1 focus:ring-[#F2306D] transition-colors"
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-600">Message</label>
                    <textarea 
                      id="message"
                      rows="4"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-[#F2306D] focus:ring-1 focus:ring-[#F2306D] transition-colors resize-none"
                      placeholder="How can we help you and your pet?"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-[#F2306D] hover:bg-[#D9265F] text-white rounded-full font-bold uppercase tracking-wide text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
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
