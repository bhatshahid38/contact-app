const app = require("./app")
const contactDb = require("./config/mongoose")
const port = 8000
app.listen(port,() =>{
    console.log(`server is running on port ${port} `)
});                                                           