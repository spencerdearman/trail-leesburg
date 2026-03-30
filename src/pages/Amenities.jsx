import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Amenities = () => {
  return (
    <div className="w-full relative overflow-x-hidden bg-linen min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-end bg-charcoal overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2d302a] via-[#3a3f38] to-[#454942] opacity-90 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.span variants={fadeUpVariant} className="block font-sans uppercase tracking-[0.25em] text-linen/70 text-xs font-semibold mb-4">
              Curated Lifestyle
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl text-linen leading-tight mb-6">
              Exceptional <br/><span className="italic text-linen/70">Spaces.</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="font-sans text-linen/70 text-lg md:text-xl leading-relaxed">
              Experience an unparalleled suite of amenities designed to elevate your daily routine, featuring meticulously crafted environments blending rich architectural textures with holistic wellness.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. AMENITY MASONRY GALLERY */}
      <section className="py-24 md:py-32 px-6 bg-linen">
        <div className="max-w-7xl mx-auto">
           
           <motion.div 
             className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-min"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
           >

              {/* ROW 1: Massive Lounge Image & Resident Pantry Text Block */}
              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-8 group relative overflow-hidden rounded-2xl shadow-sm h-[50vh] md:h-[60vh]">
                 <img src="/assets/amenities/lounge.png" alt="Lobby and Lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">Lobby and Lounge</h3>
                    <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed">
                      Includes an entry lounge seating area featuring soft pinch pleated drapery. The primary lounge contains wood inset built-ins, wrapped structural ceiling beams, and movable lounge seating.
                    </p>
                 </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-4 bg-[#e8e4df] p-8 md:p-12 rounded-2xl flex flex-col justify-center border border-charcoal/5 h-auto md:h-[60vh]">
                 <span className="block font-sans uppercase tracking-widest text-bronze text-[10px] font-bold mb-6">Gather</span>
                 <h3 className="font-serif text-3xl text-charcoal mb-4">Resident Pantry</h3>
                 <p className="font-sans text-charcoal/70 text-base leading-relaxed">
                   A communal kitchen offering a sink, refrigerator, filtered water, and coffee. The space includes island seating and is elegantly bordered by stained wooden glass partitions.
                 </p>
              </motion.div>

              {/* ROW 2: Leasing Image & Coworking Spread */}
              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-5 relative overflow-hidden rounded-2xl shadow-sm group h-[40vh] md:h-[50vh]">
                 <img src="/assets/amenities/leasing.png" alt="Leasing and Mail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal/90 to-transparent">
                    <h3 className="font-serif text-2xl text-linen mb-2">Leasing & Mail</h3>
                    <p className="font-sans text-linen/70 text-sm leading-relaxed">
                      Open layout with glass dividers, Luxer One package lockers, and recessed mailboxes styled with premium wallpaper and pendant lighting.
                    </p>
                 </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-7 bg-charcoal p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 h-auto md:h-[50vh]">
                 <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                   <span className="block font-sans uppercase tracking-widest text-bronze text-[10px] font-bold mb-4">Focus</span>
                   <h3 className="font-serif text-3xl text-linen mb-4">Coworking Space</h3>
                   <p className="font-sans text-linen/70 text-sm leading-relaxed">
                     Features a coworking lounge, banquette seating, private offices with glass doors, and a dedicated Zoom room with a glass door for complete acoustic privacy.
                   </p>
                 </div>
                 <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden rounded-xl order-1 md:order-2">
                    <img src="/assets/amenities/coworking.png" alt="Coworking Space" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                 </div>
              </motion.div>

              {/* ROW 3: Meeting Room Text Block & Wellness Center Imgs */}
              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-4 bg-white p-8 md:p-12 rounded-2xl flex flex-col justify-center border border-charcoal/5 shadow-sm h-auto md:h-[50vh]">
                 <span className="block font-sans uppercase tracking-widest text-bronze text-[10px] font-bold mb-4">Collaborate</span>
                 <h3 className="font-serif text-3xl text-charcoal mb-4">Meeting Room</h3>
                 <p className="font-sans text-charcoal/70 text-base leading-relaxed">
                   Contains built-in bookshelves and a Frame TV centered on the wall or elegantly integrated into the bespoke shelving architecture.
                 </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-8 bg-olive/10 p-4 md:p-6 rounded-2xl flex flex-col h-auto md:h-[50vh]">
                 <div className="flex justify-between items-end px-4 pt-4 pb-6">
                    <div>
                       <span className="block font-sans uppercase tracking-widest text-olive text-[10px] font-bold mb-2">Holistic</span>
                       <h3 className="font-serif text-3xl text-charcoal">Wellness Center</h3>
                    </div>
                    <p className="hidden md:block font-sans text-charcoal/70 text-sm leading-relaxed max-w-sm text-right">
                       Includes a gym, dedicated weights area, a wood-paneled sauna, lockers, and a kitchenette with a water station.
                    </p>
                 </div>
                 <div className="flex-grow grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <img src="/assets/amenities/gym-2.png" alt="Wellness Center Weights" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <img src="/assets/amenities/gym-3.png" alt="Wellness Center Cardio" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <p className="md:hidden mt-4 px-2 font-sans text-charcoal/70 text-sm leading-relaxed">
                    Includes a gym, dedicated weights area, a wood-paneled sauna, lockers, and a kitchenette with a water station.
                 </p>
              </motion.div>

              {/* ROW 4: Rooftop Text, Common Bathrooms Text & Dog Wash */}
              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-4 relative overflow-hidden rounded-2xl shadow-sm group h-[40vh]">
                 <img src="/assets/amenities/rooftop.png" alt="Rooftop Terrace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                 <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 pointer-events-none">
                    <h3 className="font-serif text-2xl text-white mb-3">Rooftop Terrace</h3>
                    <p className="font-sans text-white/90 text-sm leading-relaxed">
                      Offers a communal lounge area with firepits and planters. It also includes a covered dining area with an outdoor kitchen available for resident rental.
                    </p>
                 </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-4 bg-[#e8e2da] p-8 md:p-12 rounded-2xl flex flex-col justify-between border border-charcoal/5 h-auto md:h-[40vh]">
                 <div>
                   <h3 className="font-serif text-2xl text-charcoal mb-4">Common Bathrooms</h3>
                   <p className="font-sans text-charcoal/70 text-sm leading-relaxed">
                     Equipped with custom ADA marble vanities on elegant console legs and intricate, detailed tile work on the floors and wainscoting.
                   </p>
                 </div>
                 <div className="w-20 h-px bg-charcoal/20 mt-8"></div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-4 relative overflow-hidden rounded-2xl shadow-sm group h-[40vh]">
                 <img src="/assets/amenities/dogwash.png" alt="Dog Wash" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal/90 to-transparent">
                    <h3 className="font-serif text-2xl text-linen mb-2">Dog Wash</h3>
                    <p className="font-sans text-linen/70 text-sm leading-relaxed">
                      A pet cleaning station featuring a tile floor and walls with custom tile wainscoting and wallpaper.
                    </p>
                 </div>
              </motion.div>

           </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Amenities;
