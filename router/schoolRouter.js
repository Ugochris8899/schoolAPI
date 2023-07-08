const express = require("express")
const router = express.Router()

const {createSchool,getAll,getOne, updateSchool, deleteSchool}= require("../contoller/schoolController")


router.get("/", (req, res) =>{
    res.send("Welcome to our school Api")
});

router.post("/create", createSchool)

router.get("/getAll", getAll)

router.get("/getOne/:id", getOne)

router.patch("/updateSchool/:id", updateSchool)

router.delete("/deleteSchool/:id", deleteSchool)





module.exports=router

