import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import homeRoutes from "./routes/home.routes.js";
import Task from './models/task.model.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    origin: ['https://yfdd617235.github.io', 'http://localhost:5173', 'https://panamericanprivateinvestments.com'],
    credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes); //Las rutas empesarían con api
app.use('/api', taskRoutes); //Las rutas empesarían con api
app.use('/api', homeRoutes); //Las rutas empesarían con api


console.log(__dirname)


export default app;