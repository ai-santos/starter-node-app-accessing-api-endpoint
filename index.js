var express = require('express');
var app = express();
var request = require('request');

var temp = null;

app.get('/', function (req, res) {
  var temp = null;
  alert('Hi')

  request('https://api.github.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      temp = body;
    }
  })

  res.send('Hello World!\n\n' + body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
