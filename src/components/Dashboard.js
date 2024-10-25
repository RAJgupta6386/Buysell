import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardContent, Typography, LinearProgress, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [ads, setAds] = useState([]);
    const [profileProgress, setProfileProgress] = useState(60); // Example initial value

    useEffect(() => {
        // Fetch the user's ads from the backend
        const fetchAds = async () => {
            try {
                const response = await axios.get('/api/my-ads');
                setAds(response.data); // Set fetched ads in state

                // Example of dynamically setting profile progress based on some conditions
                if (response.data.length > 5) {
                    setProfileProgress(80); // For example, profile progress increases when more ads are posted
                }
            } catch (error) {
                console.error('Error fetching ads:', error);
            }
        };

        fetchAds();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/ads/${id}`);
            setAds(ads.filter(ad => ad.id !== id)); // Remove the deleted ad from the state
        } catch (error) {
            console.error('Error deleting ad:', error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            {/* Profile Information Section */}
            <Typography variant="h4" gutterBottom>
                My Dashboard
            </Typography>

            <Typography variant="h6">Profile Completion</Typography>
            <LinearProgress variant="determinate" value={profileProgress} style={{ marginBottom: '20px' }} />

            {/* User Ads Section */}
            <Typography variant="h6" gutterBottom>
                My Ads
            </Typography>

            <Grid container spacing={3}>
                {ads.map((ad) => (
                    <Grid item xs={12} sm={6} md={4} key={ad.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{ad.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ₹{ad.price}
                                </Typography>
                                <Typography variant="body2">{ad.description}</Typography>
                                
                                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                    {/* Edit Button */}
                                    <Button
                                        component={Link}
                                        to={`/edit/${ad.id}`}
                                        variant="outlined"
                                        startIcon={<EditIcon />}
                                        color="primary"
                                    >
                                        Edit
                                    </Button>

                                    {/* Delete Button */}
                                    <IconButton onClick={() => handleDelete(ad.id)} color="secondary">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Settings Section */}
            <div style={{ marginTop: '40px' }}>
                <Typography variant="h6">Settings</Typography>
                <Button component={Link} to="/update-profile" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                    Update Profile
                </Button>
                <Button component={Link} to="/change-password" variant="contained" color="secondary" style={{ marginTop: '10px', marginLeft: '20px' }}>
                    Change Password
                </Button>
            </div>
        </div>
    );
};

export default Dashboard;
