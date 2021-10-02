import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import catalog from "./routers/catalog.js";
import order from "./routers/Order.js";

const app= express();
const PORT = process.env.port || 5000;
const URL= "mongodb+srv://thelaptopworld:thelaptopworld123@cluster0.aymxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit:"30mb"}));
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Connection successfuly")
})

app.use("/api/v1/catalog", catalog)
app.use("/api/v1/don-hang",order)

mongoose.connect(URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connect to mongodb successfuly");
    
    http: app.listen(PORT, ()=>{
        console.log("Server is running on port ", PORT);
    })
})
.catch((err)=>console.log("Connect to mongodb fail, error:", err))
