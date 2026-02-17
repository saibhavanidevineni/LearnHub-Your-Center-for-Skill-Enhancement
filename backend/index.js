const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/olp")

.then(()=>console.log("MongoDB Connected"));

app.use("/user", userRoutes);

app.use("/course", courseRoutes);

app.listen(5000, ()=>{

console.log("Server running");

});
