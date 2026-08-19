import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-8 md:py-10 bg-[#FFF0F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 dark:border-slate-800"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Send us a Message</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              For any enquiries or to book a home visit service, please fill out the form below or contact us at <a href="mailto:contact@homevetsdubai.com" className="text-[#F2306D] font-medium hover:underline">contact@homevetsdubai.com</a>
            </p>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-16 h-16 bg-[#F2306D] text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Thank you for contacting us. We will get back to you shortly.
              </p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#F2306D] focus:ring-1 focus:ring-[#F2306D] transition-colors text-slate-800 dark:text-white" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#F2306D] focus:ring-1 focus:ring-[#F2306D] transition-colors text-slate-800 dark:text-white" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#F2306D] focus:ring-1 focus:ring-[#F2306D] transition-colors text-slate-800 dark:text-white" placeholder="+44 1234 567890" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#F2306D] focus:ring-1 focus:ring-[#F2306D] transition-colors text-slate-800 dark:text-white resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-[#F2306D] hover:bg-[#D9265F] text-white font-bold text-sm px-10 py-3 rounded-full shadow-sm transition-colors">
                Send Message
              </button>
            </div>
          </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
