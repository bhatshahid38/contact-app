const app = require("./app")
const contactDb = require("./config/mongoose")
const port = 7000
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port,() =>{
    console.log(`server is running on port ${port} `)
});                                                           