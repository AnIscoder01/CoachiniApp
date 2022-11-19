const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    },weight:{
        type:Number,
        required:true
    },role:{
        type: String,
        enum : ['client','coach','admin'],
        default: 'user'
    }
})


module.exports=mongoose.model('User',userSchema)