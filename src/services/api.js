import axios from 'axios';

const api = axios.create({
    baseURL: 'https://filmfinder-backend-1.onrender.com/api', // Change this if your backend is hosted elsewhere
    withCredentials: true // To handle cookies for authentication
});

export default api;
