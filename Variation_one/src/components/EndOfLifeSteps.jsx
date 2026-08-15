import React from 'react';

const steps = [
  {
    id: 1,
    label: "IN-HOME PET EUTHANASIA",
    title: "Untold toll of moving",
    content: (
      <>
        <p>
          Veterinary clinics, though built for healing, are unfamiliar settings and can easily trigger anxiety, fear, and stress in animals. Bright lights, foreign smells, and the presence of unfamiliar noises and other animals can make a visit distressing for a pet already in pain or discomfort.
        </p>
        <p>
          When your pet is reaching the end of their life, minimizing this stress is crucial. A car journey followed by a waiting room experience can take an untold toll on their limited energy and peace of mind.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=800",
    imageLeft: true,
  },
  {
    id: 2,
    label: "IN-HOME PET EUTHANASIA",
    title: "A Peaceful Goodbye",
    content: (
      <>
        <p>
          At YourHomeVet, we provide in-home pet euthanasia to allow your beloved pet a peaceful, quiet, and stress-free farewell in the comfort of their home.
        </p>
        <p>
          In a familiar environment, surrounded by the people and places they love, your pet can experience their final moments with dignity and without the anxiety of a clinic environment.
        </p>
        <p>
          By choosing in-home euthanasia, you can focus fully on saying a calm goodbye, knowing your pet is in the safest, most comforting place possible.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
    imageLeft: false,
  },
  {
    id: 3,
    label: "IN-HOME PET EUTHANASIA",
    title: "Step by Step Guide",
    content: (
      <>
        <p>
          When deciding whether in-home pet euthanasia is the right option for you and your beloved pet, understanding the process can help bring peace of mind.
        </p>
        <p>
          Our vet will have a brief discussion with you upon arrival to ensure everyone is ready and comfortable with the next steps before we proceed.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>First Step:</strong> We will ask you to sign a consent form.</li>
          <li><strong>Second Step:</strong> A sedative will be administered to ensure your pet is completely relaxed and pain-free.</li>
          <li><strong>Third Step:</strong> Once your pet is asleep and unaware, the final euthanasia injection will be administered peacefully.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cbcb0def?auto=format&fit=crop&q=80&w=800",
    imageLeft: true,
  },
  {
    id: 4,
    label: "WHY CHOOSE IN-HOME PET EUTHANASIA",
    title: "Why Choose in-home Euthanasia",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Familiar and Comfortable Setting:</strong> Your pet remains in a place they feel most secure and relaxed.</li>
        <li><strong>Reduced Stress and Anxiety:</strong> Avoids the distress of travel and unfamiliar clinic environments.</li>
        <li><strong>Personalized and Private Care:</strong> Allows for an intimate and undisturbed farewell with family.</li>
        <li><strong>Peaceful Passing for Your Pet:</strong> Ensures their final moments are calm and painless.</li>
        <li><strong>Flexible Scheduling:</strong> Services can be arranged at a time that feels right for you.</li>
        <li><strong>Supportive Care for the Family:</strong> Professional guidance through every step of the emotional process.</li>
      </ul>
    ),
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
    imageLeft: false,
  },
  {
    id: 5,
    label: "AFTERCARE",
    title: "Aftercare",
    content: (
      <>
        <p>
          The loss of a beloved pet is a profound experience, and making decisions about aftercare can feel overwhelming. We are here to support you.
        </p>
        <p>
          When deciding to put a pet to sleep at home, you have options for aftercare:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Communal Cremation:</strong> Your pet is cremated alongside others, and their ashes are respectfully scattered at a memorial garden.</li>
          <li><strong>Individual Cremation:</strong> Your pet is cremated individually, and their ashes are returned to you in a designated urn or casket.</li>
          <li><strong>Home Burial:</strong> You may choose to bury your pet at home, provided it is done in accordance with local regulations.</li>
        </ul>
        <p className="mt-4">
          Please let us know your preferences so we can make the appropriate arrangements.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
    imageLeft: true,
  },
];

export default function EndOfLifeSteps() {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-slate-950">
      {steps.map((step) => (
        <section 
          key={step.id} 
          className={`flex flex-col lg:flex-row w-full ${step.imageLeft ? '' : 'lg:flex-row-reverse'}`}
        >
          {/* Image Half */}
          <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative">
            <img 
              src={step.image} 
              alt={step.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Text Content Half */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20 xl:p-24 bg-white dark:bg-slate-950">
            <div className="max-w-xl w-full">
              <span className="text-slate-500 dark:text-slate-400 font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-4 block">
                {step.label}
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-6 leading-tight">
                {step.title}
              </h3>
              
              <div className="text-slate-600 dark:text-slate-300 text-[14px] sm:text-[15px] leading-[1.8] space-y-4 mb-8">
                {step.content}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a 
                  href="#read-more" 
                  className="px-8 py-3.5 rounded-sm bg-black hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
                >
                  READ MORE
                </a>
                <a 
                  href="#consultation" 
                  className="px-8 py-3.5 rounded-sm border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
                >
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
