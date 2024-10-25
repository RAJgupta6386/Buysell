import React from 'react';
import { Typography } from '@mui/material';
import AddListingForm from './AddListingForm'; // Import your AddListingForm component

const AddListing = ({ onAdd }) => {
    // This function will handle the addition of a new listing
    const handleAddListing = (newListing) => {
        onAdd((prevListings) => [
            ...prevListings,
            newListing,
        ]);
    };

    return (
        <div className="add-listing">
            <Typography variant="h4" gutterBottom>Add New Listing</Typography>
            <AddListingForm onAdd={handleAddListing} /> {/* Use AddListingForm component here */}
        </div>
    );
};

export default AddListing;
