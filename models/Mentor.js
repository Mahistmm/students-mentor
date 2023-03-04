const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
    name:String,
    age:Number,
    contact_No:Number,
    experience:{
        type:Number,
        default:0
    },
    students:[],
},{timestamps:true})


const Mentor = mongoose.model("mentors",MentorSchema);

module.exports = Mentor;