const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config.js');
var MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

MongoClient.connect('mongodb://localhost:27017/Test', function (err, client) {
  if (err) throw err;
  
  var db = client.db('Test');
  
  app.post('/login', (req, res) => {
    const body = req.body;
    const { username, password } = body;
    
    db.collection('Users').findOne({ username, password }, function (err, result) {
      res.send(result);
    });
  });
});

app.listen(config.port, () => {
  console.log('listening on port: ' + config.port);
});
