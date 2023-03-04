const router=require('express').Router();
const Mentor=require("../models/Mentor");
const Students = require("../models/Students")

router.get('/',(req,res)=>{
    res.send("students route is working")
});

router.post("/add",async(req,res)=>{
    try {
        const mentor=await Mentor.create(req.body);
         res.json(mentor)
    } catch (error) {
        res.json({msg:error.message})
    }
});

router.put("/update/:id",async(req,res)=>{
    try {
        const update=await Mentor.findByIdAndUpdate(
            {_id:req.params.id},
            {
                name:req.body.name,
                age:req.body.age,
                contact:req.body.contact,
                experience:req.body.experience
            },
            {new:true}
            )
            return res.json(update);
    } catch (error) {
        res.json({msg:error.message})
    }
});

router.delete("/delete/:id",async(req,res)=>{
    try {
        const deletementor =await Mentor.findByIdAndDelete({_id:req.params.id})
        res.json(deletementor)
    } catch (error) {
        res.json({msg:error.message})
    }
});

router.get("/all",async(req,res)=>{
    try {
        const alldata = await Mentor.find()
        res.json(alldata)
    } catch (error) {
        res.json({msg:error.message})
    }
})

module.exports = router