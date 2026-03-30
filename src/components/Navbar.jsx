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
  const isDarkHeroPage = ['/', '/design', '/amenities', '/floorplans', '/contact'].includes(location.pathname);
  
  const navBg = isMenuOpen
    ? 'bg-transparent border-transparent shadow-none'
    : isScrolled
    ? 'bg-white/95 backdrop-blur-xl border-b border-charcoal/10 shadow-sm'
    : 'bg-transparent border-transparent';

  const textColor = isMenuOpen 
    ? 'text-linen' 
    : isScrolled 
    ? 'text-charcoal' 
    : isDarkHeroPage 
    ? 'text-linen' 
    : 'text-charcoal';

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${navBg}`}>
        <div className="w-full max-w-[1400px] 2xl:max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-8 xl:px-12 h-20 md:h-24 transition-all duration-500">
          <Link 
            to="/" 
            className={`flex items-baseline z-50 ${textColor} group ${!isScrolled && !isMenuOpen && isDarkHeroPage ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]' : ''}`} 
            onClick={closeMenu}
          >
            <span className="font-serif text-[1.75rem] md:text-3xl font-medium tracking-tight transition-opacity group-hover:opacity-80">The Trail.</span>
            <span className="font-sans text-[0.6rem] md:text-xs tracking-[0.4em] font-semibold ml-3 md:ml-4 opacity-70">LEESBURG</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-10 font-sans text-xs uppercase tracking-widest font-semibold ${textColor} ${!isScrolled && !isMenuOpen && isDarkHeroPage ? 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]' : ''}`}>
            <Link to="/design" className="hover:opacity-70 transition-opacity">Design</Link>
            <Link to="/amenities" className="hover:opacity-70 transition-opacity">Amenities</Link>
            <Link to="/floorplans" className="hover:opacity-70 transition-opacity">Residences</Link>
            <Link to="/neighborhood" className="hover:opacity-70 transition-opacity">Neighborhood</Link>
            <div className="w-px h-6 bg-current opacity-20 mx-2"></div>
            <button className="hover:opacity-70 transition-opacity cursor-pointer z-50 flex items-center space-x-2" onClick={toggleMenu} aria-label="Toggle menu">
               {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
               <span className="mt-0.5">{isMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>

          {/* Mobile Header Button */}
          <div className="md:hidden flex items-center z-50">
             <button className={`p-2 transition-colors ${textColor}`} onClick={toggleMenu} aria-label="Toggle menu">
               {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
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
            <Link to="/amenities" className="hover:text-bronze transition-colors flex items-center space-x-4 group" onClick={closeMenu}>
              <span className="w-0 group-hover:w-8 h-px bg-bronze transition-all duration-300 ease-out hidden md:block"></span>
              <span>Amenities</span>
            </Link>
            <Link to="/floorplans" className="hover:text-bronze transition-colors flex items-center space-x-4 group" onClick={closeMenu}>
              <span className="w-0 group-hover:w-8 h-px bg-bronze transition-all duration-300 ease-out hidden md:block"></span>
              <span>Residences</span>
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
            <Link to="/contact" className="mt-12 uppercase tracking-widest text-xs font-semibold hover:text-bronze transition-colors border-b border-linen/20 pb-1 w-max" onClick={closeMenu}>Get In Touch</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
