import React, { useState } from 'react';

const FilterComponent = ({ onFilter }) => {
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    onFilter(maxPrice);
  };

  return (
    <div>
      <label>Max Price:</label>
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
};

export default FilterComponent;
