import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const NewsLetterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Newsletter Signup - The Trail');
    
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
     return (
       <div className="flex items-center space-x-2 text-olive mb-6 border-b border-transparent pb-2">
         <CheckCircle size={16} />
         <span className="text-xs font-sans tracking-wide">Successfully Subscribed!</span>
       </div>
     );
  }

  return (
    <form className="flex border-b border-linen/30 pb-2 mb-6" onSubmit={handleSubmit}>
       <input 
         type="email" 
         name="email"
         required
         placeholder="Email Address" 
         className="bg-transparent border-none outline-none text-sm w-full placeholder-linen/50 text-linen focus:ring-0"
       />
       <button 
         type="submit" 
         disabled={isSubmitting}
         className={`text-xs uppercase tracking-widest transition-colors ${isSubmitting ? 'text-linen/50 cursor-wait' : 'hover:text-white'}`}
       >
         {isSubmitting ? '...' : 'Join'}
       </button>
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-linen/80 py-20 px-6 border-t border-linen/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Area */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col text-linen hover:opacity-80 transition-opacity">
            <span className="font-serif text-3xl font-medium tracking-tight">The Trail</span>
            <span className="font-sans text-[0.65rem] tracking-[0.3em] font-semibold mt-0.5 ml-0.5">LEESBURG</span>
          </Link>
          <div className="mt-8 text-sm font-sans tracking-wide space-y-1">
             <p>37 Sycolin Road</p>
             <p>Leesburg, VA 20175</p>
          </div>
          <div className="mt-4 text-sm font-sans tracking-wide">
             <p>(855) 206-3245</p>
          </div>
        </div>

        {/* Links Grid Area */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-linen uppercase text-xs font-semibold tracking-[0.2em] mb-6">Explore</h4>
            <div className="flex flex-col space-y-4 text-sm font-sans">
              <Link to="/" className="hover:text-linen transition-colors w-max">Home</Link>
              <Link to="/design" className="hover:text-linen transition-colors w-max">Design</Link>
              <Link to="/floorplans" className="hover:text-linen transition-colors w-max">Floorplans</Link>
            </div>
          </div>
          <div>
            <h4 className="text-linen uppercase text-xs font-semibold tracking-[0.2em] mb-6 shadow-transparent">Discover</h4>
            <div className="flex flex-col space-y-4 text-sm font-sans">
              <Link to="/neighborhood" className="hover:text-linen transition-colors w-max">Neighborhood</Link>
              <Link to="/contact" className="hover:text-linen transition-colors w-max">Contact</Link>
            </div>
          </div>
        </div>

        {/* Newsletter / CTA Area */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-start md:items-end md:text-right">
           <h4 className="text-linen uppercase text-xs font-semibold tracking-[0.2em] mb-6">Stay Informed</h4>
           <div className="w-full max-w-xs md:max-w-full">
              <NewsLetterForm />
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-linen/10 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-linen/60 space-y-4 md:space-y-0">
         <p>© {new Date().getFullYear()} The Trail Leesburg. All Rights Reserved.</p>
         <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
           <Link to="#" className="hover:text-linen transition-colors">Privacy Policy</Link>
           <Link to="#" className="hover:text-linen transition-colors">Accessibility</Link>
           <Link to="#" className="hover:text-linen transition-colors">DMCA</Link>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
