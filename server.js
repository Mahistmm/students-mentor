const expresss = require("express");
const ConnectedDB = require("./config/dp");
const mentor = require("./routes/mentor")
const students = require("./routes/students")
const app = expresss();
ConnectedDB();

app.use(expresss.json());
app.use("/mentor",mentor);
app.use("/students",students)



app.get("/",(req,res)=>{
    res.send("Students Mentor Api")
});

app.listen(process.env.PORT || 4000,(req,res)=>{
    console.log("server is up and running");
})