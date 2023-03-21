const express = require("express")
const{createContact,getcontact,update,deletecontact} =require("../controller/contactController")
const router = express.Router()
module.exports = router
router.post("/createContact",createContact)
router.post("/getContact",getcontact)
router.post("/updateContact/:id",update)
router.post("/deleteContact/:id",deletecontact)
