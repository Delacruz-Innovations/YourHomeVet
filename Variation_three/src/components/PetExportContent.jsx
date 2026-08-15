import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const servicesList = [
  'Ambulance',
  '24/7 Availability',
  'Annual Checkups',
  'Vaccination',
  'Deworming',
  'Soft Tissue Surgery',
  'Orthopedic Surgery',
  'Blood Tests'
];

export default function PetExportContent() {
  return (
    <section className="py-12 -mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full md:w-1/3 lg:w-1/4 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <div className="bg-[#F2306D] text-white p-5">
              <h3 className="font-bold text-lg">Other Services</h3>
            </div>
            <ul className="p-5 space-y-3">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link to="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#F2306D] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                <p>
                  At YourHomeVet, we provide a premium home-visit pet export service in Central Dubai, offering expert guidance and professional certification for pets travelling anywhere in the world. With over 15 years of specialised experience in international pet travel, we ensure a smooth, accurate and stress-free process carried out directly in the comfort of your home.
                </p>
                <p>
                  All our veterinarians are Official Veterinarians (OV-certified), highly qualified to issue Export Health Certificates (EHCs), Animal Health Certificates (AHCs) and all required international travel documents. We take care of every step with precision, ensuring full compliance with UK and destination-country regulations.
                </p>
                <p>
                  Travel requirements vary widely depending on where your pet is going. Some certificates can be arranged within days, while others may require several weeks or months, so early planning is essential.
                </p>
                <p>
                  As one of Dubai's leading mobile veterinary services, we offer a high-quality, reliable and personalised export documentation service, giving you complete peace of mind when travelling with your pet - without the need to visit a clinic.
                </p>
                <p>
                  <a href="#consultation" className="text-[#F2306D] hover:underline">Book an online consultation for pet export</a>
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
