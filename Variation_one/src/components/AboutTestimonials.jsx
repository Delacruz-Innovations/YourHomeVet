import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Fatima A.",
    role: "Cynophilia",
    text: "Booking a home visit was so simple and fast. Having the vet come to us saved my elderly cat from the stress of traveling. Truly a lifesaver!"
  },
  {
    id: 2,
    name: "Omar S.",
    role: "Ailurophiles",
    text: "The convenience of a vet visit at home is unbeatable. It made caring for my sick dog so much easier, especially during busy days."
  },
  {
    id: 3,
    name: "Layla M.",
    role: "Hamster Lovers",
    text: "Your Home Vet's mobile service is a blessing. Quick to schedule and the vet was so gentle with my nervous pet in our own home."
  },
  {
    id: 4,
    name: "Khaled H.",
    role: "Animal Lover",
    text: "I can't thank them enough. When my dog needed urgent care, the home visit meant immediate treatment without the hassle of going out."
  }
];

export default function AboutTestimonials() {
  return (
    <section className="w-full py-8 lg:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8 lg:mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-4 block">
            WHAT THEY SAY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-slate-100 leading-tight">
            Client Stories
          </h2>
        </div>

        {/* 2x2 Grid for Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 sm:p-10 border border-slate-200 dark:border-slate-800 rounded-sm bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Quote Icon SVG */}
              <div className="text-slate-300 dark:text-slate-700 mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 text-[15px] sm:text-[16px] leading-[1.8] font-medium mb-8">
                "{t.text}"
              </p>
              
              <div>
                <h4 className="text-lg font-serif text-slate-900 dark:text-slate-100 mb-1">{t.name}</h4>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t.role}
                </span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
