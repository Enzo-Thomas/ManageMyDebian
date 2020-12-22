var express = require("express"),
http = require("http"), app;

const fs = require('fs').promises;

var nameProject = "ManageMyDebian"; // nom du projet
var host = "127.0.0.1"; // domaine
var port = "8000"; // port d'écoute

app = express();
http.createServer(app).listen(port, host);

// Mise en place des directions
app.get("/", function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
});

app.get("/second", function (req, res) {
    fs.readFile(__dirname + "/second.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
});

// Message de lancement
console.log(`${nameProject} is running on http://${host}:${port}`);