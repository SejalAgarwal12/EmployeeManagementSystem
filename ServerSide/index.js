const express = require('express')
const cors = require('cors')
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path')
const router = express.Router();
const bodyParser = require("body-parser"); 

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:true,
    methods:["GET", "POST","PUT", "DELETE"],
    credentials:true
}));
app.use(express.json());
app.use(bodyParser.json());
// to access public folder
app.use(express.static('public'))


const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password  :"root", 
    database : "EmployeeMS"
});
connection.connect((err) => {
    if(err){
        console.log("ERROR OCCURED", err.stack);
    }else{
        console.log("CONNECTED SUCCESSFULLY");
    }
})

app.get('/', (req,res) => {
    res.send("hello world")
})

//ADMIN LOGIN 
app.post('/checkLogin', function(req,res){
    const id = req.body.id;
    const email = req.body.email
    const password = req.body.password
    console.log(id);
    console.log(email);
    console.log(password);

    connection.query("select * from admin", (err,result,fields) => {
        let isLogin = false ;
        result.forEach((k) => {
            if((k['email'] === email) && (k['password'] === password)){
                isLogin = true;
            }
        });
        if(isLogin){
            res.json({id:id, email:email,  password:password})
        }else{
            res.send(false);
        }
    })
})

app.post('/AddCategory', (req,res) => {
    const id=req.body.id;
    const category=req.body.category;
    connection.query("insert into category values(?,?)",[id,category],(err,result,fields)=>{
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true})
        }
    })
})

app.get('/displayCategory', (req,res) => {
    const sql = "select * from category";
    connection.query(sql,(err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            // res.json({Status:true, Result:result})
            res.send(result)
        }
    })
})

app.get('/sortCategory', (req,res) => {
    const sql = "select * from category order by category";
    connection.query(sql,(err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            // res.json({Status:true, Result:result})
            res.send(result)
        }
    })
})

app.post('/AddDesignation', (req,res) => {
    const id = req.body.id;
    const designation = req.body.designation;
    connection.query("insert into designation values(?,?)",[id,designation],(err,result,fields)=>{
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true})
        }
    })
})

app.get('/displayDesignation', (req,res) => {
    const sql = "select * from designation";
    connection.query(sql,(err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            // res.json({Status:true, Result:result})
            res.send(result)
        }
    })
})

app.get('/sortDesignation', (req,res) => {
    const sql = "select * from designation order by designation";
    connection.query(sql,(err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            // res.json({Status:true, Result:result})
            res.send(result)
        }
    })
})




app.post('/AddCustomer', (req,res) => {
    const id=req.body.id;
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const address=req.body.address;
    const salary=req.body.salary;
    const category=req.body.category;
    const designation=req.body.designation;
    // const image=req.file.filename;
    connection.query("insert into customer values(?,?,?,?,?,?,?,?)",
        [id,name,email,password,address,salary,category,designation],
        (err,result,fields)=>{
            if(err){
                res.json({Status:false, Error:"query error"})
            }else{
            res.json({Status:true})
            }
        }
    )
}) 

app.get('/displayEmployee', (req,res) => {
    const sql = "select * from customer";
    connection.query(sql,(err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true, Result:result})
            //res.send(result)
        }
    })
})

app.get('/sortEmpSalary', (req,res) => {
    const sql = "select * from customer order by salary desc";
    connection.query(sql,(err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true, Result:result})
            //res.send(result)
        }
    })
})

app.get('/sortEmpName', (req,res) => {
    const sql = "select * from customer order by name";
    connection.query(sql,(err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true, Result:result})
            //res.send(result)
        }
    })
})

//Display details on edit page
app.get('/displayEmployee/:id', (req,res) => {
    const id=req.params.id;
    console.log(id);
    const sql = "select * from customer where id=?" ;
    connection.query(sql, [id], (err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true, Result:result})
            //res.send(result)
        }
    })
})

