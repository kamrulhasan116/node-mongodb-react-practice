const express = require("express");
const cors = require("cors");
 require("./config/db");
 const router = require("./routerss/index")
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.use("/api/user", router);

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/./views/index.html")
})

app.use((req, res, next)=>{
    res.status(404).json({message:"Route is not found"});
});
app.use((error, req, res, next)=>{
    res.status(500).json({message: "server is error"})
})

module.exports = app;