import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messaging = () => {
    const [messages, setMessages] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch messages from API
        const fetchMessages = async () => {
            try {
                const response = await axios.get('/api/messages');
                setMessages(response.data); // Set fetched messages
            } catch (err) {
                setError('Error fetching messages');
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    if (loading) {
        return <div>Loading messages...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h3>Messages</h3>
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <div key={index}>
                        <p>{message.content}</p>
                        <p>From: {message.sender}</p>
                    </div>
                ))
            ) : (
                <p>No messages found.</p>
            )}
        </div>
    );
};

export default Messaging;
