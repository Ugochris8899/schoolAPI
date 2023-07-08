const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:[true, "Name is required"]
        },

        address: {
            type:String,
            required:[true, "Address is required"]
        },
        email: {
            type:String,
            required:[true, "Email is required"],
             unique:[true, "Email has alresdy been used"]
        },
        population: {
            type:Number
        },
        director: {
            type: String
        },
        extraActivities:{
            sports: String,
            dance: String,
            isFree: Boolean

        
           
        },
        courses: {
            type:Array,
            required:[true, "Courses is required"]
        },
        isPublic: {
            type:Boolean,
            required:[true, "isPublic is required"]
        }
    }, {timestamps:true}
);

const schoolModel = mongoose.model("School_Api", schoolSchema)


module.exports = schoolModel