import express from 'express'
import cors from 'cors'

import userRouter from './routes/userRouter.js'
import cartRouter from './routes/cartRouter.js'
import adminRouter from './routes/adminRouter.js'
const app = express()


app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use('/api',userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/admin',adminRouter);



export default app;

