import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const RecommendedCard = ({ recommended }) => {
  return (
    <Card style={{ maxWidth: 200, margin: '20px', position: 'relative', backgroundColor: '#181818', borderRadius: '8px' }}>
      <CardMedia
        component="img"
        height="140"
        image={recommended.image}
        alt={recommended.title}
        style={{ borderRadius: '8px 8px 0 0' }}
      />

      <Typography
        variant="h6"
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          color: 'white',
          fontWeight: 'bold',
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
          fontSize: '1rem',
        }}
      >
        {recommended.title}
      </Typography>

      <CardContent style={{ padding: '16px', backgroundColor: '#282828', minHeight:'70px' }}>
        <Typography variant="subtitle1" style={{ color: '#ffffff', fontSize: '0.875rem' }}>
          {recommended.subtitle}
        </Typography>
        <Typography variant="body2" style={{ color: '#ffffff', fontSize: '0.75rem' }}>
          {recommended.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecommendedCard;
