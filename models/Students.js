const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema({
    name:String,
    age:Number,
    department:String,
    RollNo:Number
},{timestamps:true})

const Students  = mongoose.model("students",StudentsSchema);

module.exports = Students