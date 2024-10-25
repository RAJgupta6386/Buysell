import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const Listings = ({ listings }) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {listings.map((listing, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <img 
                src={listing.image} 
                alt={listing.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <CardContent>
                <Typography variant="h6">{listing.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {listing.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Listings;
