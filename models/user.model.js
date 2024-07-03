const mongoose=require('mongoose')
const userModel=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    conversations:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Conversation"
        }
    ]
},{timestamps:true})
module.exports=mongoose.model("User",userModel)