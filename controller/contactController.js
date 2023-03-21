const modal = require("../modal/contactSechema")


module.exports.createContact = async (req,res)=>{
    const createContact = await modal.create(req.body)
    res.json({message:"sucess"})

}
module.exports.getcontact = async (req,res)=>{

    const contacts = await modal.find()
    res.json({contacts})
    
}
module.exports.update = async (req,res)=>{
    const targetvalue = req.params.id
    const targetcontact = await modal.findById(targetvalue)
    if(!targetcontact){
        res.json({message:"contact not found"})
    }
    const updatedcontact = await modal.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false})

    res.json({message:"ok",
    updatedcontact
})
    
}
