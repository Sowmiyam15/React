const express=require('express')
const mysql=require('mysql')
const cors=require(cors)

 const app=express()
 app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'db'
})



app.post('/Signup',(req,res)=>{
    const vj="INSERT INTO dbinfo (`name`,`email,`password`,`phonenumber`) values(?)";
    const values=[
    
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.phonenumber,
    
    ]
db.connect((error,result)=>{
if (error){
    console.log("failed to connect")
}
else{
    console.log(result+"Success db connected")
}

})
})


let sql = `INSERT INTO dbinfo(name,email,password,phonenumber)
VALUES('sowmi','sowmi@gmail.com',75785788,7455785598)`;

db.query(sql);


app.listen(8085,()=>{
    console.log("listening...")
    
    })