import app from './app.js'
import { connectDB } from './db.js'


app.get('/', (req, res) => {
    res.send('Welcome to the API');
  });

connectDB();
app.listen(3000, ()=>{
    console.log('>>> Server on port', 3000)
});
