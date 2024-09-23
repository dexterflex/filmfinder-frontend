import React, { useState } from 'react';
import movieService from '../services/movieService';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const results = await movieService.searchMoviesByName(query);
        onSearch(results);
    };

    return (
        <form onSubmit={handleSubmit} id="search-bar">
            <h2>Search For Movie...</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
