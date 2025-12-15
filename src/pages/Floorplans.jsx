import React, { useState, useMemo } from 'react';
import { floorplans } from '../data/floorplans';
import FloorplanCard from '../components/FloorplanCard';
import FilterBar from '../components/FilterBar';
import FloorplanModal from '../components/FloorplanModal';
import './Floorplans.css'; // We'll create this next

const Floorplans = () => {
  const [filters, setFilters] = useState({
    bedrooms: 'all',
    price: 'all',
    sqft: 'all',
  });

  const [selectedFloorplan, setSelectedFloorplan] = useState(null);

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredFloorplans = useMemo(() => {
    let result = [...floorplans];

    // Filter by Bedrooms
    if (filters.bedrooms !== 'all') {
      result = result.filter(plan => plan.beds === parseInt(filters.bedrooms));
    }

    // Sort by Price
    if (filters.price === 'low') {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (filters.price === 'high') {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    // Sort by Sqft
    if (filters.sqft === 'small') {
      result.sort((a, b) => a.sqft - b.sqft);
    } else if (filters.sqft === 'large') {
      result.sort((a, b) => b.sqft - a.sqft);
    }

    return result;
  }, [filters]);

  return (
    <div className="floorplans-page">
      <div className="floorplans-header">
        <h1 className="page-title">Floorplans</h1>
        <p className="page-subtitle">Find your perfect space.</p>
      </div>
      
      <div className="floorplans-content">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        
        <div className="floorplans-grid">
          {filteredFloorplans.length > 0 ? (
            filteredFloorplans.map(plan => (
              <FloorplanCard 
                key={plan.id} 
                plan={plan} 
                onClick={setSelectedFloorplan}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No floorplans match your criteria.</p>
              <button 
                className="reset-button"
                onClick={() => setFilters({ bedrooms: 'all', price: 'all', sqft: 'all' })}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedFloorplan && (
        <FloorplanModal 
          plan={selectedFloorplan} 
          onClose={() => setSelectedFloorplan(null)} 
        />
      )}
    </div>
  );
};

export default Floorplans;
