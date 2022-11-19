const express=require("express")
const router=express.Router()
const {addProgram,getProgram} = require("../controllers/programControllers");

//add program
router.post('/addprog',addProgram)
//get program
router.get('/getprog',getProgram)

//test

router.get('/test',(req,res)=>{
    res.send('this is tessst')
})
module.exports=router