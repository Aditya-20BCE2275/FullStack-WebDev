const { response } = require('express');
const express = require('express');
const app = express();
const https = require('https');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=030daa2398d0fea0d001f7f951dda1f4";

app.get("/", function (req, res) {

    https.get(url, function (response) {
            console.log(response);
        })
    res.send("Server is up and running");
});

app.listen(3000, function () {
    console.log("Listening on server port no 3000");
});