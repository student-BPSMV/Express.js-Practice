const express = require("express");
const app = express();
const moviesList = require("./moviesData");


app.get("/" , (req , res) => {
    res.send("Hello World !...");
});

app.get("/api/movies" , (req , res) => {
    res.json(moviesList);
});

app.get("/api/profile" , (req , res) => {
    res.json({
        name : "Sharmila",
        email : "sharmila@example.com",
        skills : ["HTML", "CSS", "JS"],
        address : {city: "Delhi", pincode: 110001}
    });
});

app.listen(5000 , () => {
    console.log(`Server is running on http://localhost:5000`);
});