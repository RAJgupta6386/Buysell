import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ListingCard = ({ title, price, description, imageUrl, featured }) => {
    return (
        <Card 
            style={{ 
                position: 'relative', 
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
                transition: 'transform 0.2s', 
                height: '100%'
            }}
        >
            {featured && (
                <Box 
                    style={{ 
                        position: 'absolute', 
                        top: 10, 
                        left: 10, 
                        backgroundColor: 'gold', 
                        padding: '8px', 
                        borderRadius: '5px', 
                        zIndex: 1 
                    }}
                >
                    Featured
                </Box>
            )}
            <CardMedia
                component="img"
                height="200"
                image={imageUrl || 'https://via.placeholder.com/200'}
                alt={title}
                loading="lazy"  // Lazy loading for better performance
            />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    Price: ₹{price}
                </Typography>
                <Typography variant="body2">{description}</Typography>
                <Button
                    component={Link}
                    to={`/listing/${title}`}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={{ marginTop: '10px' }}
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
};

export default ListingCard;
