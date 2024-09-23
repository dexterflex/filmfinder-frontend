import api from './api';

const signup = async (userData) => {
    await api.post('/auth/signup', userData);
};

const login = async (credentials) => {
    try {
        const response = await api.post('/auth/signin', credentials);
        localStorage.setItem("token", response.data.token)
        return response.data;
    } catch (error) {
        console.error('Login failed:', error.response?.data?.msg || error.message);
        throw error;
    }
};


const logout = async () => {
    await api.post('/auth/logout');
    localStorage.removeItem('token')
};

let obj = {
    signup,
    login,
    logout
};
export default obj;
