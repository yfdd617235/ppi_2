// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://localhost:3000/api', // Si no está definida la primera URL, usa localhost
//     withCredentials: true
// });

// export default instance;

//------------------------------------------------------------

// import axios from 'axios';
// import Cookies from 'js-cookie'; // Asegúrate de instalar 'js-cookie' si usas cookies

// const instance = axios.create({
//     baseURL: 'https://ppi-2-1.onrender.com/api', 
//     withCredentials: true, // Permitir el uso de cookies en solicitudes
// });

// // Función para despertar el servidor
// export const wakeUpServer = async () => {
//     try {
//       await instance.get('/ping');
//       console.log('Servidor activado');
//     } catch (error) {
//       console.error('Error al activar el servidor:', error);
//     }
//   };

// // Agregar el token en el encabezado de todas las solicitudes usando un interceptor
// instance.interceptors.request.use(
//     (config) => {
//         // Obtener el token desde las cookies (o puedes usar localStorage si prefieres)
//         const token = Cookies.get('token'); 

//         if (token) {
//             // Si existe el token, lo agregamos al encabezado Authorization
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default instance;




//----------------------------------------------

import axios from 'axios';
import Cookies from 'js-cookie'; // Asegúrate de instalar 'js-cookie' si usas cookies

// Definir las URLs de los servidores
const LOCAL_URL = 'http://localhost:3000/api';
const PRODUCTION_URL = 'https://ppi-2-1.onrender.com/api';

// Crear la instancia de Axios
const instance = axios.create({
    withCredentials: true, // Permitir el uso de cookies en solicitudes
});

// Función para verificar si el servidor local está disponible y configurar la baseURL
const setBaseURL = async () => {
    try {
        // Intentar hacer una solicitud GET a localhost:3000/api/ping
        const response = await axios.get(`${LOCAL_URL}/ping`);
        if (response.status === 200) {
            // Cambiar a la URL local si está disponible
            instance.defaults.baseURL = LOCAL_URL; 
            console.log('Local server available, Connected to: ', instance.defaults.baseURL);
        } else {
            // Si el servidor local no está disponible, usar la URL de producción
            instance.defaults.baseURL = PRODUCTION_URL; 
            console.log('Local server NOT available, Connected to: ', instance.defaults.baseURL);
        }
    } catch (error) {
        // Si hay un error, usar la URL de producción
        instance.defaults.baseURL = PRODUCTION_URL; 
        console.log('Local server NOT available, Connected to: ', instance.defaults.baseURL);
    }
};

// Llamar a la función para verificar la disponibilidad del servidor local
setBaseURL(); // Asegúrate de que se ejecute antes de realizar solicitudes

// Función para despertar el servidor (ping)
export const wakeUpServer = async () => {
    try {
        await instance.get('/ping');
        console.log('Server activated');
    } catch (error) {
        console.error('Error when activating the server:', error);
    }
};

// Agregar el token en el encabezado de todas las solicitudes usando un interceptor
instance.interceptors.request.use(
    (config) => {
        // Obtener el token desde las cookies
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
