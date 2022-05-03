var express = require('express');
var app = express();
require('dotenv').config()

let response = "Hello json";

app.use('/public',express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/json', function(req,res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": response.toUpperCase()})
  } else {
    res.json({"message": response})
  }
})

app.get('/', function(req,res) {
  res.send("Hello Express");
})


console.log(process.env.MESSAGE_STYLE)


 module.exports = app;
