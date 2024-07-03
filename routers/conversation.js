const express=require('express')
const router=express.Router()
const {createConversation,addmessage,getconversation,conversationHistory}=require('../controllers/conversation')
const {isAuthenticate}=require('../middleware/isAuthenticate')
router.post('/createconversation',isAuthenticate,createConversation)
router.post('/addmessage/:id',isAuthenticate,addmessage)
router.get('/getconversation/:id',isAuthenticate,getconversation)
router.get('/history',isAuthenticate,conversationHistory)
module.exports=router