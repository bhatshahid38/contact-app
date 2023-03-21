const express = require("express")
const app = express()
app.use(express.json())
const contactRout = require("./routes/contactRout")
app.use("/",contactRout)
module.exports = app


