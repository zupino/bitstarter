var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
    // Let´s read the content from file index.html
    var indexBuf = fs.readFileSync('index.html');
    response.send(indexBuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});