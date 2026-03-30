import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // IMPORTANT: Replace this with your actual Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    
    // Fallback for simulation if API key isn't set yet
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        e.target.reset();
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative overflow-x-hidden bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-end bg-charcoal pt-24">
        {/* Subtle noise/gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/90 via-[#373A34] to-[#4A4B43] opacity-80 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeUpVariant} className="block font-sans uppercase tracking-[0.25em] text-linen/70 text-xs font-semibold mb-4">
              Get in Touch
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl text-linen leading-tight mb-4">
              Contact <span className="italic text-linen/70">The Trail.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="py-24 px-6 md:px-12 bg-linen relative z-20 -mt-10 mx-6 mb-24 rounded-2xl md:mx-auto max-w-7xl shadow-xl border border-charcoal/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-12"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
             <div>
                <h2 className="font-serif text-3xl text-charcoal mb-6">Leasing Office</h2>
                <div className="font-sans text-charcoal/80 space-y-2 text-lg">
                   <p>37 Sycolin Road</p>
                   <p>Leesburg, VA 20175</p>
                </div>
             </div>

             <div>
                <h3 className="font-sans uppercase tracking-[0.2em] text-[0.65rem] text-charcoal/50 font-semibold mb-3">Direct Inquiries</h3>
                <div className="font-sans text-charcoal/80 space-y-4">
                   <p className="flex items-center space-x-2">
                     <span className="font-medium">Phone:</span>
                     <a href="tel:+18552063245" className="hover:text-bronze transition-colors">(855) 206-3245</a>
                   </p>
                   <p className="flex items-center space-x-2">
                     <span className="font-medium">Email:</span>
                     <a href="mailto:trevor@bigtproperties.com" className="hover:text-bronze transition-colors border-b border-transparent hover:border-bronze">trevor@bigtproperties.com</a>
                   </p>
                </div>
             </div>

             <div className="p-8 bg-white border border-charcoal/5 rounded-xl shadow-sm">
                <h3 className="font-serif text-xl text-charcoal mb-4">Office Hours</h3>
                <ul className="font-sans text-sm text-charcoal/70 space-y-3">
                   <li className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>Mon - Fri</span>
                      <span>9:00 AM - 6:00 PM</span>
                   </li>
                   <li className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>Saturday</span>
                      <span>10:00 AM - 5:00 PM</span>
                   </li>
                   <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                   </li>
                </ul>
             </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="lg:col-span-7 flex flex-col"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
            }}
          >
             <h2 className="font-serif text-3xl text-charcoal mb-8">Send a Message</h2>
             
             {submitStatus === 'success' ? (
                <div className="bg-olive/10 border border-olive/20 rounded-xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                   <CheckCircle className="text-olive mb-6" size={48} strokeWidth={1.5} />
                   <h3 className="font-serif text-3xl text-charcoal mb-4">Message Received</h3>
                   <p className="font-sans text-charcoal/70 max-w-sm mb-8">
                     Thank you for your interest in The Trail. Our leasing team will be in contact with you shortly.
                   </p>
                   <button 
                     onClick={() => setSubmitStatus(null)}
                     className="font-sans uppercase tracking-[0.2em] text-xs font-semibold border-b-2 border-charcoal text-charcoal pb-1 hover:text-bronze hover:border-bronze transition-colors"
                   >
                     Send Another Message
                   </button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot for spam protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  
                  {/* Subject Context for Email */}
                  <input type="hidden" name="subject" value="New Inquiry from The Trail Website" />
                  <input type="hidden" name="from_name" value="The Trail Website Inquiry" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label htmlFor="name" className="font-sans uppercase tracking-widest text-[0.65rem] text-charcoal/60 font-semibold pl-2">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
                          className="w-full bg-white border border-charcoal/10 rounded-lg px-6 py-4 outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all text-sm font-sans text-charcoal placeholder-charcoal/30 shadow-sm"
                          placeholder="Jane Doe"
                        />
                     </div>
                     <div className="space-y-2">
                        <label htmlFor="email" className="font-sans uppercase tracking-widest text-[0.65rem] text-charcoal/60 font-semibold pl-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          className="w-full bg-white border border-charcoal/10 rounded-lg px-6 py-4 outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all text-sm font-sans text-charcoal placeholder-charcoal/30 shadow-sm"
                          placeholder="jane@example.com"
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="interest" className="font-sans uppercase tracking-widest text-[0.65rem] text-charcoal/60 font-semibold pl-2">I am interested in</label>
                     <select 
                       id="interest" 
                       name="interest" 
                       className="w-full bg-white border border-charcoal/10 rounded-lg px-6 py-4 outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all text-sm font-sans text-charcoal appearance-none shadow-sm cursor-pointer"
                     >
                        <option value="Schedule a Tour">Scheduling a Tour</option>
                        <option value="Floorplan Pricing">Floorplan Pricing</option>
                        <option value="General Question">General Question</option>
                        <option value="Other">Other</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="message" className="font-sans uppercase tracking-widest text-[0.65rem] text-charcoal/60 font-semibold pl-2">Message</label>
                     <textarea 
                       id="message" 
                       name="message" 
                       required 
                       rows={5}
                       className="w-full bg-white border border-charcoal/10 rounded-lg px-6 py-4 outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all text-sm font-sans text-charcoal placeholder-charcoal/30 shadow-sm resize-none"
                       placeholder="How can we help you today?"
                     ></textarea>
                  </div>

                  {submitStatus === 'error' && (
                     <p className="text-red-700 text-sm font-sans bg-red-50 p-4 rounded-lg">There was an error submitting your message. Please try emailing us directly.</p>
                  )}

                  <div className="pt-4 flex justify-end">
                     <button 
                       type="submit" 
                       disabled={isSubmitting}
                       className={`inline-flex items-center space-x-3 bg-charcoal text-linen px-10 py-4 rounded-full font-sans uppercase tracking-widest text-xs font-semibold transition-all shadow-lg ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-bronze hover:scale-105'}`}
                     >
                       <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                       {!isSubmitting && <ExternalLink size={16} />}
                     </button>
                  </div>
                </form>
             )}
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
