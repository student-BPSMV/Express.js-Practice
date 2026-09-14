//MiddleWare Begining :
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.json());

// const showSale = (req , res , next) => {
//     const saleTime = new Date().getHours();
//     if(saleTime <= 7 || saleTime >= 12){
//         next();
//     }else{
//         res.send(`<h1>SALE IS LIVE NOW ...!</h1>`);
//     }
// }

// app.get("/sale" , showSale , (req , res) => {
//     res.send("<h1>SALE ENDS HERE ...!</h1>");
// })

// const gym = (req , res , next) => {
//     const maintenance = req.query.maintain;
//     if(maintenance){
//         next();
//     }else if(maintenance === false){
//         res.send(`<h1>GYM : OPEN</h1>`);
//     }
//     else{
//        res.status(404).send("Your condition is incorrect.");
//     }
// }

// app.get("/gym" , gym , (req , res , next) => {
//     res.send("<h1>GYM : CLOSED</h1>");
//     next();
// });

const valMiddleware = (req , res , next) => {
    const userName = req.body.name;
    const userPlan = req.body.plan;
    if(userName !== "" && userPlan !== ""){
        res.json({
        msg : "Data added successfully",
        name : userName,
        plan : userPlan
    });
    }else if(userName === "" || userPlan === ""){
        res.json({
            msg : "Enter Valid Data",
        });
    }else if(userPlan !== "Basic" || userPlan !== "VIP"){
        res.json({
            msg : "Enter Valid Data only",
        });
    }else{
        console.log("Form is working fine");
    }
    next();
}

app.post("/form" , valMiddleware , (req ,res) => {
    console.log("Data has added");
});

app.listen(4000 , () => {
    console.log(`Server is running on http://localhost:4000`);
});