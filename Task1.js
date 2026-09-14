const express = require("express");
const app = express();

// let instaProfile = [
//     {
//         username : "webgyaan",
//         fullName : "Ganesh Dutt",
//         followers : 1000
//     },
//      {
//         username : "knowledgeGate",
//         fullName : "Praveen Gupta",
//         followers : 5000
//     },
//      {
//         username : "Vedanta",
//         fullName : "Ravi Shankar",
//         followers : 3000
//     },
// ]

// let bankAccount = [
//     {
//         accountNumber : 101,
//         balance : 1000,
//         accountHolder : "Ganesh Dutt"
//     },
//      {
//         accountNumber : 102,
//         balance : 5000,
//         accountHolder : "Naveen Gupta"
//     },
//      {
//         accountNumber : 103,
//         balance : 3000,
//         accountHolder : "Ravi Shankar"
//     },
// ]

// let employeeRecord = [
//     { empId: 1, name: "Aman", role: "Developer" }, { empId: 2, name: "Priya", role: "Designer" }, { empId: 3, name: "Rohan", role: "Manager" }
// ]

// let countries = [
//     { country: "india", capital: "New Delhi" },
//      { country: "japan", capital: "Tokyo" }, 
//      { country: "france", capital: "Paris" }
//     ]

// let Menu = [
//     { id: 101, dish: "Pizza", price: 299 },
//     { id: 102, dish: "Burger", price: 99 }
// ]

// let laptops = [
//     {
//         id : 1,
//         brand : "Dell",
//         price : 45000
//     },
//     {
//         id : 2,
//         brand : "HP",
//         price : 55000
//     },
//     {
//         id : 3,
//         brand : "Lenovo",
//         price : 65000
//     },
//       {
//         id : 4,
//         brand : "HP",
//         price : 65000
//     }
// ]
//  app.get("/api/laptops" , (req , res) => {
//     const brandName = req.query.brand;
//     if (!brandName) {
//         return res.json(laptops);
//     }
//     const laptopData = laptops.filter((laptop) => laptop.brand === brandName);
//     if(laptopData.length > 0){
//         res.json(laptopData);
//     }else{
//         res.status(404).json({message: "Sorry, laptop not found!"});
//     }
//  });
// app.get("/api/menu/:id" , (req , res) => {
//     const id = parseInt(req.params.id);
//     const menuItems = Menu.find((item) => item.id === id);
//     if(menuItems){
//         res.send(menuItems);
//     }else{
//         res.status(404).json({message: "Sorry, dish not found!"});
//     }
// });

// app.get("/api/countries/:countryName" , (req , res) => {
//     const countryName = req.params.countryName.toLowerCase();
//     const countryData = countries.find((country) => country.country === countryName);
//     if(countryData){
//         res.json(countryData);
//     } else {
//         res.status(404).send("Country not found!");
//     }
// })

// app.get("/api/employees/:empId", (req, res) => {
//     const EmpId = parseInt(req.params.empId);
//     const EmpData = employeeRecord.find((user) => user.empId === EmpId );
//     if(EmpData){
//         res.send(EmpData);
//     }else{
//         res.status(404).send("Employee not found!");
//     }
// });

app.get("/" , (req , res) => {
    res.send("Hello World !...");
});

// app.get("/api/profile/:username" , (req , res) => {
//     if(req.params.username === "webgyaan"){
//         const userName = req.params.username;
//         const userProfile = instaProfile.find(profile => profile.username === userName);
//         res.send(userProfile.fullName);
//     }else if(req.params.username === "knowledgeGate"){
//         const userName = req.params.username;
//         const userProfile = instaProfile.find(profile => profile.username === userName);
//         res.send(userProfile.fullName);
//     }else if(req.params.username === "Vedanta"){
//         const userName = req.params.username;
//         const userProfile = instaProfile.find(profile => profile.username === userName);
//         res.send(userProfile.fullName);
//     }
//     else{
//         res.status(404).json({
//             error : "Profile not found!"
//         })
//     }
// });

// app.get("/api/account/:accountNumber" , (req , res) => {
//     const accNo = Number(req.params.accountNumber);
//     if(accNo === 102){
//        const account = bankAccount.find((acc) => acc.accountNumber === accNo);
//        res.json(account);
//     }
// })

app.listen(5000 , () => {
    console.log(`Server is running on http://localhost:5000`);
});