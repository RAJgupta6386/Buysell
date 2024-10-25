import React from 'react';
import { Container, Grid, Typography, Button, LinearProgress } from '@mui/material';

const MyAds = ({ ads }) => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>My Ads</Typography>

            {/* Profile Completeness */}
            <Typography variant="subtitle1">Profile Completeness</Typography>
            <LinearProgress variant="determinate" value={60} style={{ marginBottom: '20px' }} /> {/* 60% example */}

            <Grid container spacing={3}>
                {ads.map(ad => (
                    <Grid item xs={12} sm={6} md={4} key={ad._id}>
                        <Typography variant="h6">{ad.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{ad.location}</Typography>
                        <Typography variant="h6" color="primary">₹{ad.price}</Typography>
                        <Button variant="outlined" color="primary" style={{ marginRight: '10px' }}>Edit</Button>
                        <Button variant="outlined" color="secondary">Delete</Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MyAds;
