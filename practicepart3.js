const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// app.use((req,res,next) => {
//     console.log(`route - ${req.url}`);
//     next();
// });

//Q2
// const welcomeMiddleware = (req , res , next) => {
//     console.log("Welcome to my server !");
//     next();
// }

// app.get("/" , welcomeMiddleware , (req , res) => {
//     console.log("Hello World!");
// });
// app.get("/about" , (req , res) => {
//     console.log("Hello World");
// });

//Q3
// const middleware1 = (req , res , next) => {
//     console.log("Middleware 1 executed.");
//     next();
// }
// const middleware2 = (req , res , next) => {
//     console.log("Middleware 2 executed.");
//     next();
// }

// app.get("/" , middleware1 , middleware2 , (req , res) => {
//     res.send("Hello World !");
// });

//Q5 --- Level-2
// const ageChecker = (req , res , next) => {
//     console.log("Middleware is working");
//     const age =  req.query.age;
//     if(age >= 18){
//         next();
//     }else{
//         res.send("You must be 18 or older");
//     } 
// }

// app.get("/profile" , ageChecker , (req , res) => {
//    res.send("Welcome to the profile");
// });

const checkLogin = (req , res , next) => {
    const login = req.query.loggedIn;
    if(login){
        next();
    }else{
        res.status(404).send("Please Login First");
    }
}

app.get("/profile" , checkLogin , (req ,res) => {
    res.send("Welcome to your profile");
});

app.listen(5000 , () => {
    console.log(`Server is running on http://localhost:5000`);
});