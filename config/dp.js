const mongoose = require("mongoose");

const url = "mongodb+srv://Mahi:stmmsara@clusterfsb.opmw8qr.mongodb.net/Studnets-Mentor?retryWrites=true&w=majority"
mongoose.set("strictQuery",false)

const ConnectedDB = async()=>{
    try {
      const con = await mongoose.connect(url);
    console.log(`MongoDB Connected:${con.connection.host}`);  
    } catch (error) {
        console.log(error);
    }
}


module.exports = ConnectedDB;