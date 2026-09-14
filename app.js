const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("src"));
app.get("/" , (req,res) => {
    fs.readFile("./src/index.html" , "utf-8" , (err,data)=> {
        if(err){
            res.status(404).send("<h1>Page Not Found</h1>");
        } else {
            res.send(data);
        }
    });
});

app.get("/home" , (req,res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about" , (req,res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/contact" , (req,res) => {
    res.send(`<h1>Contact Page</h1>
        <p>Contact us at contact@example.com</p>`);
});
app.get("/services" , (req,res) => {
    res.send(`<h1>Services Page</h1>
        <p>We offer a wide range of services to meet your needs.</p>
        <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
        </ul>`);
});

app.listen(3000 , () => {
    console.log(`Server is running on http://localhost:3000`);
});