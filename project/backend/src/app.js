import express from 'express'
import cors from 'cors'

import userRouter from './routes/userRouter.js'


const app = express()


app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors());


app.use('/api',userRouter);



export default app;

