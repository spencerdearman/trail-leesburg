import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Coffee, MonitorPlay, Droplet } from 'lucide-react';
import homeImage from '../assets/home-image.png';

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
          style={{ backgroundImage: `url(${homeImage})` }}
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
          <div className="overflow-hidden mb-4">
             <motion.span 
               className="block font-sans uppercase tracking-[0.25em] text-bronze text-xs font-semibold"
               initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
             >
               Introducing
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
            A curated offering of refined studio, 1, 2, and 3 bedroom residences redefining upscale living in Leesburg.
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
            <motion.div variants={fadeUpVariant} className="col-span-1 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-charcoal group">
              <div className="absolute inset-0 bg-charcoal/90 group-hover:bg-charcoal/80 transition-colors z-0"></div>
              {/* Abstract subtle pattern or texture could go here */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
                <Leaf className="text-linen/50 mb-6" size={40} strokeWidth={1.5} />
                <h3 className="font-serif text-3xl text-linen mb-3">Holistic Wellness Center</h3>
                <p className="font-sans text-linen/70 text-sm max-w-md">State-of-the-art conditioning equipment, free weights, and dedicated yoga & meditation spaces designed for your ultimate wellbeing.</p>
              </div>
            </motion.div>

            {/* Coworking (Standard) */}
            <motion.div variants={fadeUpVariant} className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden bg-linen p-8 flex flex-col justify-end border border-charcoal/5 hover:border-bronze/30 transition-colors">
              <MonitorPlay className="text-bronze mb-4" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-charcoal mb-2">Executive Coworking</h3>
              <p className="font-sans text-charcoal/70 text-sm">Quiet focus pods and collaborative meeting spaces.</p>
            </motion.div>

            {/* Rooftop Terrace (Standard) */}
            <motion.div variants={fadeUpVariant} className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden bg-olive/10 p-8 flex flex-col justify-end border border-olive/5 hover:border-olive/30 transition-colors">
              <Coffee className="text-olive mb-4" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-charcoal mb-2">Rooftop Terrace</h3>
              <p className="font-sans text-charcoal/70 text-sm">Sweeping neighborhood views with fire pits and lounges.</p>
            </motion.div>

            {/* Pet Spa (Standard - placed below wellness on lg screens) */}
            <motion.div variants={fadeUpVariant} className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 relative rounded-2xl overflow-hidden bg-charcoal text-linen p-8 flex flex-col md:flex-row items-center md:items-end justify-between border border-charcoal/10">
               <div className="flex-1">
                 <Droplet className="text-linen/50 mb-4" size={32} strokeWidth={1.5} />
                 <h3 className="font-serif text-2xl mb-2">Luxury Pet Spa</h3>
                 <p className="font-sans text-linen/70 text-sm">Professional wash stations for your furry companions.</p>
               </div>
               <div className="mt-6 md:mt-0 flex-none">
                 <Link to="/amenities" className="uppercase font-sans font-semibold tracking-widest text-xs border border-linen/30 px-6 py-3 rounded-full hover:bg-linen hover:text-charcoal transition-all">
                   View Pet Policy
                 </Link>
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
                  <p className="font-sans text-charcoal/60 text-sm">Soft, earthy cabinetry offering abundant storage with a sleek, minimalist profile.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="flex flex-col border-l-2 border-bronze/30 pl-6">
                  <h4 className="font-serif text-xl text-charcoal mb-2">Zellige-Inspired Backsplash</h4>
                  <p className="font-sans text-charcoal/60 text-sm">Tactile, artisanal tile work adding depth and natural beauty to your culinary space.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="flex flex-col border-l-2 border-bronze/30 pl-6">
                  <h4 className="font-serif text-xl text-charcoal mb-2">Sleek Quartz Countertops</h4>
                  <p className="font-sans text-charcoal/60 text-sm">Highly durable, bright surfaces providing the perfect canvas for prep and entertaining.</p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="mt-12 group inline-block">
                <Link to="/design" className="inline-flex items-center space-x-3 bg-charcoal text-linen px-8 py-4 rounded-full font-sans uppercase tracking-widest text-xs font-semibold hover:bg-bronze transition-colors shadow-lg">
                  <span>Explore Interior Design</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Abstract visual representation of finishes */}
            <motion.div 
              className="lg:w-1/2 w-full aspect-square md:aspect-[4/3] bg-charcoal relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            >
              {/* Using CSS to create a tasteful abstract visual representing the tones */}
              <div className="absolute inset-0 flex flex-col transition-all">
                <div className="h-1/3 bg-[#ece8e3] w-full flex items-center px-8 border-b border-charcoal/10"><span className="font-serif italic text-charcoal/20 text-4xl">Quartz</span></div>
                <div className="h-1/3 bg-[#e0d5c8] w-full flex items-center justify-end px-8 border-b border-charcoal/10"><span className="font-serif italic text-charcoal/20 text-4xl">Shaker</span></div>
                <div className="h-1/3 bg-[#c2b6a8] w-full flex items-center px-8"><span className="font-serif italic text-charcoal/20 text-4xl">Zellige</span></div>
              </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default Home;
