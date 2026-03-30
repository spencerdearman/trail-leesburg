import React from 'react';
import { ArrowRight } from 'lucide-react';

const FloorplanCard = ({ plan, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
      onClick={() => onClick(plan)}
    >
      <div className="bg-linen p-8 aspect-square flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-300 z-10" />
        {plan.image ? (
           <img 
             src={plan.image} 
             alt={plan.name} 
             className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 relative z-0" 
           />
        ) : (
           <div className="font-serif text-charcoal/20 text-2xl">Plan Preview</div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow bg-white">
        <h3 className="font-serif text-3xl text-charcoal mb-4">{plan.name}</h3>
        
        <div className="flex flex-wrap items-center gap-4 font-sans text-sm text-charcoal/70 mb-8 border-t border-b border-charcoal/10 py-4">
          <span className="font-semibold text-charcoal">{plan.type === 'Studio' ? 'Studio' : `${plan.beds} Bed`}</span>
          <span className="w-1 h-1 rounded-full bg-charcoal/30" />
          <span>{plan.baths} Bath</span>
          <span className="w-1 h-1 rounded-full bg-charcoal/30" />
          <span>{plan.sqft} Sq. Ft.</span>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            <span className="font-sans uppercase tracking-widest text-[0.65rem] text-charcoal/50 font-semibold mb-1">Pricing</span>
            {plan.contactUs || !plan.price ? (
              <span className="font-serif text-xl text-charcoal">Contact Us</span>
            ) : (
              <span className="font-serif text-xl text-charcoal">${plan.price.toLocaleString()} <span className="text-sm font-sans text-charcoal/60">/mo</span></span>
            )}
          </div>
          <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-linen transition-colors duration-300">
             <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorplanCard;
