import React from 'react';
import CustomDropdown from './CustomDropdown';
import './FilterBar.css';

const FilterBar = ({ filters, onFilterChange }) => {
  const bedroomOptions = [
    { value: 'all', label: 'All Bedrooms' },
    { value: '1', label: '1 Bedroom' },
    { value: '2', label: '2 Bedrooms' },
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Lowest to Highest' },
    { value: 'high', label: 'Highest to Lowest' },
  ];

  const sqftOptions = [
    { value: 'all', label: 'All Sizes' },
    { value: 'small', label: 'Smallest to Largest' },
    { value: 'large', label: 'Largest to Smallest' },
  ];

  return (
    <div className="filter-bar">
      <CustomDropdown 
        label="Bedrooms" 
        options={bedroomOptions} 
        value={filters.bedrooms} 
        onChange={(val) => onFilterChange('bedrooms', val)} 
      />

      <CustomDropdown 
        label="Price" 
        options={priceOptions} 
        value={filters.price} 
        onChange={(val) => onFilterChange('price', val)} 
      />

      <CustomDropdown 
        label="Square Feet" 
        options={sqftOptions} 
        value={filters.sqft} 
        onChange={(val) => onFilterChange('sqft', val)} 
      />
    </div>
  );
};

export default FilterBar;
