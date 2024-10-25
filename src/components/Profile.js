import React from 'react';
import { Button, LinearProgress, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>User Profile</Typography>
            <LinearProgress variant="determinate" value={60} /> {/* Example progress */}
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px', marginBottom: '20px' }}>
                Profile Completion: 60%
            </Typography>

            <Button fullWidth variant="outlined" color="primary" component={Link} to="/my-ads" style={{ marginBottom: '10px' }}>
                My Ads
            </Button>
            <Button fullWidth variant="outlined" color="secondary" component={Link} to="/buy-packages" style={{ marginBottom: '10px' }}>
                Buy Business Packages
            </Button>
            <Button fullWidth variant="outlined" component={Link} to="/settings" style={{ marginBottom: '10px' }}>
                Settings
            </Button>
            <Button fullWidth variant="contained" color="error" component={Link} to="/logout">
                Logout
            </Button>
        </Container>
    );
};

export default Profile;
