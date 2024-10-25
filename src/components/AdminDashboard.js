// frontend/src/components/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Grid, Card, CardContent } from '@mui/material';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch all users
        const fetchUsers = async () => {
            const response = await axios.get('/api/admin/users', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setUsers(response.data);
        };

        // Fetch all listings
        const fetchListings = async () => {
            const response = await axios.get('/api/admin/listings', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setListings(response.data);
        };

        fetchUsers();
        fetchListings();
    }, []);

    const handleBlockUser = async (id) => {
        await axios.put(`/api/admin/users/${id}/block`, {}, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUsers(users.map((user) => (user._id === id ? { ...user, isBlocked: !user.isBlocked } : user)));
    };

    const handleDeleteListing = async (id) => {
        await axios.delete(`/api/admin/listings/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setListings(listings.filter((listing) => listing._id !== id));
    };

    return (
        <div>
            <Typography variant="h4">Admin Dashboard</Typography>

            {/* User Management */}
            <Typography variant="h5" gutterBottom>Manage Users</Typography>
            <Grid container spacing={3}>
                {users.map((user) => (
                    <Grid item xs={12} sm={6} md={4} key={user._id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{user.name}</Typography>
                                <Typography>Email: {user.email}</Typography>
                                <Typography>Status: {user.isBlocked ? 'Blocked' : 'Active'}</Typography>
                                <Button
                                    variant="contained"
                                    color={user.isBlocked ? 'secondary' : 'primary'}
                                    onClick={() => handleBlockUser(user._id)}
                                >
                                    {user.isBlocked ? 'Unblock' : 'Block'}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Listing Management */}
            <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>Manage Listings</Typography>
            <Grid container spacing={3}>
                {listings.map((listing) => (
                    <Grid item xs={12} sm={6} md={4} key={listing._id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{listing.title}</Typography>
                                <Typography>Price: {listing.price}</Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDeleteListing(listing._id)}
                                >
                                    Delete Listing
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AdminDashboard;
