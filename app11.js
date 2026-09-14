const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());

//Task 1
// const validateMember = (req , res , next) => {
//     const name = req.body.username;
//     const email = req.body.email;

//     if(name && email){
//         res.json({
//             msg : "Data Added Successfully",
//             userName : name,
//             userEmail : email
//         });
//     }else if(name === "" || email === ""){
//         res.status(404).send("Enter valid username and email");
//     }else{
//         res.status(404).send("Error has occurred");
//     }
//     next();
// }

// app.post("/profile" , validateMember , (req , res) => {
//     console.log("You have added Data");
// })

//Task2

// const checkAge = (req , res , next) => {
//     const userAge = Number(req.body.age);
//     if(userAge && userAge >= 18){
//         res.json({
//             msg : "You are 18" ,
//             age : userAge
//         });
//     }else{
//         res.status(404).json({
//             msg : "You must be 18 or above",
//         });
//     }
//     next();
// };

// app.post("/age" , checkAge ,  (req , res) => {
//     console.log("your data added successfully");
// })

//Task6

// const registerStudent = (req , res , next) => {
//     const userName = req.body.name;
//     const userEmail = req.body.email;
//     const userMarks = Number(req.body.marks);

//     if(userName && userEmail && userMarks > 0 && userMarks < 100){
//         res.json({
//             msg : "Data added sucessfully",
//             Name : userName,
//             Email : userEmail ,
//             Marks : userMarks , 
//         });
//     }else{
//         res.json({
//             msg : "Data entered is invalid",
//         });
//     }
//     next();
// }

// app.post("/register" , registerStudent , (req , res) => {
//     console.log("Data added Successfully ..!");
// });

//Task8
// const loginData = (req , res , next) => {
//     const userEmail = req.body.email;
//     const userPassword = req.body.password;

//     if(userEmail && userPassword && userPassword.length >= 6){
//         res.json({
//             msg : "Data added sucessfully",
//             Email : userEmail ,
//             Password : userPassword , 
//         });
//     }else{
//         res.json({
//             "msg": "Invalid login details"
//         });
//     }
//     next();
// }

// app.post("/login" , login , (req , res) => {
//     console.log("Data added Successfully ..!");
// });

//Task 11
// const productData = (req , res , next) => {
//     const category = req.query.category;

//     if(category === "electronics" || category === "clothing" || category === "food"){
//         res.json({
//             msg : "category matches",
//             Category : category  
//         });
//     }else{
//         res.status(404).json({
//             "msg": "Invalid category"
//         });
//     }
//     next();
// }

// app.get("/api/products" , productData , (req , res) => {
//     console.log("Data added Successfully ..!");
// });

//Task 12
// const checkID = (req , res , next) => {
//     const userID = Number(req.params.id);

//     if(!isNaN(userID)){
//         res.json({
//             msg : "ID matches",
//             ID : userID 
//         });
//         next();
//     }else{
//         res.status(400).json({
//             "msg": "Invalid ID"
//         });
//     }
    
// }

// app.get("/api/users/:id" , checkID , (req , res) => {
//     console.log("Data added Successfully ..!");
// });


// Task 13
// const authMiddleware = (req , res , next) => {
//     const token = req.headers.authorization;

//     if(token === "admin123"){
//         res.json({
//             msg : "header matches successfully",
//         });
//         next();
//     }else{
//         res.status(400).json({
//             "msg": "Unauthorized user"
//         });
//     } 
// }

// app.get("/admin" , authMiddleware , (req , res) => {
//     console.log("Data added Successfully ..!");
// });


//Task 14
// const checkMethod = (req , res , next) => {
//     const method = req.method;

//     if(method === "POST"){
//         res.json({
//             msg : "Method is POST",
//         });
//         next();
//     }else{
//         res.status(400).json({
//             "msg": "Only POST requests are allowed",
//         });
//     } 
// }

// app.post("/admin" , checkMethod , (req , res) => {
//     console.log("Method found : POST");
// });


//Task 14
// const authMiddleware = (req , res , next) => {
//     const token = req.headers.authorization;

//     if(token === "admin123"){
//         res.json({
//             msg : "header matches successfully",
//         });
//         next();
//     }else{
//         res.status(400).json({
//             "msg": "Unauthorized user"
//         });
//     } 
// }

// app.get("/admin" , authMiddleware , (req , res) => {
//     console.log("Data added Successfully ..!");
// });

app.listen(4000 , () => {
    console.log(`Server is running on http://localhost:4000`);
});