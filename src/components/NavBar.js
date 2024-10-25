import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="sticky" color="primary" style={{ zIndex: 1300 }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        BuySell Marketplace
                    </Typography>
                    <IconButton color="inherit" component={Link} to="/add-listing">
                        <Typography>+ SELL</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/login">
                        <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button component={Link} to="/signup">
                        <ListItemText primary="Signup" />
                    </ListItem>
                    <ListItem button component={Link} to="/my-ads">
                        <ListItemText primary="My Ads" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default NavBar;
