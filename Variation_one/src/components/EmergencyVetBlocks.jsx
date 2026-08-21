import React from 'react';
import { Link } from 'react-router-dom';

const blocks = [
  {
    id: 1,
    title: "What Is An Emergency Vet?",
    content: (
      <>
        <p className="mb-4">
          An out-of-hours Veterinary practice acts like an A&E for pets. Their job is to stabilize critically ill animals, set up oxygen therapy, put on drips, and perform life-saving surgeries.
        </p>
        <p className="mb-4">
          They have special equipment and specific training that differ from a normal veterinary practice. They are not meant to give vaccinations or clip nails.
        </p>
        <p>
          In addition, our Emergency Vets are trained in making difficult choices that usually face out-of-hours emergency vet practices and help people make informed choices at the given point in time.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    imageLeft: true,
    bgClass: "bg-white dark:bg-slate-950"
  },
  {
    id: 2,
    title: "When Do I Need An Emergency Vet?",
    content: (
      <>
        <p className="mb-4">
          An emergency is defined as any situation where a pet requires immediate veterinary treatment to save its life or to prevent further pain and suffering.
        </p>
        <p className="mb-4">
          This includes cases like severe trauma (like being hit by a car), difficulty breathing, sudden collapse, seizures, severe vomiting or diarrhea, straining to urinate, toxin ingestion, or severe allergic reactions.
        </p>
        <p>
          If you have any doubt, it's always safest to have your pet examined. We have an experienced triage team available 24/7 to help you assess whether your pet needs immediate attention.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200",
    imageLeft: false,
    bgClass: "bg-[#f5f8fc] dark:bg-slate-900"
  },
  {
    id: 3,
    title: "Should I Go To The Hospital?",
    content: (
      <>
        <p className="mb-4">
          The short answer is usually yes, unless your pet is completely unable to be moved safely.
        </p>
        <p className="mb-4">
          While our mobile teams carry oxygen and life-saving medication, a fully equipped hospital offers intensive care, advanced imaging, comprehensive blood tests, and full surgical facilities that cannot be replicated at home.
        </p>
        <p>
          If your pet is critically ill or has sustained severe trauma, going straight to a hospital ensures they receive the highest level of comprehensive care without delay.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200",
    imageLeft: false,
    bgClass: "bg-white dark:bg-slate-950"
  }
];

export default function EmergencyVetBlocks() {
  return (
    <div className="w-full flex flex-col">
      {blocks.map((block) => (
        <section key={block.id} className={`w-full flex flex-col ${block.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} transition-colors`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] relative">
            <img 
              src={block.image} 
              alt={block.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Text Side */}
          <div className={`w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-20 xl:p-24 ${block.bgClass}`}>
            <div className="max-w-xl">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif text-slate-900 dark:text-slate-100 leading-tight mb-8">
                {block.title}
              </h2>
              
              <div className="text-slate-600 dark:text-slate-400 text-[14px] sm:text-[15px] leading-[1.8] mb-10">
                {block.content}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to="/book-an-appointment" 
                  className="px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all shadow-md"
                >
                  BOOK AN APPOINTMENT
                </Link>
                <a 
                  href="#call-me-back" 
                  className="px-8 py-3.5 rounded-sm border border-slate-400/50 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-900/50 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
                >
                  CALL ME BACK
                </a>
              </div>
            </div>
          </div>

        </section>
      ))}
    </div>
  );
}
