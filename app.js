var express = require('express');
var request = require('request');

var app = express();

app.use('/', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  req.pipe(request(req.query.url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