//EDIT EMP
app.put('/editEmployee/:id',(req,res) => {
    const id = req.params.id;
    const sql = "update customer set name=?, email=?, password=?, address=?, salary=?, category=?, designation=? where id=?"
    connection.query(sql, [     
        req.body.name, 
        req.body.email,
        req.body.password,
        req.body.address,
        req.body.salary,
        req.body.category,
        req.body.designation,
        id
    ], (err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true, Result:result})
            //res.send(result)
        }
    })
})

// DELETE EMP
app.delete('/deleteEmp/:id', (req,res) =>{
    const id = req.params.id;
    const sql = "delete from customer where id=?" ;
    connection.query(sql, [id], (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})
//ADD FEEDBACK
app.post('/addFeedback', (req,res) => {
    const empId = req.body.empId;
    const empName = req.body.empName;
    const empEmail = req.body.empEmail;
    const msg = req.body.msg;
    const rating = req.body.rating;
    const reviewerName = req.body.reviewerName;
    const reviewerEmail = req.body.reviewerEmail;
    connection.query("insert into feedback values(?,?,?,?,?,?,?)",
    [empId,empName, empEmail, msg, rating, reviewerName, reviewerEmail],(err,result,fields)=>{
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true})
        }
    })
})

//Display feedback
app.get('/getFeedback', (req,res) => {
    const sql = "select * from feedback";
    connection.query(sql,(err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true, Result:result})
            //res.send(result)
        }
    })
})

// REPORT CARD (for employee)
app.get('/reportCard/:id', (req,res) => {
    const empId = req.params.id;
    console.log(empId);
    const sql = "select * from feedback where empId=?" ;
    connection.query(sql, [empId], (err,result) => {
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true, Result:result})
            //res.send(result)
        }
    })
})

//ADMIN COUNT
app.get('/adminCount', (req,res) => {
    const sql = "select count(id) as admin from admin";
    connection.query(sql, (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})

//EMPLOYEE COUNT
app.get('/employeCount', (req,res) => {
    const sql = "select count(id) as emp from customer";
    connection.query(sql, (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})

//CATEGORY COUNT
app.get('/categCount', (req,res) => {
    const sql = "select count(id) as categ from category";
    connection.query(sql, (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})

//DESIGNATION COUNT
app.get('/desigCount', (req,res) => {
    const sql = "select count(id) as desig from designation";
    connection.query(sql, (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})

//SALARY COUNT
app.get('/salaryCount', (req,res) => {
    // const sq1 = "select cast(salary as INTEGER) from customer"
    const sql = "select sum(salary) as sal from customer";
    connection.query(sql, (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})

//ADMIN TABLE
app.get('/adminRecord', (req,res) => {
    const sql = "select * from admin";
    connection.query(sql, (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})

//EMPLOYEE LOGIN
app.post('/checkEmpLogin', function(req,res){
    const id = req.body.id;
    const email = req.body.email
    const password = req.body.password
    console.log(id)
    console.log(email);
    console.log(password);

    connection.query("select * from customer", (err,result,fields) => {
        let isLogin = false ;
        result.forEach((k) => {
            if((k['email'] === email) && (k['password'] === password)){
                isLogin = true;
            }
        });
        if(isLogin){
            res.json({id:id, email:email,  password:password})
        }else{
            res.send(false);
        }
    })
})

//EMPLOYEE DETAILS
app.get('/employeeDetail/:id', (req,res) => {
    const id = req.params.id;
    const sql = "select * from customer where id=?";
    connection.query(sql, [id], (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})

 // ADD ADMIN
app.post('/AddAdmin', (req,res) => {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    connection.query("insert into admin values(?,?,?)",[id,email,password],(err,result,fields)=>{
        if(err){
            res.json({Status:false, Error:"query error"})
        }else{
            res.json({Status:true})
        }
    })
})

// DELETE ADMIN
app.delete('/deleteAdmin/:id', (req,res) =>{
    const id = req.params.id;
    const sql = "delete from admin where id=?" ;
    connection.query(sql, [id], (err,result) => {
        if(err){
            res.json({Status:false, Error:"Query Error"})
        }else{
            res.json({Status:true, Result:result})
        }
    })
})



app.listen(1010, () => {
    console.log("server is listening to port 1010")
})