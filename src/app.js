import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    // origin: 'http://localhost:5173',
    origin: ['https://yfdd617235.github.io', 'http://localhost:5173'],
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes); //Las rutas empesarían con api
app.use('/api', taskRoutes); //Las rutas empesarían con api

// console.log('API Base URL:', process.env.API_BASE_URL);
console.log(__dirname)
// console.log('Serving files from:', path.join(__dirname, '../uploads'));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Configuración para servir el frontend (en producción)
app.use(express.static(path.join(__dirname, '../client/build')));

// Manejar cualquier ruta no capturada por las rutas de la API, sirviendo el archivo index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


export default app;