const userSchema=require('../models/user.model')
const bcryptjs=require('bcryptjs')
const JWT=require('jsonwebtoken')
 async function login(req,res){
    try {
        const {email,password}=req.body
        if(!email||!password){
            return res.json({
                status:400,
                success:false,
                message:"Enter all the fields"
            })
        }
        const user=await userSchema.findOne({email})
        if(!user){
            return res.json({
                status:400,
                success:false,
                message:"User not found"
            })
        }
        const isPasswordCorrect=await bcryptjs.compare(password,user.password)
        if(!isPasswordCorrect){
            return res.json({
                status:400,
                success:false,
                message:"Incorrect password"
            })
        }
        const payload={
            id:user._id,
            email:user.email
        }
        const token=JWT.sign(payload,process.env.JWT_SECRET,{ expiresIn: '24h' })
        return res.status(200).json({
            status:200,
            success:true,
            message:"Login successful",
            token
        })
    } catch (error) {
        return res.json({
            status:500,
            success:false,
            message:error
        })
    }
}

 async function signup(req,res){
    try {
      const {username,email,password}=await req.body
      if(!username||!email||!password){
        return res.json({
          status:400,
          success:false,
          message:"Enter all the fields"
        })
      }
      const isEmailExist=await userSchema.findOne({email})
      if(isEmailExist){
        return res.json({
          status:400,
          success:false,
          message:"Email already exist"
        })
      }
      const hashedPassword=await bcryptjs.hash(password,10)
      const user=await userSchema.create({username,email,password:hashedPassword})
      return res.json({
        status:200,
        success:true,
        message:'user created'
      })
      
    } catch (error) {
        return res.json({
          status:500,
          success:false,
          message:error
        })
    }
}

module.exports = {
    login,
    signup,
  };