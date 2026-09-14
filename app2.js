const express = require("express");
const app = express();
const studentsList = require("./StudentData");

app.get("/" , (req , res) => {
    res.send("Hello World !...");
});

app.get("/api/students" , (req , res) => {
    res.json(studentsList);
});

app.listen(4000 , () => {
    console.log(`Server is running on http://localhost:4000`);
});