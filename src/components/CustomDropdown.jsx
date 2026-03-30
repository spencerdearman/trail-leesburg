import React, { useState, useRef, useEffect } from 'react';

const CustomDropdown = ({ label, options, value, onChange, placeholder = 'All' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedDisplay = value === 'all' 
    ? placeholder 
    : options.find(opt => opt.value === value)?.label || placeholder;

  // Render a minimal aesthetic line-based dropdown
  return (
    <div className="relative w-full md:w-auto min-w-[200px]" ref={dropdownRef}>
      <div 
        className="flex items-center justify-between border-b border-charcoal/20 pb-2 cursor-pointer group hover:border-charcoal/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col">
          <span className="font-sans uppercase tracking-[0.2em] text-[0.65rem] text-charcoal/50 font-semibold mb-1">{label}</span>
          <span className="font-serif text-lg text-charcoal">{selectedDisplay}</span>
        </div>
        <span className={`text-charcoal transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-charcoal/10 shadow-xl rounded-lg overflow-hidden z-20 py-2">
          {options.map((option) => (
            <div 
              key={option.value} 
              className={`px-4 py-3 cursor-pointer text-sm font-sans flex items-center transition-colors hover:bg-linen ${value === option.value ? 'text-charcoal font-semibold bg-linen/50' : 'text-charcoal/80'}`}
              onClick={() => handleSelect(option.value)}
            >
              <div className="w-4 h-4 rounded border border-charcoal/30 flex items-center justify-center mr-3">
                {value === option.value && <div className="w-2 h-2 rounded-sm bg-bronze" />}
              </div>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
