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

const Design = () => {
  const teamMembers = [
    { id: 'dcs', name: 'DCS Design', role: 'Architect', logoSrc: '/assets/logos/dcs.png' },
    { id: 'clay', name: 'CLAY CONSTRUCTION', role: 'Pre-Construction Consultants', logoSrc: '/assets/logos/clay.png' },
    { id: 'urban', name: 'urban', role: 'Civil Engineer / Landscape', logoSrc: '/assets/logos/urban.png' },
    { id: 'cates', name: 'CATES ENGINEERING', role: 'Structural Engineer', logoSrc: '/assets/logos/cates.png' },
    { id: 'mep', name: 'MEP Designs', role: 'MEP Engineer', logoSrc: '/assets/logos/mep.png' },
    { id: 'wldwst', name: 'wldwst', role: 'Interior Design', logoSrc: '/assets/logos/wldwst.png' }
  ];

  return (
    <div className="w-full relative overflow-x-hidden bg-linen min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-end bg-charcoal overflow-hidden pt-24">
        {/* We use a subtle abstract gradient since we lack a specific hero image right now */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#373A34] to-bronze/40 opacity-80 z-0"></div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #2f3435 100%)' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeUpVariant} className="block font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold mb-4">
              Aesthetic Vision
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl text-linen leading-tight mb-6">
              Sophisticated <br/><span className="italic text-linen/70">Textures.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION & AESTHETIC HIGHLIGHTS */}
      <section className="py-24 md:py-32 px-6 bg-linen">
        <div className="max-w-7xl mx-auto">
           <motion.div 
             className="max-w-3xl mb-20"
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
           >
             <motion.h2 variants={fadeUpVariant} className="font-serif text-3xl md:text-4xl text-charcoal leading-relaxed">
               Linen and natural colored furniture throughout perfectly balances against rich paint colors used to create distinct areas of contrast.
             </motion.h2>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-sm border border-charcoal/5 flex flex-col justify-between aspect-[4/3] relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0d5c8] rounded-bl-full opacity-20 group-hover:scale-110 transition-transform"></div>
                 <h3 className="font-serif text-2xl text-charcoal mb-4 relative z-10">Roman Clay Walls</h3>
                 <p className="font-sans text-charcoal/70 text-sm leading-relaxed relative z-10">
                   Roman clay walls integrated into the main pathways introduce an organic, tactile depth that softens structural edges.
                 </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                className="bg-[#ece8e3] p-8 rounded-xl shadow-sm border border-charcoal/5 flex flex-col justify-between aspect-[4/3] relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              >
                 <div className="absolute bottom-0 right-0 w-24 h-24 bg-bronze/10 mix-blend-multiply group-hover:-translate-y-2 transition-transform"></div>
                 <h3 className="font-serif text-2xl text-charcoal mb-4 relative z-10">Limestone & Clay</h3>
                 <p className="font-sans text-charcoal/70 text-sm leading-relaxed relative z-10">
                   Limestone flooring and rich clay wall textures ground the spaces, seamlessly mingling with limestone-look porcelain tile guiding resident pathways.
                 </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                className="bg-charcoal p-8 rounded-xl shadow-lg flex flex-col justify-between aspect-[4/3] relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              >
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
                 <h3 className="font-serif text-2xl text-linen mb-4 relative z-10">Natural Wood Tones</h3>
                 <p className="font-sans text-linen/70 text-sm leading-relaxed relative z-10">
                   Warmth is introduced through abundant natural wood tones, softening the architectural geometry.
                 </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div 
                className="col-span-1 md:col-span-2 lg:col-span-3 bg-olive/10 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center border border-olive/10"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              >
                 <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                   <h3 className="font-serif text-3xl text-charcoal mb-4">Architectural Integrity</h3>
                   <p className="font-sans text-charcoal/70 text-base leading-relaxed">
                     Modern functionality meets heritage design through structural glass partitions that divide large volumes while maintaining light, alongside framed spaces utilizing bulkheads for a seamless recessed cabinet look.
                   </p>
                 </div>
                 <div className="md:w-1/2 flex gap-4 w-full h-48 md:h-64">
                    {/* Abstract visual representations */}
                    <div className="w-1/3 h-full bg-charcoal rounded-lg opacity-90 relative overflow-hidden">
                       <div className="absolute inset-0 border-[4px] border-charcoal/80 flex items-center justify-center">
                          <div className="w-[1px] h-full bg-white/20"></div> {/* Glass partition abstraction */}
                       </div>
                    </div>
                    <div className="w-2/3 h-full bg-[#e8e2da] rounded-lg shadow-inner flex flex-col pt-8 px-6">
                       <div className="w-full h-8 bg-[#dad2c7] rounded-sm mb-4"></div> {/* Bulkhead abstraction */}
                       <div className="w-full flex-grow bg-white/50 rounded-t-sm shadow-sm border border-white/60"></div>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 3. TEAM SECTION */}
      <section className="py-24 px-6 bg-white border-t border-linen/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold block mb-4">Developer</span>
              <h2 className="font-serif text-4xl text-charcoal mb-4">BigT Properties</h2>
            </div>
            <div className="flex items-center">
              <p className="font-sans text-charcoal/70 text-base leading-relaxed">
                Dedicated to creating exceptional living spaces that blend modern luxury with community heritage. Our commitment to quality and detail ensures that every project stands the test of time.
              </p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
             <span className="font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold block mb-12">Design Team</span>
             
             <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {teamMembers.map((member) => (
                  <motion.div key={member.id} variants={fadeUpVariant} className="flex flex-col">
                    <div className="h-24 w-full flex items-center justify-start mb-6">
                      {/* Using the imported src. If the image doesn't load gracefully, the alt text serves as fallback. */}
                      <img src={member.logoSrc} alt={`${member.name} logo`} className="max-h-full max-w-[160px] object-contain opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                    <h4 className="font-sans text-charcoal font-semibold text-lg mb-1">{member.name}</h4>
                    <p className="font-sans text-charcoal/50 text-sm uppercase tracking-widest">{member.role}</p>
                  </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Design;
