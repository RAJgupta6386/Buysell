import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, backgroundColor: '#f1f3f4', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                © 2024 BuySell Marketplace
            </Typography>
        </Box>
    );
};

export default Footer;
