import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PlantCard = ({ plant }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {plant.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Care: {plant.care}
        </Typography>
        <Typography variant="body2">
          Stock: {plant.stock}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
