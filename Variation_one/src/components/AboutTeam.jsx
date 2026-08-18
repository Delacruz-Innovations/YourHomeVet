import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Dr Dina Samy",
    role: "Veterinary surgeon- soft tissue orthopedic",
    image: "https://images.unsplash.com/photo-1594824432258-45e336b9c9f2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Dr Mahmood",
    role: "Internal Medicine",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Dr. Yuli",
    role: "Internal Medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
  }
];

export default function AboutTeam() {
  return (
    <section className="w-full py-8 lg:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f9fc] dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-slate-100 leading-tight">
            Meet the Team
          </h2>
        </div>

        {/* Team Grid - Carousel on mobile */}
        <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 gap-y-12 md:gap-y-8 lg:gap-y-16 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 sm:px-6 md:mx-0 md:px-0 md:pb-0">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center group min-w-[280px] sm:min-w-[320px] md:min-w-0 shrink-0 snap-center md:snap-align-none">
              
              {/* Image */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-slate-100 dark:bg-slate-800 shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Info */}
              <h3 className="text-xl sm:text-2xl font-serif text-slate-900 dark:text-slate-100 mb-2">
                {member.name}
              </h3>
              <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">
                {member.role}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
