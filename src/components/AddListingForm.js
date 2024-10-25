import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddListingForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onAdd prop with the new listing data
    onAdd({ id: Date.now(), ...formData });

    // Reset form
    setFormData({
      title: '',
      price: '',
      description: '',
      category: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="title"
        label="Title"
        fullWidth
        required
        value={formData.title}
        onChange={handleChange}
      />
      <TextField
        name="price"
        label="Price"
        type="number"
        fullWidth
        required
        value={formData.price}
        onChange={handleChange}
      />
      <TextField
        name="description"
        label="Description"
        fullWidth
        required
        multiline
        rows={4}
        value={formData.description}
        onChange={handleChange}
      />
      <TextField
        name="category"
        label="Category"
        fullWidth
        required
        value={formData.category}
        onChange={handleChange}
      />
      <TextField
        name="image"
        label="Image URL"
        fullWidth
        required
        value={formData.image}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
        Add Listing
      </Button>
    </form>
  );
};

export default AddListingForm;
