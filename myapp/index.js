// Imports express
var express = require('express')
// Creates an instance of express
var app = express()

// recieves a get request for the main directory and sends Hello World
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Creates server on port 8000
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})