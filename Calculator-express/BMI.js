const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', function (req, res) {
    var w = Number(req.body.num1);
    var h = Number(req.body.num2);
    var bmi = w/Math.pow(h,2);
    res.send("The BMI of the User is " + bmi);
});

app.listen(3000, function () {
    console.log("Server runnning at port 3000");
});
