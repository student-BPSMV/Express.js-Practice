const express = require("express");
const app = express();

app.use(express.json());

//task1
// let studentsRecord = [
//     { id: 1, name: "John", course: "HTML" }, { id: 2, name: "Sarah", course: "CSS" }
// ];


// app.get("/" , (req , res) => {
//     res.send("Hello World !...");
// });

// app.post("/api/students/:id" , (req , res) => {
//     const studentID = Number(req.params.id);

//     const {newCourse} = req.body;

//     const studentData = studentsRecord.find((stud) => stud.id === studentID);

//     if(studentData){
//         studentData.course = newCourse;
//         res.json({
//         msg : "Updation made successfully",
//         ...studentData
//     });
//     }else{
//         res.status(404).json({msg : "Student not found"});
//     }

   
// });

//Level1 q2

// let products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Phone", price: 30000 }
// ];

// app.post("/api/products/:id" , (req , res) => {
//     const prodID = Number(req.params.id);
//     const {newPrice} = req.body;
    
//     const productData = products.find((item) => item.id === prodID);

//     if(productData){
//         productData.price = newPrice;
//         res.json({
//             msg : "Price Updated Successfully",
//             ...productData
//         });
//     }else{
//         res.status(404).json({
//             msg : "Some error has occurred"
//         });
//     }

// });

// let students = [
//     { id: 1, name: "John", course: "HTML", age: 20 },
//     { id: 2, name: "Sarah", course: "CSS", age: 21 }
// ];

// app.post("/api/students/:id" , (req , res) => {
//     const studId = Number(req.params.id);
//     const studName = req.body.name;
//     const studCourse = req.body.course;
//     const studAge = req.body.age;
    
//     const studData = students.find((student) => student.id === studId);

//     if(studData){
//         studData.name = studName;
//         studData.course = studCourse;
//         studData.age = studAge;

//         res.json({
//             msg : "Data Updated Successfully",
//             ...studData
//         });
//     }else{
//          res.status(404).json({
//             msg : "Some error has occurred"
//         });
//     }
// })

// let books = [
//     { id: 1, title: "JavaScript Basics", author: "John", price: 400 },
//     { id: 2, title: "Node.js Guide", author: "David", price: 500 }
// ];

// app.post("/api/books/:id" , (req , res) => {
//     const bookID = Number(req.params.id);
//     const bookTitle = req.body.title;
//     const bookAuthor = req.body.author;
//     const bookPrice = req.body.price;

//     const bookData = books.find((book) => book.id === bookID);

//     if(bookData){
//         if(bookTitle){
//             bookData.title = bookTitle;            
//         } 
//         if(bookAuthor){
//             bookData.author = bookAuthor;
//         } 
//         if(bookPrice){
//             bookData.price = bookPrice;
//         }

//         res.json({
//             msg : "Data updated sucessfully",
//             ...bookData
//         });

//     }else{
//         res.status(404).json({
//             msg : "Some error has occurred"
//         });
//     }
// });

// let courses = [
//     { id: 1, name: "JavaScript", duration: 3 },
//     { id: 2, name: "React", duration: 2 }
// ];

// app.post("/api/courses/:id" , (req,res) => {
//     const courseId = Number(req.params.id);
//     const {newDuration} = req.body;

//     const courseData = courses.find((item) => item.id === courseId);

//     if(courseData){
//         if(newDuration < 1){
//             res.status(400).send("400 Error");
//         }else{
//             courseData.duration = newDuration;
//             res.json({
//                 msg : "Data Updated Successfully",
//                 ...courseData
//             });
//         }
//     }else{
//         res.status(404).send("404 Error");
//     }
// })

// let users = [
//     { id: 1, name: "Rahul", email: "rahul@gmail.com" },
//     { id: 2, name: "Neha", email: "neha@gmail.com" }
// ];

// app.post("/api/users/:id" , (req,res) => {
//     const emailID = Number(req.params.id);
//     const {newEmail} = req.body;

//     const userData = users.find((email) => email.id === emailID);
    
//     if(userData){
//         if(!newEmail){
//             res.status(400).send("400 Error");
//         }else{
//             userData.email = newEmail;

//             res.json({
//                 msg : "Data Updated Successfully",
//                 ...userData
//             });
//         }
//     }else{
//         res.status(404).send("404 Error");
//     }
// });

// let products = [
//     { id: 1, name: "Laptop", price: 50000, stock: 10 },
//     { id: 2, name: "Mouse", price: 1000, stock: 25 }
// ];

// app.post("/api/products/:id/stock" , (req , res) => {
//     const prodId = Number(req.params.id);
//     const {quantity} = req.body;

//     const productData = products.find((item) => item.id === prodId);

//     if(productData){
//         productData.stock = quantity;

//         res.json({
//             msg : "Data Updated Successfully",
//             ...productData
//         });
//     }else{
//         res.status(404).send("404 Error");
//     }
// });


// let laptops = [
//     { id: 1, brand: "Dell", price: 45000 },
//     { id: 2, brand: "HP", price: 55000 },
//     { id: 3, brand: "Lenovo", price: 60000 }
// ];

// //1
// app.get("/api/laptops" , (req , res) => {
//     res.send(laptops);
// });

// app.get("/api/laptops/:id" , (req , res) => {
//     const laptopID = Number(req.params.id);
//     const laptopData = laptops.find((item) => item.id === laptopID);

//     if(laptopData){
//         res.send(laptopData);
//     }
// });

// app.post("/api/laptops/:id" , (req , res) => {
//     const laptopID = Number(req.params.id);
//     const {newPrice} = req.body;

//     const laptopData = laptops.find((item) => item.id === laptopID);

//     if(laptopData){
//         laptopData.price = newPrice;
//         res.json({...laptopData});
//     }
// });

// app.delete("/api/laptops/:id" , (req , res) => {
//     const laptopID = Number(req.params.id);

//     const laptopData = laptops.find((item) => item.id === laptopID);

//     if(laptopData){
//         const newLaptopData = laptops.filter((item) => item.id !== laptopID);
//         res.json({
//             msg : "Data Deleted Successfully",
//             newLaptopData});
//     } else {

//         res.status(404).send("Laptop not found");
//     }
// })

//Multiple Handler  ----> next() === next is used to pass the control to next middleware or handler
app.get("/api/handlers" ,
    (req , res , next) => {
        console.log("Handler 1");
        next();
    },
    (req , res) => {
        console.log("Handler 2");
        res.json({ msg : "Handler 2"});
    }
);

app.listen(5000 , () => {
    console.log(`Server is running on http://localhost:5000`);
});