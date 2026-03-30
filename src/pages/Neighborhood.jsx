import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Neighborhood = () => {
  return (
    <div className="w-full relative overflow-x-hidden bg-linen min-h-screen pt-24">
      
      {/* 1. HERO HEADER */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span 
              variants={fadeUpVariant}
              className="block font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold mb-6"
            >
              Location & Lifestyle
            </motion.span>
            <motion.h1 
              variants={fadeUpVariant}
              className="font-serif text-5xl md:text-7xl text-charcoal leading-tight mb-8"
            >
              Historic Charm.<br />
              <span className="italic text-charcoal/80">Modern Living.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL IMAGE BREAK */}
      <section className="px-6 pb-20 md:pb-32">
         <motion.div 
            className="max-w-7xl mx-auto w-full h-[50vh] md:h-[65vh] relative overflow-hidden rounded-[2rem] shadow-md group"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
         >
            <img 
              src="/assets/leesburg.jpg" 
              alt="Leesburg Aerial View" 
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[2s] ease-out" 
            />
         </motion.div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="pb-32 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Text Copy */}
            <motion.div 
               className="lg:col-span-7 flex flex-col space-y-8"
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
            >
               <motion.p variants={fadeUpVariant} className="font-sans text-charcoal/80 text-lg md:text-xl leading-relaxed">
                 Leesburg presents a rare opportunity for a new residential mixed-use development that blends historic charm, modern living, and strong economic fundamentals. Despite a clear housing need, no new rental communities have been delivered in over a decade due to limited available land, complex zoning, and lengthy approval processes. 
               </motion.p>
               
               <motion.p variants={fadeUpVariant} className="font-sans text-charcoal/80 text-lg md:text-xl leading-relaxed">
                 This supply constraint has created significant unmet demand for high-quality, well-designed rental housing that appeals to professionals, families, and residents seeking a modern lifestyle within a walkable community.
               </motion.p>

               <motion.p variants={fadeUpVariant} className="font-sans text-charcoal/80 text-lg md:text-xl leading-relaxed">
                 The proposed development is ideally situated within walking distance of Leesburg’s revitalized downtown and directly connected to the Washington & Old Dominion (W&OD) Trail, offering residents immediate access to shops, restaurants, cultural amenities, and outdoor recreation.
               </motion.p>
               
               <motion.div variants={fadeUpVariant} className="mt-8 p-8 bg-charcoal text-linen rounded-xl">
                 <p className="font-serif text-2xl md:text-3xl leading-snug">
                   This combination of location, lifestyle, and demand makes Leesburg a premier setting for a new mixed-use residential community.
                 </p>
               </motion.div>
            </motion.div>

            {/* Side Highlights */}
            <motion.div 
               className="lg:col-span-5 flex flex-col space-y-12 lg:pl-8 lg:border-l border-charcoal/10"
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
            >

                <motion.div variants={fadeUpVariant}>
                   <h3 className="font-serif text-2xl text-charcoal mb-4">W&OD Trail Access</h3>
                   <p className="font-sans text-charcoal/70 text-base leading-relaxed">
                     Step directly outside to connect with the Washington & Old Dominion Trail, providing miles of paved pathways perfect for cycling, running, and peaceful natural walks right at your doorstep.
                   </p>
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                   <h3 className="font-serif text-2xl text-charcoal mb-4">Revitalized Downtown</h3>
                   <p className="font-sans text-charcoal/70 text-base leading-relaxed">
                     A short walk completely connects you to the charming heart of Leesburg, placing acclaimed boutique shopping, artisan coffee shops, and award-winning cultural dining within effortless reach.
                   </p>
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                   <h3 className="font-serif text-2xl text-charcoal mb-4">Unmet Demand</h3>
                   <p className="font-sans text-charcoal/70 text-base leading-relaxed">
                     As the first community of its caliber delivered to the area in over ten years, the property sets an entirely new standard for those who expect sophisticated aesthetic curation combined with a highly pedestrian-friendly lifestyle.
                   </p>
                </motion.div>
            </motion.div>

         </div>
      </section>

    </div>
  );
};

export default Neighborhood;
