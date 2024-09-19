// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://localhost:3000/api', // Si no está definida la primera URL, usa localhost
//     withCredentials: true
// });

// export default instance;


import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ppi-2.onrender.com/api', // Si no está definida la primera URL, usa localhost
    withCredentials: true
});

export default instance;