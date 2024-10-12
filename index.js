const express=require('express')
const cors=require('cors')
const AuthRouter=require('./routers/auth')
const ConversationRouter=require('./routers/conversation')
const {connectDB}=require('./utils/connectDB')
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true
}))
app.use('/api/auth/',AuthRouter)
app.use('/api/conversation/',ConversationRouter)
app.get('/',(req,res)=>{
    res.send('well come to gemini fusion')
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
connectDB()
