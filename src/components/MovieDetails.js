import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieService from '../services/movieService';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const data = await movieService.getMovieById(id);
                setMovie(data);
            } catch (err) {
                setError('Failed to fetch movie details.');
            } finally {
                setLoading(false);
            }
        };
        fetchMovieDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p><strong>Overview</strong></p>
            <p>{movie.overview}</p>
            <p><strong>Released Date</strong></p>
            <p>Release Date: {movie.release_date}</p>
            <p><strong>Genres</strong></p>
            <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>

            <p><strong>Cast</strong></p>
            <p>Cast: {movie.cast ? movie.cast.map(member => member.name).join(', ') : 'No cast information available'}</p>
        </div>
    );
};

export default MovieDetails;
