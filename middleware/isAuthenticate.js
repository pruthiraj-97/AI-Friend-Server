const jwt=require('jsonwebtoken')
function isAuthenticate(req,res,next){
    try {
        const token=req.header('x-access-token')
    if(!token){
        return res.status(401).json({error:"please authenticate using a valid token"})
    }
    
    jwt.verify(token,process.env.jwt_SECRET,(error,decoded)=>{
             if(error){
                return res.status(401).json({
                    status:401,
                    success:false,
                    message:'Token Expair'
                })
             }
             req.user=decoded
        })       
    next()
    } catch (error) {
          return res.status(500).json({
            message:error
        })
        }
    }

module.exports={isAuthenticate}