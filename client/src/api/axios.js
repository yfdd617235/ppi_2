import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ppi-2.onrender.com' || 'http://localhost:3000/api', // Si no está definida la primera URL, usa localhost
    withCredentials: true
});

export default instance;
