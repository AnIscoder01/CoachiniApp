const mongoose=require("mongoose")

const programSchema=new mongoose.Schema({
    exercice:{
        type:String,
        required:true
    },
    serie:{
        type:String,
        required:true
    },
    repetition:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('Program',programSchema)