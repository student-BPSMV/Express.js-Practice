//MiddleWare Begining :
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use((req,res,next) => {
    console.log(`route - ${req.url}`);
    next();
});

// app.get("/" , (req , res) => {
//     res.send("Hello World !...");
// });
// app.get("/about" , (req , res) => {
//     res.send("About Section");
// });
// app.get("/project" , (req , res) => {
//     res.send("These are my projects");
// });
// app.get("/contact" , (req , res) => {
//     res.send("contact me");
// });

const adminFile = path.join(__dirname , "Admin.html");
const errorFile = path.join(__dirname , "file404.html");

const checkAdmin = (req , res , next) => {
    if(req.query.role === "Admin"){
        next();

    }else{
        fs.readFile(errorFile , "utf-8" , (err , fileData) => {
            if(err){
                res.send("Error occurrred");
            }
            res.send(fileData);
        });
    }
}

app.get("/dashboard" , checkAdmin ,  (req , res) => {
    fs.readFile(adminFile , "utf-8" , (err , data) => {
        if(err){
            res.send("Error occurrred");
        }
        res.send(data);
    })
});

app.use((req,res,next) => {
    res.status(404).send(`<h1>Page not found</h1>`);
});


app.listen(4000 , () => {
    console.log(`Server is running on http://localhost:4000`);
});