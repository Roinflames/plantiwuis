import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PlantCard = ({ plant }) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {plant.name}
        </Typography>
        {plant.variety && (
          <Typography variant="subtitle1" color="text.secondary">
            ({plant.variety})
          </Typography>
        )}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {t('care')}: {plant.care}
        </Typography>
        <Typography variant="body2">
          {t('stock')}: {plant.stock}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
