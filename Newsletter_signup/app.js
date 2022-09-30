const express = require("express");
const app = express();
const request = require("request");
const bodyparser = require("body-parser");

app.use(express.static(__dirname + '/Public'));
app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000, function () {
    console.log("Server runnning on port 3000");
});

app.post('/', function (req, res) {
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.em;

    console.log(firstname,lastname,email);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/signup.html")
});