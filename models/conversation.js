const mongoose=require('mongoose')
const conversationSchema=mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:true
    },
    message:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Message'
        }
    ]
},{timestamps:true})

module.exports= mongoose.model("Conversation",conversationSchema)