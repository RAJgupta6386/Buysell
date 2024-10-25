import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateListing = ({ setListings }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newListing = { title, description, price, category };
        
        // API call to add listing
        try {
            const response = await fetch('/api/listings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newListing),
            });
            
            const data = await response.json();
            if (response.ok) {
                setListings(prev => [...prev, data]); // Update listings
                navigate('/');
            } else {
                console.error('Error adding listing:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Bikes">Bikes</option>
                <option value="Cars">Cars</option>
            </select>
            <button type="submit">Create Listing</button>
        </form>
    );
};

export default CreateListing;
