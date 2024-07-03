const express=require('express')
const router=express.Router()
const {login,signup}=require('../controllers/auth')
const {isAuthenticate}=require('../middleware/isAuthenticate')
router.post('/signup',signup)
router.post('/login',login)
module.exports=router