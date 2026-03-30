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
            <motion.span variants={fadeUpVariant} className="block font-sans uppercase tracking-[0.25em] text-linen/70 text-xs font-semibold mb-4">
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
               Natural wood tones and linen-colored furniture perfectly balance against rich paint palettes, establishing distinct areas of striking contrast.
             </motion.h2>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-sm border border-charcoal/5 flex flex-col justify-between aspect-[4/3] relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0d5c8] rounded-bl-full opacity-20 group-hover:scale-110 transition-transform"></div>
                 <h3 className="font-serif text-2xl text-charcoal mb-4 relative z-10">Artisan Wall Treatments</h3>
                 <p className="font-sans text-charcoal/70 text-sm leading-relaxed relative z-10">
                   Main pathways feature tactile Roman clay textures, while residential corridors and common spaces utilize elegant painted wainscoting and picture molding to add classical depth.
                 </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                className="bg-[#ece8e3] p-8 rounded-xl shadow-sm border border-charcoal/5 flex flex-col justify-between aspect-[4/3] relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              >
                 <div className="absolute bottom-0 right-0 w-24 h-24 bg-bronze/10 mix-blend-multiply group-hover:-translate-y-2 transition-transform"></div>
                 <h3 className="font-serif text-2xl text-charcoal mb-4 relative z-10">Oak & Limestone</h3>
                 <p className="font-sans text-charcoal/70 text-sm leading-relaxed relative z-10">
                   Tumbled-edge, limestone-look porcelain tile grounds the pathways, transitioning to neutral European oak in lounges, and finishing with light luxury plank inside the residences.
                 </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                className="bg-charcoal p-8 rounded-xl shadow-lg flex flex-col justify-between aspect-[4/3] relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              >
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
                 <h3 className="font-serif text-2xl text-linen mb-4 relative z-10">Color Drenching</h3>
                 <p className="font-sans text-linen/70 text-sm leading-relaxed relative z-10">
                   A sophisticated technique of painting walls, ceilings, and moldings in uniform tones creates an enveloping, immersive aesthetic across our curated common areas.
                 </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div 
                className="col-span-1 md:col-span-2 lg:col-span-3 bg-olive/10 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center border border-olive/10 group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              >
                 <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                   <h3 className="font-serif text-3xl text-charcoal mb-4">Refined Finishes & Fixtures</h3>
                   <p className="font-sans text-charcoal/70 text-base leading-relaxed mb-4">
                     Our residences boast off-white and mushroom-tone shaker cabinets, perfectly complemented by cool-toned quartz countertops and Zellige-inspired porcelain tile.
                   </p>
                   <p className="font-sans text-charcoal/70 text-base leading-relaxed">
                     Common areas are brilliantly illuminated by aged brass fixtures and blackened brass plumbing, while unit kitchens sparkle with modern polished nickel hardware.
                   </p>
                 </div>
                 <div className="md:w-1/2 flex gap-4 w-full h-48 md:h-64">
                    {/* Abstract visual representations of finishes */}
                    <div className="w-1/3 h-full bg-charcoal rounded-lg opacity-90 relative overflow-hidden flex flex-col justify-end">
                       <div className="w-full h-1/3 bg-bronze/40 border-t border-bronze/60 group-hover:h-1/2 transition-all duration-500"></div> {/* Aged Brass abstraction */}
                    </div>
                    <div className="w-2/3 h-full bg-[#f4f1ee] rounded-lg shadow-inner flex flex-col pt-8 px-6 border border-charcoal/5">
                       <div className="w-full h-12 bg-[#e6e1da] rounded-sm mb-4"></div> {/* Off-white Shaker Cabinet abstraction */}
                       <div className="w-full h-4 bg-[#b5a999] rounded-sm mb-4"></div> {/* Mushroom Tone abstraction */}
                       <div className="w-full flex-grow bg-white rounded-t-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-white/60"></div> {/* Quartz Counter abstraction */}
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
