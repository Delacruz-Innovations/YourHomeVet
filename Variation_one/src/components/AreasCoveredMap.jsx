import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const locations = [
  {
    id: 1,
    city: 'Kirkcaldy',
    title: 'Emergency Vet in Kirkcaldy',
    desc: 'Connect immediately with the phone triage team to find the nearest available emergency vet in Kirkcaldy.',
  },
  {
    id: 2,
    city: 'North Berwick',
    title: 'Emergency Vet in North Berwick',
    desc: 'Connect immediately with the phone triage team to find the nearest available emergency vet in North Berwick.',
  },
  {
    id: 3,
    city: 'Glenrothes',
    title: 'Emergency Vet in Glenrothes',
    desc: 'Connect immediately with the phone triage team to find the nearest available emergency vet in Glenrothes.',
  },
  {
    id: 4,
    city: 'Falkirk',
    title: 'Emergency Vet in Falkirk',
    desc: 'Connect immediately with the phone triage team to find the nearest available emergency vet in Falkirk.',
  },
  {
    id: 5,
    city: 'Paisley',
    title: 'Emergency Vet in Paisley',
    desc: 'Connect immediately with the phone triage team to find the nearest available emergency vet in Paisley.',
  },
  {
    id: 6,
    city: 'Edinburgh',
    title: 'Emergency Vet in Edinburgh',
    desc: 'Connect immediately with the phone triage team to find the nearest available emergency vet in Edinburgh.',
  },
  {
    id: 7,
    city: 'Glasgow',
    title: 'Emergency Vet in Glasgow',
    desc: 'Connect immediately with the phone triage team to find the nearest available emergency vet in Glasgow.',
  },
];

export default function AreasCoveredMap() {
  const [filter, setFilter] = useState('ALL');

  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[700px] border-b border-slate-200 dark:border-slate-800">
      
      {/* Left Sidebar */}
      <div className="w-full md:w-[350px] lg:w-[400px] flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-10 shadow-lg md:shadow-none">
        
        {/* Dropdown Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span className="text-[12px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">{filter}</span>
          <ChevronDown size={16} className="text-slate-500" />
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto max-h-[400px] md:max-h-none custom-scrollbar">
          {locations.map((loc, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              key={loc.id} 
              className="p-6 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <h3 className="text-[14px] font-bold text-slate-900 dark:text-white mb-2">{loc.title}</h3>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {loc.desc}
              </p>
              <Link 
                to="/book-an-appointment"
                className="inline-block text-[11px] font-bold uppercase tracking-[0.1em] text-black dark:text-white hover:text-[#ec558b] dark:hover:text-[#ec558b] transition-colors"
              >
                BOOK APPOINTMENT
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Map Area */}
      <div className="flex-1 h-[400px] md:h-full relative bg-slate-100 dark:bg-slate-800">
        <iframe 
          title="Areas Covered Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4715563.85694291!2d-8.15682088365893!3d54.71765275881454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2suk!4v1714571932457!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) brightness(0.95)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        
        {/* Custom Overlay to prevent aggressive scrolling if needed, but standard Maps handles it decently */}
      </div>

    </section>
  );
}
