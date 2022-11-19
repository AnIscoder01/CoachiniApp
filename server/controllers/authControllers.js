const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const User=require("../models/User")

exports.signUp=async(req,res)=>{
   
    try {

        let {name,mail,password,phone,age,height,weight,role}=req.body
   
        //check user exists 
   
       const foundUser=await User.findOne({mail})
       if(foundUser){
           return res.status(400).json({ errors:[{msg:"user already exists" }]});
       }
       let user=new User({name,mail,password,phone,age,height,weight,role}) 
      

      //crypt
       const saltRounds = 10;
       user.password=await bcrypt.hash(password,saltRounds)   
       await user.save()
     
       //generate token 
       const payload={
           id:user._id
       }
   
   
       const token=jwt.sign(payload,process.env.sekretOrKey,{expiresIn:'3d'})
       res.status(200).send({msg:"register with sucess ",user,token})
   
   } catch (error) {
    res.status(500).send('serverrrr error')
   } 
   }

exports.signIn=async(req,res)=>{
    const {mail,password}=req.body    
    try {
        const user=await User.findOne({mail})
       
        if (!user) {
            return res.status(400).json({ errors:[{msg:"bad credentials" }]});

        }
           const isMatch=await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).json({ errors:[{msg:"bad credentials" }]});
        }
       
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.sekretOrKey,{expiresIn:'3d'})
        res.status(200).send({msg:"login with sucess ",user,token})

    } catch (error) {
        res.status(500).send('server error')
        
    }
}

exports.getCurrent=async(req,res)=>{

    try {
        const user=await User.findById(req.user.id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send('server error')
    }
}



exports.usersList=async(req,res)=>{

    try {
        const users=await User.find(req.user)
        res.status(200).send(users)
        
    } catch (error) {
        res.status(500).send('server error')
    }
   }