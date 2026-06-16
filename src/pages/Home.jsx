import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Coffee, MonitorPlay, Droplet } from 'lucide-react';
import heroImage from '/assets/hero/hero.png';

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

const Home = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-end md:items-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Subtle dark gradient overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-charcoal/20"></div>
        </div>

        {/* Hero Glassmorphic Card */}
        <motion.div 
          className="relative z-10 w-[90%] md:w-auto max-w-lg mx-auto md:mx-0 md:ml-12 lg:ml-24 mb-20 md:mb-0 bg-linen/90 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl border border-white/20"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4 mb-6 md:mb-8 overflow-hidden">
             <motion.div 
               className="h-[1px] w-8 md:w-16 bg-bronze"
               initial={{ width: 0 }} animate={{ width: "3rem" }} transition={{ delay: 0.6, duration: 0.8 }}
             ></motion.div>
             <motion.span 
               className="block font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold"
               initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
             >
               The New Standard
             </motion.span>
          </div>
          <motion.h1 
            className="font-serif text-5xl md:text-6xl text-charcoal mb-6 leading-tight"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
          >
            Expect <br/><span className="italic text-charcoal/80">More.</span>
          </motion.h1>
          <motion.p 
            className="font-sans text-charcoal/70 text-sm md:text-base leading-relaxed mb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          >
            A curated offering of refined 1, 2, and 3 bedroom residences redefining upscale living in Leesburg.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <Link to="/floorplans" className="inline-flex items-center space-x-2 border-b border-charcoal text-charcoal pb-1 hover:text-bronze hover:border-bronze transition-colors uppercase tracking-widest text-xs font-semibold shadow-transparent">
              <span>View Residences</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT / INTRO SECTION */}
      <section className="py-24 md:py-36 bg-linen px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeUpVariant}
              className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-8"
            >
              Step inside and discover <br className="hidden md:block" /> more in every detail.
            </motion.h2>
            <motion.p 
              variants={fadeUpVariant}
              className="font-sans text-charcoal/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Conveniently located minutes from the Silver Line, our brand-new Class A apartments offer an expansive lifestyle package providing more luxury, more experiences, and more connection within our community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. AMENITIES SECTION (Bento Box) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-xl">
              <span className="font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold block mb-4">Elevated Experiences</span>
              <h2 className="font-serif text-4xl text-charcoal">Resort-Inspired Amenities</h2>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="mt-6 md:mt-0">
              <Link to="/amenities" className="inline-flex items-center space-x-2 border-b border-charcoal/30 text-charcoal pb-1 hover:text-bronze transition-colors uppercase tracking-widest text-xs font-semibold">
                <span>Explore All Amenities</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Bento Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            
            {/* Wellness Center (Large) */}
            <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <img src="/assets/amenities/gym-2.png" alt="Wellness Center" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>
              <div className="absolute flex flex-col justify-end p-8 md:p-12 z-10 inset-x-0 bottom-0">
                <h3 className="font-serif text-3xl text-white mb-3 mt-auto">Holistic Wellness Center</h3>
                <p className="font-sans text-white/90 text-sm max-w-md">State-of-the-art conditioning equipment, free weights, and dedicated yoga & meditation spaces designed for your ultimate wellbeing.</p>
              </div>
            </motion.div>

            {/* Coworking (Standard) */}
            <motion.div variants={fadeUpVariant} className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <img src="/assets/amenities/coworking.png" alt="Coworking Space" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-0"></div>
              <div className="absolute flex flex-col justify-end p-8 z-10 inset-x-0 bottom-0">
                <h3 className="font-serif text-2xl text-white mb-2">Executive Coworking</h3>
                <p className="font-sans text-white/90 text-sm">Quiet focus pods and collaborative meeting spaces.</p>
              </div>
            </motion.div>

            {/* Lounge (Standard) */}
            <motion.div variants={fadeUpVariant} className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <img src="/assets/amenities/lounge.png" alt="Lounge Area" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-0"></div>
              <div className="absolute flex flex-col justify-end p-8 z-10 inset-x-0 bottom-0">
                <h3 className="font-serif text-2xl text-white mb-2">Curated Lounges</h3>
                <p className="font-sans text-white/90 text-sm">Intimate gathering spaces bathed in natural light.</p>
              </div>
            </motion.div>

            {/* Pet Spa (Standard) */}
            <motion.div variants={fadeUpVariant} className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <img src="/assets/amenities/dogwash.png" alt="Luxury Pet Spa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-0"></div>
              <div className="absolute flex flex-col justify-end p-8 z-10 inset-x-0 bottom-0 pointer-events-none">
                <h3 className="font-serif text-2xl text-white mb-2">Luxury Pet Spa</h3>
                <p className="font-sans text-white/90 text-sm">Professional wash stations for your furry companions.</p>
              </div>
            </motion.div>

            {/* Rooftop Terrace (Large) */}
            <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
               <img src="/assets/amenities/rooftop.png" alt="Rooftop Terrace" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
               <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0 pointer-events-none"></div>
               <div className="absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between z-10">
                 <div className="flex-1">
                   <h3 className="font-serif text-3xl text-white mb-2">Rooftop Terrace</h3>
                   <p className="font-sans text-white/90 text-sm">Communal lounge with firepits and a covered outdoor kitchen.</p>
                 </div>
                 <div className="mt-6 md:mt-0 flex-none z-20">
                   <Link to="/amenities" className="uppercase font-sans font-semibold tracking-widest text-xs border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white hover:text-charcoal transition-all bg-transparent backdrop-blur-sm pointer-events-auto cursor-pointer">
                     View All Amenities
                   </Link>
                 </div>
               </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. RESIDENCES / FINISHES SECTION */}
      <section className="py-24 md:py-36 bg-linen px-6">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              className="lg:w-1/2"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            >
              <motion.span variants={fadeUpVariant} className="font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold block mb-4">The Residences</motion.span>
              <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-8">Refined Finishes.</motion.h2>
              <motion.p variants={fadeUpVariant} className="font-sans text-charcoal/70 text-base leading-relaxed mb-10">
                Gourmet kitchens stand as the centerpiece of our open floorplans, wrapped in designer textures and tones meant to inspire.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="space-y-8">
                <motion.div variants={fadeUpVariant} className="flex flex-col border-l-2 border-bronze/30 pl-6">
                  <h4 className="font-serif text-xl text-charcoal mb-2">Mushroom Tone Shaker Cabinets</h4>
                  <p className="font-sans text-charcoal/60 text-sm">Soft, grounding tones meet timeless design. These cabinets provide a calm, tailored foundation for your daily routine.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="flex flex-col border-l-2 border-bronze/30 pl-6">
                  <h4 className="font-serif text-xl text-charcoal mb-2">Zellige-Inspired Backsplash</h4>
                  <p className="font-sans text-charcoal/60 text-sm">An artisanal touch that brings organic warmth. The subtle variations in the tile create a sophisticated, handcrafted atmosphere.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="flex flex-col border-l-2 border-bronze/30 pl-6">
                  <h4 className="font-serif text-xl text-charcoal mb-2">Sleek Quartz Countertops</h4>
                  <p className="font-sans text-charcoal/60 text-sm">The ideal canvas for hosting and culinary prep. Crisp, resilient surfaces that balance everyday functionality with modern elegance.</p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="mt-12 group inline-block">
                <Link to="/design" className="inline-flex items-center space-x-3 bg-charcoal text-linen px-8 py-4 rounded-full font-sans uppercase tracking-widest text-xs font-semibold hover:bg-bronze transition-colors shadow-lg">
                  <span>Explore Design</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Real Residences Photography */}
            <div className="lg:w-1/2 w-full relative min-h-[500px] md:min-h-[600px] mt-16 lg:mt-0">
               {/* Kitchen Image - Main/Background */}
               <motion.div 
                 className="absolute top-0 right-0 w-[80%] md:w-[75%] h-[70%] rounded-2xl md:rounded-tl-[80px] md:rounded-tr-2xl md:rounded-bl-2xl overflow-hidden shadow-xl"
                 initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
               >
                 <img src="/assets/apartment/kitchen.png" alt="Designer Kitchen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
               </motion.div>
               
               {/* Bathroom Image - Overlapping Foreground */}
               <motion.div 
                 className="absolute bottom-0 left-0 w-[55%] md:w-[50%] h-[55%] rounded-2xl md:rounded-br-[80px] md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-bl-2xl overflow-hidden shadow-2xl z-10"
                 initial={{ opacity: 0, scale: 0.95, x: -30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
               >
                 <img src="/assets/apartment/bathroom.png" alt="Luxury Bathroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
               </motion.div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
