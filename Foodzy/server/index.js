
import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import connectDB from './src/config/db.js';
import AuthRouter from "./src/routers/authRouter.js";
import cors from 'cors';
import morgan from 'morgan';
import PublicRouter from './src/routers/publicRouter.js';
import publicController from './src/routers/publicRouter.js'

const app = express();

app.use(cors({ origin: "http://localhost:5173"}))
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);

app.get("/", (req,res)=>{
    console.log("Server is Working");

    
});

app.use((err,req, res, next) => {
    const ErrorMessage = err.message || "Internam Server Error";
    const StatusCode = err.statusCode || 500;

    console.log("Error Found",{ErrorMessage,StatusCode});
    
    res.status (StatusCode).json({message:ErrorMessage});
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Server Started at Port:",port);

    connectDB();
    
});