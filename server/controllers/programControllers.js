const Program =require("../models/Program")

exports.addProgram=async(req,res)=>{
    let {exercice,serie,repetition}=req.body

    try {
        let program= await new Program({exercice,serie,repetition}) 
        await program.save()
        res.status(200).send({msg:"register with sucess ",program})

    } catch (error) {
        res.status(500).send('serverrrr error')

    }
}




exports.getProgram=async(req,res)=>{
    try {
        const program=await Program.find(req.program)
        res.status(200).send(program)
        
    } catch (error) {
        res.status(500).send('server error')
    }
}