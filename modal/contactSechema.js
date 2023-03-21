const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    mobile_number:{
        type:String,
        required:true

    }

})
const contactDb = mongoose.model("contactDb",contactSchema)
module.exports = contactDb