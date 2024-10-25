import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FeaturedListings from './components/FeaturedListings';
import ProfileMenu from './components/ProfileMenu';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    const [listings] = useState([
        { id: 1, title: 'Yamaha FZ', description: 'Well-maintained second-hand bike', price: '50,000', image: '/images/bike1.jpg', category: 'Bikes', featured: true },
        { id: 2, title: 'Honda CBR', description: 'Used for 6 months', price: '1,20,000', image: '/images/bike2.jpg', category: 'Bikes', featured: false },
        { id: 3, title: 'Royal Enfield Classic', description: 'Excellent condition', price: '1,75,000', image: '/images/bike3.jpg', category: 'Bikes', featured: true },
    ]);

    return (
        <Router>
            <CssBaseline />
            <NavBar />
            <Container style={{ marginTop: '20px' }}>
                <Routes>
                    <Route path="/" element={<FeaturedListings listings={listings} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<ProfileMenu />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
