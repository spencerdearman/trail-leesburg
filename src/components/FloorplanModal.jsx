import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloorplanModal = ({ plan, onClose }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 backdrop-blur-md p-4 md:p-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 md:p-10 border-b border-charcoal/10 bg-linen/50">
            <div>
              <span className="font-sans uppercase tracking-[0.2em] text-[0.65rem] text-charcoal/50 font-semibold mb-2 block">{plan.type === 'Studio' ? 'Studio' : `${plan.beds} Bed, ${plan.baths} Bath`}</span>
              <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-2">{plan.name}</h2>
              <div className="flex flex-wrap items-center gap-4 font-sans text-sm text-charcoal/70">
                <span className="font-semibold">{plan.sqft} Sq. Ft.</span>
                <span className="w-1 h-1 rounded-full bg-charcoal/30" />
                {plan.contactUs || !plan.price ? (
                  <span>Contact for Pricing</span>
                ) : (
                  <span>${plan.price.toLocaleString()} /mo</span>
                )}
              </div>
            </div>
            
            <button 
              className="p-3 bg-white hover:bg-charcoal hover:text-white rounded-full transition-colors border border-charcoal/10 shadow-sm"
              onClick={onClose}
              aria-label="Close modal"
            >
               <X size={24} />
            </button>
          </div>

          {/* Body / Image */}
          <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-white flex items-center justify-center relative min-h-[40vh]">
            <div className="absolute inset-0 bg-linen/20 z-0"></div>
            {plan.image ? (
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full max-w-2xl max-h-full object-contain mix-blend-multiply relative z-10" 
                />
            ) : (
                <div className="font-serif text-charcoal/20 text-4xl relative z-10">Drawing in Progress</div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-6 md:p-8 bg-charcoal flex justify-end">
             <button 
               className="inline-flex items-center space-x-3 bg-linen text-charcoal px-8 py-4 rounded-full font-sans uppercase tracking-widest text-xs font-semibold hover:bg-bronze hover:text-linen transition-colors shadow-lg"
               onClick={onClose} // In a real app, this would route to an application or contact form
             >
               <span>Inquire About Availability</span>
               <ExternalLink size={16} />
             </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloorplanModal;
