// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://localhost:3000/api', // Si no está definida la primera URL, usa localhost
//     withCredentials: true
// });

// export default instance;

//------------------------------------------------------------

// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://ppi-2.onrender.com/api', // Si no está definida la primera URL, usa localhost
//     withCredentials: true
// });

// export default instance;

import axios from 'axios';
import Cookies from 'js-cookie'; // Asegúrate de instalar 'js-cookie' si usas cookies

const instance = axios.create({
    baseURL: 'https://ppi-2.onrender.com/api', 
    withCredentials: true, // Permitir el uso de cookies en solicitudes
});

// Agregar el token en el encabezado de todas las solicitudes usando un interceptor
instance.interceptors.request.use(
    (config) => {
        // Obtener el token desde las cookies (o puedes usar localStorage si prefieres)
        const token = Cookies.get('token'); 

        if (token) {
            // Si existe el token, lo agregamos al encabezado Authorization
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
