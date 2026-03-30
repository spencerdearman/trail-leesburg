import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar styling based on state
  const navBg = isMenuOpen
    ? 'bg-charcoal/95 backdrop-blur-xl'
    : isScrolled
    ? 'bg-linen/90 backdrop-blur-lg border-b border-charcoal/5 shadow-sm'
    : !isHome
    ? 'bg-linen border-b border-charcoal/5'
    : 'bg-transparent';

  const textColor = (isScrolled || !isHome) && !isMenuOpen ? 'text-charcoal' : 'text-linen';

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className={`flex flex-col z-50 ${textColor}`} onClick={closeMenu}>
            <span className="font-serif text-3xl font-medium tracking-tight">The Trail</span>
            <span className="font-sans text-[0.65rem] tracking-[0.3em] font-semibold mt-0.5 ml-0.5">LEESBURG</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 font-sans text-sm font-medium tracking-wide ${textColor}`}>
            <Link to="/design" className="hover:opacity-70 transition-opacity">Design</Link>
            <Link to="/floorplans" className="hover:opacity-70 transition-opacity">Floorplans</Link>
            <Link to="/neighborhood" className="hover:opacity-70 transition-opacity">Neighborhood</Link>
            <button className="hover:opacity-70 transition-opacity cursor-pointer z-50" onClick={toggleMenu} aria-label="Toggle menu">
               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Header Button */}
          <div className="md:hidden flex items-center z-50">
             <button className={`p-2 ${textColor}`} onClick={toggleMenu} aria-label="Toggle menu">
               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-2xl transition-opacity duration-500 flex flex-col pt-32 px-8 pb-12 overflow-y-auto min-h-screen ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col md:flex-row md:justify-between items-start md:items-center">
          
          <div className="flex flex-col space-y-6 md:space-y-8 mt-12 md:mt-0 font-serif text-4xl md:text-6xl text-linen">
            <Link to="/" className="hover:text-bronze transition-colors flex items-center space-x-4 group" onClick={closeMenu}>
              <span className="w-0 group-hover:w-8 h-px bg-bronze transition-all duration-300 ease-out hidden md:block"></span>
              <span>Home</span>
            </Link>
            <Link to="/design" className="hover:text-bronze transition-colors flex items-center space-x-4 group" onClick={closeMenu}>
              <span className="w-0 group-hover:w-8 h-px bg-bronze transition-all duration-300 ease-out hidden md:block"></span>
              <span>Design</span>
            </Link>
            <Link to="/floorplans" className="hover:text-bronze transition-colors flex items-center space-x-4 group" onClick={closeMenu}>
              <span className="w-0 group-hover:w-8 h-px bg-bronze transition-all duration-300 ease-out hidden md:block"></span>
              <span>Floorplans</span>
            </Link>
            <Link to="/neighborhood" className="hover:text-bronze transition-colors flex items-center space-x-4 group" onClick={closeMenu}>
              <span className="w-0 group-hover:w-8 h-px bg-bronze transition-all duration-300 ease-out hidden md:block"></span>
              <span>Neighborhood</span>
            </Link>
            <Link to="/contact" className="hover:text-bronze transition-colors flex items-center space-x-4 group" onClick={closeMenu}>
              <span className="w-0 group-hover:w-8 h-px bg-bronze transition-all duration-300 ease-out hidden md:block"></span>
              <span>Contact</span>
            </Link>
          </div>

          <div className="mt-16 md:mt-0 font-sans text-linen/60 text-sm md:text-base tracking-wide flex flex-col items-start md:items-end md:text-right border-t border-linen/10 md:border-none pt-8 md:pt-0 w-full md:w-auto">
            <h4 className="text-linen font-medium uppercase tracking-widest text-xs mb-4">Contact</h4>
            <p>37 Sycolin Road</p>
            <p>Leesburg, VA 20175</p>
            <p className="mt-4 hover:text-linen cursor-pointer transition-colors">(855) 206-3245</p>
            <Link to="/contact" className="mt-12 uppercase tracking-widest text-xs font-semibold hover:text-bronze transition-colors border-b border-linen/20 pb-1 w-max">Get In Touch</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
