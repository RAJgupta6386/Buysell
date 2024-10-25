import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AddListing from './components/AddListing';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import CreateListing from './components/CreateListing';
import EditListing from './components/EditListing';
import ListingDetails from './components/ListingDetails';
import MyAds from './components/MyAds'; 
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    const [listings] = useState([
        { id: 1, title: 'Yamaha FZ', description: 'Well-maintained bike', price: '50,000', image: 'https://via.placeholder.com/200', category: 'Bikes', featured: true },
        { id: 2, title: 'Honda CBR', description: 'Almost new bike', price: '1,20,000', image: 'https://via.placeholder.com/200', category: 'Bikes', featured: true },
        { id: 3, title: 'Royal Enfield Classic', description: 'Classic bike', price: '1,75,000', image: 'https://via.placeholder.com/200', category: 'Bikes', featured: false },
        { id: 4, title: 'Bajaj Pulsar', description: 'Used but well-maintained', price: '75,000', image: 'https://via.placeholder.com/200', category: 'Bikes', featured: false },
        // ... Add more listings up to 25 items
    ]);

    return (
        <Router>
            <CssBaseline />
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage listings={listings} />} />
                    <Route path="/add-listing" element={<AddListing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/create" element={<PrivateRoute><CreateListing /></PrivateRoute>} />
                    <Route path="/edit/:id" element={<PrivateRoute><EditListing listings={listings} /></PrivateRoute>} />
                    <Route path="/listing/:id" element={<PrivateRoute><ListingDetails /></PrivateRoute>} />
                    <Route path="/my-ads" element={<PrivateRoute><MyAds listings={listings} /></PrivateRoute>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
