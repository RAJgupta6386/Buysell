import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import { TextField, Button, Typography } from '@mui/material';

const EditListing = ({ listings, setListings }) => {
    const { id } = useParams();
    const navigate = useNavigate(); // useNavigate hook for navigation
    const [listing, setListing] = useState({ title: '', price: '', description: '' });

    useEffect(() => {
        const currentListing = listings.find(listing => listing.id === id);
        if (currentListing) {
            setListing(currentListing);
        }
    }, [id, listings]);

    const handleChange = (e) => {
        setListing({ ...listing, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/listings/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listing),
        })
            .then(response => response.json())
            .then(updatedListing => {
                setListings(prevListings => prevListings.map(l => l.id === id ? updatedListing : l));
                navigate('/'); // Use navigate to redirect
            })
            .catch(error => console.error('Error updating listing:', error));
    };

    return (
        <div>
            <Typography variant="h4">Edit Listing</Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Title" 
                    name="title" 
                    value={listing.title} 
                    onChange={handleChange} 
                    fullWidth 
                />
                <TextField 
                    label="Price" 
                    name="price" 
                    value={listing.price} 
                    onChange={handleChange} 
                    fullWidth 
                />
                <TextField 
                    label="Description" 
                    name="description" 
                    value={listing.description} 
                    onChange={handleChange} 
                    fullWidth 
                    multiline 
                    rows={4} 
                />
                <Button type="submit" variant="contained" color="primary">Save Changes</Button>
            </form>
        </div>
    );
};

export default EditListing;
