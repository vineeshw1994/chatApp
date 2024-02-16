import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import connetToMongoDB from './db/connectDb.js';

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/auth',authRoutes)
app.use('api/auth/messages', messageRoutes)

app.listen(PORT, () =>{
    connetToMongoDB();
    console.log('server is running');
})