import React, { useState, useEffect } from 'react';
import plantsData from './data.json';
import PlantCard from './PlantCard';

const PlantList = ({ searchTerm, selectedFamily }) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  const filteredPlants = plants
    .filter(plant =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (plant.variety && plant.variety.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(plant =>
      selectedFamily === 'All' ? true : plant.family === selectedFamily
    );

  return (
    <div>
      {filteredPlants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantList;
