const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function (req, res) {
    var i1 = Number(req.body.num1);
    var i2 = Number(req.body.num2);
    var result = i1 + i2;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The answer of the following data is " + result);
    res.write("<br>");
    res.write("The answer of the following data is " + result);
    res.write("<br>");
    res.write("The answer of the following data is " + result);
    res.write("<br>");
    res.write("The answer of the following data is " + result);
    res.write("<br>");
    res.write(req.body.num1);
    res.end();
});

app.post('/bmiCalculator', function (req, res) {
    var w = Number(req.body.num1);
    var h = Number(req.body.num2);
    var bmi = w / Math.pow(h, 2);
    res.send("The BMI of the User is " + bmi);
});

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.listen(3000, function () {
    console.log("Server running at port 3000");
});