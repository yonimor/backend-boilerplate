var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/login', (req, res) => {
  var body = req.body;
  console.log('body', body);
  res.send('hello world');
});

app.listen(config.port, () => {
  console.log('listening on port: ' + config.port);
});