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

app.get('/', (req, res, next) => {
  res.sendfile(path.join(__dirname, './lib/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  open('http://localhost:' + port);
});
