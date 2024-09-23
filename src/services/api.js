import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Change this if your backend is hosted elsewhere
    withCredentials: true // To handle cookies for authentication
});

export default api;
