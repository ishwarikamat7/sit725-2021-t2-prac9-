const express = require("express");

const app = express();
const port = 3030; 

const addTwoNumber = (n1,n2) => {
    return n1+n2;
}

console.log(addTwoNumber(10,3));
app.get("/addTwoNumber", (req,res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.send("The result is", +result);
})