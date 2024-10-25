import React from 'react';
import { Link } from 'react-router-dom';

const BikeListing = ({ id, title, description, price, image }) => {
    return (
        <div className="card mb-3" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Price: ₹{price}</p>
                <Link to={`/listing/${id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default BikeListing;
