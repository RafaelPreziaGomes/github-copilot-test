// require express
var express = require("express");

// create express app
var app = express();

// create a simple http server on port 3000
// and respond with "Hello World"
app.get("/", function (req, res) {
  res.send("Hello World");
}); // end app.get  /   and respond with "Hello World"

// listen on port 3000, IP defaults to and add a callback function for when it's done
app.listen(3000, function () {
  console.log("Server started on port 3000");
}); // end app.listen
