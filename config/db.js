const mongoose = require("mongoose");
const config = require("./config");
mongoose.set('strictQuery', true);

const dbUrl = config.db.url;
mongoose.connect(dbUrl, {useNewUrlParser: true,
    useUnifiedTopology: true}).then(()=>{
    console.log("Db is connected")
}).catch((error)=>{
    console.log(error);
    process.exit(1);
})