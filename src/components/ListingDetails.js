import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Typography, Card, CardMedia, CardContent, Button, Snackbar
} from '@mui/material';

const ListingDetail = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        // Fetch listing details from API
        fetch(`/api/listings/${id}`)
            .then(response => response.json())
            .then(data => setListing(data))
            .catch(error => console.error('Error fetching listing:', error));
    }, [id]);

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    if (!listing) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Card>
                <CardMedia
                    component="img"
                    height="400"
                    image={listing.image}
                    alt={listing.title}
                />
                <CardContent>
                    <Typography variant="h4">{listing.title}</Typography>
                    <Typography variant="h6" color="textSecondary">Price: {listing.price}</Typography>
                    <Typography variant="body1" gutterBottom>{listing.description}</Typography>
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        color="primary"
                        onClick={() => setOpenSnackbar(true)}
                    >
                        Back to Listings
                    </Button>
                </CardContent>
            </Card>

            {/* Snackbar for navigation feedback */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Navigated back to listings."
            />
        </div>
    );
};

export default ListingDetail;
