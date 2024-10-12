const JWT=require('jsonwebtoken')
async function isAuthenticate(req,res,next){
    try{
            const token=req.headers['x-access-token']
            if(!token){
                return res.status(401).json({
                    data:null,
                    error:{
                        message:"user is not authenticated"
                    }
                })
            }
            console.log("token is ", token)
            const payload=JWT.verify(token,process.env.JWT_SECRET)
            if(!payload){
                return res.status(401).json({
                    data:null,
                    error:{
                        message:"user is not authenticated"
                    }
                })
            }
            req.user=payload
            next()
} catch (error) {
    return res.status(401).json({
        data:null,
        error:{
            message:"user is not authenticated" +error
        }
    })
}
    }

module.exports={isAuthenticate}