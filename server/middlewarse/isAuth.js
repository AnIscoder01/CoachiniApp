const jwt=require('jsonwebtoken')

const isAuth=async(req,res,next)=>{

const token=req.headers["authorization"]

try {
    
    if(!token){
        console.log(req)
        return res.status(401).send({errors:[{msg:'You are not authorized!!'}]})
    }
    var decoded = jwt.verify(token,process.env.sekretOrKey);

    req.user={
        id:decoded.id
    }
next()
} catch (error) {
    return res.status(401).send({errors:[{msg:'You are not authorized'}]})

}

}
module.exports=isAuth