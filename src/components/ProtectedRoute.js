import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const user = localStorage.getItem('user');

    return (
        <Route
            {...rest}
            element={user ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;
