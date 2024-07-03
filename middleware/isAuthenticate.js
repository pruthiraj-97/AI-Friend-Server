const jwt=require('jsonwebtoken')
function isAuthenticate(req,res,next){
    try {
        const token=req.header('x-access-token')
    if(!token){
        return res.status(401).json({error:"please authenticate using a valid token"})
    }
    const payload=jwt.verify(token,process.env.jwt_SECRET)
    console.log("payload is ",payload,token)
    if(!payload){
        return res.status(401).json({
            error:"please authenticate using a valid token"
        })
    }
    req.user=payload
    next()
    } catch (error) {
          
        }
    }

module.exports={isAuthenticate}