const express = require('express')
const app = new express()
const cors = require("cors")
const jwt = require('jsonwebtoken')
require('dotenv').config()


const userRouter = require('./routes/userRouter')
const connectDB= require('./config/connection')
connectDB();

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/user',userRouter)

app.use(
    cors({
        origin:'http://localhost:3000/',
        credentials:true,
        
    })
)

app.listen(8000,()=>{
    console.log('server listening at 8000');
})