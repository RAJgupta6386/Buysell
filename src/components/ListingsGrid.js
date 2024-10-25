// Import necessary dependencies at the top of the fil

import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const ListingsGrid = ({ listings }) => {
    return (
        <Grid container spacing={3}>
            {listings.map((listing) => (
                <Grid item xs={12} sm={6} md={4} key={listing.id}>
                    <Card elevation={2} style={{ position: 'relative' }}>
                        {listing.featured && (
                            <div style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'gold', padding: '5px', color: '#fff', fontWeight: 'bold' }}>
                                Featured
                            </div>
                        )}
                        <CardMedia
                            component="img"
                            height="200"
                            image={listing.image || '/images/default.jpg'}
                            alt={listing.title}
                        />
                        <CardContent>
                            <Typography variant="h6">{listing.title}</Typography>
                            <Typography variant="body2" color="textSecondary">Price: ₹{listing.price}</Typography>
                            <Typography variant="body2">{listing.description}</Typography>

                            {/* Wishlist Icon */}
                            <IconButton color="secondary">
                                <FavoriteBorderIcon />
                            </IconButton>

                            <Button
                                component={Link}
                                to={`/listing/${listing.id}`}
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ marginTop: '10px' }}
                            >
                                View Details
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ListingsGrid;
