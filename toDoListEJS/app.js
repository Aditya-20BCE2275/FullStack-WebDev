const express = require('express');
// const ejs = require('ejs');
const bodyParser = require('body-parser');



var items = ["Test"];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    // res.send("Hello");
    var today = new Date();

    var options = { weekday: "long", day: "numeric", month: "long" };
    var dayn = today.toLocaleDateString("en-US", options);
    res.render("list", { dayh: dayn, listi: items });
});


app.post("/", function (req, res) {
    var i = req.body.item;
    if (i !== "") {
        if (i === "pop") {
            items.shift();
            res.redirect("/");
        }
        if (i === "clear") {
            items.length = 0;
            res.redirect("/");
        }
        else {
            items.push(i);
            res.redirect("/");
        }
    }
    else {
        res.redirect("/");
    }
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});