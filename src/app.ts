import express, {NextFunction, Request, Response} from 'express'
import { userRouter } from './routers';

import mongoose from 'mongoose'
import {configs} from "./configs/configs";
import {IError} from "./types";
import {authRouter} from "./routers";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/auth", authRouter);


app.use((err:IError, req:Request, res:Response, next:NextFunction)=>{
    const status = err.status || 500

    return res.status(status).json({
        message: err.message,
        status,
    })
})




app.listen(configs.PORT, async () => {
    await mongoose.connect(configs.DB_URL);
    console.log(`Server has started on PORT ${configs.PORT} 🚀🚀🚀`);
});