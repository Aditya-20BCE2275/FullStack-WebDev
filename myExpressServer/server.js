const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello yeag</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at 8169394959");
});

app.get("/about", function (req, res) {
    res.send("hello im aditya mohite learning or as i must say polishing trees right now");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});