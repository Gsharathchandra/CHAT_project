import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()
import authRoutes from "./routes/auth.routes.js"
import { connectDB } from "./lib/db.js"
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.listen(PORT,()=>{
    console.log("app is running ON :"+PORT);
    connectDB();
    
})