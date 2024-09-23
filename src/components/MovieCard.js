import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import movieServies from '../services/movieService'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await movieServies.addFavoriteMovie(movie);
            setMessage("Added into Favourites")
        } catch (err) {
            if (err.response.status === 401) {
                navigate('/signin')
            }
            setMessage(err.response.data.message)
        }
    };
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average.toFixed(1)} <i className="fa-solid fa-star" style={{ color: '#FFBF00' }}></i></p>
                <p>{movie.release_date.split("-")[0]}</p>
            </Link>
            <p>{message}</p>
            <button onClick={(e) => handleSubmit(e)}>Add to Favourites</button>
        </div >
    );
};

export default MovieCard;
