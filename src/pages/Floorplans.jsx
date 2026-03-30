import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { floorplans } from '../data/floorplans';
import FloorplanCard from '../components/FloorplanCard';
import FilterBar from '../components/FilterBar';
import FloorplanModal from '../components/FloorplanModal';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Floorplans = () => {
  const [filters, setFilters] = useState({
    bedrooms: 'all',
    price: 'all',
    sqft: 'all',
  });

  const [selectedFloorplan, setSelectedFloorplan] = useState(null);

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredFloorplans = useMemo(() => {
    let result = [...floorplans];

    if (filters.bedrooms !== 'all') {
      result = result.filter(plan => plan.beds === parseInt(filters.bedrooms));
    }

    if (filters.price === 'low') {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (filters.price === 'high') {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    if (filters.sqft === 'small') {
      result.sort((a, b) => a.sqft - b.sqft);
    } else if (filters.sqft === 'large') {
      result.sort((a, b) => b.sqft - a.sqft);
    }

    return result;
  }, [filters]);

  return (
    <div className="w-full relative overflow-x-hidden bg-white min-h-screen">
      
      {/* 1. Header Section */}
      <section className="pt-32 pb-20 px-6 bg-charcoal text-linen relative overflow-hidden">
        {/* Subtle background abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
           <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
             <motion.span variants={fadeUpVariant} className="block font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold mb-6">
               Residences
             </motion.span>
             <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl leading-tight mb-8">
               Refined living, <br/><span className="italic text-linen/70">tailored to you.</span>
             </motion.h1>
             <motion.p variants={fadeUpVariant} className="font-sans text-linen/70 text-lg md:text-xl leading-relaxed">
               Explore our curated selection of studio, one, two, and three-bedroom floorplans designed with exceptional architectural detailing and expansive layouts perfect for your lifestyle.
             </motion.p>
           </motion.div>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <section className="px-6 relative z-20 -mt-10 mb-16">
         <div className="max-w-7xl mx-auto flex justify-center md:justify-start">
             <FilterBar filters={filters} onFilterChange={handleFilterChange} />
         </div>
      </section>

      {/* 3. Grid Section */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 border-b border-charcoal/10 pb-4">
             <span className="font-sans text-charcoal/50 text-sm font-medium tracking-wide">Showing <span className="text-charcoal">{filteredFloorplans.length}</span> Residences</span>
          </div>

          {filteredFloorplans.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
              initial="hidden" animate="visible" variants={staggerContainer}
            >
              <AnimatePresence>
                {filteredFloorplans.map(plan => (
                  <motion.div 
                    key={plan.id}
                    layout
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FloorplanCard plan={plan} onClick={setSelectedFloorplan} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              className="py-24 flex flex-col items-center justify-center text-center bg-linen/30 rounded-3xl border border-charcoal/5"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            >
              <h3 className="font-serif text-3xl text-charcoal mb-4">No exact matches found.</h3>
              <p className="font-sans text-charcoal/60 mb-8 max-w-md">We couldn't find any floorplans matching all your selected criteria. Try adjusting your filters to explore more options.</p>
              <button 
                className="uppercase font-sans font-semibold tracking-widest text-xs border border-charcoal text-charcoal px-8 py-3 rounded-full hover:bg-charcoal hover:text-linen transition-all"
                onClick={() => setFilters({ bedrooms: 'all', price: 'all', sqft: 'all' })}
              >
                Reset Filters
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {selectedFloorplan && (
        <FloorplanModal 
          plan={selectedFloorplan} 
          onClose={() => setSelectedFloorplan(null)} 
        />
      )}

    </div>
  );
};

export default Floorplans;
