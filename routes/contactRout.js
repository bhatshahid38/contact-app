const express = require("express")
const{createContact,getcontact,update,deletecontact} =require("../controller/contactController")
const router = express.Router()
module.exports = router
router.post("/createContact",createContact)
router.post("/getContact",getcontact)
router.post("/updateContact",update)
router.post("/deleteContact",deletecontact)
