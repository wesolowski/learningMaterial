var express = require('express');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();

var app = express();
var db = new sqlite3.Database("data.db");

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express,static(path.join(__dirname, 'public')));
});

app.get('/*', function(req, res) {
    res.render("index");
});

app.listen(3000);
console.log('Listening on port 3000');