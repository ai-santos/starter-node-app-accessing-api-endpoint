var express = require('express');
var app = express();
var request = require('request');

var headers = {'User-Agent': 'Mihai B'};

request({uri: 'https://woodpecker-instagram-api.herokuapp.com/api/v1/locations', headers: headers}, function (error, response, body) {
  console.log('error', error);
  console.log('response', response['body']);
  if (!error && response.statusCode == 200) {
    temp = body
    console.log(body);
  }
})

app.get('/', function (req, res) {
  res.send('Hello World!  XX');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
