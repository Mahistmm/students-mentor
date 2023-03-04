const router=require('express').Router();
const Students = require("../models/Students");
const Mentor = require("../models/Mentor");

router.get('/',(req,res)=>{
    res.send("students route is working")
});

router.post("/add",async(req,res)=>{
    try {
        const studentdata = await Students.create(req.body)
        const mentordata = await Mentor.findByIdAndUpdate(req.body.mentorid,{
            $push:{students:studentdata}
        },{new:true})
        res.json({Students:studentdata,Mentors:mentordata})
    } catch (error) {
        res.json({msg:error.message})
    }
})

router.put("/update/:id",async(req,res)=>{
    try {
        const update=await Students.findByIdAndUpdate(
            {_id:req.params.id},
            {
                name:req.body.name,
                age:req.body.age,
                contact_No:req.body.contact_No,
                department:req.body.department
            },
            {new:true}
            )
            const mentordata = await Mentor.findByIdAndUpdate({_id:req.params.id},{
                $push:{students:update}})
            res.json(update)
    } catch (error) {
        res.json({msg:error.message})
    }
});

router.delete("/delete/:id",async(req,res)=>{
    try {
        const deletestudent=await Students.findOneAndDelete({_id:req.params.id})
        res.json(deletestudent)
    } catch (error) {
        res.json({msg:error.message})
    }
})

router.get("/all",async(req,res)=>{
    try {
        const all=await Students.find();
        res.json(all)
    } catch (error) {
        res.json({msg:error.message})
    }
})

module.exports = router