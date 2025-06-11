const express = require("express");
const jobRoutes = require("./routes/job.routes");
const mongoose = require("mongoose");

const app = express();
const portNo = 8084;
//api/API_Version/Module_name/API_Name

//middleware
app.use(express.json());

//conncetion with moongoose
mongoose.connect("mongodb+srv://rajnandini2039:Snqr9mKiwRSftIHO@cluster0.8yi10uo.mongodb.net/")
.then(() => console.log("db connected successfullly"))
.catch(err => console.log(`Error connecting databse`, err)) ;

//Routes
app.use("/api/v1/job", jobRoutes);
  


app.listen(portNo, () => console.log(`server is up and running at port ${portNo}`));