//Post Request
const express =  require("express");
const app = express();

app.use(express.json());

// let studentRecords = [
//     { id: 1, name: "John", course: "HTML" }, { id: 2, name: "Sarah", course: "CSS" }
// ];

app.get("/", (req , res)=> {
    res.send("Hello World");
});

// app.post("/api/submit" , (req, res) => {
//     const studentName = req.body.name ;
//     const studentAge = req.body.age ;

//     console.log("new Data : ",req.body);

//     res.json({
//         succes : true ,
//         message : "Data received successfully",
//         name : studentName,
//         age : studentAge
//     });
// });

app.get("/api/mobiles" , (req, res) => {
    const brand = req.query.brand ;
    const color = req.query.color ;

    res.json({
        message : "Data received successfully",
        brand : brand,
        color : color
    });
});

app.listen(3000 , () => {
    console.log("Server is running on port http://localhost:3000");
});
