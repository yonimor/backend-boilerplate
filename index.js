const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/login', (req, res) => {
  const body = req.body;
  console.log('body', body);
  if (body.username === 'yoni' && body.password === 'mor') {
    res.send({
      name: 'Yoni',
      email: 'il.yonimor@gmail.com',
      position: 'developer'
    });
  }
});

app.listen(config.port, () => {
  console.log('listening on port: ' + config.port);
});
