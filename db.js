
const express=require('express')
const mysql=require('mysql')
const cors=require('cors')

const app=express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'db',
})

db.connect((error,result)=>{
    if (error){
        console.log("failed to connect")
    }
    else{
        console.log(result+"Success db connected")
    }
    
    })

    // db.query(sql,[values],(err,data)=>{
    //     if(err) return res.json(err);
    //     else{
    //     return res.json(data);
    //     }
    
    
    // })
    

// app.post('/Signup',(req,res)=>{
// const sql="INSERT INTO dbinfo  (`name`,`email,`password`,`phonenumber`) values(?)";
// const values=[

//     req.body.name,
//     req.body.email,
//     req.body.password,
//     req.body.phonenumber,

// ]


// db.query(sql,[values],(err,data)=>{
//     if(err) return res.json(err);
//     else{
//     return res.json(data);
//     }


// })

// })


app.post("/Signup",(req,res)=>{
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

})
app.listen(8085,()=>{
console.log("listening...");

})