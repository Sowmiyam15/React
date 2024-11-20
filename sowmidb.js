
import mysql from 'mysql';
export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    pasword:"",
    database:"db"
})
db.connect((err)=>{
    if(err){
        console.log("show error");
    }
    else{
        console.log("Conncetion success");
    }
}
)
