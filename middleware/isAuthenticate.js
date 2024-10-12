const jwt=require('jsonwebtoken')
async function isAuthenticate(req,res,next){
    try {
        const token=req.header('x-access-token')
    if(!token){
        return res.status(401).json({error:"please authenticate using a valid token"})
    }
    
    const payload=await jwt.verify(token,process.env.jwt_SECRET,(error,decoded))   
    if(!payload){
        return res.status(401).json({
            message:'user is authorize'
        })
    }
    req.user=payload
    next()
    } catch (error) {
        return res.status(401).json({
            status:401,
            success:false,
            message:'Token Expair '+error
        })
        }
    }

module.exports={isAuthenticate}