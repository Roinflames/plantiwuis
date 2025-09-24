import React, { useState } from 'react';
import AppNavbar from './AppBar';
import PlantList from './PlantList';
import plantsData from './data.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('All');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFamilyChange = (event) => {
    setSelectedFamily(event.target.value);
  };

  const families = ['All', ...new Set(plantsData.map(plant => plant.family))];

  return (
    <div>
      <AppNavbar
        onSearchChange={handleSearchChange}
        families={families}
        selectedFamily={selectedFamily}
        onFamilyChange={handleFamilyChange}
      />
      <PlantList searchTerm={searchTerm} selectedFamily={selectedFamily} />
    </div>
  );
}

export default App;