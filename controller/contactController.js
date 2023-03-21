const modal = require("../modal/contactSechema")
const{ putContact, getContact,createContact,deleteContact}= require("./requestToCRM");

module.exports.createContact = async (req,res)=>{
    const {first_name, last_name, email, mobile_number, data_store} = req.body;
    if (!first_name || !last_name || !email || !mobile_number || !data_store) {
        return res.status(400).send('Missing required parameters');
    }
    const dataObj = {first_name, last_name, email, mobile_number};
        
    if(data_store == "CRM"){
        try{
            const contact = await createContact(dataObj);
            res.json(contact)

        }
        catch(err){
            res.json({message: "failure"})
        }
    }
    else{
        const contact = await modal.create(req.body)
        res.json(contact)
    }
    

}
module.exports.getcontact = async (req,res)=>{
    const {id, data_store} = req.body;

    if (!id || !data_store) {
        return res.status(400).send('Missing required parameters');
    }
    if(data_store == "CRM"){
        try{
            const msg = await getContact(id);
            res.json({message:"sucessss",msg})

        }
        catch(err){
            res.json({message: "failure"})
        }
    }
    else if(data_store == "‘DATABASE’"){
        const contacts = await modal.find()
        res.json({contacts})
    }
    else{
        return res.status(400).send('Not a valid data_store');
    }
    
}
module.exports.update = async (req,res)=>{
    const{first_name,email,data_store} = req.body
    const data = {first_name,email}
    if(data_store =="CRM"){
        const newdata = await putContact(data,req.params.id)
        res.json({newdata})
    }
    else{
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

    
}
module.exports.deletecontact = async (req,res) =>{
    const{data_store} = req.body
    if(data_store=="CRM"){
        const deleted  = await deleteContact(req.params.id)
        res.json({message:"deleted"})


    }
        const targetcontact = await modal.findById(req.params.id)
        if(!targetcontact){
            res.json({message:"not found"})
        }
        modal.deleteOne(targetcontact)
        res.json({message:"done"})

}
