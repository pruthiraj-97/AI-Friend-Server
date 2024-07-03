const conversationModel=require('../models/conversation')
async function HistoryMessage(id){
    try {
        const conversation=await conversationModel.findOne({_id:id})
                                                   .populate('message')
        const Messages=conversation.message
        let History=[]
        Messages.forEach((mess,index) => {
            if(index==0){
                History.push( {parts: [
                    { text: mess.usermessage }
                  ]})
            }
            History.push( {parts: [
                { text: mess.usermessage }
              ]})
              History.push( {parts: [
                { text: mess.botmessage }
              ]})
        });
        console.log(History)
        return History
    } catch (error) {
        return error
    }
}

module.exports={
    HistoryMessage
}