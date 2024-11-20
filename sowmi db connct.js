
import express from'express';
import cors from 'cors';``
import {db} from './sowmidb.js'
const app=express();
app.use(cors());
app.use(express.json());
app.post("./sowmidb",(req,res)=>{
const userData=req.body;
console.log(userData);
db.query("INSERT INTO dbinfo SET?",userData,(err)=>{
    if(err){
        console.log("show me a error",err)
    }
    else{
        console.log("data inserted")

        res.json(userData);
    }
})



});











app.listen(8085,()=>{
    console.log("port is running on 8085");
})
