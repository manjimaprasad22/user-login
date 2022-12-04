const asyncHandlers = require('express-async-handler');
const User = require('../../models/user');
const jwt = require('jsonwebtoken')

const registerUser = asyncHandlers(async(req,res)=>{
    const {Name,Email,Pswd}= req.body;
    
    const user = await User.create({
        Name,
        Email,
        Pswd
    }) 
    
    res.json({
        Name:user.Name,
        Email:user.Email,
        Pswd:user.Pswd,
        Token:generateToken(user.id)
    })


   
})

const login = asyncHandlers(async(req,res)=>{
    const {Email,Pswd}= req.body;
    const getuser = await User.findOne({Email})
    if(getuser){
        if(getuser.Pswd === Pswd)
        {
            console.log(getuser);
            res.json({
                Name:getuser.Name,
                Email:getuser.Email,
                Pswd:getuser.Pswd,
                Token:generateToken(getuser.id)
            })
        }
        else{
            res.json("incorrect password")
        }
    }
    else{
        res.json("user does not exist")
    }
})

const home =((req,res)=>{
    res.json("hello")
})

const generateToken=(id)=>{
 return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}
const getuser = asyncHandlers(async(req,res)=>{
    const getuser = await User.find({})
    res.json(getuser)
})

module.exports = {registerUser, login,home, getuser}