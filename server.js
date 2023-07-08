const express = require("express");
const mongoose = require("mongoose");
const PORT = 8888;
const app = express();
app.use(express.json());

const router = require("./router/schoolRouter")
app.use(router)


mongoose.connect("mongodb+srv://amagbaugochukwu:tNGFBoZKclidj2J1@cluster0.jyrip2b.mongodb.net/")
.then( () =>{
    console.log("connection to the database is successful");

})


app.listen(PORT, (req, res) =>{
    console.log(`listening to server on port: ${PORT}`);
});