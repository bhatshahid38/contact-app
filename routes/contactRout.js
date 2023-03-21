const express = require("express")
const{createContact,getcontact,update} =require("../controller/contactController")
const router = express.Router()
module.exports = router
router.post("/createContact",createContact)
router.get("/getContact",getcontact)
router.put("/updateContact:/id",update)

