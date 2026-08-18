import React from 'react';
import { PawPrint, Heart, Dog, PiggyBank, ShieldCheck, CheckCircle2 } from 'lucide-react';

const PetDentalInfographic = () => {
  const benefits = [
    {
      id: '01',
      title: 'Prevents pain, saves teeth',
      desc: 'Pet dental cleaning prevents pain from tooth problems and can reduce the need for advanced dental procedures if disease is detected early.',
      color: {
        border: 'border-pink-200',
        bg: 'bg-[#FA4D80]',
        lightBg: 'bg-pink-50',
        text: 'text-[#FA4D80]'
      },
      side: 'left',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FA4D80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.5c-1.5 0-2.5-1-3-2.5-.5-1.5-1.5-2.5-3-2.5C4.5 16.5 3 13 3 13c0-3.5 2.5-6 6-6 1.5 0 2.5.5 3 1.5.5-1 1.5-1.5 3-1.5 3.5 0 6 2.5 6 6 0 2-1.5 3.5-3 3.5-1.5 0-2.5 1-3 2.5-.5 1.5-1.5 2.5-3 2.5z"/>
          <path d="M12 7.5c-1 0-2-1-2-2.5"/>
          <path d="M9.5 13.5v4"/>
          <path d="M14.5 13.5v4"/>
          <path d="M9.5 15.5h5"/>
        </svg>
      ),
      margin: 'mt-0'
    },
    {
      id: '02',
      title: 'Prevents heart, kidney and liver problems',
      desc: 'Dental cleaning helps reduce the risk of bacteria entering the bloodstream, which may impact vital organs such as the heart, kidneys, and liver.',
      color: {
        border: 'border-green-200',
        bg: 'bg-[#58B66E]',
        lightBg: 'bg-green-50',
        text: 'text-[#58B66E]'
      },
      side: 'right',
      icon: <Heart size={28} className="text-[#58B66E]" />,
      margin: 'mt-8 md:mt-12'
    },
    {
      id: '03',
      title: 'Improves comfort and ability to eat',
      desc: 'After dental cleaning, eating becomes much easier for your pet as they are able to chew their kibble without pain, and many senior pets even become "bouncy" and ravenous again.',
      color: {
        border: 'border-pink-200',
        bg: 'bg-[#FA4D80]',
        lightBg: 'bg-pink-50',
        text: 'text-[#FA4D80]'
      },
      side: 'left',
      icon: <Dog size={28} className="text-[#FA4D80]" />,
      margin: 'mt-8 md:mt-12'
    },
    {
      id: '04',
      title: 'Will save you money',
      desc: 'By having regular dental cleanings for your pet, you will avoid expensive procedures such as complex surgeries and emergency room visits.',
      color: {
        border: 'border-blue-200',
        bg: 'bg-[#4FA3DE]',
        lightBg: 'bg-blue-50',
        text: 'text-[#4FA3DE]'
      },
      side: 'right',
      icon: <PiggyBank size={28} className="text-[#4FA3DE]" />,
      margin: 'mt-8 md:mt-24'
    },
    {
      id: '05',
      title: 'Extends life',
      desc: 'A healthy mouth is essential to the overall health of an animal. A healthy mouth means less stress on other parts of the body and therefore a longer, happier life with your pet.',
      color: {
        border: 'border-pink-200',
        bg: 'bg-[#FA4D80]',
        lightBg: 'bg-pink-50',
        text: 'text-[#FA4D80]'
      },
      side: 'left',
      icon: <ShieldCheck size={28} className="text-[#FA4D80]" />,
      margin: 'mt-8'
    },
  ];

  return (
    <section className="bg-[#FAFCF8] dark:bg-slate-900/60 py-8 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-y border-slate-100 dark:border-slate-800">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="flex justify-center items-center gap-2 mb-3">
          <div className="h-0.5 w-4 bg-[#58B66E] rounded-full"></div>
          <PawPrint className="text-[#FA4D80] w-5 h-5" />
          <div className="h-0.5 w-4 bg-[#58B66E] rounded-full"></div>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-3xl sm:text-4xl font-bold tracking-tight mb-1">
          5 Key Benefits of
        </h2>
        <h3 className="text-[#FA4D80] text-3xl sm:text-4xl font-bold tracking-tight">
          Professional Pet Dental Cleaning
        </h3>
        <div className="flex justify-center items-center gap-4 mt-5">
          <div className="h-0.5 w-12 bg-[#58B66E] rounded-full"></div>
          <Heart className="text-[#FA4D80] w-4 h-4 fill-[#FA4D80]" />
          <div className="h-0.5 w-12 bg-[#58B66E] rounded-full"></div>
        </div>
      </div>

      {/* Main Tree Layout */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* Central Trunk (Hidden on small mobile, visible on md+) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-12 w-5 bg-gradient-to-b from-slate-200 via-rose-100 to-slate-200 -translate-x-1/2 rounded-full shadow-inner z-0 border-x border-white/60"></div>
        
        {/* Central Centerpiece Icon */}
        <div className="hidden md:block absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="bg-white dark:bg-slate-900 rounded-full p-2 shadow-xl border-4 border-pink-200">
            <div className="bg-pink-50 dark:bg-slate-800 rounded-full p-5 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FA4D80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.5c-1.5 0-2.5-1-3-2.5-.5-1.5-1.5-2.5-3-2.5C4.5 16.5 3 13 3 13c0-3.5 2.5-6 6-6 1.5 0 2.5.5 3 1.5.5-1 1.5-1.5 3-1.5 3.5 0 6 2.5 6 6 0 2-1.5 3.5-3 3.5-1.5 0-2.5 1-3 2.5-.5 1.5-1.5 2.5-3 2.5z"/>
              </svg>
              <div className="absolute -bottom-1 -right-1 bg-[#58B66E] rounded-full text-white shadow-md">
                <CheckCircle2 size={22} className="fill-[#58B66E] text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Base of Tree */}
        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#FA4D80] rounded-full z-20 shadow-lg">
          <div className="w-full h-3 bg-pink-300 rounded-full absolute top-0"></div>
        </div>

        {/* Map out branches/cards */}
        <div className="relative z-10 pb-12 space-y-6 md:space-y-0">
          {benefits.map((item) => {
            const isLeft = item.side === 'left';
            
            return (
              <div key={item.id} className={`flex w-full relative ${isLeft ? 'md:justify-start' : 'md:justify-end'} ${item.margin}`}>
                <div className={`w-full md:w-[46%] bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-100 dark:border-slate-800 relative ${isLeft ? 'md:rounded-br-none' : 'md:rounded-bl-none'}`}>
                  
                  {/* Floating ID Number Label */}
                  <div className={`absolute ${isLeft ? '-left-3 md:-left-5' : '-right-3 md:-right-5'} -top-4 sm:-top-5 w-12 sm:w-14 h-12 sm:h-14 ${item.color.bg} text-white font-bold text-lg sm:text-xl flex items-center justify-center shadow-md
                    ${isLeft ? 'rounded-tl-[20px] rounded-br-[20px] rounded-tr-md rounded-bl-md' : 'rounded-tr-[20px] rounded-bl-[20px] rounded-tl-md rounded-br-md'}
                  `}>
                    {item.id}
                  </div>

                  <div className="flex gap-4 sm:gap-5">
                    {/* Icon Circle */}
                    <div className={`flex-shrink-0 w-14 sm:w-16 h-14 sm:h-16 rounded-full border-2 ${item.color.border} ${item.color.lightBg} dark:bg-slate-800 flex items-center justify-center relative`}>
                      {item.icon}
                      {(item.id === '01' || item.id === '02') && (
                        <div className={`absolute bottom-0 right-0 w-5 h-5 ${item.color.bg} text-white rounded-full flex items-center justify-center text-xs font-bold border border-white`}>
                          +
                        </div>
                      )}
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className="text-slate-900 dark:text-slate-100 font-bold text-base sm:text-lg leading-tight mb-2 pr-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Connector Dot to Tree (Desktop) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isLeft ? '-right-5' : '-left-5'} w-4 h-4 rounded-full ${item.color.bg} border-2 border-white shadow-sm z-20`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PetDentalInfographic;
