const modal = require("../modal/contactSechema")
const{ putContact, getContact,createContact,deleteContact}= require("./requestToCRM");
const {CRM, DATABASE} = require("../config/Constants");
module.exports.createContact = async (req,res)=>{
    const {first_name, last_name, email, mobile_number, data_store} = req.body;
    if (!first_name || !last_name || !email || !mobile_number || !data_store) {
        return res.status(400).send('Missing required parameters');
    }
    const dataObj = {first_name, last_name, email, mobile_number};
        
    if(data_store == CRM){
        try{
            const contact = await createContact(dataObj);
            res.json(contact)

        }
        catch(err){
            res.json(err)
        }
    }
    else if(data_store == DATABASE) {
        const contact = await modal.create(req.body)
        res.json(contact)
    }
    else{
        return res.status(400).send('Not a valid data_store');
    }

}
module.exports.getcontact = async (req,res)=>{
    const {contact_id:id, data_store} = req.body;

    if (!id || !data_store) {
        return res.status(400).send('Missing required parameters');
    }
    if(data_store == CRM){
        try{
            const contact = await getContact(id);
            res.json(contact)

        }
        catch(err){
            res.json({message: "failure"})
        }
    }
    else if(data_store == "DATABASE"){
        const contact = await modal.find({_id:id})
        res.json(contact)
    }
    else{
        return res.status(400).send('Not a valid data_store');
    }
    
}
module.exports.update = async (req,res)=>{
    const{mobile_number,email,data_store, contact_id:id} = req.body
    const data = {mobile_number,email}
    if(data_store ==CRM){
        const updatedContact = await putContact(data,id)
        res.json(updatedContact)
    }
    else if(data_store===DATABASE){
        const targetcontact = await modal.findById(id)
        if(!targetcontact){
            res.json({message:"contact not found"})
        }
        const updatedContact = await modal.findByIdAndUpdate(id,data,{new:true,runValidators:true,useFindAndModify:false})
    
        res.json(updatedContact);
    }
    else{
        return res.status(400).send('Not a valid data_store');
    }

    
}
module.exports.deletecontact = async (req,res) =>{
    const{data_store, contact_id:id} = req.body
    if(data_store==CRM){
        const deleted  = await deleteContact(id)
        res.json(deleted)
    }
    else if(data_store === DATABASE){
        const targetcontact = await modal.findById(id)
        if(!targetcontact){
            res.json({message:"not found"})
        }
        await modal.deleteOne(targetcontact)
        res.json({message:"successfull deleted"})
    }
    else{
        return res.status(400).send('Not a valid data_store');
    }

}
