import React, { useEffect, useState } from 'react';
import movieService from '../services/movieService';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await movieService.getMovies(page);
            setMovies(data);
        };
        fetchMovies();
    }, [page]);

    const handleSearch = (results) => {
        setMovies(results);
    };

    const handlePage = (val) => {
        if (page + val <= 0) {
            return false;
        }
        setPage(page + val);
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="movie-list">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <ul className='pagination'>
                <button onClick={() => setPage(1)}>Start</button>
                <button onClick={() => handlePage(-1)}>Prev</button>
                <button onClick={() => setPage(page + 1)}>{page + 1}</button>
                <button onClick={() => setPage(page + 2)}>{page + 2}</button>
                <button onClick={() => setPage(page + 3)}>{page + 3}</button>
                <button onClick={() => handlePage(1)}>Next</button>
            </ul>
        </div >
    );
};

export default HomePage;

