const express = require("express");
const app = express();

app.get("/" , (req , res) => {
    res.send("Hello World !...");
});

// single params 
app.get("/user/:id" , (req , res) => {
    const userId = req.params.id;                   
    res.send(`User ID is : ${userId}`);
});

app.get("/user/:name" , (req , res) => {
    const username = req.params.name;
    res.send(`User Name is : ${username}`);
});

app.listen(5000 , () => {
    console.log(`Server is running on http://localhost:5000`);
});