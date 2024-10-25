// StarRating.js
import React from 'react';

const StarRating = ({ rating, setRating }) => {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)} style={{ cursor: 'pointer', fontSize: '24px' }}>
                    {star <= rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

export default StarRating;
