import React from 'react';

export default function Pricing() {
  const pricingItems = [
    { title: "Consultation", price: "from £114" },
    { title: "Procedure vaccinations", desc: "Any additional pets seen at the same time - £29 per extra pet", price: "from £29" },
    { title: "Puppy or kitten check", desc: "Includes vaccination, microchipping, flea/worm treatment", price: "£75" },
    { title: "Euthanasia", desc: "Varies depending on weight of pet", price: "Small £220", subPrice1: "Medium £250", subPrice2: "Large £280" },
    { title: "Prescription fee", desc: "To cover administrative costs processing paper prescriptions", price: "£34" }
  ];

  return (
    <section id="prices" className="py-8 md:py-10 bg-[#faf4f4] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10 md:mb-12 text-center">
          Our Pricing
        </h2>
        
        <div className="flex flex-col gap-4">
          {pricingItems.map((item, idx) => (
            <div key={idx} className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:max-w-[60%]">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.title}</h3>
                {item.desc && <p className="text-slate-500 text-sm mt-1">{item.desc}</p>}
              </div>
              
              <div className="flex gap-4 sm:gap-8 font-bold text-lg text-slate-900 sm:text-right shrink-0">
                {item.subPrice1 ? (
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    <span className="flex flex-col items-start sm:items-end">
                      <span className="text-xs font-normal text-slate-500 uppercase tracking-widest mb-1">Small</span>
                      £220
                    </span>
                    <span className="flex flex-col items-start sm:items-end">
                      <span className="text-xs font-normal text-slate-500 uppercase tracking-widest mb-1">Medium</span>
                      £250
                    </span>
                    <span className="flex flex-col items-start sm:items-end">
                      <span className="text-xs font-normal text-slate-500 uppercase tracking-widest mb-1">Large</span>
                      £280
                    </span>
                  </div>
                ) : (
                  <span>{item.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-slate-500 text-xs mt-8 font-medium">
          * Out of hours consultation fees vary depending on the time. Please contact us for more information.
        </p>
      </div>
    </section>
  );
}
