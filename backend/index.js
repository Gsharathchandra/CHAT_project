import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/auth.routes.js"
const PORT = process.env.PORT
const app = express()

app.use('/api/auth',authRoutes)
app.listen(PORT,()=>{
    console.log("app is running ON "+PORT);
    
})