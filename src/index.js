import app from './app.js';
import { connectDB } from './db.js';

// Conectar a la base de datos
connectDB();

// app.get('/', (req, res) => {
//     res.send('Welcome to the API');
//   });

// Utiliza el puerto que asigna Render o, en su defecto, el puerto 3000 para desarrollo local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('>>> Server on port', PORT);
} );
