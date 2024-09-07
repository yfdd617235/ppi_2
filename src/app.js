import express from 'express';
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api',authRoutes); //Las rutas empesarían con api

export default app;