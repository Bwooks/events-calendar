var express = require('express')
var app = express()
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Now listening on port", PORT)
})