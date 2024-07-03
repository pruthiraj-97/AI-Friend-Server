const mongoose=require('mongoose')
const messageModel=mongoose.Schema({
    usermessage:{
        type:String,
        require:true
    },
    botmessage:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Message",messageModel)