const { Router } = require('express');
const express = require('express');
const { verify } = require('../middlewares/authmiddle');
const router = express.Router()
const { registerUser, login, home, getuser} = require('./usrcontrol/usercontroller');

router.post('/register',registerUser)
// router.get('/register',getuser)
// router.get('/:id',getuser)
// router.post('/signup',registerUser)
router.post('/login',login)
router.get('/home',verify,home)
router.get('/user',getuser)


module.exports =router;