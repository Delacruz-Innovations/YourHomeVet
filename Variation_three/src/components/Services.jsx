import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroCare from '../assets/hero_care.png';
import catPlay from '../assets/cat_play.png';
import rabbitCare from '../assets/rabbit_care.png';
import { Stethoscope, Syringe, TestTube, Truck, Clock, Bug, Scissors, Bone } from 'lucide-react';

const services = [
  {
    icon: <Truck size={24} className="text-white" />,
    title: 'Ambulance',
    desc: 'Rapid response pet ambulance service for emergencies and safe transport.',
    img: heroCare,
    link: '/services/ambulance'
  },
  {
    icon: <Clock size={24} className="text-white" />,
    title: '24/7 Availability',
    desc: 'Round-the-clock veterinary care because emergencies don\'t wait for business hours.',
    img: catPlay,
    link: '/services/24-7-availability'
  },
  {
    icon: <Stethoscope size={24} className="text-white" />,
    title: 'Annual Checkups',
    desc: 'From puppies and kittens to senior pets, we provide comprehensive care for every stage.',
    img: rabbitCare,
    link: '/services/check-ups'
  },
  {
    icon: <Syringe size={24} className="text-white" />,
    title: 'Vaccination',
    desc: 'Protect your pet from common diseases with our in-home vaccination services.',
    img: heroCare,
    link: '/services/vaccination'
  },
  {
    icon: <Bug size={24} className="text-white" />,
    title: 'Deworming',
    desc: 'Effective parasite control and prevention to keep your pet healthy and comfortable.',
    img: catPlay,
    link: '/services/deworming'
  },
  {
    icon: <Scissors size={24} className="text-white" />,
    title: 'Soft Tissue Surgery',
    desc: 'Expert surgical care for soft tissue conditions performed with the highest safety standards.',
    img: rabbitCare,
    link: '/services/soft-tissue-surgery'
  },
  {
    icon: <Bone size={24} className="text-white" />,
    title: 'Orthopedic Surgery',
    desc: 'Specialized bone and joint procedures to restore your pet\'s mobility and comfort.',
    img: heroCare,
    link: '/services/orthopedic-surgery'
  },
  {
    icon: <TestTube size={24} className="text-white" />,
    title: 'Blood Tests',
    desc: 'Comprehensive diagnostic blood work and analysis performed in the comfort of your home.',
    img: catPlay,
    link: '/services/blood-tests'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#FFF0F5] dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#F2306D] font-bold text-[11px] tracking-widest uppercase mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
            Dedicated in-home <span className="text-[#F2306D]">vet care</span> right when you need it
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-slate-100 dark:border-slate-800 relative flex flex-col"
            >
              <div className="absolute top-4 left-4 w-12 h-12 bg-[#F2306D] rounded-full flex items-center justify-center z-10 shadow-md">
                {service.icon}
              </div>
              
              <div className="h-48 overflow-hidden shrink-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {service.desc}
                </p>
                <Link to={service.link} className="text-[#F2306D] text-[13px] font-bold tracking-wide uppercase flex items-center gap-1 hover:text-[#D9265F] transition-colors mt-auto w-max">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F2306D] hover:bg-[#D9265F] text-white text-[13px] font-bold tracking-wide transition-colors shadow-md"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
}
