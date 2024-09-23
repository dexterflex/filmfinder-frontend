import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import movieService from '../services/movieService';

const FavoriteMovies = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const data = await movieService.getFavoriteMovies();
            setFavorites(data);
        };
        fetchFavorites();
    }, []);

    const handleRemove = async (movieId) => {
        await movieService.removeFavoriteMovie(movieId);
        setFavorites(favorites.filter(movie => movie.movieId !== movieId));
    };

    return (
        <div id='favorite-section'>
            <h2>Favorite Movies</h2>
            <ul className='favorite-list'>
                {
                    favorites.map(movie => (
                        <li key={movie.movieId} className="favorite" style={{ fontWeight: 'bolder', letterSpacing: '1px' }}>
                            {movie.title}
                            <div>
                                <Link to={`/movie/${movie.movieId}`}><button>Show Details</button></Link>
                                <button onClick={() => handleRemove(movie.movieId)}>Remove From Favorites</button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default FavoriteMovies;
