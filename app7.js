const express = require("express");
const app = express();

app.use(express.json());

app.get("/" , (req , res) => {
    res.send("Hello World !...");
});

const gymMembers = [];
app.post("/api/members" , (req,res) => {
    
    const memberName = req.body.name;
    const memberPlan = req.body.plan;
    const memberId =  Date.now();
     
    const member = {
        name : memberName ,
        plan : memberPlan ,
        id   : memberId 
    };

    gymMembers.push(member);
    
    res.json({
        msg : "Data Added Successfully",
        members : gymMembers
    });
});

app.get("/api/members" , (req , res) => {
    const memberPlan = req.query.plan;
    if(memberPlan === "VIP"){
        const filteredMembers = gymMembers.filter((item) => item.plan === memberPlan);  
        res.json({
            msg : `Members with ${memberPlan} plan`,
            members : filteredMembers
        });   
    }else{
        res.json({
        msg : "Whole Gym List",
        members : gymMembers
    });
    }
});

app.get("/api/members/:id" , (req , res) => {
    const memberID = Number(req.params.id);

    const filteredId = gymMembers.find((mem) => mem.id === memberID);

    if(filteredId){
        res.json({
            msg: "Member Found Successfully",
            member: filteredId
        });
    }else{
        res.status(404).json({
            msg : "Error has occurred"
        })
    }
})

app.listen(4000 , () => {
    console.log(`Server is running on http://localhost:4000`);
});