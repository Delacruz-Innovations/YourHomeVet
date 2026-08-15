import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartPulse, Stethoscope, ShieldPlus, Syringe, Bug, Activity, Bone, FlaskConical } from 'lucide-react';

const servicesList = [
  { title: 'Ambulance', path: '/services/ambulance', icon: Activity },
  { title: '24/7 Availability', path: '/services/24-7-availability', icon: HeartPulse },
  { title: 'Annual Checkups', path: '/services/check-ups', icon: Stethoscope },
  { title: 'Vaccination', path: '/services/vaccination', icon: Syringe },
  { title: 'Deworming', path: '/services/deworming', icon: Bug },
  { title: 'Soft Tissue Surgery', path: '/services/soft-tissue-surgery', icon: ShieldPlus },
  { title: 'Orthopedic Surgery', path: '/services/orthopedic-surgery', icon: Bone },
  { title: 'Blood Tests', path: '/services/blood-tests', icon: FlaskConical },
];

export default function ServiceSidebar() {
  const location = useLocation();

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="bg-[#F2306D] text-white p-5">
          <h3 className="font-bold text-lg">Other Services</h3>
        </div>
        <ul className="p-3 space-y-1">
          {servicesList.map((service, idx) => {
            const isActive = location.pathname === service.path;
            const Icon = service.icon;
            return (
              <li key={idx}>
                <Link 
                  to={service.path} 
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    isActive 
                      ? 'bg-[#FFF0F5] text-[#F2306D] dark:bg-slate-800' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-[#F2306D]' : 'text-slate-400'} />
                  {service.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-[#eefdf2] dark:bg-slate-800/50 rounded-2xl p-6 border border-green-100 dark:border-slate-800 text-center">
        <h4 className="font-bold text-slate-800 dark:text-white mb-2">Need help choosing?</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">We're here to help you find the right care for your pet.</p>
        <Link to="/contact" className="inline-block bg-white text-[#F2306D] border border-[#F2306D] hover:bg-[#F2306D] hover:text-white transition-colors font-bold text-[13px] px-6 py-2 rounded-full">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
