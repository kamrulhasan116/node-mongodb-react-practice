const app = require("./app");
const config = require("./config/config");
const connectDb  = require("./config/db");
const port = config.app.port;

connectDb.then(() =>{
    app.listen(port, ()=>{
        console.log(`app is running :${port}`);
    })
})