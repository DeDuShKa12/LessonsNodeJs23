import express from 'express'
import { userRouter } from './routers/user.router';

import mongoose from 'mongoose'
import {configs} from "./configs/configs";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);




app.listen(configs.PORT, () => {
    mongoose.connect(configs.DB_URL).then();
    console.log(`Server has started on PORT ${configs.PORT} 🚀🚀🚀`);
});