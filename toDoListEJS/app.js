const express = require('express');
// const ejs = require('ejs');
const date = require(__dirname+'/date.js'); 
const bodyParser = require('body-parser');
var items = ["Test"];
var workitems = [];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    console.log(date.getDay());
    res.render("list", { listTitle: "Personal List", listi: items });
});


app.post("/", function (req, res) {
    var page = req.body.button;
    console.log(page);
    if (page === "Personal") {
        var i = req.body.item;
        if (i !== "") {
            if (i === "pop") {
                items.shift();
                res.redirect("/");
            }
            else if (i === "clear") {
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
    }
    else {
        var wi = req.body.item;
        if (wi !== "") {
            if (wi === "pop") {
                workitems.shift();
                res.redirect("/Work");
            }
            else if (wi === "clear") {
                workitems.length = 0;
                res.redirect("/Work");
            }
            else {
                workitems.push(wi);
                res.redirect("/Work");
            }
        }
        else {
            res.redirect("/Work");
        }
    }
});

app.get("/Work", function (req, res) {
    res.render("list", { listTitle: "Work List", listi: workitems });
});

app.get("/About", function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});