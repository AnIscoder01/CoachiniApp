const express =require("express")
const app =express()
const connectDB=require("./config/connection")
const authRouter= require("./routes/auth")
const progRouter=require("./routes/prog")
const port=process.env.PORT||5000
connectDB()


//miidelwares

app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/prog',progRouter)
app.listen(port,()=>console.log(`server is now running on ${port}`))