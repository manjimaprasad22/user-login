const asyncHandlers = require('express-async-handler');
const User = require('../models/user');
const jwt = require('jsonwebtoken')

const verify = asyncHandlers(async(req,res,next)=>{
let Token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try {
            Token = req.headers.authorization.split(" ")[1];
            console.log(req.headers.authorization.split(" ")[1]);

            jwt.verify(Token, process.env.JWT_SECRET);

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not autherized,tokenn failed");
        }
    }
    if(!Token){
        res.json("no token")
    }
})


module.exports ={verify};