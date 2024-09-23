import api from './api';

const getMovies = async (page) => {
    const response = await api.get(`/movies/popular?page=${page}`);
    return response.data.load;
};

const getMovieById = async (movieId) => {
    const response = await api.get(`/movies/${movieId}`);
    return response.data.load;
};

const searchMoviesByName = async (query) => {
    const response = await api.get(`/movies/search`, { params: { query } });
    return response.data.load;
};

const getFavoriteMovies = async () => {
    const response = await api.get('/movies/favorites');
    return response.data.load;
};

const addFavoriteMovie = async (movie) => {
    let respose = await api.post('/movies/favorites', movie);
    return respose.data
};

const removeFavoriteMovie = async (movieId) => {
    await api.delete(`/movies/favorites/${movieId}`);
};

let obj = {
    getMovies,
    getMovieById,
    searchMoviesByName,
    getFavoriteMovies,
    addFavoriteMovie,
    removeFavoriteMovie
};

export default obj;
