import app from './app.js'
import connectDatabase from './connectionDb.js'
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT | 8000;
const MONGO_URL = process.env.MONGO_URL
app.listen(PORT , ()=>{
    connectDatabase(MONGO_URL);
    console.log(`APP listening on PORT http://localhost:${PORT}`);
})



