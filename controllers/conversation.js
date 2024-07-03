const userSchema =require( '../models/user.model')
const messageSchema =require( '../models/message')
const conversationSchema =require( '../models/conversation')
const { AiMessage }=require('../utils/Aimessage')
 async function createConversation(req,res){
    try {
    const user=req.user
    const newConversation=await conversationSchema.create({
        userId:user.id
    })
    await userSchema.findByIdAndUpdate(user.id,{
        $push:{
            conversations:newConversation
        }
    })
    return res.json({status:200,
        success:true,
        conversation:newConversation
    })
    } catch (error) {
        return res.json({
            status:500,
            success:false,
            message:error
        })
    }

}
 async function addmessage(req,res) {
    try {
        const {message}=req.body
        const {id}=req.params
        console.log(id,message)
        if(!message||message.length==0){
            return res.json({
                status:400,
                success:false,
                message:"Enter all the fields"
            })
        }
        const AiResponse=await AiMessage(message)
        const newMessage=await messageSchema.create({
            usermessage:message,
            botmessage:AiResponse,
            userId:req.user.id
        })
        await conversationSchema.findByIdAndUpdate(id,{
            $push:{
                message:newMessage
            }
        })
        return res.json({
            status:200,
            success:true,
            data:newMessage
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status:500,
            success:false,
            message:error
        })
    }
}

 async function getconversation(req,res){
   try {
     const {id}=req.params
     const conversation=await conversationSchema.findById(id)
                                                .populate('message')
    return res.json({
        status:200,
        success:true,
        conversation
    })
   } catch (error) {
    return res.json({status:500,success:false,message:error})
   }
}

async function conversationHistory(req,res){
    try {
        const user=req.user
        const userConversation=await userSchema.findOne({_id:user.id})
                                                .populate({
                                                    path:'conversations',
                                                    populate:{
                                                        path:'message',
                                                        options: { sort: { createdAt: -1 } }
                                                    }
                                                })

        return res.status(200).json({
            status:200,
            success:true,
            conversationHistory:userConversation.conversations
        })

    } catch (error) {
        return res.status(500).json({
            status:500,
            success:false,
            message:error
        })
    }
}

module.exports = {
    createConversation,
    addmessage,
    getconversation,
    conversationHistory
  };