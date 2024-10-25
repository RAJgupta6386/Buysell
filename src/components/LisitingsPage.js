import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Select, MenuItem, Button, Typography, InputLabel, FormControl, Pagination } from '@mui/material';
import ListingCard from './ListingCard';  // Keep ListingCard import
import './LandingPage.css'; 

const LandingPage = ({ listings }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [sortOption, setSortOption] = useState('latest');
    const [currentPage, setCurrentPage] = useState(1);
    const listingsPerPage = 9;

    const filteredListings = listings.filter(listing =>
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === '' || listing.category === category)
    );

    const sortedListings = [...filteredListings].sort((a, b) => {
        if (sortOption === 'price') {
            return parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, ''));
        }
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    });

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = sortedListings.slice(indexOfFirstListing, indexOfLastListing);

    return (
        <div className="landing-page">
            <Typography variant="h3" gutterBottom>Welcome to BuySell Marketplace</Typography>

            <div className="search-sort-container" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <TextField
                    label="Search listings"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth
                    style={{ flexGrow: 1 }}
                />

                <FormControl variant="outlined" style={{ minWidth: 120 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        label="Category"
                    >
                        <MenuItem value="">All Categories</MenuItem>
                        <MenuItem value="Bikes">Bikes</MenuItem>
                        <MenuItem value="Cars">Cars</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" style={{ minWidth: 120 }}>
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        label="Sort By"
                    >
                        <MenuItem value="latest">Sort by Latest</MenuItem>
                        <MenuItem value="price">Sort by Price</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    component={Link}
                    to="/add-listing"
                    variant="contained"
                    color="primary"
                    style={{ height: '50px', flexGrow: 1 }}
                >
                    Add Listing
                </Button>
            </div>

            {/* Assume ListingGrid.js handles the grid layout */}
            <ListingGrid listings={currentListings} />  {/* Call your ListingGrid.js component here */}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination
                    count={Math.ceil(sortedListings.length / listingsPerPage)}
                    page={currentPage}
                    onChange={(e, page) => {
                        setCurrentPage(page);
                        window.scrollTo(0, 0);
                    }}
                    color="primary"
                />
            </div>
        </div>
    );
};

export default LandingPage;
