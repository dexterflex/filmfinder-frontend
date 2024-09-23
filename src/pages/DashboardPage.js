import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies';

const DashboardPage = () => {
    return (
        <div>
            <h1 style={{ padding: '1rem' }}>Dashboard</h1>
            <FavoriteMovies />
        </div>
    );
};

export default DashboardPage;
