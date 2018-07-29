const express = require('express');
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Fish", "email": "bob@gmail.com" },
    { "id": 2, "firstName": "John", "lastName": "Cow", "email": "john@gmail.com" },
    { "id": 3, "firstName": "Mariah", "lastName": "Dog", "email": "mariah@gmail.com" }
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  open('http://localhost:' + port);
});
