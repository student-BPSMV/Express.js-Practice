const express = require("express");
const app = express();

app.get("/" , (req , res) => {
    res.send("Hello World !...");
});

app.get("/api/contact" , (req , res) => {
    res.json({
       name : "John Doe", 
       email : "johndoe123@gmail.com",
       phone : 1234567890,
       course : "MERN FullStack"
    });
});

app.get("/api/gym/plans" , (req , res) => {
    res.json({
       duration : "3 months", 
       phone : 1234567890,
       plan : "Gold",
       price : 5000  
    });
});

app.listen(3000 , () => {
    console.log(`Server is running on http://localhost:3000`);
});