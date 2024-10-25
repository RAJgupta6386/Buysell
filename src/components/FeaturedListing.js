import React from 'react';
import { Button, LinearProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
    return (
        <div>
            <Typography variant="h6">OLX User</Typography>
            <LinearProgress variant="determinate" value={60} /> {/* Example progress bar */}
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '10px' }}>
                4 steps left
            </Typography>

            <Button component={Link} to="/my-ads" fullWidth>
                My Ads
            </Button>
            <Button component={Link} to="/buy-packages" fullWidth>
                Buy Business Packages
            </Button>
            <Button component={Link} to="/settings" fullWidth>
                Settings
            </Button>
            <Button component={Link} to="/logout" fullWidth>
                Logout
            </Button>
        </div>
    );
};

export default ProfileMenu;
